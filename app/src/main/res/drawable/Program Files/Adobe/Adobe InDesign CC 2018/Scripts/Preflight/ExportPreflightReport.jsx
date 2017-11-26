//  $File: //depot/indesign_13.0/gm/build/scripts/preflight/ExportPreflightReport.jsx $
//
//	This script is responsible for generating the preflight report. It must have the specified
//	filename so that the preflight C++ code can find it, but otherwise there's a lot of latitude
//	over what it does. For example, you could extend it to support HTML, XML, or other output 
//	forms. Or you could enhance the template file used for PDF export to include your company
//	logo, for example.
//
//	There are two operating modes for this script. Both receive their data via the 'arguments'
//	parameter, which is predefined in use. The arguments parameter is an array of key-value pairs.
//
//	The first operating mode is "get_prefs" (identified by key "action" with a value of "get_prefs").
//	In this mode the script is expected to provide data to the C++ side regarding which kinds of
//	output modes are supported. In this script, they are PDF and ASCII. The results of the get_prefs
//	action are used to populate the save-as dialog which is hosted on the C++ side.
//
//	The second operating mode is "export", which as it implies is when the export actually takes
//	place, after the user has selected a location and file type.
//
//	In both modes the script is given the data it will export. This data is recorded in the 
//	arguments array with the key "entries".
//
//	See comments inline below for more details.

var result = undefined;

if (arguments != undefined)
{
	// Incoming arguments are a simple array; convert to an associative array so it's easier
	// to do argument lookup.

	var params = new Array();
	for(n = 0; n < arguments.length; n++) params[arguments[n][0]] = arguments[n][1];
	
	var action = params["action"];
	
	if (action == "export")
	{
		result = BuildReport(params, false);
	}
	else if (action == "get_prefs")
	{
		result = GetPrefs(params, false);
	}
	else
	{
		result = undefined;
	}
}

// Just leave 'result' as the last operation so it's returned to the C++ side.
result = result;

function GetPrefs(params)
{
	// This is the "get_prefs" action. Here the script needs to build an array of supported
	// file types. At the top level it's a key-value dictionary with the following entries.
	//
	//	Key				Value
	//	-----------		--------------------------------
	//	default_file	A File object that reflects the default name and/or location of the
	//					saved file. This is the initial suggested file name in the save-as dialog.
	//
	//	file_types		An array of child arrays, one child array for each supported file type. 
	//					The child arrays have the following values:
	//
	//					Index	Meaning
	//					-------	-------------------------
	//					0		File extension (eg "pdf").
	//					1		File type description (eg "Portable Document Format (*.pdf)").
	//					2		Macintosh file type constant.
	//					3		Macintosh creator constant.
	
	var prefs = new Array();
	
	// Perhaps make this a variant of the document name?
	prefs.push(["default_file", File(Translate("kPreflightReport.pdf"))]);
	
	var types = new Array();
	types.push(["pdf", Translate("kPreflightReportPDFFormat"), 0x00000000, 0x00000000]);
	types.push(["txt", Translate("kPreflightReportASCIITextFormat"), 0x00000000, 0x00000000]);
	prefs.push(["file_types", types]);
	
	return prefs;
}

function EndsWith(s, sEnding)
{
	if (s.length < sEnding.length) return false;
	return s.indexOf(sEnding) == s.length - sEnding.length;
}

function BuildReport(params)
{
	// This function corresponds to the "export" action. Here the script needs to export the file
	// in the format implied by the file name. The following parameters will be in 'params' for 
	// this case.
	// When export as ASCII text file, we unconditionally UTF8 encoded.

	//
	//	Key					Type	Meaning
	//	------------------- -------	--------------------------------------------------------------
	//	action				String	"export" (ie, do an export, as opposed to get prefs).
	//
	//	document_name		String	The name of the document or book that was preflighted.
	//
	//	is_book				Bool	True if the export is of a book preflight, as opposed to doc.
	//
	//	profile_name		String	The name of the preflight profile used. Will be empty for 
	//								book preflight if the "use document embedded profiles" option
	//								was selected.
	//
	//	output_file			File	The name/path to the desired report file name
	//
	//	script_folder		File	The folder the script executes from. Can be used to load an
	//								associated template file, for example.
	//
	//	entries				Array	An array of entries. Each entry is an array of five elements,
	//								corresponding to the same info shown in the panel.
	//								- Depth (1-5) of indent
	//								- Text
	//								- Page number
	//								- Info text (shown when entry is highlighted; generally more verbose)
	//								- Description pairs (array of 2-element arrays: label, value)
	//
	//	open_after_create	Bool	True to open the file after creation; false to save silently.
	//
	//	font_name			String	Name of the font to use when exporting as a PDF file.
	
	var outputFile = params["output_file"];
	var result = undefined;
	
	// Special case for book use-embedded case.
	var profileName = params["profile_name"];
	if ((profileName == undefined || profileName.length == 0) && params["is_book"])
		params["profile_name"] = Translate("use_embedded_profile");

	if (EndsWith(outputFile.name.toLowerCase(), ".txt"))
	{
		result = BuildReportASCII(params);
	}
	else
	{
		result = BuildReportPDF(params);
	}
	
	return result;
}

