FasdUAS 1.101.10   ��   ��    k             l     ��  ��    ^ X========================================================================================     � 	 	 � = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =   
  
 l     ��������  ��  ��        l     ��  ��    N H  $File: //depot/shuksan/build/scripts/xml rules/glue code.applescript $     �   �     $ F i l e :   / / d e p o t / s h u k s a n / b u i l d / s c r i p t s / x m l   r u l e s / g l u e   c o d e . a p p l e s c r i p t   $      l     ��������  ��  ��        l     ��  ��       Owner: Lin Xia     �         O w n e r :   L i n   X i a      l     ��������  ��  ��        l     ��  ��       $Author: lxia $     �   "     $ A u t h o r :   l x i a   $       l     ��������  ��  ��      ! " ! l     �� # $��   # L F  Copyright 2006-2008 Adobe Systems Incorporated. All rights reserved.    $ � % % �     C o p y r i g h t   2 0 0 6 - 2 0 0 8   A d o b e   S y s t e m s   I n c o r p o r a t e d .   A l l   r i g h t s   r e s e r v e d . "  & ' & l     �� ( )��   (        ) � * *      '  + , + l     �� - .��   - Z T  NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance     . � / / �     N O T I C E :     A d o b e   p e r m i t s   y o u   t o   u s e ,   m o d i f y ,   a n d   d i s t r i b u t e   t h i s   f i l e   i n   a c c o r d a n c e   ,  0 1 0 l     �� 2 3��   2 \ V  with the terms of the Adobe license agreement accompanying it.  If you have received    3 � 4 4 �     w i t h   t h e   t e r m s   o f   t h e   A d o b e   l i c e n s e   a g r e e m e n t   a c c o m p a n y i n g   i t .     I f   y o u   h a v e   r e c e i v e d 1  5 6 5 l     �� 7 8��   7 R L  this file from a source other than Adobe, then your use, modification, or     8 � 9 9 �     t h i s   f i l e   f r o m   a   s o u r c e   o t h e r   t h a n   A d o b e ,   t h e n   y o u r   u s e ,   m o d i f i c a t i o n ,   o r   6  : ; : l     �� < =��   < J D  distribution of it requires the prior written permission of Adobe.    = � > > �     d i s t r i b u t i o n   o f   i t   r e q u i r e s   t h e   p r i o r   w r i t t e n   p e r m i s s i o n   o f   A d o b e . ;  ? @ ? l     ��������  ��  ��   @  A B A l     �� C D��   C C =  DESCRIPTION: AppleScript glue code for XML Rules Processing    D � E E z     D E S C R I P T I O N :   A p p l e S c r i p t   g l u e   c o d e   f o r   X M L   R u l e s   P r o c e s s i n g B  F G F l     ��������  ��  ��   G  H I H l     �� J K��   J ^ X========================================================================================    K � L L � = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = I  M N M l     ��������  ��  ��   N  O P O l     �� Q R��   Q x r *****************************************************************************************************************    R � S S �   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * P  T U T l     �� V W��   V w q IF YOU EDIT THIS FILE, YOU MUST ALSO SAVE A COMPILED VERSION AS glue code.scpt IN THE SAME DIRECTORY AS THIS ONE    W � X X �   I F   Y O U   E D I T   T H I S   F I L E ,   Y O U   M U S T   A L S O   S A V E   A   C O M P I L E D   V E R S I O N   A S   g l u e   c o d e . s c p t   I N   T H E   S A M E   D I R E C T O R Y   A S   T H I S   O N E U  Y Z Y l     �� [ \��   [ C = THAT IS THE FILE THAT WILL REALLY BE INCLUDED WITH THE BUILD    \ � ] ] z   T H A T   I S   T H E   F I L E   T H A T   W I L L   R E A L L Y   B E   I N C L U D E D   W I T H   T H E   B U I L D Z  ^ _ ^ l     �� ` a��   ` x r *****************************************************************************************************************    a � b b �   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * _  c d c l     ��������  ��  ��   d  e f e i      g h g I      �� i���� *0 __makeruleprocessor __makeRuleProcessor i  j k j o      ���� 0 ruleset ruleSet k  l�� l o      ���� (0 prefixmappingtable prefixMappingTable��  ��   h k     P m m  n o n l     �� p q��   p 0 * Get the condition paths of all the rules.    q � r r T   G e t   t h e   c o n d i t i o n   p a t h s   o f   a l l   t h e   r u l e s . o  s t s r      u v u J     ����   v o      ���� 0 	patharray 	pathArray t  w x w l   ��������  ��  ��   x  y z y X    ! {�� | { r     } ~ } b      �  o    ���� 0 	patharray 	pathArray � l    ����� � n     � � � o    ���� 	0 xpath   � o    ���� 0 arule aRule��  ��   ~ o      ���� 0 	patharray 	pathArray�� 0 arule aRule | o    	���� 0 ruleset ruleSet z  � � � l  " "��������  ��  ��   �  � � � l  " "�� � ���   � @ : the following call can throw an exception, in which case     � � � � t   t h e   f o l l o w i n g   c a l l   c a n   t h r o w   a n   e x c e p t i o n ,   i n   w h i c h   c a s e   �  � � � l  " "�� � ���   �   no rules are processed      � � � � 2   n o   r u l e s   a r e   p r o c e s s e d     �  � � � Q   " C � � � � k   % 7 � �  � � � O   % 5 � � � r   ) 4 � � � I  ) 2�� � �
