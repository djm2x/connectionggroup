var __generator=this&&this.__generator||function(e,t){var n,i,o,r,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(r){return function(l){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,i=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){s.label=r[1];break}if(6===r[0]&&s.label<o[1]){s.label=o[1],o=r;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(r);break}o[2]&&s.ops.pop(),s.trys.pop();continue}r=t.call(e,s)}catch(l){r=[6,l],i=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,l])}}},__values=this&&this.__values||function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}};(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"3VwI":function(e,t,n){"use strict";var i=n("8Y7J"),o=n("6UMx"),r=n("Q+lL"),s=n("Xd0L"),l=n("SVse"),a=n("mrSG"),u=function(){function e(e,t,n){this.bottomSheetRef=e,this.data=t,this.url=n,this.list=[],this.folder=""}return e.prototype.ngOnInit=function(){var e=this.data.fileName.split(";");e.pop(),this.folder=this.data.folder,this.list=e},e.prototype.openLink=function(e){return a.a(this,void 0,void 0,(function(){return __generator(this,(function(t){return window.open(this.url+"/"+this.folder+"/"+e),[2]}))}))},e}(),c=n("lwm9");n.d(t,"a",(function(){return m}));var h=i.qb({encapsulation:0,styles:[[""]],data:{}});function d(e){return i.Ob(0,[(e()(),i.sb(0,0,null,null,7,"a",[["class","mat-list-item"],["mat-list-item",""]],[[2,"mat-list-item-avatar",null],[2,"mat-list-item-with-avatar",null]],[[null,"click"]],(function(e,t,n){var i=!0;return"click"===t&&(i=!1!==e.component.openLink(e.parent.context.$implicit)&&i),i}),o.c,o.a)),i.rb(1,1228800,null,3,r.b,[i.k,i.h,[2,r.e],[2,r.a]],null,null),i.Kb(603979776,1,{_lines:1}),i.Kb(603979776,2,{_avatar:0}),i.Kb(603979776,3,{_icon:0}),(e()(),i.sb(5,0,null,1,2,"span",[["class","mat-line"],["mat-line",""]],null,null,null,null,null)),i.rb(6,16384,[[1,4]],0,s.o,[],null,null),(e()(),i.Mb(7,null,["- ",""]))],null,(function(e,t){e(t,0,0,i.Eb(t,1)._avatar||i.Eb(t,1)._icon,i.Eb(t,1)._avatar||i.Eb(t,1)._icon);var n=t.parent.context.$implicit.substring(14);e(t,7,0,n)}))}function p(e){return i.Ob(0,[(e()(),i.sb(0,0,null,null,2,"div",[],null,null,null,null,null)),(e()(),i.hb(16777216,null,null,1,null,d)),i.rb(2,16384,null,0,l.l,[i.O,i.L],{ngIf:[0,"ngIf"]},null)],(function(e,t){e(t,2,0,""!==t.context.$implicit)}),null)}function f(e){return i.Ob(0,[(e()(),i.sb(0,0,null,null,3,"mat-nav-list",[["class","mat-nav-list mat-list-base"],["role","navigation"]],null,null,null,o.d,o.b)),i.rb(1,704512,null,0,r.e,[],null,null),(e()(),i.hb(16777216,null,0,1,null,p)),i.rb(3,278528,null,0,l.k,[i.O,i.L,i.r],{ngForOf:[0,"ngForOf"]},null)],(function(e,t){e(t,3,0,t.component.list)}),null)}var m=i.ob("app-download-sheet",u,(function(e){return i.Ob(0,[(e()(),i.sb(0,0,null,null,1,"app-download-sheet",[],null,null,null,f,h)),i.rb(1,114688,null,0,u,[c.e,c.a,"BASE_URL"],null,null)],(function(e,t){e(t,1,0)}),null)}),{},{},[])},"5WMv":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("mrSG"),o=n("XNiG"),r=function(){function e(e,t){this.filesService=e,this.url=t,this.listOfNames=[],this.imagesToShow=[],this.listToDelete=[],this.files=[],this.nameBtn="",this.folderToSaveInServer="folder",this.multiple=!1,this.oneImage="assets/404.jpg",this.Images=[],this.propertyOfParent=new o.a,this.eventSubmitToParent=new o.a,this.eventSubmitFromParent=new o.a}return e.prototype.ngOnInit=function(){var e=this;this.propertyOfParent.subscribe((function(t){var n=t?t.split(";"):[];if(n.pop(),e.listOfNames=n,e.listToDelete=[],e.multiple)n.forEach((function(t,n){var i=t;if(null!==i&&i.startsWith("http"))e.Images[n]={name:i,image:i};else if(i){var o=e.url+"/"+e.folderToSaveInServer.replace("_","/")+"/"+i;e.Images[n]={name:o,image:o}}else e.Images[n]={name:"assets/404.jpg",image:"assets/404.jpg"}}));else{var i=0!==n.length?n[0]:null;e.oneImage=null!==i&&i.startsWith("http")?i:i?e.url+"/"+e.folderToSaveInServer+"/"+i:"assets/404.jpg"}})),this.eventSubmitFromParent.subscribe((function(t){return i.a(e,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return[4,this.submit(t)];case 1:return e.sent(),[2]}}))}))}))},e.prototype.upload=function(e){var t=this;if(console.log(e),this.multiple)for(var n=0;n<e.length;n++){var i=e.item(n);this.listOfNames.push(this.setFileName(i)),this.sendPropertyOfParent(),this.files.push(i),this.files.forEach((function(e,n){var i=new FileReader;i.onload=function(){-1===t.Images.findIndex((function(n){return t.setFileName(e).includes(n.name)}))&&t.Images.push({name:t.setFileName(e),image:i.result.toString()})},i.readAsDataURL(e)}))}else{i=e.item(0);this.listOfNames=[],this.listOfNames.push(this.setFileName(i)),this.sendPropertyOfParent(),this.files=[],this.files.push(i),this.handleFileInput(i)}},e.prototype.fileToImageFrom=function(){},e.prototype.handleFileInput=function(e){var t=this,n=new FileReader;n.onload=function(){return t.oneImage=n.result.toString()},n.readAsDataURL(e)},e.prototype.imgError=function(e){e.src="assets/404.jpg"},e.prototype.setIcon=function(e){var t=e.lastIndexOf("."),n=e.substring(t+1);return"pdf"===n||"pdf;"===n?"assets/svg/pdf.svg":"assets/svg/word.svg"},e.prototype.removeFromImages=function(e){var t=this.Images.findIndex((function(t){return e.includes(t.name)}));this.Images.splice(t,1);var n=this.listOfNames.findIndex((function(t){return e.includes(t)}));this.listToDelete.push(this.listOfNames[n]),-1!==n&&(this.listOfNames.splice(n,1),this.sendPropertyOfParent());var i=e.indexOf("_"),o=e.substring(i);-1!==this.files.findIndex((function(e){return e.name===o}))&&this.files.splice(n,1)},e.prototype.remove=function(e){var t=this.listOfNames.findIndex((function(t){return e.includes(t)}));this.listToDelete.push(this.listOfNames[t]),-1!==t&&(this.listOfNames.splice(t,1),this.sendPropertyOfParent());var n=e.indexOf("_"),i=e.substring(n);-1!==this.files.findIndex((function(e){return e.name===i}))&&this.files.splice(t,1),this.oneImage="assets/404.jpg"},e.prototype.openInput=function(e){e.click()},e.prototype.sendPropertyOfParent=function(){var e="";this.listOfNames.forEach((function(t){e+=t+";"})),this.eventSubmitToParent.next(e)},e.prototype.submit=function(e){return i.a(this,void 0,void 0,(function(){var t,n,i,o=this;return __generator(this,(function(r){switch(r.label){case 0:return t=new FormData,this.files.forEach((function(e,n){t.append("file"+n,e,o.setFileName(e))})),t.append("length",""+this.files.length),e.id&&!this.folderToSaveInServer.includes("_")&&(this.folderToSaveInServer=this.folderToSaveInServer+"_"+e.id),0===this.listToDelete.length?[3,2]:[4,this.filesService.deleteFiles(this.listToDelete,this.folderToSaveInServer).toPromise()];case 1:n=r.sent(),console.log("Deleted files =>"),console.log(n),r.label=2;case 2:return t&&0!==this.files.length?[4,this.filesService.uploadFiles(t,this.folderToSaveInServer).toPromise()]:[3,4];case 3:i=r.sent(),console.log("Added files =>"),console.log(i),r.label=4;case 4:return[2]}}))}))},e.prototype.setFileName=function(e){return e.lastModified+"_"+e.name},e}()},"Dau+":function(e,t,n){"use strict";var i=n("8Y7J"),o=n("bujt"),r=n("Fwaw"),s=n("5GAg"),l=n("omvX"),a=n("Mr+X"),u=n("Gi4r"),c=n("SVse");n("5WMv"),n("WTxg"),n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return m}));var h=i.qb({encapsulation:0,styles:[["img[_ngcontent-%COMP%]{height:20px}"]],data:{}});function d(e){return i.Ob(0,[(e()(),i.sb(0,0,null,null,6,"div",[["style","font-size: .7em;margin: 0;"]],null,null,null,null,null)),(e()(),i.sb(1,0,[["img",1]],null,0,"img",[["style","width: 70px; height: 70px;"]],[[8,"src",4]],[[null,"error"]],(function(e,t,n){var o=!0;return"error"===t&&(o=!1!==e.component.imgError(i.Eb(e,1))&&o),o}),null,null)),(e()(),i.sb(2,0,null,null,4,"button",[["color","warn"],["mat-icon-button",""],["type","button"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(e,t,n){var i=!0;return"click"===t&&(i=!1!==e.component.removeFromImages(e.context.$implicit.name)&&i),i}),o.b,o.a)),i.rb(3,180224,null,0,r.b,[i.k,s.h,[2,l.a]],{color:[0,"color"]},null),(e()(),i.sb(4,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"],["style","font-size: 1.3em !important;"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,a.b,a.a)),i.rb(5,9158656,null,0,u.b,[i.k,u.d,[8,null],[2,u.a],[2,i.l]],null,null),(e()(),i.Mb(-1,0,["delete_sweep"]))],(function(e,t){e(t,3,0,"warn"),e(t,5,0)}),(function(e,t){e(t,1,0,t.context.$implicit.image),e(t,2,0,i.Eb(t,3).disabled||null,"NoopAnimations"===i.Eb(t,3)._animationMode),e(t,4,0,i.Eb(t,5).inline,"primary"!==i.Eb(t,5).color&&"accent"!==i.Eb(t,5).color&&"warn"!==i.Eb(t,5).color)}))}function p(e){return i.Ob(0,[(e()(),i.sb(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),i.hb(16777216,null,null,1,null,d)),i.rb(2,278528,null,0,c.k,[i.O,i.L,i.r],{ngForOf:[0,"ngForOf"]},null),(e()(),i.hb(0,null,null,0))],(function(e,t){e(t,2,0,t.component.Images)}),null)}function f(e){return i.Ob(0,[(e()(),i.sb(0,0,[["img",1]],null,0,"img",[["style","width: 70px; height: 70px;"]],[[8,"src",4]],[[null,"error"]],(function(e,t,n){var o=!0;return"error"===t&&(o=!1!==e.component.imgError(i.Eb(e,0))&&o),o}),null,null)),(e()(),i.sb(1,0,null,null,4,"button",[["color","warn"],["mat-icon-button",""],["type","button"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(e,t,n){var i=!0,o=e.component;return"click"===t&&(i=!1!==o.remove(o.oneImage)&&i),i}),o.b,o.a)),i.rb(2,180224,null,0,r.b,[i.k,s.h,[2,l.a]],{color:[0,"color"]},null),(e()(),i.sb(3,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"],["style","font-size: 1.3em !important;"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,a.b,a.a)),i.rb(4,9158656,null,0,u.b,[i.k,u.d,[8,null],[2,u.a],[2,i.l]],null,null),(e()(),i.Mb(-1,0,["delete_sweep"]))],(function(e,t){e(t,2,0,"warn"),e(t,4,0)}),(function(e,t){e(t,0,0,t.component.oneImage),e(t,1,0,i.Eb(t,2).disabled||null,"NoopAnimations"===i.Eb(t,2)._animationMode),e(t,3,0,i.Eb(t,4).inline,"primary"!==i.Eb(t,4).color&&"accent"!==i.Eb(t,4).color&&"warn"!==i.Eb(t,4).color)}))}function m(e){return i.Ob(0,[(e()(),i.sb(0,0,null,null,11,"div",[["class","d-flex mb-3 align-items-center"]],null,null,null,null,null)),(e()(),i.sb(1,0,[["file1",1]],null,0,"input",[["accept","image/*"],["hidden",""],["multiple",""],["type","file"]],null,[[null,"change"]],(function(e,t,n){var i=!0;return"change"===t&&(i=!1!==e.component.upload(n.target.files)&&i),i}),null,null)),(e()(),i.sb(2,0,null,null,5,"button",[["color","accent"],["mat-raised-button",""],["style","height: fit-content;"],["type","button"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(e,t,n){var o=!0;return"click"===t&&(o=!1!==e.component.openInput(i.Eb(e,1))&&o),o}),o.b,o.a)),i.rb(3,180224,null,0,r.b,[i.k,s.h,[2,l.a]],{color:[0,"color"]},null),(e()(),i.sb(4,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,a.b,a.a)),i.rb(5,9158656,null,0,u.b,[i.k,u.d,[8,null],[2,u.a],[2,i.l]],null,null),(e()(),i.Mb(-1,0,["add"])),(e()(),i.Mb(7,0,[" "," "])),(e()(),i.Mb(-1,null,[" \xa0\xa0 "])),(e()(),i.hb(16777216,null,null,1,null,p)),i.rb(10,16384,null,0,c.l,[i.O,i.L],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(e()(),i.hb(0,[["elseTemplate",2]],null,0,null,f))],(function(e,t){var n=t.component;e(t,3,0,"accent"),e(t,5,0),e(t,10,0,n.multiple,i.Eb(t,11))}),(function(e,t){var n=t.component;e(t,2,0,i.Eb(t,3).disabled||null,"NoopAnimations"===i.Eb(t,3)._animationMode),e(t,4,0,i.Eb(t,5).inline,"primary"!==i.Eb(t,5).color&&"accent"!==i.Eb(t,5).color&&"warn"!==i.Eb(t,5).color),e(t,7,0,n.nameBtn)}))}},Fr4G:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var i=function(){}},Q6Ar:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return h}));var i=n("8Y7J"),o=n("IheW"),r=n("SVse"),s=function(){var e=function(){function e(e,t){var n=this;this.http=e,this.doc=t,this.saveSelection=function(){if(n.doc.getSelection){var e=n.doc.getSelection();e.getRangeAt&&e.rangeCount&&(n.savedSelection=e.getRangeAt(0),n.selectedText=e.toString())}else n.savedSelection=n.doc.getSelection&&n.doc.createRange?document.createRange():null}}return e.prototype.executeCommand=function(e){["h1","h2","h3","h4","h5","h6","p","pre"].includes(e)?this.doc.execCommand("formatBlock",!1,e):this.doc.execCommand(e,!1,null)},e.prototype.createLink=function(e){e.includes("http")?this.insertHtml('<a href="'+e+'" target="_blank">'+this.selectedText+"</a>"):this.doc.execCommand("createlink",!1,e)},e.prototype.insertColor=function(e,t){this.restoreSelection()&&this.doc.execCommand("textColor"===t?"foreColor":"hiliteColor",!1,e)},e.prototype.setFontName=function(e){this.doc.execCommand("fontName",!1,e)},e.prototype.setFontSize=function(e){this.doc.execCommand("fontSize",!1,e)},e.prototype.insertHtml=function(e){if(!this.doc.execCommand("insertHTML",!1,e))throw new Error("Unable to perform the operation")},e.prototype.restoreSelection=function(){if(!this.savedSelection)return!1;if(this.doc.getSelection){var e=this.doc.getSelection();return e.removeAllRanges(),e.addRange(this.savedSelection),!0}return!!this.doc.getSelection||void 0},e.prototype.executeInNextQueueIteration=function(e,t){void 0===t&&(t=100),setTimeout(e,t)},e.prototype.checkSelection=function(){if(0===this.savedSelection.toString().length)throw new Error("No Selection Made");return!0},e.prototype.uploadImage=function(e){var t=new FormData;return t.append("file",e,e.name),this.http.post(this.uploadUrl,t,{reportProgress:!0,observe:"events",withCredentials:this.uploadWithCredentials})},e.prototype.insertImage=function(e){this.doc.execCommand("insertImage",!1,e)},e.prototype.setDefaultParagraphSeparator=function(e){this.doc.execCommand("defaultParagraphSeparator",!1,e)},e.prototype.createCustomClass=function(e){var t=this.selectedText;if(e){var n=e.tag?e.tag:"span";t="<"+n+' class="'+e.class+'">'+this.selectedText+"</"+n+">"}this.insertHtml(t)},e.prototype.insertVideo=function(e){e.match("www.youtube.com")&&this.insertYouTubeVideoTag(e),e.match("vimeo.com")&&this.insertVimeoVideoTag(e)},e.prototype.insertYouTubeVideoTag=function(e){var t=e.split("v=")[1];this.insertHtml("\n      <div style='position: relative'>\n        <img style='position: absolute; left:200px; top:140px'\n             src=\"https://img.icons8.com/color/96/000000/youtube-play.png\"/>\n        <a href='"+e+"' target='_blank'>\n          <img src=\"https://img.youtube.com/vi/"+t+'/0.jpg" alt="click to watch"/>\n        </a>\n      </div>')},e.prototype.insertVimeoVideoTag=function(e){var t=this,n=this.http.get("https://vimeo.com/api/oembed.json?url="+e).subscribe((function(i){t.insertHtml("<div>\n        <a href='"+e+"' target='_blank'>\n          <img src=\""+i.thumbnail_url_with_play_button+'" alt="'+i.title+'"/>\n        </a>\n      </div>'),n.unsubscribe()}))},e.prototype.nextNode=function(e){if(e.hasChildNodes())return e.firstChild;for(;e&&!e.nextSibling;)e=e.parentNode;return e?e.nextSibling:null},e.prototype.getRangeSelectedNodes=function(e,t){var n=e.startContainer,i=e.endContainer,o=[];if(n===i)o=[n];else{for(;n&&n!==i;)o.push(n=this.nextNode(n));for(n=e.startContainer;n&&n!==e.commonAncestorContainer;)o.unshift(n),n=n.parentNode}if(t)for(n=e.commonAncestorContainer;n;)o.push(n),n=n.parentNode;return o},e.prototype.getSelectedNodes=function(){var e=[];if(this.doc.getSelection)for(var t=this.doc.getSelection(),n=0,i=t.rangeCount;n<i;++n)e.push.apply(e,this.getRangeSelectedNodes(t.getRangeAt(n),!0));return e},e.prototype.replaceWithOwnChildren=function(e){for(var t=e.parentNode;e.hasChildNodes();)t.insertBefore(e.firstChild,e);t.removeChild(e)},e.prototype.removeSelectedElements=function(e){var t=this,n=e.toLowerCase().split(",");this.getSelectedNodes().forEach((function(e){1===e.nodeType&&n.indexOf(e.tagName.toLowerCase())>-1&&t.replaceWithOwnChildren(e)}))},e}();return e.ngInjectableDef=Object(i.Sb)({factory:function(){return new e(Object(i.Tb)(o.c),Object(i.Tb)(r.d))},token:e,providedIn:"root"}),e}(),l={editable:!0,spellcheck:!0,height:"auto",minHeight:"0",maxHeight:"auto",width:"auto",minWidth:"0",translate:"yes",enableToolbar:!0,showToolbar:!0,placeholder:"Enter text here...",defaultParagraphSeparator:"",defaultFontName:"",defaultFontSize:"",fonts:[{class:"arial",name:"Arial"},{class:"times-new-roman",name:"Times New Roman"},{class:"calibri",name:"Calibri"},{class:"comic-sans-ms",name:"Comic Sans MS"}],uploadUrl:"v1/image",uploadWithCredentials:!1,sanitize:!0,toolbarPosition:"top",outline:!0},a=function(){function e(e,t,n){this.r=e,this.editorService=t,this.doc=n,this.htmlMode=!1,this.linkSelected=!1,this.block="default",this.fontName="Times New Roman",this.fontSize="3",this.headings=[{label:"Heading 1",value:"h1"},{label:"Heading 2",value:"h2"},{label:"Heading 3",value:"h3"},{label:"Heading 4",value:"h4"},{label:"Heading 5",value:"h5"},{label:"Heading 6",value:"h6"},{label:"Heading 7",value:"h7"},{label:"Paragraph",value:"p"},{label:"Predefined",value:"pre"},{label:"Standard",value:"div"},{label:"default",value:"default"}],this.fontSizes=[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"},{label:"4",value:"4"},{label:"5",value:"5"},{label:"6",value:"6"},{label:"7",value:"7"}],this.customClassId="-1",this.customClassList=[{label:"",value:""}],this.tagMap={BLOCKQUOTE:"indent",A:"link"},this.select=["H1","H2","H3","H4","H5","H6","P","PRE","DIV"],this.buttons=["bold","italic","underline","strikeThrough","subscript","superscript","justifyLeft","justifyCenter","justifyRight","justifyFull","indent","outdent","insertUnorderedList","insertOrderedList","link"],this.fonts=[{label:"",value:""}],this.execute=new i.m}return Object.defineProperty(e.prototype,"customClasses",{set:function(e){e&&(this._customClasses=e,this.customClassList=this._customClasses.map((function(e,t){return{label:e.name,value:t.toString()}})),this.customClassList.unshift({label:"Clear Class",value:"-1"}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"defaultFontName",{set:function(e){e&&(this.fontName=e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"defaultFontSize",{set:function(e){e&&(this.fontSize=e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isLinkButtonDisabled",{get:function(){return this.htmlMode||!Boolean(this.editorService.selectedText)},enumerable:!0,configurable:!0}),e.prototype.triggerCommand=function(e){this.execute.emit(e)},e.prototype.triggerButtons=function(){var e=this;this.showToolbar&&this.buttons.forEach((function(t){var n=e.doc.queryCommandState(t),i=e.doc.getElementById(t+"-"+e.id);n?e.r.addClass(i,"active"):e.r.removeClass(i,"active")}))},e.prototype.triggerBlocks=function(e){var t=this;if(this.showToolbar){this.linkSelected=e.findIndex((function(e){return"A"===e.nodeName}))>-1;var n=!1;this.select.forEach((function(i){var o=e.find((function(e){return e.nodeName===i}));void 0!==o&&i===o.nodeName?!1===n&&(t.block=o.nodeName.toLowerCase(),n=!0):!1===n&&(t.block="default")})),n=!1,this._customClasses&&this._customClasses.forEach((function(i,o){void 0!==e.find((function(e){if(e instanceof Element)return e.className===i.class}))?!1===n&&(t.customClassId=o.toString(),n=!0):!1===n&&(t.customClassId="-1")})),Object.keys(this.tagMap).map((function(n){var i=t.doc.getElementById(t.tagMap[n]+"-"+t.id),o=e.find((function(e){return e.nodeName===n}));void 0!==o&&n===o.nodeName?t.r.addClass(i,"active"):t.r.removeClass(i,"active")})),this.foreColour=this.doc.queryCommandValue("ForeColor"),this.fontSize=this.doc.queryCommandValue("FontSize"),this.fontName=this.doc.queryCommandValue("FontName").replace(/"/g,""),this.backColor=this.doc.queryCommandValue("backColor")}},e.prototype.insertUrl=function(){var e="https://",t=this.editorService.savedSelection;if(t&&"A"===t.commonAncestorContainer.parentElement.nodeName){var n=t.commonAncestorContainer.parentElement;""!==n.href&&(e=n.href)}(e=prompt("Insert URL link",e))&&""!==e&&"https://"!==e&&this.editorService.createLink(e)},e.prototype.insertVideo=function(){this.execute.emit("");var e=prompt("Insert Video link","https://");e&&""!==e&&"https://"!==e&&this.editorService.insertVideo(e)},e.prototype.insertColor=function(e,t){this.editorService.insertColor(e,t),this.execute.emit("")},e.prototype.setFontName=function(e){this.editorService.setFontName(e),this.execute.emit("")},e.prototype.setFontSize=function(e){this.editorService.setFontSize(e),this.execute.emit("")},e.prototype.setEditorMode=function(e){var t=this.doc.getElementById("toggleEditorMode-"+this.id);e?this.r.addClass(t,"active"):this.r.removeClass(t,"active"),this.htmlMode=e},e.prototype.onFileChanged=function(e){var t=this,n=e.target.files[0];if(n.type.includes("image/"))if(this.uploadUrl)this.editorService.uploadImage(n).subscribe((function(e){e instanceof o.h&&(t.editorService.insertImage(e.body.imageUrl),t.fileReset())}));else{var i=new FileReader;i.onload=function(e){t.editorService.insertImage(e.currentTarget.result.toString())},i.readAsDataURL(n)}},e.prototype.fileReset=function(){this.myInputFile.nativeElement.value=""},e.prototype.setCustomClass=function(e){"-1"===e?this.execute.emit("clear"):this.editorService.createCustomClass(this._customClasses[+e])},e.prototype.isButtonHidden=function(e){var t,n,i;if(!e)return!1;if(!(this.hiddenButtons instanceof Array))return!1;try{for(var o=__values(this.hiddenButtons),r=o.next();!r.done;r=o.next()){var s=r.value;if(s instanceof Array&&(i=s.find((function(t){return t===e}))),i)break}}catch(l){t={error:l}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}return void 0!==i},e}();function u(e){return null!=e}var c=function(){function e(e,t,n,o,r,s,a){this.r=e,this.editorService=t,this.doc=n,this.sanitizer=o,this.cdRef=r,this.autoFocus=a,this.modeVisual=!0,this.showPlaceholder=!1,this.disabled=!1,this.focused=!1,this.touched=!1,this.changed=!1,this.id="",this.config=l,this.placeholder="",this.viewMode=new i.m,this.blurEvent=new i.m,this.focusEvent=new i.m,this.tabindex=-1;var u=Number(s);this.tabIndex=u||0===u?u:null}return e.prototype.onFocus=function(){this.focus()},e.prototype.ngOnInit=function(){this.config.toolbarPosition=this.config.toolbarPosition?this.config.toolbarPosition:l.toolbarPosition},e.prototype.ngAfterViewInit=function(){u(this.autoFocus)&&this.focus()},e.prototype.executeCommand=function(e){this.focus(),"toggleEditorMode"===e?this.toggleEditorMode(this.modeVisual):""!==e&&("clear"===e?(this.editorService.removeSelectedElements(this.getCustomTags()),this.onContentChange(this.textArea.nativeElement)):"default"===e?(this.editorService.removeSelectedElements("h1,h2,h3,h4,h5,h6,p,pre"),this.onContentChange(this.textArea.nativeElement)):this.editorService.executeCommand(e),this.exec())},e.prototype.onTextAreaFocus=function(e){var t=this;this.focused?e.stopPropagation():(this.focused=!0,this.focusEvent.emit(e),this.touched&&this.changed||this.editorService.executeInNextQueueIteration((function(){t.configure(),t.touched=!0})))},e.prototype.onTextAreaMouseOut=function(e){this.editorService.saveSelection()},e.prototype.onTextAreaBlur=function(e){if(this.editorService.executeInNextQueueIteration(this.editorService.saveSelection),"function"==typeof this.onTouched&&this.onTouched(),null!==e.relatedTarget){var t=e.relatedTarget.parentElement;t.classList.contains("angular-editor-toolbar-set")||t.classList.contains("ae-picker")||(this.blurEvent.emit(e),this.focused=!1)}},e.prototype.focus=function(){this.modeVisual?this.textArea.nativeElement.focus():(this.doc.getElementById("sourceText"+this.id).focus(),this.focused=!0)},e.prototype.onContentChange=function(e){var t="";(t=this.modeVisual?e.innerHTML:e.innerText)&&"<br>"!==t||(t=""),"function"==typeof this.onChange&&(this.onChange(this.config.sanitize||void 0===this.config.sanitize?this.sanitizer.sanitize(i.H.HTML,t):t),!t!==this.showPlaceholder&&this.togglePlaceholder(this.showPlaceholder)),this.changed=!0},e.prototype.registerOnChange=function(e){this.onChange=function(t){return e("<br>"===t?"":t)}},e.prototype.registerOnTouched=function(e){this.onTouched=e},e.prototype.writeValue=function(e){(!e||"<br>"===e||""===e)!==this.showPlaceholder&&this.togglePlaceholder(this.showPlaceholder),void 0!==e&&""!==e&&"<br>"!==e||(e=null),this.refreshView(e)},e.prototype.refreshView=function(e){this.r.setProperty(this.textArea.nativeElement,"innerHTML",null===e?"":e)},e.prototype.togglePlaceholder=function(e){e?(this.r.removeClass(this.editorWrapper.nativeElement,"show-placeholder"),this.showPlaceholder=!1):(this.r.addClass(this.editorWrapper.nativeElement,"show-placeholder"),this.showPlaceholder=!0)},e.prototype.setDisabledState=function(e){this.r[e?"addClass":"removeClass"](this.textArea.nativeElement,"disabled"),this.disabled=e},e.prototype.toggleEditorMode=function(e){var t,n=this,i=this.textArea.nativeElement;if(e){t=this.r.createText(i.innerHTML),this.r.setProperty(i,"innerHTML",""),this.r.setProperty(i,"contentEditable",!1);var o=this.r.createElement("pre");this.r.setStyle(o,"margin","0"),this.r.setStyle(o,"outline","none");var r=this.r.createElement("code");this.r.setProperty(r,"id","sourceText"+this.id),this.r.setStyle(r,"display","block"),this.r.setStyle(r,"white-space","pre-wrap"),this.r.setStyle(r,"word-break","keep-all"),this.r.setStyle(r,"outline","none"),this.r.setStyle(r,"margin","0"),this.r.setStyle(r,"background-color","#fff5b9"),this.r.setProperty(r,"contentEditable",!0),this.r.appendChild(r,t),this.focusInstance=this.r.listen(r,"focus",(function(e){return n.onTextAreaFocus(e)})),this.blurInstance=this.r.listen(r,"blur",(function(e){return n.onTextAreaBlur(e)})),this.r.appendChild(o,r),this.r.appendChild(i,o),this.doc.execCommand("defaultParagraphSeparator",!1,"div"),this.modeVisual=!1,this.viewMode.emit(!1),r.focus()}else this.doc.querySelectorAll?this.r.setProperty(i,"innerHTML",i.innerText):((t=this.doc.createRange()).selectNodeContents(i.firstChild),this.r.setProperty(i,"innerHTML",t.toString())),this.r.setProperty(i,"contentEditable",!0),this.modeVisual=!0,this.viewMode.emit(!0),this.onContentChange(i),i.focus();this.editorToolbar.setEditorMode(!this.modeVisual)},e.prototype.exec=function(){var e;this.editorToolbar.triggerButtons(),this.doc.getSelection&&(e=this.doc.getSelection(),this.editorService.executeInNextQueueIteration(this.editorService.saveSelection));for(var t=e.focusNode,n=[];t&&"editor"!==t.id;)n.unshift(t),t=t.parentNode;this.editorToolbar.triggerBlocks(n)},e.prototype.configure=function(){this.editorService.uploadUrl=this.config.uploadUrl,this.editorService.uploadWithCredentials=this.config.uploadWithCredentials,this.config.defaultParagraphSeparator&&this.editorService.setDefaultParagraphSeparator(this.config.defaultParagraphSeparator),this.config.defaultFontName&&this.editorService.setFontName(this.config.defaultFontName),this.config.defaultFontSize&&this.editorService.setFontSize(this.config.defaultFontSize)},e.prototype.getFonts=function(){return(this.config.fonts?this.config.fonts:l.fonts).map((function(e){return{label:e.name,value:e.name}}))},e.prototype.getCustomTags=function(){var e=["span"];return this.config.customClasses.forEach((function(t){void 0!==t.tag&&(e.includes(t.tag)||e.push(t.tag))})),e.join(",")},e.prototype.ngOnDestroy=function(){this.blurInstance&&this.blurInstance(),this.focusInstance&&this.focusInstance()},e.prototype.filterStyles=function(e){return e.replace("position: fixed;","")},e}(),h=function(){function e(e,t){this.elRef=e,this.r=t,this.options=[],this.disabled=!1,this.optionId=0,this.opened=!1,this.hidden="inline-block",this.changeEvent=new i.m,this.onChange=function(){},this.onTouched=function(){}}return Object.defineProperty(e.prototype,"label",{get:function(){return this.selectedOption&&this.selectedOption.hasOwnProperty("label")?this.selectedOption.label:"Select"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this.selectedOption.value},enumerable:!0,configurable:!0}),e.prototype.ngOnInit=function(){this.selectedOption=this.options[0],u(this.isHidden)&&this.isHidden&&this.hide()},e.prototype.hide=function(){this.hidden="none"},e.prototype.optionSelect=function(e,t){t.stopPropagation(),this.setValue(e.value),this.onChange(this.selectedOption.value),this.changeEvent.emit(this.selectedOption.value),this.onTouched(),this.opened=!1},e.prototype.toggleOpen=function(e){this.disabled||(this.opened=!this.opened)},e.prototype.onClick=function(e){this.elRef.nativeElement.contains(e.target)||this.close()},e.prototype.close=function(){this.opened=!1},Object.defineProperty(e.prototype,"isOpen",{get:function(){return this.opened},enumerable:!0,configurable:!0}),e.prototype.writeValue=function(e){e&&"string"==typeof e&&this.setValue(e)},e.prototype.setValue=function(e){var t=0,n=this.options.find((function(n,i){return t=i,n.value===e}));n&&(this.selectedOption=n,this.optionId=t)},e.prototype.registerOnChange=function(e){this.onChange=e},e.prototype.registerOnTouched=function(e){this.onTouched=e},e.prototype.setDisabledState=function(e){this.labelButton.nativeElement.disabled=e,this.r[e?"addClass":"removeClass"](this.labelButton.nativeElement,"disabled"),this.disabled=e},e.prototype.handleKeyDown=function(e){if(this.opened)switch(e.key){case"ArrowDown":this._handleArrowDown(e);break;case"ArrowUp":this._handleArrowUp(e);break;case"Space":this._handleSpace(e);break;case"Enter":this._handleEnter(e);break;case"Tab":this._handleTab(e);break;case"Escape":this.close(),e.preventDefault();break;case"Backspace":this._handleBackspace()}},e.prototype._handleArrowDown=function(e){this.optionId<this.options.length-1&&this.optionId++},e.prototype._handleArrowUp=function(e){this.optionId>=1&&this.optionId--},e.prototype._handleSpace=function(e){},e.prototype._handleEnter=function(e){this.optionSelect(this.options[this.optionId],e)},e.prototype._handleTab=function(e){},e.prototype._handleBackspace=function(){},e}(),d=function(){}}}]);