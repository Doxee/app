(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a055d4c6"],{"1f1b":function(a,n,i){"use strict";i.r(n);var e=function(){var a=this,n=a.$createElement,i=a._self._c||n;return i("v-simple-select",{attrs:{placeholder:a.$t("interfaces-language-select_language"),value:a.value},on:{input:function(n){return a.$emit("input",n)}}},a._l(a.languages,function(n,e){return i("option",{key:e,domProps:{value:e}},[a._v("\n    "+a._s(n)+"\n  ")])}),0)},r=[],s=i("8db2"),l=i.n(s),t=i("c026"),o={mixins:[l.a],computed:{languages:function(){return this.options.limit?this.$i18n.availableLanguages:t}}},u=o,h=i("2877"),c=Object(h["a"])(u,e,r,!1,null,"76b09b3a",null);n["default"]=c.exports},"8db2":function(a,n){a.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}}},c026:function(a){a.exports={af:"Afrikaans","af-ZA":"Afrikaans (South Africa)",sq:"Albanian","sq-AL":"Albanian (Albania)",ar:"Arabic","ar-DZ":"Arabic (Algeria)","ar-BH":"Arabic (Bahrain)","ar-EG":"Arabic (Egypt)","ar-IQ":"Arabic (Iraq)","ar-JO":"Arabic (Jordan)","ar-KW":"Arabic (Kuwait)","ar-LB":"Arabic (Lebanon)","ar-LY":"Arabic (Libya)","ar-MA":"Arabic (Morocco)","ar-OM":"Arabic (Oman)","ar-QA":"Arabic (Qatar)","ar-SA":"Arabic (Saudi Arabia)","ar-SY":"Arabic (Syria)","ar-TN":"Arabic (Tunisia)","ar-AE":"Arabic (U.A.E.)","ar-YE":"Arabic (Yemen)","hy-AM":"Armenian (Armenia)",hy:"Armenian","az-AZ":"Azeri (Cyrillic) (Azerbaijan)",az:"Azeri (Latin)",eu:"Basque","eu-ES":"Basque (Spain)",be:"Belarusian","be-BY":"Belarusian (Belarus)","bs-BA":"Bosnian (Bosnia and Herzegovina)",bg:"Bulgarian","bg-BG":"Bulgarian (Bulgaria)",ca:"Catalan","ca-ES":"Catalan (Spain)",zh:"Chinese","zh-HK":"Chinese (Hong Kong)","zh-MO":"Chinese (Macau)","zh-CN":"Chinese (S)","zh-SG":"Chinese (Singapore)","zh-TW":"Chinese (T)",hr:"Croatian","hr-BA":"Croatian (Bosnia and Herzegovina)","hr-HR":"Croatian (Croatia)",cs:"Czech","cs-CZ":"Czech (Czech Republic)",da:"Danish","da-DK":"Danish (Denmark)",dv:"Divehi","dv-MV":"Divehi (Maldives)",nl:"Dutch","nl-BE":"Dutch (Belgium)","nl-NL":"Dutch (Netherlands)",en:"English","en-AU":"English (Australia)","en-BZ":"English (Belize)","en-CA":"English (Canada)","en-CB":"English (Caribbean)","en-IE":"English (Ireland)","en-JM":"English (Jamaica)","en-NZ":"English (New Zealand)","en-PH":"English (Republic of the Philippines)","en-ZA":"English (South Africa)","en-TT":"English (Trinidad and Tobago)","en-GB":"English (United Kingdom)","en-US":"English (United States)","en-ZW":"English (Zimbabwe)",eo:"Esperanto",et:"Estonian","et-EE":"Estonian (Estonia)",fo:"Faroese","fo-FO":"Faroese (Faroe Islands)",fa:"Farsi","fa-IR":"Farsi (Iran)",fi:"Finnish","fi-FI":"Finnish (Finland)",fr:"French","fr-BE":"French (Belgium)","fr-CA":"French (Canada)","fr-FR":"French (France)","fr-LU":"French (Luxembourg)","fr-MC":"French (Principality of Monaco)","fr-CH":"French (Switzerland)",mk:"FYRO Macedonian","mk-MK":"FYRO Macedonian (Former Yugoslav Republic of Macedonia)",gl:"Galician","gl-ES":"Galician (Spain)",ka:"Georgian","ka-GE":"Georgian (Georgia)",de:"German","de-AT":"German (Austria)","de-DE":"German (Germany)","de-LI":"German (Liechtenstein)","de-LU":"German (Luxembourg)","de-CH":"German (Switzerland)",el:"Greek","el-GR":"Greek (Greece)",gu:"Gujarati","gu-IN":"Gujarati (India)",he:"Hebrew","he-IL":"Hebrew (Israel)",hi:"Hindi","hi-IN":"Hindi (India)",hu:"Hungarian","hu-HU":"Hungarian (Hungary)",is:"Icelandic","is-IS":"Icelandic (Iceland)",id:"Indonesian","id-ID":"Indonesian (Indonesia)",it:"Italian","it-IT":"Italian (Italy)","it-CH":"Italian (Switzerland)",ja:"Japanese","ja-JP":"Japanese (Japan)",kn:"Kannada","kn-IN":"Kannada (India)",kk:"Kazakh","kk-KZ":"Kazakh (Kazakhstan)",kok:"Konkani","kok-IN":"Konkani (India)",ko:"Korean","ko-KR":"Korean (Korea)",ky:"Kyrgyz","ky-KG":"Kyrgyz (Kyrgyzstan)",lv:"Latvian","lv-LV":"Latvian (Latvia)",lt:"Lithuanian","lt-LT":"Lithuanian (Lithuania)",ms:"Malay","ms-BN":"Malay (Brunei Darussalam)","ms-MY":"Malay (Malaysia)",mt:"Maltese","mt-MT":"Maltese (Malta)",mi:"Maori","mi-NZ":"Maori (New Zealand)",mr:"Marathi","mr-IN":"Marathi (India)",mn:"Mongolian","mn-MN":"Mongolian (Mongolia)",ns:"Northern Sotho","ns-ZA":"Northern Sotho (South Africa)",nb:"Norwegian (Bokm?l)","nb-NO":"Norwegian (Bokm?l) (Norway)","nn-NO":"Norwegian (Nynorsk) (Norway)",ps:"Pashto","ps-AR":"Pashto (Afghanistan)",pl:"Polish","pl-PL":"Polish (Poland)",pt:"Portuguese","pt-BR":"Portuguese (Brazil)","pt-PT":"Portuguese (Portugal)",pa:"Punjabi","pa-IN":"Punjabi (India)",qu:"Quechua","qu-BO":"Quechua (Bolivia)","qu-EC":"Quechua (Ecuador)","qu-PE":"Quechua (Peru)",ro:"Romanian","ro-RO":"Romanian (Romania)",ru:"Russian","ru-RU":"Russian (Russia)",se:"Sami (Northern)","se-FI":"Sami (Inari) (Finland)","se-NO":"Sami (Southern) (Norway)","se-SE":"Sami (Southern) (Sweden)",sa:"Sanskrit","sa-IN":"Sanskrit (India)","sr-BA":"Serbian (Cyrillic) (Bosnia and Herzegovina)","sr-SP":"Serbian (Cyrillic) (Serbia and Montenegro)",sk:"Slovak","sk-SK":"Slovak (Slovakia)",sl:"Slovenian","sl-SI":"Slovenian (Slovenia)",es:"Spanish","es-AR":"Spanish (Argentina)","es-BO":"Spanish (Bolivia)","es-CL":"Spanish (Chile)","es-CO":"Spanish (Colombia)","es-CR":"Spanish (Costa Rica)","es-DO":"Spanish (Dominican Republic)","es-EC":"Spanish (Ecuador)","es-SV":"Spanish (El Salvador)","es-GT":"Spanish (Guatemala)","es-HN":"Spanish (Honduras)","es-MX":"Spanish (Mexico)","es-NI":"Spanish (Nicaragua)","es-PA":"Spanish (Panama)","es-PY":"Spanish (Paraguay)","es-PE":"Spanish (Peru)","es-PR":"Spanish (Puerto Rico)","es-ES":"Spanish (Spain)","es-UY":"Spanish (Uruguay)","es-VE":"Spanish (Venezuela)",sw:"Swahili","sw-KE":"Swahili (Kenya)",sv:"Swedish","sv-FI":"Swedish (Finland)","sv-SE":"Swedish (Sweden)",syr:"Syriac","syr-SY":"Syriac (Syria)",tl:"Tagalog","tl-PH":"Tagalog (Philippines)",ta:"Tamil","ta-IN":"Tamil (India)",tt:"Tatar","tt-RU":"Tatar (Russia)",te:"Telugu","te-IN":"Telugu (India)",th:"Thai","th-TH":"Thai (Thailand)",ts:"Tsonga",tn:"Tswana","tn-ZA":"Tswana (South Africa)",tr:"Turkish","tr-TR":"Turkish (Turkey)",uk:"Ukrainian","uk-UA":"Ukrainian (Ukraine)",ur:"Urdu","ur-PK":"Urdu (Islamic Republic of Pakistan)",uz:"Uzbek (Latin)","uz-UZ":"Uzbek (Cyrillic) (Uzbekistan)",vi:"Vietnamese","vi-VN":"Vietnamese (Viet Nam)",cy:"Welsh","cy-GB":"Welsh (United Kingdom)",xh:"Xhosa","xh-ZA":"Xhosa (South Africa)",zu:"Zulu","zu-ZA":"Zulu (South Africa)"}}}]);
//# sourceMappingURL=chunk-a055d4c6.434862d9.js.map