�� .corecrel****      � null � m   ) *��
�� 
cxrp � �� � �
�� 
Xrps � o   + ,���� 0 	patharray 	pathArray � �� ���
�� 
Xprm � o   - .���� (0 prefixmappingtable prefixMappingTable��   � o      ���� 0 myprocessor myProcessor � m   % & � ��                                                                                  InDn  alis    �  Nakiyami                   ��WH+   	kAdobe InDesign CS5.app                                          	4��2��        ����  	                Adobe InDesign CS5    �-�      �3     	k   s  ?Nakiyami:Applications:Adobe InDesign CS5:Adobe InDesign CS5.app   .  A d o b e   I n D e s i g n   C S 5 . a p p    N a k i y a m i  6Applications/Adobe InDesign CS5/Adobe InDesign CS5.app  / ��   �  ��� � l  6 6��������  ��  ��  ��   � R      �� ���
�� .ascrerr ****      � **** � o      ���� 0 anerror anError��   � R   ? C�� ���
�� .ascrerr ****      � **** � o   A B���� 0 anerror anError��   �  � � � l  D D��������  ��  ��   �  � � � h   D K�� ��� *0 ruleprocessorobject ruleProcessorObject � k       � �  � � � j     �� ��� 0 rule_set   � o     ���� 0 ruleset ruleSet �  ��� � j    �� ��� 0 rule_processor   � o    ���� 0 myprocessor myProcessor��   �  � � � l  L L��������  ��  ��   �  � � � L   L N � � o   L M���� *0 ruleprocessorobject ruleProcessorObject �  ��� � l  O O��������  ��  ��  ��   f  � � � l     ��������  ��  ��   �  � � � l     ��������  ��  ��   �  � � � l     ��������  ��  ��   �  � � � i     � � � I      �� ����� .0 __deleteruleprocessor __deleteRuleProcessor �  ��� � o      ���� 0 
rprocessor 
rProcessor��  ��   � k      � �  � � � l     ��������  ��  ��   �  � � � l     �� � ���   � ) # remove the XMLRuleProcessor object    � � � � F   r e m o v e   t h e   X M L R u l e P r o c e s s o r   o b j e c t �  � � � O      � � � I   �� ���
�� .CoRedelonull���     obj  � n     � � � o    ���� 0 rule_processor   � o    ���� 0 
rprocessor 
rProcessor��   � m      � ��                                                                                  InDn  alis    �  Nakiyami                   ��WH+   	kAdobe InDesign CS5.app                                          	4��2��        ����  	                Adobe InDesign CS5    �-�      �3     	k   s  ?Nakiyami:Applications:Adobe InDesign CS5:Adobe InDesign CS5.app   .  A d o b e   I n D e s i g n   C S 5 . a p p    N a k i y a m i  6Applications/Adobe InDesign CS5/Adobe InDesign CS5.app  / ��   �  ��� � l   ��������  ��  ��  ��   �  � � � l     ��������  ��  ��   �  � � � l     ��~�}�  �~  �}   �  � � � l     �| � ��|   � D > Process the rule set for the given element. Client code calls    � � � � |   P r o c e s s   t h e   r u l e   s e t   f o r   t h e   g i v e n   e l e m e n t .   C l i e n t   c o d e   c a l l s �  � � � l     �{ � ��{   � C = this handler to start things off. __processRuleSet calls the    � � � � z   t h i s   h a n d l e r   t o   s t a r t   t h i n g s   o f f .   _ _ p r o c e s s R u l e S e t   c a l l s   t h e �  � � � l     �z � ��z   � 5 / applyAction handler for each rule that matches    � � � � ^   a p p l y A c t i o n   h a n d l e r   f o r   e a c h   r u l e   t h a t   m a t c h e s �  � � � l     �y�x�w�y  �x  �w   �  � � � l     �v�u�t�v  �u  �t   �  � � � i     � � � I      �s ��r�s $0 __processruleset __processRuleSet �  � � � o      �q�q 0 root   �  � � � o      �p�p 0 ruleset ruleSet �  ��o � o      �n�n (0 prefixmappingtable prefixMappingTable�o  �r   � k     : � �  � � � l     �m�l�k�m  �l  �k   �  � � � r     	 � � � I     �j ��i�j *0 __makeruleprocessor __makeRuleProcessor �  � � � o    �h�h 0 ruleset ruleSet �  ��g � o    �f�f (0 prefixmappingtable prefixMappingTable�g  �i   � o      �e�e  0 mainrprocessor mainRProcessor �  �  � l  
 
�d�c�b�d  �c  �b     l  
 
�a�a   3 - if __processTree() fails with an exception,     � Z   i f   _ _ p r o c e s s T r e e ( )   f a i l s   w i t h   a n   e x c e p t i o n ,    l  
 
�`	�`   - ' delete ruleProcessor and throw anError   	 �

 N   d e l e t e   r u l e P r o c e s s o r   a n d   t h r o w   a n E r r o r  Q   
 8 O      k      I    �_�^�_ 0 __processtree __processTree  o    �]�] 0 root   �\ o    �[�[  0 mainrprocessor mainRProcessor�\  �^   �Z I    �Y�X�Y .0 __deleteruleprocessor __deleteRuleProcessor �W o    �V�V  0 mainrprocessor mainRProcessor�W  �X  �Z    f     R      �U�T
�U .ascrerr ****      � **** o      �S�S 0 anerror anError�T   k   ( 8  O   ( 3 !  I   , 2�R"�Q�R .0 __deleteruleprocessor __deleteRuleProcessor" #�P# o   - .�O�O  0 mainrprocessor mainRProcessor�P  �Q  !  f   ( ) $�N$ R   4 8�M%�L
�M .ascrerr ****      � ****% o   6 7�K�K 0 anerror anError�L  �N   &�J& l  9 9�I�H�G�I  �H  �G  �J   � '(' l     �F�E�D�F  �E  �D  ( )*) l     �C�B�A�C  �B  �A  * +,+ i    -.- I      �@/�?�@ 0 __processtree __processTree/ 010 o      �>�> 0 root  1 2�=2 o      �<�< 0 
rprocessor 
rProcessor�=  �?  . k     I33 454 l     �;�:�9�;  �:  �9  5 676 O     G898 k    F:: ;<; l   �8�7�6�8  �7  �6  < =>= r    	?@? n    ABA o    �5�5 0 rule_processor  B o    �4�4 0 
rprocessor 
rProcessor@ o      �3�3  0 rulesprocessor rulesProcessor> CDC r   
 EFE n   
 GHG o    �2�2 0 rule_set  H o   
 �1�1 0 
rprocessor 
rProcessorF o      �0�0 0 ruleset ruleSetD IJI l   �/�.�-�/  �.  �-  J K�,K O    FLML Q    ENOPN k    3QQ RSR r     TUT I   �+�*V
�+ .K2XLXrspcxrd        cxrp�*  V �)W�(
�) 
XselW o    �'�' 0 root  �(  U o      �&�& 0 	matchdata 	matchDataS XYX l  ! !�%�$�#�%  �$  �#  Y Z[Z O   ! -\]\ I   % ,�"^�!�" (0 __processmatchdata __processMatchData^ _`_ o   & '� �  0 	matchdata 	matchData` a�a o   ' (�� 0 
rprocessor 
rProcessor�  �!  ]  f   ! "[ bcb l  . .����  �  �  c d�d I  . 3���
� .K2XLXrepnull���     cxrp�  �  �  O R      �e�
� .ascrerr ****      � ****e o      �� 0 anerror anError�  P k   ; Eff ghg I  ; @���
� .K2XLXrepnull���     cxrp�  �  h i�i R   A E�j�
� .ascrerr ****      � ****j o   C D�� 0 anerror anError�  �  M o    ��  0 rulesprocessor rulesProcessor�,  9 m     kk�                                                                                  InDn  alis    �  Nakiyami                   ��WH+   	kAdobe InDesign CS5.app                                          	4��2��        ����  	                Adobe InDesign CS5    �-�      �3     	k   s  ?Nakiyami:Applications:Adobe InDesign CS5:Adobe InDesign CS5.app   .  A d o b e   I n D e s i g n   C S 5 . a p p    N a k i y a m i  6Applications/Adobe InDesign CS5/Adobe InDesign CS5.app  / ��  7 l�l l  H H�
�	��
  �	  �  �  , mnm l     ����  �  �  n opo l     ����  �  �  p qrq l     �� ���  �   ��  r sts l     ��uv��  u I C Process the children of the current element. Normally the children   v �ww �   P r o c e s s   t h e   c h i l d r e n   o f   t h e   c u r r e n t   e l e m e n t .   N o r m a l l y   t h e   c h i l d r e nt xyx l     ��z{��  z L F of the element are traversed after the applyAction handler is called.   { �|| �   o f   t h e   e l e m e n t   a r e   t r a v e r s e d   a f t e r   t h e   a p p l y A c t i o n   h a n d l e r   i s   c a l l e d .y }~} l     �����   G A If a client wants to process the children as part of the handler   � ��� �   I f   a   c l i e n t   w a n t s   t o   p r o c e s s   t h e   c h i l d r e n   a s   p a r t   o f   t h e   h a n d l e r~ ��� l     ������  � L F then the implementation of applyAction should call __processChildren.   � ��� �   t h e n   t h e   i m p l e m e n t a t i o n   o f   a p p l y A c t i o n   s h o u l d   c a l l   _ _ p r o c e s s C h i l d r e n .� ��� l     ��������  ��  ��  � ��� l     ��������  ��  ��  � ��� i    ��� I      ������� &0 __processchildren __processChildren� ���� o      ���� 0 
rprocessor 
rProcessor��  ��  � k     '�� ��� l     ��������  ��  ��  � ��� r     ��� n     ��� o    ���� 0 rule_processor  � o     ���� 0 
rprocessor 
rProcessor� o      ����  0 rulesprocessor rulesProcessor� ��� r    ��� n    	��� o    	���� 0 rule_set  � o    ���� 0 
rprocessor 
rProcessor� o      ���� 0 ruleset ruleSet� ��� l   ��������  ��  ��  � ��� O    ��� O    ��� r    ��� I   ������
�� .K2XLXrsscxrd        cxrp��  ��  � o      ���� 0 	matchdata 	matchData� o    ����  0 rulesprocessor rulesProcessor� m    ���                                                                                  InDn  alis    �  Nakiyami                   ��WH+   	kAdobe InDesign CS5.app                                          	4��2��        ����  	                Adobe InDesign CS5    �-�      �3     	k   s  ?Nakiyami:Applications:Adobe InDesign CS5:Adobe InDesign CS5.app   .  A d o b e   I n D e s i g n   C S 5 . a p p    N a k i y a m i  6Applications/Adobe InDesign CS5/Adobe InDesign CS5.app  / ��  � ��� l   ��������  ��  ��  � ��� I    %������� (0 __processmatchdata __processMatchData� ��� o     ���� 0 	matchdata 	matchData� ���� o     !���� 0 
rprocessor 
rProcessor��  ��  � ���� l  & &��������  ��  ��  ��  � ��� l     ��������  ��  ��  � ��� l     ��������  ��  ��  � ��� l     ������  � R L This tells the rule processor to skip the children for the current element.   � ��� �   T h i s   t e l l s   t h e   r u l e   p r o c e s s o r   t o   s k i p   t h e   c h i l d r e n   f o r   t h e   c u r r e n t   e l e m e n t .� ��� l     ��������  ��  ��  � ��� l     ��������  ��  ��  � ��� i    ��� I      �������  0 __skipchildren __skipChildren� ���� o      ���� 0 
rprocessor 
rProcessor��  ��  � k     �� ��� l     ��������  ��  ��  � ��� r     ��� n     ��� o    ���� 0 rule_processor  � o     ���� 0 
rprocessor 
rProcessor� o      ����  0 rulesprocessor rulesProcessor� ��� O    ��� O   
 ��� I   ������
�� .K2XLXrscnull���     cxrp��  ��  � o   
 ����  0 rulesprocessor rulesProcessor� m    ���                                                                                  InDn  alis    �  Nakiyami                   ��WH+   	kAdobe InDesign CS5.app                                          	4��2��        ����  	                Adobe InDesign CS5    �-�      �3     	k   s  ?Nakiyami:Applications:Adobe InDesign CS5:Adobe InDesign CS5.app   .  A d o b e   I n D e s i g n   C S 5 . a p p    N a k i y a m i  6Applications/Adobe InDesign CS5/Adobe InDesign CS5.app  / ��  � ���� l   ��������  ��  ��  ��  � ��� l     ��������  ��  ��  � ��� l     ��������  ��  ��  � ��� i    ��� I      ������� (0 __processmatchdata __processMatchData� ��� o      ���� 0 	matchdata 	matchData� ���� o      ���� 0 
rprocessor 
rProcessor��  ��  � k     ��� ��� l     ��������  ��  ��  � ��� O     ���� k    ��� ��� r    	��� n    ��� o    ���� 0 rule_processor  � o    ���� 0 
rprocessor 
rProcessor� o      ����  0 rulesprocessor rulesProcessor� ��� r   
 ��� n   
 ��� o    ���� 0 rule_set  � o   
 ���� 0 
rprocessor 
rProcessor� o      ���� 0 ruleset ruleSet� ��� l   ��������  ��  ��  � ���� V    ���� k    ��� ��� r       e     n     1    ��
�� 
Xelm o    ���� 0 	matchdata 	matchData o      ���� 0 
xmlelement 
xmlElement�  r    % e    #		 n    #

 1     "��
�� 
pxrs o     ���� 0 	matchdata 	matchData o      ���� 0 
matchrules 
matchRules  r   & ) m   & '��
�� boovtrue o      ���� &0 applymatchedrules applyMatchedRules  l  * *��������  ��  ��    X   * ��� k   : �  Z   : G���� e   : ? =  : ? n   : = 1   ; =��
�� 
pXrh o   : ;����  0 rulesprocessor rulesProcessor m   = >��
�� boovtrue  S   B C��  ��    !  l  H H��������  ��  ��  ! "#" Q   H v$%&$ k   K _'' ()( l  K K��������  ��  ��  ) *+* l  K K��,-��  , < 6 AppleScript is one based but the return from InDesign   - �.. l   A p p l e S c r i p t   i s   o n e   b a s e d   b u t   t h e   r e t u r n   f r o m   I n D e s i g n+ /0/ l  K K��12��  1   is zero based   2 �33    i s   z e r o   b a s e d0 454 l  K K��������  ��  ��  5 6��6 O   K _787 r   T ^9:9 H   T \;; I   T [�<�~� 	0 apply  < =>= o   U V�}�} 0 
xmlelement 
xmlElement> ?�|? o   V W�{�{ 0 
rprocessor 
rProcessor�|  �~  : o      �z�z &0 applymatchedrules applyMatchedRules8 n   K Q@A@ 4   L Q�yB
�y 
cobjB l  M PC�x�wC [   M PDED o   M N�v�v 0 arule aRuleE m   N O�u�u �x  �w  A o   K L�t�t 0 ruleset ruleSet��  % R      �sF�r
�s .ascrerr ****      � ****F o      �q�q 0 anerror anError�r  & k   g vGG HIH O   g qJKJ I  k p�p�o�n
�p .K2XLXrhtnull���     cxrp�o  �n  K o   g h�m�m  0 rulesprocessor rulesProcessorI LML l  r r�l�k�j�l  �k  �j  M N�iN R   r v�hO�g
�h .ascrerr ****      � ****O o   t u�f�f 0 anerror anError�g  �i  # PQP l  w w�e�d�c�e  �d  �c  Q RSR l  w w�bTU�b  T N H Continue to apply the next rule if the apply function returns false.      U �VV �   C o n t i n u e   t o   a p p l y   t h e   n e x t   r u l e   i f   t h e   a p p l y   f u n c t i o n   r e t u r n s   f a l s e .      S W�aW Z   w �XY�`�_X =  w zZ[Z o   w x�^�^ &0 applymatchedrules applyMatchedRules[ m   x y�]
�] boovfalsY  S   } ~�`  �_  �a  �� 0 arule aRule o   - .�\�\ 0 
matchrules 
matchRules \]\ l  � ��[�Z�Y�[  �Z  �Y  ] ^�X^ r   � �_`_ I  � ��Wa�V
�W .K2XLXrfncxrd        cxrpa o   � ��U�U  0 rulesprocessor rulesProcessor�V  ` o      �T�T 0 	matchdata 	matchData�X  � >   bcb o    �S�S 0 	matchdata 	matchDatac m    �R
�R senmnada��  � m     dd�                                                                                  InDn  alis    �  Nakiyami                   ��WH+   	kAdobe InDesign CS5.app                                          	4��2��        ����  	                Adobe InDesign CS5    �-�      �3     	k   s  ?Nakiyami:Applications:Adobe InDesign CS5:Adobe InDesign CS5.app   .  A d o b e   I n D e s i g n   C S 5 . a p p    N a k i y a m i  6Applications/Adobe InDesign CS5/Adobe InDesign CS5.app  / ��  � e�Qe l  � ��P�O�N�P  �O  �N  �Q  � fgf l     �M�L�K�M  �L  �K  g h�Jh l     �I�H�G�I  �H  �G  �J       	�Fijklmnop�F  i �E�D�C�B�A�@�?�E *0 __makeruleprocessor __makeRuleProcessor�D .0 __deleteruleprocessor __deleteRuleProcessor�C $0 __processruleset __processRuleSet�B 0 __processtree __processTree�A &0 __processchildren __processChildren�@  0 __skipchildren __skipChildren�? (0 __processmatchdata __processMatchDataj �> h�=�<qr�;�> *0 __makeruleprocessor __makeRuleProcessor�= �:s�: s  �9�8�9 0 ruleset ruleSet�8 (0 prefixmappingtable prefixMappingTable�<  q �7�6�5�4�3�2�1�7 0 ruleset ruleSet�6 (0 prefixmappingtable prefixMappingTable�5 0 	patharray 	pathArray�4 0 arule aRule�3 0 myprocessor myProcessor�2 0 anerror anError�1 *0 ruleprocessorobject ruleProcessorObjectr �0�/�.�- ��,�+�*�)�(�'�&�% �t
�0 
kocl
�/ 
cobj
�. .corecnte****       ****�- 	0 xpath  
�, 
cxrp
�+ 
Xrps
�* 
Xprm�) 
�( .corecrel****      � null�' 0 anerror anError�&  �% *0 ruleprocessorobject ruleProcessorObjectt �$u�#�"vw�!
�$ .ascrinit****      � ****u k     xx  �yy  �� �   �#  �"  v ��� 0 rule_set  � 0 rule_processor  w ��� 0 rule_set  � 0 rule_processor  �! b   �Ob  ��; QjvE�O �[��l kh ���,%E�[OY��O � ���� 	E�UOPW X 
 )j�O��K S�O�OPk � ���z{�� .0 __deleteruleprocessor __deleteRuleProcessor� �|� |  �� 0 
rprocessor 
rProcessor�  z �� 0 
rprocessor 
rProcessor{  ���� 0 rule_processor  
� .CoRedelonull���     obj � � 	��,j UOPl � ���}~�� $0 __processruleset __processRuleSet� ��   ���� 0 root  � 0 ruleset ruleSet� (0 prefixmappingtable prefixMappingTable�  } �
�	����
 0 root  �	 0 ruleset ruleSet� (0 prefixmappingtable prefixMappingTable�  0 mainrprocessor mainRProcessor� 0 anerror anError~ ������ *0 __makeruleprocessor __makeRuleProcessor� 0 __processtree __processTree� .0 __deleteruleprocessor __deleteRuleProcessor� 0 anerror anError�  � ;*��l+  E�O ) *��l+ O*�k+ UW X  ) *�k+ UO)j�OPm � .���������  0 __processtree __processTree�� ����� �  ������ 0 root  �� 0 
rprocessor 
rProcessor��  � �������������� 0 root  �� 0 
rprocessor 
rProcessor��  0 rulesprocessor rulesProcessor�� 0 ruleset ruleSet�� 0 	matchdata 	matchData�� 0 anerror anError� 	k������������������ 0 rule_processor  �� 0 rule_set  
�� 
Xsel
�� .K2XLXrspcxrd        cxrp�� (0 __processmatchdata __processMatchData
�� .K2XLXrepnull���     cxrp�� 0 anerror anError��  �� J� D��,E�O��,E�O� 3 !*�l E�O) 	*��l+ UO*j W X  *j O)j�UUOPn ������������� &0 __processchildren __processChildren�� ����� �  ���� 0 
rprocessor 
rProcessor��  � ���������� 0 
rprocessor 
rProcessor��  0 rulesprocessor rulesProcessor�� 0 ruleset ruleSet�� 0 	matchdata 	matchData� ����������� 0 rule_processor  �� 0 rule_set  
�� .K2XLXrsscxrd        cxrp�� (0 __processmatchdata __processMatchData�� (��,E�O��,E�O� � 	*j E�UUO*��l+ OPo �������������  0 __skipchildren __skipChildren�� ����� �  ���� 0 
rprocessor 
rProcessor��  � ������ 0 
rprocessor 
rProcessor��  0 rulesprocessor rulesProcessor� ������� 0 rule_processor  
�� .K2XLXrscnull���     cxrp�� ��,E�O� � *j UUOPp ������������� (0 __processmatchdata __processMatchData�� ����� �  ������ 0 	matchdata 	matchData�� 0 
rprocessor 
rProcessor��  � 	�������������������� 0 	matchdata 	matchData�� 0 
rprocessor 
rProcessor��  0 rulesprocessor rulesProcessor�� 0 ruleset ruleSet�� 0 
xmlelement 
xmlElement�� 0 
matchrules 
matchRules�� &0 applymatchedrules applyMatchedRules�� 0 arule aRule�� 0 anerror anError� d������������������������������ 0 rule_processor  �� 0 rule_set  
�� senmnada
�� 
Xelm
�� 
pxrs
�� 
kocl
�� 
cobj
�� .corecnte****       ****
�� 
pXrh�� 	0 apply  �� 0 anerror anError��  
�� .K2XLXrhtnull���     cxrp
�� .K2XLXrfncxrd        cxrp�� �� ���,E�O��,E�O �h����,EE�O��,EE�OeE�O \�[��l kh ��,e  Y hO ��k/ *��l+ 
E�UW X  � *j UO)j�O�f  Y h[OY��O�j E�[OY��UOP ascr  ��ޭ