function BuildReportASCII(params, strings)
{
	var outputFile = params["output_file"];
	
	try
	{
		if (!outputFile.open("w"))
		{
			throw "Could not open file for writing.";
		}
		
		// Indicate that the file is UTF8 encoded.
		outputFile.encoding = 'binary';
		outputFile.write("\xef\xbb\xbf"); // UTF8 Signature
		
		outputFile.encoding = 'UTF-8';
		outputFile.writeln(Translate("report_title"));
		outputFile.writeln(Translate("document_name_label") + " " + params["document_name"]);
		outputFile.writeln(Translate("profile_name_label") + " " + params["profile_name"]);
		outputFile.writeln("");
		outputFile.writeln(Translate("summary_report_title"));
		outputFile.writeln("--------------------------------------------------------------------");
		
		BuildReportASCIIHelper(outputFile, params, false);
		
		outputFile.writeln("");
		outputFile.writeln(Translate("longform_report_title"));
		outputFile.writeln("--------------------------------------------------------------------");
		
		BuildReportASCIIHelper(outputFile, params, true);
		
		outputFile.close();
		
		if (params["open_after_create"])
		{
			outputFile.execute();
		}
	}
	catch(e)
	{
		outputFile.close();
		return e;
	}
}

function Translate(s)
{
	return app.translateKeyString("$ID/" + s);
}

function BuildReportASCIIHelper(outputFile, params, doInfo)
{
	try
	{
		var entries = params["entries"];
		if (entries == undefined) throw "Invalid data. No 'entries' field.";
		
		for(n = 0; n < entries.length; n++)
		{
			var rowData = entries[n];
			var s = "";
			var sIndent = "";

			for(indent = 0; indent < rowData[0] - 1; indent++) sIndent += "   ";
			s = sIndent + rowData[1];
			
			// Add page number
			if (rowData[2].length > 0) s += Translate("page_prefix") + rowData[2] + Translate("page_suffix");
			
			outputFile.writeln(s);

			var pairs = rowData[4];

			if (doInfo && pairs.length > 0)
			{
				// Write out label-value pairs
				sIndent += "   ";
				for(i = 0; i <  pairs.length; i++) outputFile.writeln(sIndent + pairs[i][0] + ": " + pairs[i][1]);
			}
		}
	}
	catch(e)
	{
		return e;
	}
	return undefined;
}

function BuildReportPDF(params)
{	
	var doc;
	
	try
	{
		doc = CreateWorkingDoc(params);

		SetDocSize(params, doc);			// Different locales have different default page sizes
		SetFont(params, doc);				// Set document font to use
		BuildTableOfResults(params, doc);	// Create big results table from entries
		SubstituteStrings(params, doc);		// Swap out placeholders for localized strings
		AutoFlowDocument(params, doc);		// Create additional pages as needed
		ExportDocumentToPDF(params, doc);	// Create the PDF
	}
	catch(e)
	{
		if (doc != undefined) doc.close(SaveOptions.NO);
		alert(e);
		return e;
	}

	doc.close(SaveOptions.NO);
	
	return undefined;
}

function TranslateVariable(doc, s)
{
	try 
	{ 
		var docVar = doc.textVariables.itemByName(s);
		docVar.variableOptions.contents = Translate(s);
	} 
	catch(e) {}
}

function ReplaceVariable(doc, params, key)
{
	try { doc.textVariables.itemByName(key).variableOptions.contents = params[key]; } catch (e) {}
}

function CreateWorkingDoc(params)
{
	// Look for the template file in the same folder as this script.
	var templateFile = params["script_folder"];
	
	templateFile.changePath("./PreflightReport.indt");
	
	if (!templateFile.exists) throw "Template file not found.";

	var doc = app.open(templateFile, false); // No window (don't want user seeing the doc building)
	
	if (doc == undefined) throw "Could not open template file.";
	
	return doc;
}

