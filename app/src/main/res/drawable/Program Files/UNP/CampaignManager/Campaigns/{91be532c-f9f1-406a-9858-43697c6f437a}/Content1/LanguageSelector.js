var UNPContentWrapper;
(function (UNPContentWrapper) {
    UNPContentWrapper.CriticalTelemetry = true;
    UNPContentWrapper.NormalTelemetry = false;
    var Telemetry = (function () {
        function Telemetry() {
        }
        Telemetry.Send = function (isCritical, schema, values) {
            var succeeded = true;
            var CurrentExperimentId = UPXContent.GetExperimentId();
            var isOnline = window.location.href.indexOf("http") === 0 ? "TRUE" : "FALSE";
            var CurrentExperimentVariation;
            if (CurrentExperimentId === "") {
                CurrentExperimentId = "Default";
                CurrentExperimentVariation = "Default";
            }
            else {
                CurrentExperimentVariation = UNPContentWrapper.CommonHelpers.GetExperimentVariation(CurrentExperimentId).toString();
            }
            switch (values.length) {
                case 1:
                    if (isCritical) {
                        window.external.UploadCriticalTelemetry(schema, values[0], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    else {
                        window.external.UploadNormalTelemetry(schema, values[0], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    break;
                case 2:
                    if (isCritical) {
                        window.external.UploadCriticalTelemetry(schema, values[0], values[1], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    else {
                        window.external.UploadNormalTelemetry(schema, values[0], values[1], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    break;
                case 3:
                    if (isCritical) {
                        window.external.UploadCriticalTelemetry(schema, values[0], values[1], values[2], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    else {
                        window.external.UploadNormalTelemetry(schema, values[0], values[1], values[2], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    break;
                case 4:
                    if (isCritical) {
                        window.external.UploadCriticalTelemetry(schema, values[0], values[1], values[2], values[3], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    else {
                        window.external.UploadNormalTelemetry(schema, values[0], values[1], values[2], values[3], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    break;
                case 5:
                    if (isCritical) {
                        window.external.UploadCriticalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    else {
                        window.external.UploadNormalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    break;
                case 6:
                    if (isCritical) {
                        window.external.UploadCriticalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    else {
                        window.external.UploadNormalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    break;
                case 7:
                    if (isCritical) {
                        window.external.UploadCriticalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    else {
                        window.external.UploadNormalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    break;
                case 8:
                    if (isCritical) {
                        window.external.UploadCriticalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    else {
                        window.external.UploadNormalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    break;
                case 9:
                    if (isCritical) {
                        window.external.UploadCriticalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    else {
                        window.external.UploadNormalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    break;
                case 10:
                    if (isCritical) {
                        window.external.UploadCriticalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    else {
                        window.external.UploadNormalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    break;
                case 11:
                    if (isCritical) {
                        window.external.UploadCriticalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    else {
                        window.external.UploadNormalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    break;
                case 12:
                    if (isCritical) {
                        window.external.UploadCriticalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    else {
                        window.external.UploadNormalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    break;
                case 13:
                    if (isCritical) {
                        window.external.UploadCriticalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    else {
                        window.external.UploadNormalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    break;
                case 14:
                    if (isCritical) {
                        window.external.UploadCriticalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    else {
                        window.external.UploadNormalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    break;
                case 15:
                    if (isCritical) {
                        window.external.UploadCriticalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], values[14], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    else {
                        window.external.UploadNormalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], values[14], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    break;
                case 16:
                    if (isCritical) {
                        window.external.UploadCriticalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], values[14], values[15], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    else {
                        window.external.UploadNormalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], values[14], values[15], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    break;
                case 17:
                    if (isCritical) {
                        window.external.UploadCriticalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], values[14], values[15], values[16], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    else {
                        window.external.UploadNormalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], values[14], values[15], values[16], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    break;
                case 18:
                    if (isCritical) {
                        window.external.UploadCriticalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], values[14], values[15], values[16], values[17], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    else {
                        window.external.UploadNormalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], values[14], values[15], values[16], values[17], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    break;
                case 19:
                    if (isCritical) {
                        window.external.UploadCriticalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], values[14], values[15], values[16], values[17], values[18], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    else {
                        window.external.UploadNormalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], values[14], values[15], values[16], values[17], values[18], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    break;
                case 20:
                    if (isCritical) {
                        window.external.UploadCriticalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], values[14], values[15], values[16], values[17], values[18], values[19], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    else {
                        window.external.UploadNormalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], values[14], values[15], values[16], values[17], values[18], values[19], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    break;
                case 21:
                    if (isCritical) {
                        window.external.UploadCriticalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], values[14], values[15], values[16], values[17], values[18], values[19], values[20], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    else {
                        window.external.UploadNormalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], values[14], values[15], values[16], values[17], values[18], values[19], values[20], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    break;
                case 22:
                    if (isCritical) {
                        window.external.UploadCriticalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], values[14], values[15], values[16], values[17], values[18], values[19], values[20], values[21], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    else {
                        window.external.UploadNormalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], values[14], values[15], values[16], values[17], values[18], values[19], values[20], values[21], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    break;
                case 23:
                    if (isCritical) {
                        window.external.UploadCriticalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], values[14], values[15], values[16], values[17], values[18], values[19], values[20], values[21], values[22], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    else {
                        window.external.UploadNormalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], values[14], values[15], values[16], values[17], values[18], values[19], values[20], values[21], values[22], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    break;
                case 24:
                    if (isCritical) {
                        window.external.UploadCriticalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], values[14], values[15], values[16], values[17], values[18], values[19], values[20], values[21], values[22], values[23], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    else {
                        window.external.UploadNormalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], values[14], values[15], values[16], values[17], values[18], values[19], values[20], values[21], values[22], values[23], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    break;
                case 25:
                    if (isCritical) {
                        window.external.UploadCriticalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], values[14], values[15], values[16], values[17], values[18], values[19], values[20], values[21], values[22], values[23], values[24], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    else {
                        window.external.UploadNormalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], values[14], values[15], values[16], values[17], values[18], values[19], values[20], values[21], values[22], values[23], values[24], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    break;
                case 26:
                    if (isCritical) {
                        window.external.UploadCriticalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], values[14], values[15], values[16], values[17], values[18], values[19], values[20], values[21], values[22], values[23], values[24], values[25], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    else {
                        window.external.UploadNormalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], values[14], values[15], values[16], values[17], values[18], values[19], values[20], values[21], values[22], values[23], values[24], values[25], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    break;
                case 27:
                    if (isCritical) {
                        window.external.UploadCriticalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], values[14], values[15], values[16], values[17], values[18], values[19], values[20], values[21], values[22], values[23], values[24], values[25], values[26], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    else {
                        window.external.UploadNormalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], values[14], values[15], values[16], values[17], values[18], values[19], values[20], values[21], values[22], values[23], values[24], values[25], values[26], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    break;
                case 28:
                    if (isCritical) {
                        window.external.UploadCriticalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], values[14], values[15], values[16], values[17], values[18], values[19], values[20], values[21], values[22], values[23], values[24], values[25], values[26], values[27], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    else {
                        window.external.UploadNormalTelemetry(schema, values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8], values[9], values[10], values[11], values[12], values[13], values[14], values[15], values[16], values[17], values[18], values[19], values[20], values[21], values[22], values[23], values[24], values[25], values[26], values[27], isOnline, CurrentExperimentId, CurrentExperimentVariation);
                    }
                    break;
                default:
                    succeeded = false;
            }
            if (succeeded) {
                succeeded = (window.external.GetLastJSError() === UNPContentWrapper.HRESULT.S_OK);
            }
            return succeeded;
        };
        Telemetry.SendTelemetry = function (info) {
            var values = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                values[_i - 1] = arguments[_i];
            }
            if (values.length === info.numberOfValues) {
                return Telemetry.Send(info.isCritical, info.schemaName, values);
            }
            else {
                window.external.LogError(UNPContentWrapper.HRESULT.E_FAIL, "Failed to send telemetry with Schema Name " + info.schemaName + " Telemetry Values did not match predefined keys");
                return false;
            }
        };
        return Telemetry;
    })();
    UNPContentWrapper.Telemetry = Telemetry;
    var TelemetrySchema = (function () {
        function TelemetrySchema(isCritical, schemaName) {
            var valueDescriptions = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                valueDescriptions[_i - 2] = arguments[_i];
            }
            this.schemaName = schemaName;
            this.isCritical = isCritical;
            this.numberOfValues = valueDescriptions.length;
        }
        TelemetrySchema.SlideView = new TelemetrySchema(UNPContentWrapper.NormalTelemetry, "SlideView", "previousSlideID", "currentSlideID", "machineSlideViewCount", "userSlideViewCount");
        TelemetrySchema.ButtonClick = new TelemetrySchema(UNPContentWrapper.NormalTelemetry, "ButtonClick", "currentSlideID", "buttonName", "machineButtonClickCount", "userButtonClickCount");
        TelemetrySchema.ErrorPageShown = new TelemetrySchema(UNPContentWrapper.CriticalTelemetry, "ErrorPageShown", "hResult");
        TelemetrySchema.SessionHistory = new TelemetrySchema(UNPContentWrapper.NormalTelemetry, "SessionHistory", "history", "machineSessionCount", "userSessionCount");
        TelemetrySchema.LandingPageChoice = new TelemetrySchema(UNPContentWrapper.NormalTelemetry, "LandingPageChoice", "machineSessionCount", "userSessionCount");
        TelemetrySchema.ContentError = new TelemetrySchema(UNPContentWrapper.NormalTelemetry, "ContentError", "slideID", "errorCode", "errorMessage");
        TelemetrySchema.UnexpectedWindowSize = new TelemetrySchema(UNPContentWrapper.NormalTelemetry, "UnexpectedWindowSize", "WindowHeigh", "WindowWidth", "MetadataMaxHeight", "MetadataMinHeight", "MetadataMaxWidth", "MetadataMinWidth");
        return TelemetrySchema;
    })();
    UNPContentWrapper.TelemetrySchema = TelemetrySchema;
})(UNPContentWrapper || (UNPContentWrapper = {}));
var UNPContentWrapper;
(function (UNPContentWrapper) {
    var CommonDefines = (function () {
        function CommonDefines() {
        }
        CommonDefines.languageBASEfallback = "BASE";
        CommonDefines.languageDefault = "en-US";
        CommonDefines.localeDefault = "us";
        CommonDefines.contentFileName = "index.html";
        CommonDefines.urlFolderSeparator = "/";
        CommonDefines.offlineFolderSeparator = "\\";
        CommonDefines.urlArgumentsSeparator = "?";
        CommonDefines.MetadataJSONFileName = "metadata.json";
        return CommonDefines;
    })();
    UNPContentWrapper.CommonDefines = CommonDefines;
    var ABTestingDefines = (function () {
        function ABTestingDefines() {
        }
        ABTestingDefines.ABTestingMin = 0;
        ABTestingDefines.ABTestingMax = 2147483647;
        ABTestingDefines.ControlGroupExperimentId = "Z";
        ABTestingDefines.InvalidABTestingPercentageLogMessage = "ABTestingValue provided by GetExperimentVariationJson is invalid, using Default Experiment group";
        return ABTestingDefines;
    })();
    UNPContentWrapper.ABTestingDefines = ABTestingDefines;
    var HRESULT = (function () {
        function HRESULT() {
        }
        HRESULT.S_OK = 0;
        HRESULT.E_FAIL = -2147483640;
        HRESULT.E_INVALIDARG = -2147483645;
        HRESULT.E_ILLEGAL_STATE_CHANGE = -2147483635;
        HRESULT.E_FILE_NOT_FOUND = -2147024894;
        HRESULT.E_NOTIMPL = -2147467263;
        return HRESULT;
    })();
    UNPContentWrapper.HRESULT = HRESULT;
    var CloseReason = (function () {
        function CloseReason() {
        }
        CloseReason.User = "User";
        CloseReason.Timeout = "Timeout";
        CloseReason.Error = "Error";
        CloseReason.Other = "Other";
        return CloseReason;
    })();
    UNPContentWrapper.CloseReason = CloseReason;
})(UNPContentWrapper || (UNPContentWrapper = {}));
var UNPContentWrapper;
(function (UNPContentWrapper) {
    var Dictionary = (function () {
        function Dictionary() {
            var _this = this;
            this.add = function (Key, Value) {
                var containsKey = _this.ContainsKey(Key);
                if (!containsKey) {
                    _this.keys.push(Key);
                    _this.values.push(Value);
                }
                return !containsKey;
            };
            this.remove = function (Key) {
                var containsKey = _this.ContainsKey(Key);
                if (!containsKey) {
                    var i = _this.GetIndex(Key);
                    _this.keys.splice(i, 1);
                    _this.values.splice(i, 1);
                }
                return !containsKey;
            };
            this.clear = function () {
                while (_this.keys.length != 0) {
                    _this.keys.pop();
                    _this.values.pop();
                }
            };
            this.GetIndex = function (Key) {
                for (var i = 0; i < _this.keys.length; i++) {
                    if (_this.keys[i] == Key) {
                        return i;
                    }
                }
                return (-1);
            };
            this.ContainsKey = function (Key) {
                return -1 !== _this.GetIndex(Key);
            };
            this.GetValueForKey = function (Key) {
                var value = null;
                if (_this.ContainsKey(Key)) {
                    var i = _this.GetIndex(Key);
                    value = _this.values[i];
                }
                return value;
            };
            this.DeepCopy = function () {
                var newDictionary = new Dictionary();
                for (var i = 0; i < _this.keys.length; i++) {
                    newDictionary.add(_this.keys[i], _this.values[i]);
                }
                return newDictionary;
            };
            this.keys = new Array();
            this.values = new Array();
        }
        return Dictionary;
    })();
    UNPContentWrapper.Dictionary = Dictionary;
})(UNPContentWrapper || (UNPContentWrapper = {}));
var UNPContentWrapper;
(function (UNPContentWrapper) {
    var OSVersion = (function () {
        function OSVersion(osVersionString) {
            var _this = this;
            this.isGreaterThan = function (compare) {
                return compare !== undefined && compare !== null && (_this.Major > compare.Major || (_this.Major === compare.Major && _this.Minor > compare.Minor) || (_this.Major === compare.Major && _this.Minor === compare.Minor && _this.Build > compare.Build));
            };
            this.isLessThan = function (compare) {
                return compare !== undefined && compare !== null && (_this.Major < compare.Major || (_this.Major === compare.Major && _this.Minor < compare.Minor) || (_this.Major === compare.Major && _this.Minor === compare.Minor && _this.Build < compare.Build));
            };
            this.isEqual = function (compare) {
                return compare !== undefined && compare !== null && _this.Major === compare.Major && _this.Minor === compare.Minor && _this.Build === compare.Build;
            };
            this.isGreaterThanOrEqual = function (compare) {
                return _this.isGreaterThan(compare) || _this.isEqual(compare);
            };
            this.isLessThanOrEqual = function (compare) {
                return _this.isLessThan(compare) || _this.isEqual(compare);
            };
            var osParts = osVersionString.split(".");
            this.Major = Number(osParts[0]);
            this.Minor = Number(osParts[1]);
            this.Build = Number(osParts[2]);
        }
        OSVersion.RS1_MIN_VERSION = "10.0.14393";
        OSVersion.RS1_MAX_VERSION = "10.0.15062";
        return OSVersion;
    })();
    UNPContentWrapper.OSVersion = OSVersion;
    var CommonHelpers = (function () {
        function CommonHelpers() {
        }
        CommonHelpers.GetOfflineMetadataJson = function () {
            var metadataJSONString = window.external.GetContentFileAsString(CommonHelpers.GetPathForFile(false, false, UNPContentWrapper.CommonDefines.MetadataJSONFileName));
            var metadata;
            try {
                metadata = JSON.parse(metadataJSONString);
            }
            catch (e) {
                window.external.LogInfo(UNPContentWrapper.HRESULT.E_INVALIDARG, "Metadata is not valid JSON, returning NULL object");
                metadata = null;
            }
            return metadata;
        };
        CommonHelpers.CheckIfValidWindowSize = function () {
            var CurrentPackageVersion = window.external.GetCurrentPackageVersion();
            var metadata;
            var windowHeight;
            var windowWidth;
            var lastHRESULT = window.external.GetLastJSError();
            if (lastHRESULT == UNPContentWrapper.HRESULT.S_OK && CurrentPackageVersion >= 14) {
                windowHeight = window.external.GetWindowHeight();
                windowWidth = window.external.GetWindowWidth();
                metadata = CommonHelpers.GetOfflineMetadataJson();
                if (metadata !== null &&
                    metadata !== undefined &&
                    windowHeight >= metadata.MinHeight &&
                    windowHeight <= metadata.MaxHeight &&
                    windowWidth >= metadata.MinWidth &&
                    windowWidth <= metadata.MaxWidth) {
                    return UNPContentWrapper.HRESULT.S_OK;
                }
            }
            else if (CurrentPackageVersion < 14) {
                return UNPContentWrapper.HRESULT.E_NOTIMPL;
            }
            UNPContentWrapper.Telemetry.SendTelemetry(UNPContentWrapper.TelemetrySchema.UnexpectedWindowSize, (windowHeight === null || windowHeight === undefined) ? "undefined" : windowHeight.toString(), (windowWidth === null || windowWidth === undefined) ? "undefined" : windowWidth.toString(), (metadata === null || metadata === undefined || metadata.MaxHeight === null || metadata.MaxHeight === undefined) ? "undefined" : metadata.MaxHeight.toString(), (metadata === null || metadata === undefined || metadata.MinHeight === null || metadata.MinHeight === undefined) ? "undefined" : metadata.MinHeight.toString(), (metadata === null || metadata === undefined || metadata.MaxWidth === null || metadata.MaxWidth === undefined) ? "undefined" : metadata.MaxWidth.toString(), (metadata === null || metadata === undefined || metadata.MinWidth === null || metadata.MinWidth === undefined) ? "undefined" : metadata.MinWidth.toString());
            return UNPContentWrapper.HRESULT.E_INVALIDARG;
        };
        CommonHelpers.GetRandomNumber = function (min, max) {
            if (min >= max || min < 0 || max < 0) {
                return null;
            }
            var range = max - min;
            return Math.floor((Math.random() * (range + 1)) + min);
        };
        CommonHelpers.GetSeedForExperimentId = function (ExperimentId) {
            var currentValue;
            currentValue = window.external.ReadMachineDWORDRegValue(UNPContentWrapper.RegistryHelpers.GetHKLMContentLocalStateABTestingSeedValuesRegistryLocation(), ExperimentId);
            if (currentValue === undefined || currentValue === null) {
                currentValue = CommonHelpers.GetRandomNumber(UNPContentWrapper.ABTestingDefines.ABTestingMin, UNPContentWrapper.ABTestingDefines.ABTestingMax);
                UNPContentWrapper.RegistryHelpers.WriteMachineDWORD(UNPContentWrapper.RegistryHelpers.GetHKLMContentLocalStateABTestingSeedValuesRegistryLocation(), ExperimentId, currentValue);
                var lastHR = window.external.GetLastJSError();
                if (lastHR !== UNPContentWrapper.HRESULT.S_OK) {
                    currentValue = 0;
                }
            }
            return currentValue;
        };
        CommonHelpers.GetExperimentVariation = function (ExperimentId) {
            var ABTestingSeed = CommonHelpers.GetSeedForExperimentId(ExperimentId);
            var SeedChoicePercent = (ABTestingSeed / UNPContentWrapper.ABTestingDefines.ABTestingMax);
            var ExperimentJSON = UPXContent.GetExperimentVariationJson();
            var runningCount = 0;
            for (var key in ExperimentJSON) {
                var KeyValue = key;
                if (!ExperimentJSON.hasOwnProperty(KeyValue))
                    continue;
                var percentage = Number(ExperimentJSON[KeyValue]);
                if (isNaN(percentage)) {
                    window.external.LogInfo(UNPContentWrapper.HRESULT.E_INVALIDARG, UNPContentWrapper.ABTestingDefines.InvalidABTestingPercentageLogMessage);
                }
                if (SeedChoicePercent > runningCount && SeedChoicePercent <= runningCount + percentage) {
                    return key;
                }
                else {
                    runningCount += percentage;
                }
            }
            return UNPContentWrapper.ABTestingDefines.ControlGroupExperimentId;
        };
        CommonHelpers.GetLangLocale = function () {
            var language;
            language = window.external.GetDisplayLanguage();
            if (language === null || language === undefined || window.external.GetLastJSError() !== UNPContentWrapper.HRESULT.S_OK) {
                language = UNPContentWrapper.CommonDefines.languageDefault;
            }
            if (window.external.GetRegion().toUpperCase() === "CA" && language.split('-')[0].toUpperCase() === "EN") {
                return "en-CA";
            }
            return language;
        };
        CommonHelpers.GetLanguageFallback = function (currentLanguage) {
            return UNPContentWrapper.CommonDefines.languageDefault;
        };
        CommonHelpers.CalculateOfflineLangLocaleFallback = function () {
            var langLocale = CommonHelpers.GetLangLocale();
            var langDefault = CommonHelpers.GetLanguageFallback(langLocale);
            var contentFolder = CommonHelpers.GetContentFolder(false);
            var testFile = contentFolder + UNPContentWrapper.CommonDefines.urlFolderSeparator + langLocale + UNPContentWrapper.CommonDefines.urlFolderSeparator + UNPContentWrapper.CommonDefines.contentFileName;
            if (window.external.CheckLocalFileExistence(testFile)) {
                return langLocale;
            }
            testFile = contentFolder + UNPContentWrapper.CommonDefines.urlFolderSeparator + langDefault + UNPContentWrapper.CommonDefines.urlFolderSeparator + UNPContentWrapper.CommonDefines.contentFileName;
            if (window.external.CheckLocalFileExistence(testFile)) {
                return langDefault;
            }
            return null;
        };
        CommonHelpers.IsUserOnline = function () {
            var NetworkStatus;
            NetworkStatus = window.external.GetNetworkStatus();
            if (NetworkStatus === 0) {
                return false;
            }
            else {
                return true;
            }
        };
        CommonHelpers.GetContentFolder = function (isOnline) {
            if (isOnline) {
                return window.external.GetCampaignContentDir();
            }
            else {
                return window.external.GetCampaignContentDir();
            }
        };
        CommonHelpers.GetLocalizedContentFolder = function (isOnline) {
            var contentFolder = CommonHelpers.GetContentFolder(isOnline);
            if (isOnline) {
                return contentFolder + UNPContentWrapper.CommonDefines.urlFolderSeparator + CommonHelpers.GetLangLocale();
            }
            else {
                return contentFolder + UNPContentWrapper.CommonDefines.offlineFolderSeparator + CommonHelpers.CalculateOfflineLangLocaleFallback();
            }
        };
        CommonHelpers.GetPathForFile = function (isOnline, isLocalized, fileName) {
            var contentFolder;
            if (isLocalized) {
                contentFolder = CommonHelpers.GetLocalizedContentFolder(isOnline);
            }
            else {
                contentFolder = CommonHelpers.GetContentFolder(isOnline);
            }
            if (isOnline) {
                return contentFolder + UNPContentWrapper.CommonDefines.urlFolderSeparator + fileName;
            }
            else {
                return contentFolder + UNPContentWrapper.CommonDefines.offlineFolderSeparator + fileName;
            }
        };
        CommonHelpers.IsOSVersionWithinRange = function (osVersionLowString, osVersionHighString) {
            var osVersionLow = new OSVersion(osVersionLowString);
            var osVersionHigh = new OSVersion(osVersionHighString);
            var OsVersionString = window.external.GetOSVersion();
            var osVersionCurrent;
            if (OsVersionString.indexOf(".") === -1) {
                osVersionCurrent = new OSVersion("10.0." + OsVersionString);
            }
            else {
                osVersionCurrent = new OSVersion(OsVersionString);
            }
            return osVersionCurrent.isGreaterThanOrEqual(osVersionLow) && osVersionCurrent.isLessThanOrEqual(osVersionHigh);
        };
        return CommonHelpers;
    })();
    UNPContentWrapper.CommonHelpers = CommonHelpers;
})(UNPContentWrapper || (UNPContentWrapper = {}));
var UNPContentWrapper;
(function (UNPContentWrapper) {
    var RegistryHelpers = (function () {
        function RegistryHelpers() {
        }
        RegistryHelpers.IncrementRegistryCounter = function (isHKLM, regKey, regValue) {
            var currentValue;
            if (isHKLM) {
                currentValue = window.external.ReadMachineQWORDRegValue(regKey, regValue);
            }
            else {
                currentValue = window.external.ReadUserQWORDRegValue(regKey, regValue);
            }
            if (currentValue === undefined || currentValue === null) {
                currentValue = 0;
            }
            currentValue++;
            if (isHKLM) {
                RegistryHelpers.WriteMachineQWORD(regKey, regValue, currentValue);
            }
            else {
                RegistryHelpers.WriteUserQWORD(regKey, regValue, currentValue);
            }
            var lastHR = window.external.GetLastJSError();
            if (lastHR !== UNPContentWrapper.HRESULT.S_OK) {
                currentValue = 0;
            }
            return currentValue;
        };
        RegistryHelpers.WriteMachineQWORD = function (regKey, regValue, regData) {
            window.external.WriteMachineQWORDRegValue(regKey, regValue, regData);
            var lastHR = window.external.GetLastJSError();
            if (lastHR !== UNPContentWrapper.HRESULT.S_OK) {
                window.external.LogInfo(lastHR, "RegWrite QWORD to HKLM\\" + regKey + " [" + regValue + "] = " + regData + " Failed with HRESULT = " + lastHR);
            }
        };
        RegistryHelpers.WriteUserQWORD = function (regKey, regValue, regData) {
            window.external.WriteUserQWORDRegValue(regKey, regValue, regData);
            var lastHR = window.external.GetLastJSError();
            if (lastHR !== UNPContentWrapper.HRESULT.S_OK) {
                window.external.LogInfo(lastHR, "RegWrite DWORD to HKCU\\" + regKey + " [" + regValue + "] = " + regData + " Failed with HRESULT = " + lastHR);
            }
        };
        RegistryHelpers.WriteMachineDWORD = function (regKey, regValue, regData) {
            window.external.WriteMachineDWORDRegValue(regKey, regValue, regData);
            var lastHR = window.external.GetLastJSError();
            if (lastHR !== UNPContentWrapper.HRESULT.S_OK) {
                window.external.LogInfo(lastHR, "RegWrite DWORD to HKLM\\" + regKey + " [" + regValue + "] = " + regData + " Failed with HRESULT = " + lastHR);
            }
        };
        RegistryHelpers.WriteUserDWORD = function (regKey, regValue, regData) {
            window.external.WriteUserDWORDRegValue(regKey, regValue, regData);
            var lastHR = window.external.GetLastJSError();
            if (lastHR !== UNPContentWrapper.HRESULT.S_OK) {
                window.external.LogInfo(lastHR, "RegWrite DWORD to HKCU\\" + regKey + " [" + regValue + "] = " + regData + " Failed with HRESULT = " + lastHR);
            }
        };
        RegistryHelpers.WriteMachineString = function (regKey, regValue, regData) {
            window.external.WriteMachineStringRegValue(regKey, regValue, regData);
            var lastHR = window.external.GetLastJSError();
            if (lastHR !== UNPContentWrapper.HRESULT.S_OK) {
                window.external.LogInfo(lastHR, "RegWrite String to HKLM\\" + regKey + " [" + regValue + "] = " + regData + " Failed with HRESULT = " + lastHR);
            }
        };
        RegistryHelpers.WriteUserString = function (regKey, regValue, regData) {
            window.external.WriteUserStringRegValue(regKey, regValue, regData);
            var lastHR = window.external.GetLastJSError();
            if (lastHR !== UNPContentWrapper.HRESULT.S_OK) {
                window.external.LogInfo(lastHR, "RegWrite String to HKCU\\" + regKey + " [" + regValue + "] = " + regData + " Failed with HRESULT = " + lastHR);
            }
        };
        RegistryHelpers.IncrementHKLMRegistryCounter = function (regKey, regValue) {
            return RegistryHelpers.IncrementRegistryCounter(true, regKey, regValue);
        };
        RegistryHelpers.IncrementHKCURegistryCounter = function (regKey, regValue) {
            return RegistryHelpers.IncrementRegistryCounter(false, regKey, regValue);
        };
        RegistryHelpers.GetContentLocalStateRegistryLocation = function (isHKLM) {
            var regKey;
            var campaignID = window.external.GetCampaignID();
            if (campaignID !== undefined && campaignID !== null) {
                if (isHKLM) {
                    regKey = RegistryHelpers.UNP_HKLM_REGISTRY_LOCALSTATE + UNPContentWrapper.CommonDefines.offlineFolderSeparator + campaignID + RegistryHelpers.UNP_REGISTRY_LOCALSTATE_CONTENT_FOLDER;
                }
                else {
                    regKey = RegistryHelpers.UNP_HKCU_REGISTRY_LOCALSTATE + UNPContentWrapper.CommonDefines.offlineFolderSeparator + campaignID + RegistryHelpers.UNP_REGISTRY_LOCALSTATE_CONTENT_FOLDER;
                }
            }
            return regKey;
        };
        RegistryHelpers.GetHKLMContentLocalStateRegistryLocation = function () {
            window.external.LogInfo(UNPContentWrapper.HRESULT.S_OK, RegistryHelpers.GetContentLocalStateRegistryLocation(true));
            return RegistryHelpers.GetContentLocalStateRegistryLocation(true);
        };
        RegistryHelpers.GetHKCUContentLocalStateRegistryLocation = function () {
            window.external.LogInfo(UNPContentWrapper.HRESULT.S_OK, RegistryHelpers.GetContentLocalStateRegistryLocation(false));
            return RegistryHelpers.GetContentLocalStateRegistryLocation(false);
        };
        RegistryHelpers.GetHKLMContentLocalStateButtonClickRegistryLocation = function () {
            return RegistryHelpers.GetHKLMContentLocalStateRegistryLocation() + RegistryHelpers.UNP_REGISTRY_LOCALSTATE_CONTENT_BUTTONCLICK;
        };
        RegistryHelpers.GetHKCUContentLocalStateButtonClickRegistryLocation = function () {
            return RegistryHelpers.GetHKCUContentLocalStateRegistryLocation() + RegistryHelpers.UNP_REGISTRY_LOCALSTATE_CONTENT_BUTTONCLICK;
        };
        RegistryHelpers.GetHKLMContentLocalStateSlideViewRegistryLocation = function () {
            return RegistryHelpers.GetHKLMContentLocalStateRegistryLocation() + RegistryHelpers.UNP_REGISTRY_LOCALSTATE_CONTENT_SLIDEVIEWS;
        };
        RegistryHelpers.GetHKCUContentLocalStateSlideViewRegistryLocation = function () {
            return RegistryHelpers.GetHKCUContentLocalStateRegistryLocation() + RegistryHelpers.UNP_REGISTRY_LOCALSTATE_CONTENT_SLIDEVIEWS;
        };
        RegistryHelpers.GetHKLMContentLocalStateABTestingSeedValuesRegistryLocation = function () {
            return RegistryHelpers.GetHKLMContentLocalStateRegistryLocation() + RegistryHelpers.UNP_REGISTRY_LOCALSTATE_CONTENT_AB_TESTING;
        };
        RegistryHelpers.GetHRESULTFromRegRead = function (RegReadReturnValue) {
            var returnHresult = window.external.GetLastJSError();
            if (RegReadReturnValue === undefined && returnHresult === UNPContentWrapper.HRESULT.S_OK) {
                returnHresult = UNPContentWrapper.HRESULT.E_FILE_NOT_FOUND;
            }
            return returnHresult;
        };
        RegistryHelpers.UNP_HKLM_REGISTRY_ROOT = "SOFTWARE\\Microsoft\\UNP";
        RegistryHelpers.UNP_HKCU_REGISTRY_ROOT = "SOFTWARE\\Microsoft\\UNP";
        RegistryHelpers.UNP_HKLM_REGISTRY_LOCALSTATE = RegistryHelpers.UNP_HKLM_REGISTRY_ROOT + "\\LocalState";
        RegistryHelpers.UNP_HKCU_REGISTRY_LOCALSTATE = RegistryHelpers.UNP_HKCU_REGISTRY_ROOT + "\\LocalState";
        RegistryHelpers.UNP_REGISTRY_LOCALSTATE_CONTENT_FOLDER = "\\Content";
        RegistryHelpers.UNP_REGISTRY_LOCALSTATE_CONTENT_BUTTONCLICK = "\\ClickHandlers";
        RegistryHelpers.UNP_REGISTRY_LOCALSTATE_CONTENT_SLIDEVIEWS = "\\SlideViews";
        RegistryHelpers.UNP_REGISTRY_LOCALSTATE_CONTENT_AB_TESTING = "\\ExperimentIds";
        RegistryHelpers.UNP_REGISTRY_LOCALSTATE_SESSION_REGVAL = "SessionCounter";
        return RegistryHelpers;
    })();
    UNPContentWrapper.RegistryHelpers = RegistryHelpers;
})(UNPContentWrapper || (UNPContentWrapper = {}));
var UNPContentWrapper;
(function (UNPContentWrapper) {
    var LanguageSelector = (function () {
        function LanguageSelector() {
        }
        LanguageSelector.ChooseContent = function () {
            var offlineLangLocale = UNPContentWrapper.CommonHelpers.CalculateOfflineLangLocaleFallback();
            var isUserOnline = UNPContentWrapper.CommonHelpers.IsUserOnline();
            var OnlineUXTypeSelectorURL = LanguageSelector.GetOnlineUXTypeSelectorURL();
            if (!isUserOnline || OnlineUXTypeSelectorURL === null || OnlineUXTypeSelectorURL === undefined) {
                LanguageSelector.NavigateToOfflineContent(offlineLangLocale);
            }
            else {
                $.ajax({
                    cache: true,
                    context: offlineLangLocale,
                    url: OnlineUXTypeSelectorURL,
                    type: "GET",
                    dataType: "script"
                }).done(function (data, textStatus, jqXHR) {
                    window.external.LogInfo(UNPContentWrapper.HRESULT.S_OK, "Script Loaded, Starting timer for falling back to offline content.");
                    var currentLangLocale = this;
                    setTimeout(function (currentLangLocale) {
                        window.external.LogInfo(UNPContentWrapper.HRESULT.S_OK, "Online content timeout. falling back to offline content.");
                        LanguageSelector.NavigateToOfflineContent(currentLangLocale);
                    }, 30000, currentLangLocale);
                }).fail(function (jqXHR, textStatus, errorThrown) {
                    window.external.LogInfo(UNPContentWrapper.HRESULT.S_OK, "Error returned from ajax, ErrorThrown = " + errorThrown + " Text Status = " + textStatus + " Falling back to offline content");
                    LanguageSelector.NavigateToOfflineContent(UNPContentWrapper.CommonHelpers.GetLangLocale());
                });
            }
        };
        LanguageSelector.NavigateToOfflineContent = function (langLocale) {
            var OfflineFolder;
            var offlineURL;
            OfflineFolder = window.external.GetCampaignContentDir();
            offlineURL = OfflineFolder + UNPContentWrapper.CommonDefines.urlFolderSeparator + langLocale + UNPContentWrapper.CommonDefines.urlFolderSeparator + UNPContentWrapper.CommonDefines.contentFileName;
            if (!window.external.CheckLocalFileExistence(offlineURL)) {
                window.external.CloseWindow(UNPContentWrapper.CloseReason.Error);
            }
            window.external.LogInfo(UNPContentWrapper.HRESULT.S_OK, "Display Language is: " + langLocale + ", Loading Localized Content From: " + offlineURL);
            window.location.assign(offlineURL);
        };
        LanguageSelector.GetOnlineUXTypeSelectorURL = function () {
            var metadata = UNPContentWrapper.CommonHelpers.GetOfflineMetadataJson();
            if (metadata !== null && metadata !== undefined) {
                return metadata.OnlineUXTypeSelectorURL;
            }
            return null;
        };
        return LanguageSelector;
    })();
    UNPContentWrapper.LanguageSelector = LanguageSelector;
    var OnlineLanguageSelector = (function () {
        function OnlineLanguageSelector() {
        }
        OnlineLanguageSelector.ChooseOnlineContent = function () {
            var LangLocale = UNPContentWrapper.CommonHelpers.GetLangLocale();
            OnlineLanguageSelector.NavigateToOnlineContent(LangLocale);
        };
        OnlineLanguageSelector.NavigateToOnlineContent = function (langLocale) {
            var OnlineURL = OnlineLanguageSelector.GetOnlineContentURLBase() + "/" + langLocale + "/" + OnlineLanguageSelector.GetOnlineContentURLSuffix();
            window.external.LogInfo(UNPContentWrapper.HRESULT.S_OK, "Attempting to navigate to: " + OnlineURL);
            $.ajax({
                cache: true,
                context: langLocale,
                url: OnlineURL,
                type: "HEAD",
                dataType: "html"
            })
                .done(function (data, textStatus, jqXHR) {
                window.external.LogInfo(UNPContentWrapper.HRESULT.S_OK, "Online Content found at " + OnlineLanguageSelector.GetOnlineContentURLBase() + "/" + this + "/" + OnlineLanguageSelector.GetOnlineContentURLSuffix() + " with data " + data + " and text status " + textStatus);
                window.external.Navigate(OnlineLanguageSelector.GetOnlineContentURLBase() + "/" + this + "/" + OnlineLanguageSelector.GetOnlineContentURLSuffix());
            })
                .fail(function (jqXHR, textStatus, errorThrown) {
                window.external.LogInfo(UNPContentWrapper.HRESULT.S_OK, "Error returned from ajax, ErrorThrown = " + errorThrown + " Text Status = " + textStatus + " readyState: " + jqXHR.readyState + " status: " + jqXHR.status + " responseText: " + jqXHR.responseText + " " + jqXHR.status + " " + jqXHR.statusText + " " + jqXHR.response);
                var currentLangLocale = this;
                window.external.LogInfo(UNPContentWrapper.HRESULT.S_OK, "No online Content found at " + OnlineLanguageSelector.GetOnlineContentURLBase() + "/" + currentLangLocale + "/" + OnlineLanguageSelector.GetOnlineContentURLSuffix() + " need to compare " + currentLangLocale + " with " + UNPContentWrapper.CommonDefines.languageDefault.toUpperCase());
                if (currentLangLocale.toUpperCase() === UNPContentWrapper.CommonDefines.languageDefault.toUpperCase()) {
                    window.external.LogInfo(UNPContentWrapper.HRESULT.S_OK, "No Content found at Default content location, falling back to offline ");
                    LanguageSelector.NavigateToOfflineContent(UNPContentWrapper.CommonHelpers.CalculateOfflineLangLocaleFallback());
                }
                else {
                    var newLang = UNPContentWrapper.CommonHelpers.GetLanguageFallback(this);
                    OnlineLanguageSelector.NavigateToOnlineContent(newLang);
                }
            });
        };
        OnlineLanguageSelector.GetOnlineContentURLBase = function () {
            var metadata = UNPContentWrapper.CommonHelpers.GetOfflineMetadataJson();
            if (metadata !== null && metadata !== undefined) {
                return metadata.OnlineContentBase;
            }
            return null;
        };
        OnlineLanguageSelector.GetOnlineContentURLSuffix = function () {
            var metadata = UNPContentWrapper.CommonHelpers.GetOfflineMetadataJson();
            if (metadata !== null && metadata !== undefined) {
                return metadata.OnlineContentSuffix;
            }
            return null;
        };
        return OnlineLanguageSelector;
    })();
    UNPContentWrapper.OnlineLanguageSelector = OnlineLanguageSelector;
})(UNPContentWrapper || (UNPContentWrapper = {}));
UNPContentWrapper.LanguageSelector.ChooseContent();