function SetDocSize(params, doc)
{
	try
	{
		if (app.locale == Locale.ENGLISH_LOCALE)
		{
			doc.documentPreferences.pageSize = "Letter";
		}
		else
		{
			doc.documentPreferences.pageSize = "A4";
		}
	}
	catch(e)
	{
		// Don't error if we can't change the size for whatever reason.
	}
}

function SetFont(params, doc)
{
	try
	{
		fontName = params["font_name"];
		doc.paragraphStyles.item("Base").appliedFont = fontName;
	}
	catch (e)
	{
		// They'll just get missing glyphs, then.
	}
}

function BuildTableOfResults(params, doc)
{
	if (doc.textFrames.count() == 0) throw "Invalid template file. Must have a single text frame.";

	var is_book = params["is_book"];
	if (is_book == undefined) is_book = false;
	
	var textFrame = doc.textFrames[0];
	if (textFrame.tables.count() == 0) throw "Invalid template file. Must have a text frame with a results table in it.";
	
	var resultsTable = textFrame.tables[0];
	
	var entries = params["entries"];
	if (entries == undefined) throw "Invalid data. No 'entries' field.";
	
	var dataRows = entries.length;
	
	while (resultsTable.rows.count() <= dataRows) 
	{ 
		resultsTable.rows.add(LocationOptions.AT_END); 
	}

	for(n = 0; n < dataRows; n++)
	{
		var r = resultsTable.rows[n+1];
		var rowData = entries[n];
		var cellText = r.cells[0];
		var cellPage = r.cells[1];
		var depth = rowData[0];
		var styleName, infoStyleName;

		if (is_book && depth == 1)
		{
			// Depth 1 for book preflight is document name. Give it special formatting.
			styleName = "BookDoc";
			infoStyleName = "BookDocInfo";
			
			cellText.merge(cellPage);
			cellText.fillColor = "25K to White";
			cellPage = undefined;
		}
		else
		{
			// For books, reduce the depth of all child entries so they can use doc-level formatting.
			if (is_book) depth--;
			styleName = "L" + depth;
			infoStyleName = "L" + depth + "Info";
		}
				
		if (rowData[3].length > 0)
		{
			cellText.contents = rowData[1] + "\r" + rowData[3];
		}
		else
		{
			cellText.contents = rowData[1];
		}
		
		// Apply paragraph style corresponding to indent level. Template has styles "L1", "L2", etc.
		var paraStyle = doc.paragraphStyles.item(styleName);
		if (paraStyle != undefined) cellText.paragraphs[0].appliedParagraphStyle = paraStyle;

		if (rowData[3].length > 0)
		{
			// Additional info strings: format with "L1Info" et al styles, which are smaller font 
			// and further indented.
			
			var numParas = cellText.paragraphs.length;
			var infoParaStyle = doc.paragraphStyles.item(infoStyleName);
			if (infoParaStyle != undefined)
			{
				for(p =1; p < numParas; p++) 
					cellText.paragraphs[p].appliedParagraphStyle = infoParaStyle;
			}
		}

		if (cellPage != undefined) cellPage.contents = rowData[2];
	}
}

function SubstituteStrings(params, doc)
{
	// Replace text variables with document name, profile name, etc.
	ReplaceVariable(doc, params, "document_name");
	ReplaceVariable(doc, params, "profile_name");
	
	// Translate all these strings and replace the variables in the doc with them.
	TranslateVariable(doc, "report_title");
	TranslateVariable(doc, "document_name_label");
	TranslateVariable(doc, "profile_name_label");
	TranslateVariable(doc, "error_heading");
	TranslateVariable(doc, "page_number_heading");
	TranslateVariable(doc, "summary_report_title");
	TranslateVariable(doc, "longform_report_title");
	TranslateVariable(doc, "page_prefix");
	TranslateVariable(doc, "page_suffix");
}

function AutoFlowDocument(params, doc)
{
	var textFrame = doc.textFrames[0];
	var overset = textFrame.overflows;
	var prevFrame = textFrame;

	while(overset)
	{
		// Create new pages until the last frame doesn't overflow.
		var pg = doc.pages.add(LocationOptions.AT_END);
		var newFrame = pg.masterPageItems[0].override(pg);
		prevFrame.nextTextFrame = newFrame;
		overset = newFrame.overflows;
		prevFrame = newFrame;
	}
}

function ExportDocumentToPDF(params, doc)
{
	var prevViewPDF = app.pdfExportPreferences.viewPDF;
	app.pdfExportPreferences.viewPDF = params["open_after_create"];
	doc.exportFile(ExportFormat.PDF_TYPE, params["output_file"]);
	app.pdfExportPreferences.viewPDF = prevViewPDF;
}

