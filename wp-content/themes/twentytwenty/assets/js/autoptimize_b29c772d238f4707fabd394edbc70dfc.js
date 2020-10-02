jQuery(function($){$('.button-add-wp-chart-groupfield a').on('click',function(){var number=$('.wp-chart-groupfield').length+1;var donnee="<div class='wp-chart-groupfield' id="+number+"><div class='wp-chart-titlefield'>"+objectL10n.DonneeT+" "+number+"<span id='wp-chart-deletefield'><a href='#''>"+objectL10n.supprimerT+"</a></span></div><div class='line'><label for='wpchartgenerator_legende_"+number+"'>"+objectL10n.LegendeT+"</label><input type='text' id='wpchartgenerator_legende_"+number+"' name='wpchartgenerator_legende_"+number+"' style='width:100%;'></div><div class='line'><label for='wpchartgenerator_value_"+number+"'>"+objectL10n.valeurT+"</label><input type='number' id='wpchartgenerator_value_"+number+"' name='wpchartgenerator_value_"+number+"' style='width:100%;'></div><div class='line'><label for='wpchartgenerator_color_"+number+"'>"+objectL10n.couleurT+"</label><input value='#000000'class='color-picker' type='text' id='wpchartgenerator_color_"+number+"' name='wpchartgenerator_color_"+number+"' style='width:100%;'></div></div>";$(donnee).hide().appendTo(".data-content").fadeIn(400);$('#wpchart_countdata').val(number);$("#"+number+" .color-picker").spectrum({showInitial:true,showButtons:false,preferredFormat:"hex",showInput:true});jQuery('#wp-chart-deletefield a').on('click',function(event){event.preventDefault;var current=$(this).parent().parent().parent();$(current).fadeOut(400,function(){$(current).remove();});return false;});return false});$('#wpchart_countdata').val($('.wp-chart-groupfield').length);$(".color-picker").spectrum({showInitial:true,showButtons:false,preferredFormat:"hex",showInput:true});$('a.wpchart-copyshortcode').zclip({path:'http://www.steamdev.com/zclip/js/ZeroClipboard.swf',copy:$('#wpchartgenerator_shortcode').text(),afterCopy:function(){$(this).text(objectL10n.copieokT).fadeIn(800);setTimeout(function(){$('a.wpchart-copyshortcode').text(objectL10n.copieT);},1000);}});});
(function(window,$,undefined){var defaultOpts={beforeShow:noop,move:noop,change:noop,show:noop,hide:noop,color:false,flat:false,showInput:false,showButtons:true,clickoutFiresChange:false,showInitial:false,showPalette:false,showPaletteOnly:false,showSelectionPalette:true,localStorageKey:false,appendTo:"body",maxSelectionSize:7,cancelText:"cancel",chooseText:"choose",preferredFormat:false,className:"",showAlpha:false,theme:"sp-light",palette:['fff','000'],selectionPalette:[],disabled:false},spectrums=[],IE=!!/msie/i.exec(window.navigator.userAgent),rgbaSupport=(function(){function contains(str,substr){return!!~(''+str).indexOf(substr);}
var elem=document.createElement('div');var style=elem.style;style.cssText='background-color:rgba(0,0,0,.5)';return contains(style.backgroundColor,'rgba')||contains(style.backgroundColor,'hsla');})(),replaceInput=["<div class='sp-replacer'>","<div class='sp-preview'><div class='sp-preview-inner'></div></div>","<div class='sp-dd'>&#9660;</div>","</div>"].join(''),markup=(function(){var gradientFix="";if(IE){for(var i=1;i<=6;i++){gradientFix+="<div class='sp-"+i+"'></div>";}}
return["<div class='sp-container sp-hidden'>","<div class='sp-palette-container'>","<div class='sp-palette sp-thumb sp-cf'></div>","</div>","<div class='sp-picker-container'>","<div class='sp-top sp-cf'>","<div class='sp-fill'></div>","<div class='sp-top-inner'>","<div class='sp-color'>","<div class='sp-sat'>","<div class='sp-val'>","<div class='sp-dragger'></div>","</div>","</div>","</div>","<div class='sp-hue'>","<div class='sp-slider'></div>",gradientFix,"</div>","</div>","<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>","</div>","<div class='sp-input-container sp-cf'>","<input class='sp-input' type='text' spellcheck='false'  />","</div>","<div class='sp-initial sp-thumb sp-cf'></div>","<div class='sp-button-container sp-cf'>","<a class='sp-cancel' href='#'></a>","<button class='sp-choose'></button>","</div>","</div>","</div>"].join("");})();function paletteTemplate(p,color,className){var html=[];for(var i=0;i<p.length;i++){var tiny=tinycolor(p[i]);var c=tiny.toHsl().l<0.5?"sp-thumb-el sp-thumb-dark":"sp-thumb-el sp-thumb-light";c+=(tinycolor.equals(color,p[i]))?" sp-thumb-active":"";var swatchStyle=rgbaSupport?("background-color:"+tiny.toRgbString()):"filter:"+tiny.toFilter();html.push('<span title="'+tiny.toRgbString()+'" data-color="'+tiny.toRgbString()+'" class="'+c+'"><span class="sp-thumb-inner" style="'+swatchStyle+';" /></span>');}
return"<div class='sp-cf "+className+"'>"+html.join('')+"</div>";}
function hideAll(){for(var i=0;i<spectrums.length;i++){if(spectrums[i]){spectrums[i].hide();}}}
function instanceOptions(o,callbackContext){var opts=$.extend({},defaultOpts,o);opts.callbacks={'move':bind(opts.move,callbackContext),'change':bind(opts.change,callbackContext),'show':bind(opts.show,callbackContext),'hide':bind(opts.hide,callbackContext),'beforeShow':bind(opts.beforeShow,callbackContext)};return opts;}
function spectrum(element,o){var opts=instanceOptions(o,element),flat=opts.flat,showSelectionPalette=opts.showSelectionPalette,localStorageKey=opts.localStorageKey,theme=opts.theme,callbacks=opts.callbacks,resize=throttle(reflow,10),visible=false,dragWidth=0,dragHeight=0,dragHelperHeight=0,slideHeight=0,slideWidth=0,alphaWidth=0,alphaSlideHelperWidth=0,slideHelperHeight=0,currentHue=0,currentSaturation=0,currentValue=0,currentAlpha=1,palette=opts.palette.slice(0),paletteArray=$.isArray(palette[0])?palette:[palette],selectionPalette=opts.selectionPalette.slice(0),maxSelectionSize=opts.maxSelectionSize,draggingClass="sp-dragging",shiftMovementDirection=null;var doc=element.ownerDocument,body=doc.body,boundElement=$(element),disabled=false,container=$(markup,doc).addClass(theme),dragger=container.find(".sp-color"),dragHelper=container.find(".sp-dragger"),slider=container.find(".sp-hue"),slideHelper=container.find(".sp-slider"),alphaSliderInner=container.find(".sp-alpha-inner"),alphaSlider=container.find(".sp-alpha"),alphaSlideHelper=container.find(".sp-alpha-handle"),textInput=container.find(".sp-input"),paletteContainer=container.find(".sp-palette"),initialColorContainer=container.find(".sp-initial"),cancelButton=container.find(".sp-cancel"),chooseButton=container.find(".sp-choose"),isInput=boundElement.is("input"),shouldReplace=isInput&&!flat,replacer=(shouldReplace)?$(replaceInput).addClass(theme).addClass(opts.className):$([]),offsetElement=(shouldReplace)?replacer:boundElement,previewElement=replacer.find(".sp-preview-inner"),initialColor=opts.color||(isInput&&boundElement.val()),colorOnShow=false,preferredFormat=opts.preferredFormat,currentPreferredFormat=preferredFormat,clickoutFiresChange=!opts.showButtons||opts.clickoutFiresChange;function applyOptions(){container.toggleClass("sp-flat",flat);container.toggleClass("sp-input-disabled",!opts.showInput);container.toggleClass("sp-alpha-enabled",opts.showAlpha);container.toggleClass("sp-buttons-disabled",!opts.showButtons);container.toggleClass("sp-palette-disabled",!opts.showPalette);container.toggleClass("sp-palette-only",opts.showPaletteOnly);container.toggleClass("sp-initial-disabled",!opts.showInitial);container.addClass(opts.className);reflow();}
function initialize(){if(IE){container.find("*:not(input)").attr("unselectable","on");}
applyOptions();if(shouldReplace){boundElement.after(replacer).hide();}
if(flat){boundElement.after(container).hide();}
else{var appendTo=opts.appendTo==="parent"?boundElement.parent():$(opts.appendTo);if(appendTo.length!==1){appendTo=$("body");}
appendTo.append(container);}
if(localStorageKey&&window.localStorage){try{var oldPalette=window.localStorage[localStorageKey].split(",#");if(oldPalette.length>1){delete window.localStorage[localStorageKey];$.each(oldPalette,function(i,c){addColorToSelectionPalette(c);});}}
catch(e){}
try{selectionPalette=window.localStorage[localStorageKey].split(";");}
catch(e){}}
offsetElement.bind("click.spectrum touchstart.spectrum",function(e){if(!disabled){toggle();}
e.stopPropagation();if(!$(e.target).is("input")){e.preventDefault();}});if(boundElement.is(":disabled")||(opts.disabled===true)){disable();}
container.click(stopPropagation);textInput.change(setFromTextInput);textInput.bind("paste",function(){setTimeout(setFromTextInput,1);});textInput.keydown(function(e){if(e.keyCode==13){setFromTextInput();}});cancelButton.text(opts.cancelText);cancelButton.bind("click.spectrum",function(e){e.stopPropagation();e.preventDefault();hide("cancel");});chooseButton.text(opts.chooseText);chooseButton.bind("click.spectrum",function(e){e.stopPropagation();e.preventDefault();if(isValid()){updateOriginalInput(true);hide();}});draggable(alphaSlider,function(dragX,dragY,e){currentAlpha=(dragX/alphaWidth);if(e.shiftKey){currentAlpha=Math.round(currentAlpha*10)/10;}
move();});draggable(slider,function(dragX,dragY){currentHue=parseFloat(dragY/slideHeight);move();},dragStart,dragStop);draggable(dragger,function(dragX,dragY,e){if(!e.shiftKey){shiftMovementDirection=null;}
else if(!shiftMovementDirection){var oldDragX=currentSaturation*dragWidth;var oldDragY=dragHeight-(currentValue*dragHeight);var furtherFromX=Math.abs(dragX-oldDragX)>Math.abs(dragY-oldDragY);shiftMovementDirection=furtherFromX?"x":"y";}
var setSaturation=!shiftMovementDirection||shiftMovementDirection==="x";var setValue=!shiftMovementDirection||shiftMovementDirection==="y";if(setSaturation){currentSaturation=parseFloat(dragX/dragWidth);}
if(setValue){currentValue=parseFloat((dragHeight-dragY)/dragHeight);}
move();},dragStart,dragStop);if(!!initialColor){set(initialColor);updateUI();currentPreferredFormat=preferredFormat||tinycolor(initialColor).format;addColorToSelectionPalette(initialColor);}
else{updateUI();}
if(flat){show();}
function palletElementClick(e){if(e.data&&e.data.ignore){set($(this).data("color"));move();}
else{set($(this).data("color"));updateOriginalInput(true);move();hide();}
return false;}
var paletteEvent=IE?"mousedown.spectrum":"click.spectrum touchstart.spectrum";paletteContainer.delegate(".sp-thumb-el",paletteEvent,palletElementClick);initialColorContainer.delegate(".sp-thumb-el:nth-child(1)",paletteEvent,{ignore:true},palletElementClick);}
function addColorToSelectionPalette(color){if(showSelectionPalette){var colorRgb=tinycolor(color).toRgbString();if($.inArray(colorRgb,selectionPalette)===-1){selectionPalette.push(colorRgb);while(selectionPalette.length>maxSelectionSize){selectionPalette.shift();}}
if(localStorageKey&&window.localStorage){try{window.localStorage[localStorageKey]=selectionPalette.join(";");}
catch(e){}}}}
function getUniqueSelectionPalette(){var unique=[];var p=selectionPalette;var paletteLookup={};var rgb;if(opts.showPalette){for(var i=0;i<paletteArray.length;i++){for(var j=0;j<paletteArray[i].length;j++){rgb=tinycolor(paletteArray[i][j]).toRgbString();paletteLookup[rgb]=true;}}
for(i=0;i<p.length;i++){rgb=tinycolor(p[i]).toRgbString();if(!paletteLookup.hasOwnProperty(rgb)){unique.push(p[i]);paletteLookup[rgb]=true;}}}
return unique.reverse().slice(0,opts.maxSelectionSize);}
function drawPalette(){var currentColor=get();var html=$.map(paletteArray,function(palette,i){return paletteTemplate(palette,currentColor,"sp-palette-row sp-palette-row-"+i);});if(selectionPalette){html.push(paletteTemplate(getUniqueSelectionPalette(),currentColor,"sp-palette-row sp-palette-row-selection"));}
paletteContainer.html(html.join(""));}
function drawInitial(){if(opts.showInitial){var initial=colorOnShow;var current=get();initialColorContainer.html(paletteTemplate([initial,current],current,"sp-palette-row-initial"));}}
function dragStart(){if(dragHeight<=0||dragWidth<=0||slideHeight<=0){reflow();}
container.addClass(draggingClass);shiftMovementDirection=null;}
function dragStop(){container.removeClass(draggingClass);}
function setFromTextInput(){var tiny=tinycolor(textInput.val());if(tiny.ok){set(tiny);}
else{textInput.addClass("sp-validation-error");}}
function toggle(){if(visible){hide();}
else{show();}}
function show(){var event=$.Event('beforeShow.spectrum');if(visible){reflow();return;}
boundElement.trigger(event,[get()]);if(callbacks.beforeShow(get())===false||event.isDefaultPrevented()){return;}
hideAll();visible=true;$(doc).bind("click.spectrum",hide);$(window).bind("resize.spectrum",resize);replacer.addClass("sp-active");container.removeClass("sp-hidden");if(opts.showPalette){drawPalette();}
reflow();updateUI();colorOnShow=get();drawInitial();callbacks.show(colorOnShow);boundElement.trigger('show.spectrum',[colorOnShow]);}
function hide(e){if(e&&e.type=="click"&&e.button==2){return;}
if(!visible||flat){return;}
visible=false;$(doc).unbind("click.spectrum",hide);$(window).unbind("resize.spectrum",resize);replacer.removeClass("sp-active");container.addClass("sp-hidden");var colorHasChanged=!tinycolor.equals(get(),colorOnShow);if(colorHasChanged){if(clickoutFiresChange&&e!=="cancel"){updateOriginalInput(true);}
else{revert();}}
callbacks.hide(get());boundElement.trigger('hide.spectrum',[get()]);}
function revert(){set(colorOnShow,true);}
function set(color,ignoreFormatChange){if(tinycolor.equals(color,get())){return;}
var newColor=tinycolor(color);var newHsv=newColor.toHsv();currentHue=(newHsv.h%360)/360;currentSaturation=newHsv.s;currentValue=newHsv.v;currentAlpha=newHsv.a;updateUI();if(newColor.ok&&!ignoreFormatChange){currentPreferredFormat=preferredFormat||newColor.format;}}
function get(opts){opts=opts||{};return tinycolor.fromRatio({h:currentHue,s:currentSaturation,v:currentValue,a:Math.round(currentAlpha*100)/100},{format:opts.format||currentPreferredFormat});}
function isValid(){return!textInput.hasClass("sp-validation-error");}
function move(){updateUI();callbacks.move(get());boundElement.trigger('move.spectrum',[get()]);}
function updateUI(){textInput.removeClass("sp-validation-error");updateHelperLocations();var flatColor=tinycolor.fromRatio({h:currentHue,s:1,v:1});dragger.css("background-color",flatColor.toHexString());var format=currentPreferredFormat;if(currentAlpha<1){if(format==="hex"||format==="hex3"||format==="hex6"||format==="name"){format="rgb";}}
var realColor=get({format:format}),realHex=realColor.toHexString(),realRgb=realColor.toRgbString();if(rgbaSupport||realColor.alpha===1){previewElement.css("background-color",realRgb);}
else{previewElement.css("background-color","transparent");previewElement.css("filter",realColor.toFilter());}
if(opts.showAlpha){var rgb=realColor.toRgb();rgb.a=0;var realAlpha=tinycolor(rgb).toRgbString();var gradient="linear-gradient(left, "+realAlpha+", "+realHex+")";if(IE){alphaSliderInner.css("filter",tinycolor(realAlpha).toFilter({gradientType:1},realHex));}
else{alphaSliderInner.css("background","-webkit-"+gradient);alphaSliderInner.css("background","-moz-"+gradient);alphaSliderInner.css("background","-ms-"+gradient);alphaSliderInner.css("background",gradient);}}
if(opts.showInput){textInput.val(realColor.toString(format));}
if(opts.showPalette){drawPalette();}
drawInitial();}
function updateHelperLocations(){var s=currentSaturation;var v=currentValue;var dragX=s*dragWidth;var dragY=dragHeight-(v*dragHeight);dragX=Math.max(-dragHelperHeight,Math.min(dragWidth-dragHelperHeight,dragX-dragHelperHeight));dragY=Math.max(-dragHelperHeight,Math.min(dragHeight-dragHelperHeight,dragY-dragHelperHeight));dragHelper.css({"top":dragY,"left":dragX});var alphaX=currentAlpha*alphaWidth;alphaSlideHelper.css({"left":alphaX-(alphaSlideHelperWidth/2)});var slideY=(currentHue)*slideHeight;slideHelper.css({"top":slideY-slideHelperHeight});}
function updateOriginalInput(fireCallback){var color=get();if(isInput){boundElement.val(color.toString(currentPreferredFormat)).change();}
var hasChanged=!tinycolor.equals(color,colorOnShow);colorOnShow=color;addColorToSelectionPalette(color);if(fireCallback&&hasChanged){callbacks.change(color);boundElement.trigger('change.spectrum',[color]);}}
function reflow(){dragWidth=dragger.width();dragHeight=dragger.height();dragHelperHeight=dragHelper.height();slideWidth=slider.width();slideHeight=slider.height();slideHelperHeight=slideHelper.height();alphaWidth=alphaSlider.width();alphaSlideHelperWidth=alphaSlideHelper.width();if(!flat){container.css("position","absolute");container.offset(getOffset(container,offsetElement));}
updateHelperLocations();}
function destroy(){boundElement.show();offsetElement.unbind("click.spectrum touchstart.spectrum");container.remove();replacer.remove();spectrums[spect.id]=null;}
function option(optionName,optionValue){if(optionName===undefined){return $.extend({},opts);}
if(optionValue===undefined){return opts[optionName];}
opts[optionName]=optionValue;applyOptions();}
function enable(){disabled=false;boundElement.attr("disabled",false);offsetElement.removeClass("sp-disabled");}
function disable(){hide();disabled=true;boundElement.attr("disabled",true);offsetElement.addClass("sp-disabled");}
initialize();var spect={show:show,hide:hide,toggle:toggle,reflow:reflow,option:option,enable:enable,disable:disable,set:function(c){set(c);updateOriginalInput();},get:get,destroy:destroy,container:container};spect.id=spectrums.push(spect)-1;return spect;}
function getOffset(picker,input){var extraY=0;var dpWidth=picker.outerWidth();var dpHeight=picker.outerHeight();var inputHeight=input.outerHeight();var doc=picker[0].ownerDocument;var docElem=doc.documentElement;var viewWidth=docElem.clientWidth+$(doc).scrollLeft();var viewHeight=docElem.clientHeight+$(doc).scrollTop();var offset=input.offset();offset.top+=inputHeight;offset.left-=Math.min(offset.left,(offset.left+dpWidth>viewWidth&&viewWidth>dpWidth)?Math.abs(offset.left+dpWidth-viewWidth):0);offset.top-=Math.min(offset.top,((offset.top+dpHeight>viewHeight&&viewHeight>dpHeight)?Math.abs(dpHeight+inputHeight-extraY):extraY));return offset;}
function noop(){}
function stopPropagation(e){e.stopPropagation();}
function bind(func,obj){var slice=Array.prototype.slice;var args=slice.call(arguments,2);return function(){return func.apply(obj,args.concat(slice.call(arguments)));};}
function draggable(element,onmove,onstart,onstop){onmove=onmove||function(){};onstart=onstart||function(){};onstop=onstop||function(){};var doc=element.ownerDocument||document;var dragging=false;var offset={};var maxHeight=0;var maxWidth=0;var hasTouch=('ontouchstart'in window);var duringDragEvents={};duringDragEvents["selectstart"]=prevent;duringDragEvents["dragstart"]=prevent;duringDragEvents["touchmove mousemove"]=move;duringDragEvents["touchend mouseup"]=stop;function prevent(e){if(e.stopPropagation){e.stopPropagation();}
if(e.preventDefault){e.preventDefault();}
e.returnValue=false;}
function move(e){if(dragging){if(IE&&document.documentMode<9&&!e.button){return stop();}
var touches=e.originalEvent.touches;var pageX=touches?touches[0].pageX:e.pageX;var pageY=touches?touches[0].pageY:e.pageY;var dragX=Math.max(0,Math.min(pageX-offset.left,maxWidth));var dragY=Math.max(0,Math.min(pageY-offset.top,maxHeight));if(hasTouch){prevent(e);}
onmove.apply(element,[dragX,dragY,e]);}}
function start(e){var rightclick=(e.which)?(e.which==3):(e.button==2);var touches=e.originalEvent.touches;if(!rightclick&&!dragging){if(onstart.apply(element,arguments)!==false){dragging=true;maxHeight=$(element).height();maxWidth=$(element).width();offset=$(element).offset();$(doc).bind(duringDragEvents);$(doc.body).addClass("sp-dragging");if(!hasTouch){move(e);}
prevent(e);}}}
function stop(){if(dragging){$(doc).unbind(duringDragEvents);$(doc.body).removeClass("sp-dragging");onstop.apply(element,arguments);}
dragging=false;}
$(element).bind("touchstart mousedown",start);}
function throttle(func,wait,debounce){var timeout;return function(){var context=this,args=arguments;var throttler=function(){timeout=null;func.apply(context,args);};if(debounce)clearTimeout(timeout);if(debounce||!timeout)timeout=setTimeout(throttler,wait);};}
function log(){if(window.console){if(Function.prototype.bind)log=Function.prototype.bind.call(console.log,console);else log=function(){Function.prototype.apply.call(console.log,console,arguments);};log.apply(this,arguments);}}
var dataID="spectrum.id";$.fn.spectrum=function(opts,extra){if(typeof opts=="string"){var returnValue=this;var args=Array.prototype.slice.call(arguments,1);this.each(function(){var spect=spectrums[$(this).data(dataID)];if(spect){var method=spect[opts];if(!method){throw new Error("Spectrum: no such method: '"+opts+"'");}
if(opts=="get"){returnValue=spect.get();}
else if(opts=="container"){returnValue=spect.container;}
else if(opts=="option"){returnValue=spect.option.apply(spect,args);}
else if(opts=="destroy"){spect.destroy();$(this).removeData(dataID);}
else{method.apply(spect,args);}}});return returnValue;}
return this.spectrum("destroy").each(function(){var spect=spectrum(this,opts);$(this).data(dataID,spect.id);});};$.fn.spectrum.load=true;$.fn.spectrum.loadOpts={};$.fn.spectrum.draggable=draggable;$.fn.spectrum.defaults=defaultOpts;$.spectrum={};$.spectrum.localization={};$.spectrum.palettes={};$.fn.spectrum.processNativeColorInputs=function(){var colorInput=$("<input type='color' value='!' />")[0];var supportsColor=colorInput.type==="color"&&colorInput.value!="!";if(!supportsColor){$("input[type=color]").spectrum({preferredFormat:"hex6"});}};(function(root){var trimLeft=/^[\s,#]+/,trimRight=/\s+$/,tinyCounter=0,math=Math,mathRound=math.round,mathMin=math.min,mathMax=math.max,mathRandom=math.random;function tinycolor(color,opts){color=(color)?color:'';opts=opts||{};if(typeof color=="object"&&color.hasOwnProperty("_tc_id")){return color;}
var rgb=inputToRGB(color);var r=rgb.r,g=rgb.g,b=rgb.b,a=rgb.a,roundA=mathRound(100*a)/100,format=opts.format||rgb.format;if(r<1){r=mathRound(r);}
if(g<1){g=mathRound(g);}
if(b<1){b=mathRound(b);}
return{ok:rgb.ok,format:format,_tc_id:tinyCounter++,alpha:a,toHsv:function(){var hsv=rgbToHsv(r,g,b);return{h:hsv.h*360,s:hsv.s,v:hsv.v,a:a};},toHsvString:function(){var hsv=rgbToHsv(r,g,b);var h=mathRound(hsv.h*360),s=mathRound(hsv.s*100),v=mathRound(hsv.v*100);return(a==1)?"hsv("+h+", "+s+"%, "+v+"%)":"hsva("+h+", "+s+"%, "+v+"%, "+roundA+")";},toHsl:function(){var hsl=rgbToHsl(r,g,b);return{h:hsl.h*360,s:hsl.s,l:hsl.l,a:a};},toHslString:function(){var hsl=rgbToHsl(r,g,b);var h=mathRound(hsl.h*360),s=mathRound(hsl.s*100),l=mathRound(hsl.l*100);return(a==1)?"hsl("+h+", "+s+"%, "+l+"%)":"hsla("+h+", "+s+"%, "+l+"%, "+roundA+")";},toHex:function(allow3Char){return rgbToHex(r,g,b,allow3Char);},toHexString:function(allow3Char){return'#'+rgbToHex(r,g,b,allow3Char);},toRgb:function(){return{r:mathRound(r),g:mathRound(g),b:mathRound(b),a:a};},toRgbString:function(){return(a==1)?"rgb("+mathRound(r)+", "+mathRound(g)+", "+mathRound(b)+")":"rgba("+mathRound(r)+", "+mathRound(g)+", "+mathRound(b)+", "+roundA+")";},toPercentageRgb:function(){return{r:mathRound(bound01(r,255)*100)+"%",g:mathRound(bound01(g,255)*100)+"%",b:mathRound(bound01(b,255)*100)+"%",a:a};},toPercentageRgbString:function(){return(a==1)?"rgb("+mathRound(bound01(r,255)*100)+"%, "+mathRound(bound01(g,255)*100)+"%, "+mathRound(bound01(b,255)*100)+"%)":"rgba("+mathRound(bound01(r,255)*100)+"%, "+mathRound(bound01(g,255)*100)+"%, "+mathRound(bound01(b,255)*100)+"%, "+roundA+")";},toName:function(){return hexNames[rgbToHex(r,g,b,true)]||false;},toFilter:function(secondColor){var hex=rgbToHex(r,g,b);var secondHex=hex;var alphaHex=Math.round(parseFloat(a)*255).toString(16);var secondAlphaHex=alphaHex;var gradientType=opts&&opts.gradientType?"GradientType = 1, ":"";if(secondColor){var s=tinycolor(secondColor);secondHex=s.toHex();secondAlphaHex=Math.round(parseFloat(s.alpha)*255).toString(16);}
return"progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr=#"+pad2(alphaHex)+hex+",endColorstr=#"+pad2(secondAlphaHex)+secondHex+")";},toString:function(format){format=format||this.format;var formattedString=false;if(format==="rgb"){formattedString=this.toRgbString();}
if(format==="prgb"){formattedString=this.toPercentageRgbString();}
if(format==="hex"||format==="hex6"){formattedString=this.toHexString();}
if(format==="hex3"){formattedString=this.toHexString(true);}
if(format==="name"){formattedString=this.toName();}
if(format==="hsl"){formattedString=this.toHslString();}
if(format==="hsv"){formattedString=this.toHsvString();}
return formattedString||this.toHexString();}};}
tinycolor.fromRatio=function(color,opts){if(typeof color=="object"){var newColor={};for(var i in color){if(color.hasOwnProperty(i)){if(i==="a"){newColor[i]=color[i];}
else{newColor[i]=convertToPercentage(color[i]);}}}
color=newColor;}
return tinycolor(color,opts);};function inputToRGB(color){var rgb={r:0,g:0,b:0};var a=1;var ok=false;var format=false;if(typeof color=="string"){color=stringInputToObject(color);}
if(typeof color=="object"){if(color.hasOwnProperty("r")&&color.hasOwnProperty("g")&&color.hasOwnProperty("b")){rgb=rgbToRgb(color.r,color.g,color.b);ok=true;format=String(color.r).substr(-1)==="%"?"prgb":"rgb";}
else if(color.hasOwnProperty("h")&&color.hasOwnProperty("s")&&color.hasOwnProperty("v")){color.s=convertToPercentage(color.s);color.v=convertToPercentage(color.v);rgb=hsvToRgb(color.h,color.s,color.v);ok=true;format="hsv";}
else if(color.hasOwnProperty("h")&&color.hasOwnProperty("s")&&color.hasOwnProperty("l")){color.s=convertToPercentage(color.s);color.l=convertToPercentage(color.l);rgb=hslToRgb(color.h,color.s,color.l);ok=true;format="hsl";}
if(color.hasOwnProperty("a")){a=color.a;}}
a=parseFloat(a);if(isNaN(a)||a<0||a>1){a=1;}
return{ok:ok,format:color.format||format,r:mathMin(255,mathMax(rgb.r,0)),g:mathMin(255,mathMax(rgb.g,0)),b:mathMin(255,mathMax(rgb.b,0)),a:a};}
function rgbToRgb(r,g,b){return{r:bound01(r,255)*255,g:bound01(g,255)*255,b:bound01(b,255)*255};}
function rgbToHsl(r,g,b){r=bound01(r,255);g=bound01(g,255);b=bound01(b,255);var max=mathMax(r,g,b),min=mathMin(r,g,b);var h,s,l=(max+min)/2;if(max==min){h=s=0;}
else{var d=max-min;s=l>0.5?d/(2-max-min):d/(max+min);switch(max){case r:h=(g-b)/d+(g<b?6:0);break;case g:h=(b-r)/d+2;break;case b:h=(r-g)/d+4;break;}
h/=6;}
return{h:h,s:s,l:l};}
function hslToRgb(h,s,l){var r,g,b;h=bound01(h,360);s=bound01(s,100);l=bound01(l,100);function hue2rgb(p,q,t){if(t<0)t+=1;if(t>1)t-=1;if(t<1/6)return p+(q-p)*6*t;if(t<1/2)return q;if(t<2/3)return p+(q-p)*(2/3-t)*6;return p;}
if(s===0){r=g=b=l;}
else{var q=l<0.5?l*(1+s):l+s-l*s;var p=2*l-q;r=hue2rgb(p,q,h+1/3);g=hue2rgb(p,q,h);b=hue2rgb(p,q,h-1/3);}
return{r:r*255,g:g*255,b:b*255};}
function rgbToHsv(r,g,b){r=bound01(r,255);g=bound01(g,255);b=bound01(b,255);var max=mathMax(r,g,b),min=mathMin(r,g,b);var h,s,v=max;var d=max-min;s=max===0?0:d/max;if(max==min){h=0;}
else{switch(max){case r:h=(g-b)/d+(g<b?6:0);break;case g:h=(b-r)/d+2;break;case b:h=(r-g)/d+4;break;}
h/=6;}
return{h:h,s:s,v:v};}
function hsvToRgb(h,s,v){h=bound01(h,360)*6;s=bound01(s,100);v=bound01(v,100);var i=math.floor(h),f=h-i,p=v*(1-s),q=v*(1-f*s),t=v*(1-(1-f)*s),mod=i%6,r=[v,q,p,p,t,v][mod],g=[t,v,v,q,p,p][mod],b=[p,p,t,v,v,q][mod];return{r:r*255,g:g*255,b:b*255};}
function rgbToHex(r,g,b,allow3Char){var hex=[pad2(mathRound(r).toString(16)),pad2(mathRound(g).toString(16)),pad2(mathRound(b).toString(16))];if(allow3Char&&hex[0].charAt(0)==hex[0].charAt(1)&&hex[1].charAt(0)==hex[1].charAt(1)&&hex[2].charAt(0)==hex[2].charAt(1)){return hex[0].charAt(0)+hex[1].charAt(0)+hex[2].charAt(0);}
return hex.join("");}
tinycolor.equals=function(color1,color2){if(!color1||!color2){return false;}
return tinycolor(color1).toRgbString()==tinycolor(color2).toRgbString();};tinycolor.random=function(){return tinycolor.fromRatio({r:mathRandom(),g:mathRandom(),b:mathRandom()});};tinycolor.desaturate=function(color,amount){var hsl=tinycolor(color).toHsl();hsl.s-=((amount||10)/100);hsl.s=clamp01(hsl.s);return tinycolor(hsl);};tinycolor.saturate=function(color,amount){var hsl=tinycolor(color).toHsl();hsl.s+=((amount||10)/100);hsl.s=clamp01(hsl.s);return tinycolor(hsl);};tinycolor.greyscale=function(color){return tinycolor.desaturate(color,100);};tinycolor.lighten=function(color,amount){var hsl=tinycolor(color).toHsl();hsl.l+=((amount||10)/100);hsl.l=clamp01(hsl.l);return tinycolor(hsl);};tinycolor.darken=function(color,amount){var hsl=tinycolor(color).toHsl();hsl.l-=((amount||10)/100);hsl.l=clamp01(hsl.l);return tinycolor(hsl);};tinycolor.complement=function(color){var hsl=tinycolor(color).toHsl();hsl.h=(hsl.h+180)%360;return tinycolor(hsl);};tinycolor.triad=function(color){var hsl=tinycolor(color).toHsl();var h=hsl.h;return[tinycolor(color),tinycolor({h:(h+120)%360,s:hsl.s,l:hsl.l}),tinycolor({h:(h+240)%360,s:hsl.s,l:hsl.l})];};tinycolor.tetrad=function(color){var hsl=tinycolor(color).toHsl();var h=hsl.h;return[tinycolor(color),tinycolor({h:(h+90)%360,s:hsl.s,l:hsl.l}),tinycolor({h:(h+180)%360,s:hsl.s,l:hsl.l}),tinycolor({h:(h+270)%360,s:hsl.s,l:hsl.l})];};tinycolor.splitcomplement=function(color){var hsl=tinycolor(color).toHsl();var h=hsl.h;return[tinycolor(color),tinycolor({h:(h+72)%360,s:hsl.s,l:hsl.l}),tinycolor({h:(h+216)%360,s:hsl.s,l:hsl.l})];};tinycolor.analogous=function(color,results,slices){results=results||6;slices=slices||30;var hsl=tinycolor(color).toHsl();var part=360/slices;var ret=[tinycolor(color)];for(hsl.h=((hsl.h-(part*results>>1))+720)%360;--results;){hsl.h=(hsl.h+part)%360;ret.push(tinycolor(hsl));}
return ret;};tinycolor.monochromatic=function(color,results){results=results||6;var hsv=tinycolor(color).toHsv();var h=hsv.h,s=hsv.s,v=hsv.v;var ret=[];var modification=1/results;while(results--){ret.push(tinycolor({h:h,s:s,v:v}));v=(v+modification)%1;}
return ret;};tinycolor.readability=function(color1,color2){var a=tinycolor(color1).toRgb();var b=tinycolor(color2).toRgb();var brightnessA=(a.r*299+a.g*587+a.b*114)/1000;var brightnessB=(b.r*299+b.g*587+b.b*114)/1000;var colorDiff=(Math.max(a.r,b.r)-Math.min(a.r,b.r)+
Math.max(a.g,b.g)-Math.min(a.g,b.g)+
Math.max(a.b,b.b)-Math.min(a.b,b.b));return{brightness:Math.abs(brightnessA-brightnessB),color:colorDiff};};tinycolor.readable=function(color1,color2){var readability=tinycolor.readability(color1,color2);return readability.brightness>125&&readability.color>500;};tinycolor.mostReadable=function(baseColor,colorList){var bestColor=null;var bestScore=0;var bestIsReadable=false;for(var i=0;i<colorList.length;i++){var readability=tinycolor.readability(baseColor,colorList[i]);var readable=readability.brightness>125&&readability.color>500;var score=3*(readability.brightness/125)+(readability.color/500);if((readable&&!bestIsReadable)||(readable&&bestIsReadable&&score>bestScore)||((!readable)&&(!bestIsReadable)&&score>bestScore)){bestIsReadable=readable;bestScore=score;bestColor=tinycolor(colorList[i]);}}
return bestColor;};var names=tinycolor.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};var hexNames=tinycolor.hexNames=flip(names);function flip(o){var flipped={};for(var i in o){if(o.hasOwnProperty(i)){flipped[o[i]]=i;}}
return flipped;}
function bound01(n,max){if(isOnePointZero(n)){n="100%";}
var processPercent=isPercentage(n);n=mathMin(max,mathMax(0,parseFloat(n)));if(processPercent){n=parseInt(n*max,10)/100;}
if((math.abs(n-max)<0.000001)){return 1;}
return(n%max)/parseFloat(max);}
function clamp01(val){return mathMin(1,mathMax(0,val));}
function parseHex(val){return parseInt(val,16);}
function isOnePointZero(n){return typeof n=="string"&&n.indexOf('.')!=-1&&parseFloat(n)===1;}
function isPercentage(n){return typeof n==="string"&&n.indexOf('%')!=-1;}
function pad2(c){return c.length==1?'0'+c:''+c;}
function convertToPercentage(n){if(n<=1){n=(n*100)+"%";}
return n;}
var matchers=(function(){var CSS_INTEGER="[-\\+]?\\d+%?";var CSS_NUMBER="[-\\+]?\\d*\\.\\d+%?";var CSS_UNIT="(?:"+CSS_NUMBER+")|(?:"+CSS_INTEGER+")";var PERMISSIVE_MATCH3="[\\s|\\(]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")\\s*\\)?";var PERMISSIVE_MATCH4="[\\s|\\(]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")\\s*\\)?";return{rgb:new RegExp("rgb"+PERMISSIVE_MATCH3),rgba:new RegExp("rgba"+PERMISSIVE_MATCH4),hsl:new RegExp("hsl"+PERMISSIVE_MATCH3),hsla:new RegExp("hsla"+PERMISSIVE_MATCH4),hsv:new RegExp("hsv"+PERMISSIVE_MATCH3),hex3:/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};})();function stringInputToObject(color){color=color.replace(trimLeft,'').replace(trimRight,'').toLowerCase();var named=false;if(names[color]){color=names[color];named=true;}
else if(color=='transparent'){return{r:0,g:0,b:0,a:0};}
var match;if((match=matchers.rgb.exec(color))){return{r:match[1],g:match[2],b:match[3]};}
if((match=matchers.rgba.exec(color))){return{r:match[1],g:match[2],b:match[3],a:match[4]};}
if((match=matchers.hsl.exec(color))){return{h:match[1],s:match[2],l:match[3]};}
if((match=matchers.hsla.exec(color))){return{h:match[1],s:match[2],l:match[3],a:match[4]};}
if((match=matchers.hsv.exec(color))){return{h:match[1],s:match[2],v:match[3]};}
if((match=matchers.hex6.exec(color))){return{r:parseHex(match[1]),g:parseHex(match[2]),b:parseHex(match[3]),format:named?"name":"hex"};}
if((match=matchers.hex3.exec(color))){return{r:parseHex(match[1]+''+match[1]),g:parseHex(match[2]+''+match[2]),b:parseHex(match[3]+''+match[3]),format:named?"name":"hex"};}
return false;}
root.tinycolor=tinycolor;})(this);$(function(){if($.fn.spectrum.load){$.fn.spectrum.processNativeColorInputs();}});})(window,jQuery);

(function ($) {
    $.fn.zclip = function (params) {
        if (typeof params == "object" && !params.length) {
            var settings = $.extend({
                path: 'ZeroClipboard.swf',
                copy: null,
                beforeCopy: null,
                afterCopy: null,
                clickAfter: true,
                setHandCursor: true,
                setCSSEffects: true
            }, params);
            return this.each(function () {
                var o = $(this);
                if (o.is(':visible') && (typeof settings.copy == 'string' || $.isFunction(settings.copy))) {
                    ZeroClipboard.setMoviePath(settings.path);
                    var clip = new ZeroClipboard.Client();
                    if($.isFunction(settings.copy)){
                    	o.bind('zClip_copy',settings.copy);
                    }
                    if($.isFunction(settings.beforeCopy)){
                    	o.bind('zClip_beforeCopy',settings.beforeCopy);
                    }
                    if($.isFunction(settings.afterCopy)){
                    	o.bind('zClip_afterCopy',settings.afterCopy);
                    }                    
                    clip.setHandCursor(settings.setHandCursor);
                    clip.setCSSEffects(settings.setCSSEffects);
                    clip.addEventListener('mouseOver', function (client) {
                        o.trigger('mouseenter');
                    });
                    clip.addEventListener('mouseOut', function (client) {
                        o.trigger('mouseleave');
                    });
                    clip.addEventListener('mouseDown', function (client) {
                        o.trigger('mousedown');
			if(!$.isFunction(settings.copy)){
			   clip.setText(settings.copy);
			} else {
			   clip.setText(o.triggerHandler('zClip_copy'));
			}                        
                        if ($.isFunction(settings.beforeCopy)) {
                            o.trigger('zClip_beforeCopy');                            
                        }
                    });
                    clip.addEventListener('complete', function (client, text) {
                        if ($.isFunction(settings.afterCopy)) {
                            o.trigger('zClip_afterCopy');
                        } else {
                            if (text.length > 500) {
                                text = text.substr(0, 500) + "...\n\n(" + (text.length - 500) + " characters not shown)";
                            }
			    o.removeClass('hover');
                            alert("Copied text to clipboard:\n\n " + text);
                        }
                        if (settings.clickAfter) {
                            o.trigger('click');
                        }
                    });
                    clip.glue(o[0], o.parent()[0]);
		    $(window).bind('load resize',function(){clip.reposition();});
                }
            });
        } else if (typeof params == "string") {
            return this.each(function () {
                var o = $(this);
                params = params.toLowerCase();
                var zclipId = o.data('zclipId');
                var clipElm = $('#' + zclipId + '.zclip');
                if (params == "remove") {
                    clipElm.remove();
                    o.removeClass('active hover');
                } else if (params == "hide") {
                    clipElm.hide();
                    o.removeClass('active hover');
                } else if (params == "show") {
                    clipElm.show();
                }
            });
        }
    }	
})(jQuery);
var ZeroClipboard = {
    version: "1.0.7",
    clients: {},
    moviePath: 'ZeroClipboard.swf',
    nextId: 1,
    $: function (thingy) {
        if (typeof(thingy) == 'string') thingy = document.getElementById(thingy);
        if (!thingy.addClass) {
            thingy.hide = function () {
                this.style.display = 'none';
            };
            thingy.show = function () {
                this.style.display = '';
            };
            thingy.addClass = function (name) {
                this.removeClass(name);
                this.className += ' ' + name;
            };
            thingy.removeClass = function (name) {
                var classes = this.className.split(/\s+/);
                var idx = -1;
                for (var k = 0; k < classes.length; k++) {
                    if (classes[k] == name) {
                        idx = k;
                        k = classes.length;
                    }
                }
                if (idx > -1) {
                    classes.splice(idx, 1);
                    this.className = classes.join(' ');
                }
                return this;
            };
            thingy.hasClass = function (name) {
                return !!this.className.match(new RegExp("\\s*" + name + "\\s*"));
            };
        }
        return thingy;
    },
    setMoviePath: function (path) {
        this.moviePath = path;
    },
    dispatch: function (id, eventName, args) {
        var client = this.clients[id];
        if (client) {
            client.receiveEvent(eventName, args);
        }
    },
    register: function (id, client) {
        this.clients[id] = client;
    },
    getDOMObjectPosition: function (obj, stopObj) {
        var info = {
            left: 0,
            top: 0,
            width: obj.width ? obj.width : obj.offsetWidth,
            height: obj.height ? obj.height : obj.offsetHeight
        };
        if (obj && (obj != stopObj)) {
			info.left += obj.offsetLeft;
            info.top += obj.offsetTop;
        }
        return info;
    },
    Client: function (elem) {
        this.handlers = {};
        this.id = ZeroClipboard.nextId++;
        this.movieId = 'ZeroClipboardMovie_' + this.id;
        ZeroClipboard.register(this.id, this);
        if (elem) this.glue(elem);
    }
};
ZeroClipboard.Client.prototype = {
    id: 0,
    ready: false,
    movie: null,
    clipText: '',
    handCursorEnabled: true,
    cssEffects: true,
    handlers: null,
    glue: function (elem, appendElem, stylesToAdd) {
        this.domElement = ZeroClipboard.$(elem);
        var zIndex = 99;
        if (this.domElement.style.zIndex) {
            zIndex = parseInt(this.domElement.style.zIndex, 10) + 1;
        }
        if (typeof(appendElem) == 'string') {
            appendElem = ZeroClipboard.$(appendElem);
        } else if (typeof(appendElem) == 'undefined') {
            appendElem = document.getElementsByTagName('body')[0];
        }
        var box = ZeroClipboard.getDOMObjectPosition(this.domElement, appendElem);
        this.div = document.createElement('div');
        this.div.className = "zclip";
        this.div.id = "zclip-" + this.movieId;
        jQuery(this.domElement).data('zclipId', 'zclip-' + this.movieId);
        var style = this.div.style;
        style.position = 'absolute';
        style.left = '' + box.left + 'px';
        style.top = '' + box.top + 'px';
        style.width = '' + box.width + 'px';
        style.height = '' + box.height + 'px';
        style.zIndex = zIndex;
        if (typeof(stylesToAdd) == 'object') {
            for (addedStyle in stylesToAdd) {
                style[addedStyle] = stylesToAdd[addedStyle];
            }
        }
        appendElem.appendChild(this.div);
        this.div.innerHTML = this.getHTML(box.width, box.height);
    },
    getHTML: function (width, height) {
        var html = '';
        var flashvars = 'id=' + this.id + '&width=' + width + '&height=' + height;
        if (navigator.userAgent.match(/MSIE/)) {
            var protocol = location.href.match(/^https/i) ? 'https://' : 'http://';
            html += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="' + protocol + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="' + width + '" height="' + height + '" id="' + this.movieId + '" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' + ZeroClipboard.moviePath + '" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="' + flashvars + '"/><param name="wmode" value="transparent"/></object>';
        } else {
            html += '<embed id="' + this.movieId + '" src="' + ZeroClipboard.moviePath + '" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="' + width + '" height="' + height + '" name="' + this.movieId + '" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="' + flashvars + '" wmode="transparent" />';
        }
        return html;
    },
    hide: function () {
        if (this.div) {
            this.div.style.left = '-2000px';
        }
    },
    show: function () {
        this.reposition();
    },
    destroy: function () {
        if (this.domElement && this.div) {
            this.hide();
            this.div.innerHTML = '';
            var body = document.getElementsByTagName('body')[0];
            try {
                body.removeChild(this.div);
            } catch (e) {;
            }
            this.domElement = null;
            this.div = null;
        }
    },
    reposition: function (elem) {
        if (elem) {
            this.domElement = ZeroClipboard.$(elem);
            if (!this.domElement) this.hide();
        }
        if (this.domElement && this.div) {
            var box = ZeroClipboard.getDOMObjectPosition(this.domElement);
            var style = this.div.style;
            style.left = '' + box.left + 'px';
            style.top = '' + box.top + 'px';
        }
    },
    setText: function (newText) {
        this.clipText = newText;
        if (this.ready) {
            this.movie.setText(newText);
        }
    },
    addEventListener: function (eventName, func) {
        eventName = eventName.toString().toLowerCase().replace(/^on/, '');
        if (!this.handlers[eventName]) {
            this.handlers[eventName] = [];
        }
        this.handlers[eventName].push(func);
    },
    setHandCursor: function (enabled) {
        this.handCursorEnabled = enabled;
        if (this.ready) {
            this.movie.setHandCursor(enabled);
        }
    },
    setCSSEffects: function (enabled) {
        this.cssEffects = !! enabled;
    },
    receiveEvent: function (eventName, args) {
        eventName = eventName.toString().toLowerCase().replace(/^on/, '');
        switch (eventName) {
        case 'load':
            this.movie = document.getElementById(this.movieId);
            if (!this.movie) {
                var self = this;
                setTimeout(function () {
                    self.receiveEvent('load', null);
                }, 1);
                return;
            }
            if (!this.ready && navigator.userAgent.match(/Firefox/) && navigator.userAgent.match(/Windows/)) {
                var self = this;
                setTimeout(function () {
                    self.receiveEvent('load', null);
                }, 100);
                this.ready = true;
                return;
            }
            this.ready = true;
            try {
                this.movie.setText(this.clipText);
            } catch (e) {}
            try {
                this.movie.setHandCursor(this.handCursorEnabled);
            } catch (e) {}
            break;
        case 'mouseover':
            if (this.domElement && this.cssEffects) {
                this.domElement.addClass('hover');
                if (this.recoverActive) {
                    this.domElement.addClass('active');
                }
            }
            break;
        case 'mouseout':
            if (this.domElement && this.cssEffects) {
                this.recoverActive = false;
                if (this.domElement.hasClass('active')) {
                    this.domElement.removeClass('active');
                    this.recoverActive = true;
                }
                this.domElement.removeClass('hover');
            }
            break;
        case 'mousedown':
            if (this.domElement && this.cssEffects) {
                this.domElement.addClass('active');
            }
            break;
        case 'mouseup':
            if (this.domElement && this.cssEffects) {
                this.domElement.removeClass('active');
                this.recoverActive = false;
            }
            break;
        } // switch eventName
        if (this.handlers[eventName]) {
            for (var idx = 0, len = this.handlers[eventName].length; idx < len; idx++) {
                var func = this.handlers[eventName][idx];
                if (typeof(func) == 'function') {
                    func(this, args);
                } else if ((typeof(func) == 'object') && (func.length == 2)) {
                    func[0][func[1]](this, args);
                } else if (typeof(func) == 'string') {
                    window[func](this, args);
                }
            } // foreach event handler defined
        } // user defined handler for event
    }
};
jQuery(document).ready(function($){var busy=null;jQuery('#wp-chart-deletefield a').on('click',function(event){var $current=$(this);event.preventDefault();if(busy){busy.abort();}
busy=$.ajax({type:"POST",url:$('#admin-ajax-url').val(),data:{action:'nowdeletemeta',nonce:$('#wpchartgenerator_nonce').val(),postid:$('#post_id_chart').val(),datacount:$('#wpchart_countdata').val(),iddonnee:$(this).parent().parent().parent().attr('id')},beforeSend:function(){},success:function(response){location.reload();}});});return false;});
/*!
 * Bootstrap v3.3.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=f58353a31151a8c05d7c)
 * Config saved to config.json and https://gist.github.com/f58353a31151a8c05d7c
 */
if(typeof jQuery==='undefined'){throw new Error('Bootstrap\'s JavaScript requires jQuery')}
+function($){var version=$.fn.jquery.split(' ')[0].split('.')
if((version[0]<2&&version[1]<9)||(version[0]==1&&version[1]==9&&version[2]<1)){throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')}}(jQuery);+function($){'use strict';var dismiss='[data-dismiss="alert"]'
var Alert=function(el){$(el).on('click',dismiss,this.close)}
Alert.VERSION='3.3.1'
Alert.TRANSITION_DURATION=150
Alert.prototype.close=function(e){var $this=$(this)
var selector=$this.attr('data-target')
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
var $parent=$(selector)
if(e)e.preventDefault()
if(!$parent.length){$parent=$this.closest('.alert')}
$parent.trigger(e=$.Event('close.bs.alert'))
if(e.isDefaultPrevented())return
$parent.removeClass('in')
function removeElement(){$parent.detach().trigger('closed.bs.alert').remove()}
$.support.transition&&$parent.hasClass('fade')?$parent.one('bsTransitionEnd',removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION):removeElement()}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.alert')
if(!data)$this.data('bs.alert',(data=new Alert(this)))
if(typeof option=='string')data[option].call($this)})}
var old=$.fn.alert
$.fn.alert=Plugin
$.fn.alert.Constructor=Alert
$.fn.alert.noConflict=function(){$.fn.alert=old
return this}
$(document).on('click.bs.alert.data-api',dismiss,Alert.prototype.close)}(jQuery);+function($){'use strict';var Button=function(element,options){this.$element=$(element)
this.options=$.extend({},Button.DEFAULTS,options)
this.isLoading=false}
Button.VERSION='3.3.1'
Button.DEFAULTS={loadingText:'loading...'}
Button.prototype.setState=function(state){var d='disabled'
var $el=this.$element
var val=$el.is('input')?'val':'html'
var data=$el.data()
state=state+'Text'
if(data.resetText==null)$el.data('resetText',$el[val]())
setTimeout($.proxy(function(){$el[val](data[state]==null?this.options[state]:data[state])
if(state=='loadingText'){this.isLoading=true
$el.addClass(d).attr(d,d)}else if(this.isLoading){this.isLoading=false
$el.removeClass(d).removeAttr(d)}},this),0)}
Button.prototype.toggle=function(){var changed=true
var $parent=this.$element.closest('[data-toggle="buttons"]')
if($parent.length){var $input=this.$element.find('input')
if($input.prop('type')=='radio'){if($input.prop('checked')&&this.$element.hasClass('active'))changed=false
else $parent.find('.active').removeClass('active')}
if(changed)$input.prop('checked',!this.$element.hasClass('active')).trigger('change')}else{this.$element.attr('aria-pressed',!this.$element.hasClass('active'))}
if(changed)this.$element.toggleClass('active')}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.button')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.button',(data=new Button(this,options)))
if(option=='toggle')data.toggle()
else if(option)data.setState(option)})}
var old=$.fn.button
$.fn.button=Plugin
$.fn.button.Constructor=Button
$.fn.button.noConflict=function(){$.fn.button=old
return this}
$(document).on('click.bs.button.data-api','[data-toggle^="button"]',function(e){var $btn=$(e.target)
if(!$btn.hasClass('btn'))$btn=$btn.closest('.btn')
Plugin.call($btn,'toggle')
e.preventDefault()}).on('focus.bs.button.data-api blur.bs.button.data-api','[data-toggle^="button"]',function(e){$(e.target).closest('.btn').toggleClass('focus',/^focus(in)?$/.test(e.type))})}(jQuery);+function($){'use strict';var Carousel=function(element,options){this.$element=$(element)
this.$indicators=this.$element.find('.carousel-indicators')
this.options=options
this.paused=this.sliding=this.interval=this.$active=this.$items=null
this.options.keyboard&&this.$element.on('keydown.bs.carousel',$.proxy(this.keydown,this))
this.options.pause=='hover'&&!('ontouchstart'in document.documentElement)&&this.$element.on('mouseenter.bs.carousel',$.proxy(this.pause,this)).on('mouseleave.bs.carousel',$.proxy(this.cycle,this))}
Carousel.VERSION='3.3.1'
Carousel.TRANSITION_DURATION=600
Carousel.DEFAULTS={interval:5000,pause:'hover',wrap:true,keyboard:true}
Carousel.prototype.keydown=function(e){if(/input|textarea/i.test(e.target.tagName))return
switch(e.which){case 37:this.prev();break
case 39:this.next();break
default:return}
e.preventDefault()}
Carousel.prototype.cycle=function(e){e||(this.paused=false)
this.interval&&clearInterval(this.interval)
this.options.interval&&!this.paused&&(this.interval=setInterval($.proxy(this.next,this),this.options.interval))
return this}
Carousel.prototype.getItemIndex=function(item){this.$items=item.parent().children('.item')
return this.$items.index(item||this.$active)}
Carousel.prototype.getItemForDirection=function(direction,active){var delta=direction=='prev'?-1:1
var activeIndex=this.getItemIndex(active)
var itemIndex=(activeIndex+delta)%this.$items.length
return this.$items.eq(itemIndex)}
Carousel.prototype.to=function(pos){var that=this
var activeIndex=this.getItemIndex(this.$active=this.$element.find('.item.active'))
if(pos>(this.$items.length-1)||pos<0)return
if(this.sliding)return this.$element.one('slid.bs.carousel',function(){that.to(pos)})
if(activeIndex==pos)return this.pause().cycle()
return this.slide(pos>activeIndex?'next':'prev',this.$items.eq(pos))}
Carousel.prototype.pause=function(e){e||(this.paused=true)
if(this.$element.find('.next, .prev').length&&$.support.transition){this.$element.trigger($.support.transition.end)
this.cycle(true)}
this.interval=clearInterval(this.interval)
return this}
Carousel.prototype.next=function(){if(this.sliding)return
return this.slide('next')}
Carousel.prototype.prev=function(){if(this.sliding)return
return this.slide('prev')}
Carousel.prototype.slide=function(type,next){var $active=this.$element.find('.item.active')
var $next=next||this.getItemForDirection(type,$active)
var isCycling=this.interval
var direction=type=='next'?'left':'right'
var fallback=type=='next'?'first':'last'
var that=this
if(!$next.length){if(!this.options.wrap)return
$next=this.$element.find('.item')[fallback]()}
if($next.hasClass('active'))return(this.sliding=false)
var relatedTarget=$next[0]
var slideEvent=$.Event('slide.bs.carousel',{relatedTarget:relatedTarget,direction:direction})
this.$element.trigger(slideEvent)
if(slideEvent.isDefaultPrevented())return
this.sliding=true
isCycling&&this.pause()
if(this.$indicators.length){this.$indicators.find('.active').removeClass('active')
var $nextIndicator=$(this.$indicators.children()[this.getItemIndex($next)])
$nextIndicator&&$nextIndicator.addClass('active')}
var slidEvent=$.Event('slid.bs.carousel',{relatedTarget:relatedTarget,direction:direction})
if($.support.transition&&this.$element.hasClass('slide')){$next.addClass(type)
$next[0].offsetWidth
$active.addClass(direction)
$next.addClass(direction)
$active.one('bsTransitionEnd',function(){$next.removeClass([type,direction].join(' ')).addClass('active')
$active.removeClass(['active',direction].join(' '))
that.sliding=false
setTimeout(function(){that.$element.trigger(slidEvent)},0)}).emulateTransitionEnd(Carousel.TRANSITION_DURATION)}else{$active.removeClass('active')
$next.addClass('active')
this.sliding=false
this.$element.trigger(slidEvent)}
isCycling&&this.cycle()
return this}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.carousel')
var options=$.extend({},Carousel.DEFAULTS,$this.data(),typeof option=='object'&&option)
var action=typeof option=='string'?option:options.slide
if(!data)$this.data('bs.carousel',(data=new Carousel(this,options)))
if(typeof option=='number')data.to(option)
else if(action)data[action]()
else if(options.interval)data.pause().cycle()})}
var old=$.fn.carousel
$.fn.carousel=Plugin
$.fn.carousel.Constructor=Carousel
$.fn.carousel.noConflict=function(){$.fn.carousel=old
return this}
var clickHandler=function(e){var href
var $this=$(this)
var $target=$($this.attr('data-target')||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,''))
if(!$target.hasClass('carousel'))return
var options=$.extend({},$target.data(),$this.data())
var slideIndex=$this.attr('data-slide-to')
if(slideIndex)options.interval=false
Plugin.call($target,options)
if(slideIndex){$target.data('bs.carousel').to(slideIndex)}
e.preventDefault()}
$(document).on('click.bs.carousel.data-api','[data-slide]',clickHandler).on('click.bs.carousel.data-api','[data-slide-to]',clickHandler)
$(window).on('load',function(){$('[data-ride="carousel"]').each(function(){var $carousel=$(this)
Plugin.call($carousel,$carousel.data())})})}(jQuery);+function($){'use strict';var backdrop='.dropdown-backdrop'
var toggle='[data-toggle="dropdown"]'
var Dropdown=function(element){$(element).on('click.bs.dropdown',this.toggle)}
Dropdown.VERSION='3.3.1'
Dropdown.prototype.toggle=function(e){var $this=$(this)
if($this.is('.disabled, :disabled'))return
var $parent=getParent($this)
var isActive=$parent.hasClass('open')
clearMenus()
if(!isActive){if('ontouchstart'in document.documentElement&&!$parent.closest('.navbar-nav').length){$('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click',clearMenus)}
var relatedTarget={relatedTarget:this}
$parent.trigger(e=$.Event('show.bs.dropdown',relatedTarget))
if(e.isDefaultPrevented())return
$this.trigger('focus').attr('aria-expanded','true')
$parent.toggleClass('open').trigger('shown.bs.dropdown',relatedTarget)}}
Dropdown.prototype.keydown=function(e){if(!/(38|40|27|32)/.test(e.which)||/input|textarea/i.test(e.target.tagName))return
var $this=$(this)
e.preventDefault()
e.stopPropagation()
if($this.is('.disabled, :disabled'))return
var $parent=getParent($this)
var isActive=$parent.hasClass('open')
if((!isActive&&e.which!=27)||(isActive&&e.which==27)){if(e.which==27)$parent.find(toggle).trigger('focus')
return $this.trigger('click')}
var desc=' li:not(.divider):visible a'
var $items=$parent.find('[role="menu"]'+desc+', [role="listbox"]'+desc)
if(!$items.length)return
var index=$items.index(e.target)
if(e.which==38&&index>0)index--
if(e.which==40&&index<$items.length-1)index++
if(!~index)index=0
$items.eq(index).trigger('focus')}
function clearMenus(e){if(e&&e.which===3)return
$(backdrop).remove()
$(toggle).each(function(){var $this=$(this)
var $parent=getParent($this)
var relatedTarget={relatedTarget:this}
if(!$parent.hasClass('open'))return
$parent.trigger(e=$.Event('hide.bs.dropdown',relatedTarget))
if(e.isDefaultPrevented())return
$this.attr('aria-expanded','false')
$parent.removeClass('open').trigger('hidden.bs.dropdown',relatedTarget)})}
function getParent($this){var selector=$this.attr('data-target')
if(!selector){selector=$this.attr('href')
selector=selector&&/#[A-Za-z]/.test(selector)&&selector.replace(/.*(?=#[^\s]*$)/,'')}
var $parent=selector&&$(selector)
return $parent&&$parent.length?$parent:$this.parent()}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.dropdown')
if(!data)$this.data('bs.dropdown',(data=new Dropdown(this)))
if(typeof option=='string')data[option].call($this)})}
var old=$.fn.dropdown
$.fn.dropdown=Plugin
$.fn.dropdown.Constructor=Dropdown
$.fn.dropdown.noConflict=function(){$.fn.dropdown=old
return this}
$(document).on('click.bs.dropdown.data-api',clearMenus).on('click.bs.dropdown.data-api','.dropdown form',function(e){e.stopPropagation()}).on('click.bs.dropdown.data-api',toggle,Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api',toggle,Dropdown.prototype.keydown).on('keydown.bs.dropdown.data-api','[role="menu"]',Dropdown.prototype.keydown).on('keydown.bs.dropdown.data-api','[role="listbox"]',Dropdown.prototype.keydown)}(jQuery);+function($){'use strict';var Modal=function(element,options){this.options=options
this.$body=$(document.body)
this.$element=$(element)
this.$backdrop=this.isShown=null
this.scrollbarWidth=0
if(this.options.remote){this.$element.find('.modal-content').load(this.options.remote,$.proxy(function(){this.$element.trigger('loaded.bs.modal')},this))}}
Modal.VERSION='3.3.1'
Modal.TRANSITION_DURATION=300
Modal.BACKDROP_TRANSITION_DURATION=150
Modal.DEFAULTS={backdrop:true,keyboard:true,show:true}
Modal.prototype.toggle=function(_relatedTarget){return this.isShown?this.hide():this.show(_relatedTarget)}
Modal.prototype.show=function(_relatedTarget){var that=this
var e=$.Event('show.bs.modal',{relatedTarget:_relatedTarget})
this.$element.trigger(e)
if(this.isShown||e.isDefaultPrevented())return
this.isShown=true
this.checkScrollbar()
this.setScrollbar()
this.$body.addClass('modal-open')
this.escape()
this.resize()
this.$element.on('click.dismiss.bs.modal','[data-dismiss="modal"]',$.proxy(this.hide,this))
this.backdrop(function(){var transition=$.support.transition&&that.$element.hasClass('fade')
if(!that.$element.parent().length){that.$element.appendTo(that.$body)}
that.$element.show().scrollTop(0)
if(that.options.backdrop)that.adjustBackdrop()
that.adjustDialog()
if(transition){that.$element[0].offsetWidth}
that.$element.addClass('in').attr('aria-hidden',false)
that.enforceFocus()
var e=$.Event('shown.bs.modal',{relatedTarget:_relatedTarget})
transition?that.$element.find('.modal-dialog').one('bsTransitionEnd',function(){that.$element.trigger('focus').trigger(e)}).emulateTransitionEnd(Modal.TRANSITION_DURATION):that.$element.trigger('focus').trigger(e)})}
Modal.prototype.hide=function(e){if(e)e.preventDefault()
e=$.Event('hide.bs.modal')
this.$element.trigger(e)
if(!this.isShown||e.isDefaultPrevented())return
this.isShown=false
this.escape()
this.resize()
$(document).off('focusin.bs.modal')
this.$element.removeClass('in').attr('aria-hidden',true).off('click.dismiss.bs.modal')
$.support.transition&&this.$element.hasClass('fade')?this.$element.one('bsTransitionEnd',$.proxy(this.hideModal,this)).emulateTransitionEnd(Modal.TRANSITION_DURATION):this.hideModal()}
Modal.prototype.enforceFocus=function(){$(document).off('focusin.bs.modal').on('focusin.bs.modal',$.proxy(function(e){if(this.$element[0]!==e.target&&!this.$element.has(e.target).length){this.$element.trigger('focus')}},this))}
Modal.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on('keydown.dismiss.bs.modal',$.proxy(function(e){e.which==27&&this.hide()},this))}else if(!this.isShown){this.$element.off('keydown.dismiss.bs.modal')}}
Modal.prototype.resize=function(){if(this.isShown){$(window).on('resize.bs.modal',$.proxy(this.handleUpdate,this))}else{$(window).off('resize.bs.modal')}}
Modal.prototype.hideModal=function(){var that=this
this.$element.hide()
this.backdrop(function(){that.$body.removeClass('modal-open')
that.resetAdjustments()
that.resetScrollbar()
that.$element.trigger('hidden.bs.modal')})}
Modal.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove()
this.$backdrop=null}
Modal.prototype.backdrop=function(callback){var that=this
var animate=this.$element.hasClass('fade')?'fade':''
if(this.isShown&&this.options.backdrop){var doAnimate=$.support.transition&&animate
this.$backdrop=$('<div class="modal-backdrop '+animate+'" />').prependTo(this.$element).on('click.dismiss.bs.modal',$.proxy(function(e){if(e.target!==e.currentTarget)return
this.options.backdrop=='static'?this.$element[0].focus.call(this.$element[0]):this.hide.call(this)},this))
if(doAnimate)this.$backdrop[0].offsetWidth
this.$backdrop.addClass('in')
if(!callback)return
doAnimate?this.$backdrop.one('bsTransitionEnd',callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callback()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass('in')
var callbackRemove=function(){that.removeBackdrop()
callback&&callback()}
$.support.transition&&this.$element.hasClass('fade')?this.$backdrop.one('bsTransitionEnd',callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callbackRemove()}else if(callback){callback()}}
Modal.prototype.handleUpdate=function(){if(this.options.backdrop)this.adjustBackdrop()
this.adjustDialog()}
Modal.prototype.adjustBackdrop=function(){this.$backdrop.css('height',0).css('height',this.$element[0].scrollHeight)}
Modal.prototype.adjustDialog=function(){var modalIsOverflowing=this.$element[0].scrollHeight>document.documentElement.clientHeight
this.$element.css({paddingLeft:!this.bodyIsOverflowing&&modalIsOverflowing?this.scrollbarWidth:'',paddingRight:this.bodyIsOverflowing&&!modalIsOverflowing?this.scrollbarWidth:''})}
Modal.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:'',paddingRight:''})}
Modal.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight
this.scrollbarWidth=this.measureScrollbar()}
Modal.prototype.setScrollbar=function(){var bodyPad=parseInt((this.$body.css('padding-right')||0),10)
if(this.bodyIsOverflowing)this.$body.css('padding-right',bodyPad+this.scrollbarWidth)}
Modal.prototype.resetScrollbar=function(){this.$body.css('padding-right','')}
Modal.prototype.measureScrollbar=function(){var scrollDiv=document.createElement('div')
scrollDiv.className='modal-scrollbar-measure'
this.$body.append(scrollDiv)
var scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth
this.$body[0].removeChild(scrollDiv)
return scrollbarWidth}
function Plugin(option,_relatedTarget){return this.each(function(){var $this=$(this)
var data=$this.data('bs.modal')
var options=$.extend({},Modal.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data)$this.data('bs.modal',(data=new Modal(this,options)))
if(typeof option=='string')data[option](_relatedTarget)
else if(options.show)data.show(_relatedTarget)})}
var old=$.fn.modal
$.fn.modal=Plugin
$.fn.modal.Constructor=Modal
$.fn.modal.noConflict=function(){$.fn.modal=old
return this}
$(document).on('click.bs.modal.data-api','[data-toggle="modal"]',function(e){var $this=$(this)
var href=$this.attr('href')
var $target=$($this.attr('data-target')||(href&&href.replace(/.*(?=#[^\s]+$)/,'')))
var option=$target.data('bs.modal')?'toggle':$.extend({remote:!/#/.test(href)&&href},$target.data(),$this.data())
if($this.is('a'))e.preventDefault()
$target.one('show.bs.modal',function(showEvent){if(showEvent.isDefaultPrevented())return
$target.one('hidden.bs.modal',function(){$this.is(':visible')&&$this.trigger('focus')})})
Plugin.call($target,option,this)})}(jQuery);+function($){'use strict';var Tooltip=function(element,options){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null
this.init('tooltip',element,options)}
Tooltip.VERSION='3.3.1'
Tooltip.TRANSITION_DURATION=150
Tooltip.DEFAULTS={animation:true,placement:'top',selector:false,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:'hover focus',title:'',delay:0,html:false,container:false,viewport:{selector:'body',padding:0}}
Tooltip.prototype.init=function(type,element,options){this.enabled=true
this.type=type
this.$element=$(element)
this.options=this.getOptions(options)
this.$viewport=this.options.viewport&&$(this.options.viewport.selector||this.options.viewport)
var triggers=this.options.trigger.split(' ')
for(var i=triggers.length;i--;){var trigger=triggers[i]
if(trigger=='click'){this.$element.on('click.'+this.type,this.options.selector,$.proxy(this.toggle,this))}else if(trigger!='manual'){var eventIn=trigger=='hover'?'mouseenter':'focusin'
var eventOut=trigger=='hover'?'mouseleave':'focusout'
this.$element.on(eventIn+'.'+this.type,this.options.selector,$.proxy(this.enter,this))
this.$element.on(eventOut+'.'+this.type,this.options.selector,$.proxy(this.leave,this))}}
this.options.selector?(this._options=$.extend({},this.options,{trigger:'manual',selector:''})):this.fixTitle()}
Tooltip.prototype.getDefaults=function(){return Tooltip.DEFAULTS}
Tooltip.prototype.getOptions=function(options){options=$.extend({},this.getDefaults(),this.$element.data(),options)
if(options.delay&&typeof options.delay=='number'){options.delay={show:options.delay,hide:options.delay}}
return options}
Tooltip.prototype.getDelegateOptions=function(){var options={}
var defaults=this.getDefaults()
this._options&&$.each(this._options,function(key,value){if(defaults[key]!=value)options[key]=value})
return options}
Tooltip.prototype.enter=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data('bs.'+this.type)
if(self&&self.$tip&&self.$tip.is(':visible')){self.hoverState='in'
return}
if(!self){self=new this.constructor(obj.currentTarget,this.getDelegateOptions())
$(obj.currentTarget).data('bs.'+this.type,self)}
clearTimeout(self.timeout)
self.hoverState='in'
if(!self.options.delay||!self.options.delay.show)return self.show()
self.timeout=setTimeout(function(){if(self.hoverState=='in')self.show()},self.options.delay.show)}
Tooltip.prototype.leave=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data('bs.'+this.type)
if(!self){self=new this.constructor(obj.currentTarget,this.getDelegateOptions())
$(obj.currentTarget).data('bs.'+this.type,self)}
clearTimeout(self.timeout)
self.hoverState='out'
if(!self.options.delay||!self.options.delay.hide)return self.hide()
self.timeout=setTimeout(function(){if(self.hoverState=='out')self.hide()},self.options.delay.hide)}
Tooltip.prototype.show=function(){var e=$.Event('show.bs.'+this.type)
if(this.hasContent()&&this.enabled){this.$element.trigger(e)
var inDom=$.contains(this.$element[0].ownerDocument.documentElement,this.$element[0])
if(e.isDefaultPrevented()||!inDom)return
var that=this
var $tip=this.tip()
var tipId=this.getUID(this.type)
this.setContent()
$tip.attr('id',tipId)
this.$element.attr('aria-describedby',tipId)
if(this.options.animation)$tip.addClass('fade')
var placement=typeof this.options.placement=='function'?this.options.placement.call(this,$tip[0],this.$element[0]):this.options.placement
var autoToken=/\s?auto?\s?/i
var autoPlace=autoToken.test(placement)
if(autoPlace)placement=placement.replace(autoToken,'')||'top'
$tip.detach().css({top:0,left:0,display:'block'}).addClass(placement).data('bs.'+this.type,this)
this.options.container?$tip.appendTo(this.options.container):$tip.insertAfter(this.$element)
var pos=this.getPosition()
var actualWidth=$tip[0].offsetWidth
var actualHeight=$tip[0].offsetHeight
if(autoPlace){var orgPlacement=placement
var $container=this.options.container?$(this.options.container):this.$element.parent()
var containerDim=this.getPosition($container)
placement=placement=='bottom'&&pos.bottom+actualHeight>containerDim.bottom?'top':placement=='top'&&pos.top-actualHeight<containerDim.top?'bottom':placement=='right'&&pos.right+actualWidth>containerDim.width?'left':placement=='left'&&pos.left-actualWidth<containerDim.left?'right':placement
$tip.removeClass(orgPlacement).addClass(placement)}
var calculatedOffset=this.getCalculatedOffset(placement,pos,actualWidth,actualHeight)
this.applyPlacement(calculatedOffset,placement)
var complete=function(){var prevHoverState=that.hoverState
that.$element.trigger('shown.bs.'+that.type)
that.hoverState=null
if(prevHoverState=='out')that.leave(that)}
$.support.transition&&this.$tip.hasClass('fade')?$tip.one('bsTransitionEnd',complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION):complete()}}
Tooltip.prototype.applyPlacement=function(offset,placement){var $tip=this.tip()
var width=$tip[0].offsetWidth
var height=$tip[0].offsetHeight
var marginTop=parseInt($tip.css('margin-top'),10)
var marginLeft=parseInt($tip.css('margin-left'),10)
if(isNaN(marginTop))marginTop=0
if(isNaN(marginLeft))marginLeft=0
offset.top=offset.top+marginTop
offset.left=offset.left+marginLeft
$.offset.setOffset($tip[0],$.extend({using:function(props){$tip.css({top:Math.round(props.top),left:Math.round(props.left)})}},offset),0)
$tip.addClass('in')
var actualWidth=$tip[0].offsetWidth
var actualHeight=$tip[0].offsetHeight
if(placement=='top'&&actualHeight!=height){offset.top=offset.top+height-actualHeight}
var delta=this.getViewportAdjustedDelta(placement,offset,actualWidth,actualHeight)
if(delta.left)offset.left+=delta.left
else offset.top+=delta.top
var isVertical=/top|bottom/.test(placement)
var arrowDelta=isVertical?delta.left*2-width+actualWidth:delta.top*2-height+actualHeight
var arrowOffsetPosition=isVertical?'offsetWidth':'offsetHeight'
$tip.offset(offset)
this.replaceArrow(arrowDelta,$tip[0][arrowOffsetPosition],isVertical)}
Tooltip.prototype.replaceArrow=function(delta,dimension,isHorizontal){this.arrow().css(isHorizontal?'left':'top',50*(1-delta/dimension)+'%').css(isHorizontal?'top':'left','')}
Tooltip.prototype.setContent=function(){var $tip=this.tip()
var title=this.getTitle()
$tip.find('.tooltip-inner')[this.options.html?'html':'text'](title)
$tip.removeClass('fade in top bottom left right')}
Tooltip.prototype.hide=function(callback){var that=this
var $tip=this.tip()
var e=$.Event('hide.bs.'+this.type)
function complete(){if(that.hoverState!='in')$tip.detach()
that.$element.removeAttr('aria-describedby').trigger('hidden.bs.'+that.type)
callback&&callback()}
this.$element.trigger(e)
if(e.isDefaultPrevented())return
$tip.removeClass('in')
$.support.transition&&this.$tip.hasClass('fade')?$tip.one('bsTransitionEnd',complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION):complete()
this.hoverState=null
return this}
Tooltip.prototype.fixTitle=function(){var $e=this.$element
if($e.attr('title')||typeof($e.attr('data-original-title'))!='string'){$e.attr('data-original-title',$e.attr('title')||'').attr('title','')}}
Tooltip.prototype.hasContent=function(){return this.getTitle()}
Tooltip.prototype.getPosition=function($element){$element=$element||this.$element
var el=$element[0]
var isBody=el.tagName=='BODY'
var elRect=el.getBoundingClientRect()
if(elRect.width==null){elRect=$.extend({},elRect,{width:elRect.right-elRect.left,height:elRect.bottom-elRect.top})}
var elOffset=isBody?{top:0,left:0}:$element.offset()
var scroll={scroll:isBody?document.documentElement.scrollTop||document.body.scrollTop:$element.scrollTop()}
var outerDims=isBody?{width:$(window).width(),height:$(window).height()}:null
return $.extend({},elRect,scroll,outerDims,elOffset)}
Tooltip.prototype.getCalculatedOffset=function(placement,pos,actualWidth,actualHeight){return placement=='bottom'?{top:pos.top+pos.height,left:pos.left+pos.width/2-actualWidth/2}:placement=='top'?{top:pos.top-actualHeight,left:pos.left+pos.width/2-actualWidth/2}:placement=='left'?{top:pos.top+pos.height/2-actualHeight/2,left:pos.left-actualWidth}:{top:pos.top+pos.height/2-actualHeight/2,left:pos.left+pos.width}}
Tooltip.prototype.getViewportAdjustedDelta=function(placement,pos,actualWidth,actualHeight){var delta={top:0,left:0}
if(!this.$viewport)return delta
var viewportPadding=this.options.viewport&&this.options.viewport.padding||0
var viewportDimensions=this.getPosition(this.$viewport)
if(/right|left/.test(placement)){var topEdgeOffset=pos.top-viewportPadding-viewportDimensions.scroll
var bottomEdgeOffset=pos.top+viewportPadding-viewportDimensions.scroll+actualHeight
if(topEdgeOffset<viewportDimensions.top){delta.top=viewportDimensions.top-topEdgeOffset}else if(bottomEdgeOffset>viewportDimensions.top+viewportDimensions.height){delta.top=viewportDimensions.top+viewportDimensions.height-bottomEdgeOffset}}else{var leftEdgeOffset=pos.left-viewportPadding
var rightEdgeOffset=pos.left+viewportPadding+actualWidth
if(leftEdgeOffset<viewportDimensions.left){delta.left=viewportDimensions.left-leftEdgeOffset}else if(rightEdgeOffset>viewportDimensions.width){delta.left=viewportDimensions.left+viewportDimensions.width-rightEdgeOffset}}
return delta}
Tooltip.prototype.getTitle=function(){var title
var $e=this.$element
var o=this.options
title=$e.attr('data-original-title')||(typeof o.title=='function'?o.title.call($e[0]):o.title)
return title}
Tooltip.prototype.getUID=function(prefix){do prefix+=~~(Math.random()*1000000)
while(document.getElementById(prefix))
return prefix}
Tooltip.prototype.tip=function(){return(this.$tip=this.$tip||$(this.options.template))}
Tooltip.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find('.tooltip-arrow'))}
Tooltip.prototype.enable=function(){this.enabled=true}
Tooltip.prototype.disable=function(){this.enabled=false}
Tooltip.prototype.toggleEnabled=function(){this.enabled=!this.enabled}
Tooltip.prototype.toggle=function(e){var self=this
if(e){self=$(e.currentTarget).data('bs.'+this.type)
if(!self){self=new this.constructor(e.currentTarget,this.getDelegateOptions())
$(e.currentTarget).data('bs.'+this.type,self)}}
self.tip().hasClass('in')?self.leave(self):self.enter(self)}
Tooltip.prototype.destroy=function(){var that=this
clearTimeout(this.timeout)
this.hide(function(){that.$element.off('.'+that.type).removeData('bs.'+that.type)})}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.tooltip')
var options=typeof option=='object'&&option
var selector=options&&options.selector
if(!data&&option=='destroy')return
if(selector){if(!data)$this.data('bs.tooltip',(data={}))
if(!data[selector])data[selector]=new Tooltip(this,options)}else{if(!data)$this.data('bs.tooltip',(data=new Tooltip(this,options)))}
if(typeof option=='string')data[option]()})}
var old=$.fn.tooltip
$.fn.tooltip=Plugin
$.fn.tooltip.Constructor=Tooltip
$.fn.tooltip.noConflict=function(){$.fn.tooltip=old
return this}}(jQuery);+function($){'use strict';var Popover=function(element,options){this.init('popover',element,options)}
if(!$.fn.tooltip)throw new Error('Popover requires tooltip.js')
Popover.VERSION='3.3.1'
Popover.DEFAULTS=$.extend({},$.fn.tooltip.Constructor.DEFAULTS,{placement:'right',trigger:'click',content:'',template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'})
Popover.prototype=$.extend({},$.fn.tooltip.Constructor.prototype)
Popover.prototype.constructor=Popover
Popover.prototype.getDefaults=function(){return Popover.DEFAULTS}
Popover.prototype.setContent=function(){var $tip=this.tip()
var title=this.getTitle()
var content=this.getContent()
$tip.find('.popover-title')[this.options.html?'html':'text'](title)
$tip.find('.popover-content').children().detach().end()[this.options.html?(typeof content=='string'?'html':'append'):'text'](content)
$tip.removeClass('fade top bottom left right in')
if(!$tip.find('.popover-title').html())$tip.find('.popover-title').hide()}
Popover.prototype.hasContent=function(){return this.getTitle()||this.getContent()}
Popover.prototype.getContent=function(){var $e=this.$element
var o=this.options
return $e.attr('data-content')||(typeof o.content=='function'?o.content.call($e[0]):o.content)}
Popover.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find('.arrow'))}
Popover.prototype.tip=function(){if(!this.$tip)this.$tip=$(this.options.template)
return this.$tip}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.popover')
var options=typeof option=='object'&&option
var selector=options&&options.selector
if(!data&&option=='destroy')return
if(selector){if(!data)$this.data('bs.popover',(data={}))
if(!data[selector])data[selector]=new Popover(this,options)}else{if(!data)$this.data('bs.popover',(data=new Popover(this,options)))}
if(typeof option=='string')data[option]()})}
var old=$.fn.popover
$.fn.popover=Plugin
$.fn.popover.Constructor=Popover
$.fn.popover.noConflict=function(){$.fn.popover=old
return this}}(jQuery);+function($){'use strict';var Tab=function(element){this.element=$(element)}
Tab.VERSION='3.3.1'
Tab.TRANSITION_DURATION=150
Tab.prototype.show=function(){var $this=this.element
var $ul=$this.closest('ul:not(.dropdown-menu)')
var selector=$this.data('target')
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
if($this.parent('li').hasClass('active'))return
var $previous=$ul.find('.active:last a')
var hideEvent=$.Event('hide.bs.tab',{relatedTarget:$this[0]})
var showEvent=$.Event('show.bs.tab',{relatedTarget:$previous[0]})
$previous.trigger(hideEvent)
$this.trigger(showEvent)
if(showEvent.isDefaultPrevented()||hideEvent.isDefaultPrevented())return
var $target=$(selector)
this.activate($this.closest('li'),$ul)
this.activate($target,$target.parent(),function(){$previous.trigger({type:'hidden.bs.tab',relatedTarget:$this[0]})
$this.trigger({type:'shown.bs.tab',relatedTarget:$previous[0]})})}
Tab.prototype.activate=function(element,container,callback){var $active=container.find('> .active')
var transition=callback&&$.support.transition&&(($active.length&&$active.hasClass('fade'))||!!container.find('> .fade').length)
function next(){$active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded',false)
element.addClass('active').find('[data-toggle="tab"]').attr('aria-expanded',true)
if(transition){element[0].offsetWidth
element.addClass('in')}else{element.removeClass('fade')}
if(element.parent('.dropdown-menu')){element.closest('li.dropdown').addClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded',true)}
callback&&callback()}
$active.length&&transition?$active.one('bsTransitionEnd',next).emulateTransitionEnd(Tab.TRANSITION_DURATION):next()
$active.removeClass('in')}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.tab')
if(!data)$this.data('bs.tab',(data=new Tab(this)))
if(typeof option=='string')data[option]()})}
var old=$.fn.tab
$.fn.tab=Plugin
$.fn.tab.Constructor=Tab
$.fn.tab.noConflict=function(){$.fn.tab=old
return this}
var clickHandler=function(e){e.preventDefault()
Plugin.call($(this),'show')}
$(document).on('click.bs.tab.data-api','[data-toggle="tab"]',clickHandler).on('click.bs.tab.data-api','[data-toggle="pill"]',clickHandler)}(jQuery);+function($){'use strict';var Affix=function(element,options){this.options=$.extend({},Affix.DEFAULTS,options)
this.$target=$(this.options.target).on('scroll.bs.affix.data-api',$.proxy(this.checkPosition,this)).on('click.bs.affix.data-api',$.proxy(this.checkPositionWithEventLoop,this))
this.$element=$(element)
this.affixed=this.unpin=this.pinnedOffset=null
this.checkPosition()}
Affix.VERSION='3.3.1'
Affix.RESET='affix affix-top affix-bottom'
Affix.DEFAULTS={offset:0,target:window}
Affix.prototype.getState=function(scrollHeight,height,offsetTop,offsetBottom){var scrollTop=this.$target.scrollTop()
var position=this.$element.offset()
var targetHeight=this.$target.height()
if(offsetTop!=null&&this.affixed=='top')return scrollTop<offsetTop?'top':false
if(this.affixed=='bottom'){if(offsetTop!=null)return(scrollTop+this.unpin<=position.top)?false:'bottom'
return(scrollTop+targetHeight<=scrollHeight-offsetBottom)?false:'bottom'}
var initializing=this.affixed==null
var colliderTop=initializing?scrollTop:position.top
var colliderHeight=initializing?targetHeight:height
if(offsetTop!=null&&colliderTop<=offsetTop)return'top'
if(offsetBottom!=null&&(colliderTop+colliderHeight>=scrollHeight-offsetBottom))return'bottom'
return false}
Affix.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset
this.$element.removeClass(Affix.RESET).addClass('affix')
var scrollTop=this.$target.scrollTop()
var position=this.$element.offset()
return(this.pinnedOffset=position.top-scrollTop)}
Affix.prototype.checkPositionWithEventLoop=function(){setTimeout($.proxy(this.checkPosition,this),1)}
Affix.prototype.checkPosition=function(){if(!this.$element.is(':visible'))return
var height=this.$element.height()
var offset=this.options.offset
var offsetTop=offset.top
var offsetBottom=offset.bottom
var scrollHeight=$('body').height()
if(typeof offset!='object')offsetBottom=offsetTop=offset
if(typeof offsetTop=='function')offsetTop=offset.top(this.$element)
if(typeof offsetBottom=='function')offsetBottom=offset.bottom(this.$element)
var affix=this.getState(scrollHeight,height,offsetTop,offsetBottom)
if(this.affixed!=affix){if(this.unpin!=null)this.$element.css('top','')
var affixType='affix'+(affix?'-'+affix:'')
var e=$.Event(affixType+'.bs.affix')
this.$element.trigger(e)
if(e.isDefaultPrevented())return
this.affixed=affix
this.unpin=affix=='bottom'?this.getPinnedOffset():null
this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace('affix','affixed')+'.bs.affix')}
if(affix=='bottom'){this.$element.offset({top:scrollHeight-height-offsetBottom})}}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.affix')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.affix',(data=new Affix(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.affix
$.fn.affix=Plugin
$.fn.affix.Constructor=Affix
$.fn.affix.noConflict=function(){$.fn.affix=old
return this}
$(window).on('load',function(){$('[data-spy="affix"]').each(function(){var $spy=$(this)
var data=$spy.data()
data.offset=data.offset||{}
if(data.offsetBottom!=null)data.offset.bottom=data.offsetBottom
if(data.offsetTop!=null)data.offset.top=data.offsetTop
Plugin.call($spy,data)})})}(jQuery);+function($){'use strict';var Collapse=function(element,options){this.$element=$(element)
this.options=$.extend({},Collapse.DEFAULTS,options)
this.$trigger=$(this.options.trigger).filter('[href="#'+element.id+'"], [data-target="#'+element.id+'"]')
this.transitioning=null
if(this.options.parent){this.$parent=this.getParent()}else{this.addAriaAndCollapsedClass(this.$element,this.$trigger)}
if(this.options.toggle)this.toggle()}
Collapse.VERSION='3.3.1'
Collapse.TRANSITION_DURATION=350
Collapse.DEFAULTS={toggle:true,trigger:'[data-toggle="collapse"]'}
Collapse.prototype.dimension=function(){var hasWidth=this.$element.hasClass('width')
return hasWidth?'width':'height'}
Collapse.prototype.show=function(){if(this.transitioning||this.$element.hasClass('in'))return
var activesData
var actives=this.$parent&&this.$parent.find('> .panel').children('.in, .collapsing')
if(actives&&actives.length){activesData=actives.data('bs.collapse')
if(activesData&&activesData.transitioning)return}
var startEvent=$.Event('show.bs.collapse')
this.$element.trigger(startEvent)
if(startEvent.isDefaultPrevented())return
if(actives&&actives.length){Plugin.call(actives,'hide')
activesData||actives.data('bs.collapse',null)}
var dimension=this.dimension()
this.$element.removeClass('collapse').addClass('collapsing')[dimension](0).attr('aria-expanded',true)
this.$trigger.removeClass('collapsed').attr('aria-expanded',true)
this.transitioning=1
var complete=function(){this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('')
this.transitioning=0
this.$element.trigger('shown.bs.collapse')}
if(!$.support.transition)return complete.call(this)
var scrollSize=$.camelCase(['scroll',dimension].join('-'))
this.$element.one('bsTransitionEnd',$.proxy(complete,this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])}
Collapse.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass('in'))return
var startEvent=$.Event('hide.bs.collapse')
this.$element.trigger(startEvent)
if(startEvent.isDefaultPrevented())return
var dimension=this.dimension()
this.$element[dimension](this.$element[dimension]())[0].offsetHeight
this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded',false)
this.$trigger.addClass('collapsed').attr('aria-expanded',false)
this.transitioning=1
var complete=function(){this.transitioning=0
this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse')}
if(!$.support.transition)return complete.call(this)
this.$element
[dimension](0).one('bsTransitionEnd',$.proxy(complete,this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)}
Collapse.prototype.toggle=function(){this[this.$element.hasClass('in')?'hide':'show']()}
Collapse.prototype.getParent=function(){return $(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each($.proxy(function(i,element){var $element=$(element)
this.addAriaAndCollapsedClass(getTargetFromTrigger($element),$element)},this)).end()}
Collapse.prototype.addAriaAndCollapsedClass=function($element,$trigger){var isOpen=$element.hasClass('in')
$element.attr('aria-expanded',isOpen)
$trigger.toggleClass('collapsed',!isOpen).attr('aria-expanded',isOpen)}
function getTargetFromTrigger($trigger){var href
var target=$trigger.attr('data-target')||(href=$trigger.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,'')
return $(target)}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.collapse')
var options=$.extend({},Collapse.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data&&options.toggle&&option=='show')options.toggle=false
if(!data)$this.data('bs.collapse',(data=new Collapse(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.collapse
$.fn.collapse=Plugin
$.fn.collapse.Constructor=Collapse
$.fn.collapse.noConflict=function(){$.fn.collapse=old
return this}
$(document).on('click.bs.collapse.data-api','[data-toggle="collapse"]',function(e){var $this=$(this)
if(!$this.attr('data-target'))e.preventDefault()
var $target=getTargetFromTrigger($this)
var data=$target.data('bs.collapse')
var option=data?'toggle':$.extend({},$this.data(),{trigger:this})
Plugin.call($target,option)})}(jQuery);+function($){'use strict';function ScrollSpy(element,options){var process=$.proxy(this.process,this)
this.$body=$('body')
this.$scrollElement=$(element).is('body')?$(window):$(element)
this.options=$.extend({},ScrollSpy.DEFAULTS,options)
this.selector=(this.options.target||'')+' .nav li > a'
this.offsets=[]
this.targets=[]
this.activeTarget=null
this.scrollHeight=0
this.$scrollElement.on('scroll.bs.scrollspy',process)
this.refresh()
this.process()}
ScrollSpy.VERSION='3.3.1'
ScrollSpy.DEFAULTS={offset:10}
ScrollSpy.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)}
ScrollSpy.prototype.refresh=function(){var offsetMethod='offset'
var offsetBase=0
if(!$.isWindow(this.$scrollElement[0])){offsetMethod='position'
offsetBase=this.$scrollElement.scrollTop()}
this.offsets=[]
this.targets=[]
this.scrollHeight=this.getScrollHeight()
var self=this
this.$body.find(this.selector).map(function(){var $el=$(this)
var href=$el.data('target')||$el.attr('href')
var $href=/^#./.test(href)&&$(href)
return($href&&$href.length&&$href.is(':visible')&&[[$href[offsetMethod]().top+offsetBase,href]])||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){self.offsets.push(this[0])
self.targets.push(this[1])})}
ScrollSpy.prototype.process=function(){var scrollTop=this.$scrollElement.scrollTop()+this.options.offset
var scrollHeight=this.getScrollHeight()
var maxScroll=this.options.offset+scrollHeight-this.$scrollElement.height()
var offsets=this.offsets
var targets=this.targets
var activeTarget=this.activeTarget
var i
if(this.scrollHeight!=scrollHeight){this.refresh()}
if(scrollTop>=maxScroll){return activeTarget!=(i=targets[targets.length-1])&&this.activate(i)}
if(activeTarget&&scrollTop<offsets[0]){this.activeTarget=null
return this.clear()}
for(i=offsets.length;i--;){activeTarget!=targets[i]&&scrollTop>=offsets[i]&&(!offsets[i+1]||scrollTop<=offsets[i+1])&&this.activate(targets[i])}}
ScrollSpy.prototype.activate=function(target){this.activeTarget=target
this.clear()
var selector=this.selector+'[data-target="'+target+'"],'+
this.selector+'[href="'+target+'"]'
var active=$(selector).parents('li').addClass('active')
if(active.parent('.dropdown-menu').length){active=active.closest('li.dropdown').addClass('active')}
active.trigger('activate.bs.scrollspy')}
ScrollSpy.prototype.clear=function(){$(this.selector).parentsUntil(this.options.target,'.active').removeClass('active')}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.scrollspy')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.scrollspy',(data=new ScrollSpy(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.scrollspy
$.fn.scrollspy=Plugin
$.fn.scrollspy.Constructor=ScrollSpy
$.fn.scrollspy.noConflict=function(){$.fn.scrollspy=old
return this}
$(window).on('load.bs.scrollspy.data-api',function(){$('[data-spy="scroll"]').each(function(){var $spy=$(this)
Plugin.call($spy,$spy.data())})})}(jQuery);+function($){'use strict';function transitionEnd(){var el=document.createElement('bootstrap')
var transEndEventNames={WebkitTransition:'webkitTransitionEnd',MozTransition:'transitionend',OTransition:'oTransitionEnd otransitionend',transition:'transitionend'}
for(var name in transEndEventNames){if(el.style[name]!==undefined){return{end:transEndEventNames[name]}}}
return false}
$.fn.emulateTransitionEnd=function(duration){var called=false
var $el=this
$(this).one('bsTransitionEnd',function(){called=true})
var callback=function(){if(!called)$($el).trigger($.support.transition.end)}
setTimeout(callback,duration)
return this}
$(function(){$.support.transition=transitionEnd()
if(!$.support.transition)return
$.event.special.bsTransitionEnd={bindType:$.support.transition.end,delegateType:$.support.transition.end,handle:function(e){if($(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}})}(jQuery);
jQuery(document).ready(function($){$('input.search-field').addClass('form-control');$('.comment-reply-link').addClass('btn btn-primary');$('#commentsubmit').addClass('btn btn-primary');$('input.search-field').addClass('form-control');$('input.search-submit').addClass('btn btn-default');$('.widget_rss ul').addClass('media-list');$('.widget_meta ul, .widget_recent_entries ul, .widget_archive ul, .widget_categories ul, .widget_nav_menu ul, .widget_pages ul').addClass('nav');$('.widget_recent_comments ul#recentcomments').css('list-style','none').css('padding-left','0');$('.widget_recent_comments ul#recentcomments li').css('padding','5px 15px');$('table#wp-calendar').addClass('table table-striped');});
if(typeof Object.create!=='function'){Object.create=function(obj){function F(){};F.prototype=obj;return new F();};}
(function($,window,document,undefined){var ElevateZoom={init:function(options,elem){var self=this;self.elem=elem;self.$elem=$(elem);self.imageSrc=self.$elem.data("zoom-image")?self.$elem.data("zoom-image"):self.$elem.attr("src");self.options=$.extend({},$.fn.elevateZoom.options,options);if(self.options.tint){self.options.lensColour="none",self.options.lensOpacity="1"}
if(self.options.zoomType=="inner"){self.options.showLens=false;}
self.$elem.parent().removeAttr('title').removeAttr('alt');self.zoomImage=self.imageSrc;self.refresh(1);$('#'+self.options.gallery+' a').click(function(e){if(self.options.galleryActiveClass){$('#'+self.options.gallery+' a').removeClass(self.options.galleryActiveClass);$(this).addClass(self.options.galleryActiveClass);}
e.preventDefault();if($(this).data("zoom-image")){self.zoomImagePre=$(this).data("zoom-image")}
else{self.zoomImagePre=$(this).data("image");}
self.swaptheimage($(this).data("image"),self.zoomImagePre);return false;});},refresh:function(length){var self=this;setTimeout(function(){self.fetch(self.imageSrc);},length||self.options.refresh);},fetch:function(imgsrc){var self=this;var newImg=new Image();newImg.onload=function(){self.largeWidth=newImg.width;self.largeHeight=newImg.height;self.startZoom();self.currentImage=self.imageSrc;self.options.onZoomedImageLoaded(self.$elem);}
newImg.src=imgsrc;return;},startZoom:function(){var self=this;self.nzWidth=self.$elem.width();self.nzHeight=self.$elem.height();self.isWindowActive=false;self.isLensActive=false;self.isTintActive=false;self.overWindow=false;if(self.options.imageCrossfade){self.zoomWrap=self.$elem.wrap('<div style="height:'+self.nzHeight+'px;width:'+self.nzWidth+'px;" class="zoomWrapper" />');self.$elem.css('position','absolute');}
self.zoomLock=1;self.scrollingLock=false;self.changeBgSize=false;self.currentZoomLevel=self.options.zoomLevel;self.nzOffset=self.$elem.offset();self.widthRatio=(self.largeWidth/self.currentZoomLevel)/self.nzWidth;self.heightRatio=(self.largeHeight/self.currentZoomLevel)/self.nzHeight;if(self.options.zoomType=="window"){self.zoomWindowStyle="overflow: hidden;"
+"background-position: 0px 0px;text-align:center;"
+"background-color: "+String(self.options.zoomWindowBgColour)
+";width: "+String(self.options.zoomWindowWidth)+"px;"
+"height: "+String(self.options.zoomWindowHeight)
+"px;float: left;"
+"background-size: "+self.largeWidth/self.currentZoomLevel+"px "+self.largeHeight/self.currentZoomLevel+"px;"
+"display: none;z-index:100;"
+"border: "+String(self.options.borderSize)
+"px solid "+self.options.borderColour
+";background-repeat: no-repeat;"
+"position: absolute;";}
if(self.options.zoomType=="inner"){var borderWidth=self.$elem.css("border-left-width");self.zoomWindowStyle="overflow: hidden;"
+"margin-left: "+String(borderWidth)+";"
+"margin-top: "+String(borderWidth)+";"
+"background-position: 0px 0px;"
+"width: "+String(self.nzWidth)+"px;"
+"height: "+String(self.nzHeight)+"px;"
+"px;float: left;"
+"display: none;"
+"cursor:"+(self.options.cursor)+";"
+"px solid "+self.options.borderColour
+";background-repeat: no-repeat;"
+"position: absolute;";}
if(self.options.zoomType=="window"){if(self.nzHeight<self.options.zoomWindowWidth/self.widthRatio){lensHeight=self.nzHeight;}
else{lensHeight=String((self.options.zoomWindowHeight/self.heightRatio))}
if(self.largeWidth<self.options.zoomWindowWidth){lensWidth=self.nzWidth;}
else{lensWidth=(self.options.zoomWindowWidth/self.widthRatio);}
self.lensStyle="background-position: 0px 0px;width: "+String((self.options.zoomWindowWidth)/self.widthRatio)+"px;height: "+String((self.options.zoomWindowHeight)/self.heightRatio)
+"px;float: right;display: none;"
+"overflow: hidden;"
+"z-index: 999;"
+"-webkit-transform: translateZ(0);"
+"opacity:"+(self.options.lensOpacity)+";filter: alpha(opacity = "+(self.options.lensOpacity*100)+"); zoom:1;"
+"width:"+lensWidth+"px;"
+"height:"+lensHeight+"px;"
+"background-color:"+(self.options.lensColour)+";"
+"cursor:"+(self.options.cursor)+";"
+"border: "+(self.options.lensBorderSize)+"px"+" solid "+(self.options.lensBorderColour)+";background-repeat: no-repeat;position: absolute;";}
self.tintStyle="display: block;"
+"position: absolute;"
+"background-color: "+self.options.tintColour+";"
+"filter:alpha(opacity=0);"
+"opacity: 0;"
+"width: "+self.nzWidth+"px;"
+"height: "+self.nzHeight+"px;";self.lensRound='';if(self.options.zoomType=="lens"){self.lensStyle="background-position: 0px 0px;"
+"float: left;display: none;"
+"border: "+String(self.options.borderSize)+"px solid "+self.options.borderColour+";"
+"width:"+String(self.options.lensSize)+"px;"
+"height:"+String(self.options.lensSize)+"px;"
+"background-repeat: no-repeat;position: absolute;";}
if(self.options.lensShape=="round"){self.lensRound="border-top-left-radius: "+String(self.options.lensSize/2+self.options.borderSize)+"px;"
+"border-top-right-radius: "+String(self.options.lensSize/2+self.options.borderSize)+"px;"
+"border-bottom-left-radius: "+String(self.options.lensSize/2+self.options.borderSize)+"px;"
+"border-bottom-right-radius: "+String(self.options.lensSize/2+self.options.borderSize)+"px;";}
self.zoomContainer=$('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:'+self.nzOffset.left+'px;top:'+self.nzOffset.top+'px;height:'+self.nzHeight+'px;width:'+self.nzWidth+'px;"></div>');$('body').append(self.zoomContainer);if(self.options.containLensZoom&&self.options.zoomType=="lens"){self.zoomContainer.css("overflow","hidden");}
if(self.options.zoomType!="inner"){self.zoomLens=$("<div class='zoomLens' style='"+self.lensStyle+self.lensRound+"'>&nbsp;</div>").appendTo(self.zoomContainer).click(function(){self.$elem.trigger('click');});if(self.options.tint){self.tintContainer=$('<div/>').addClass('tintContainer');self.zoomTint=$("<div class='zoomTint' style='"+self.tintStyle+"'></div>");self.zoomLens.wrap(self.tintContainer);self.zoomTintcss=self.zoomLens.after(self.zoomTint);self.zoomTintImage=$('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: '+self.nzWidth+'px; height: '+self.nzHeight+'px;" src="'+self.imageSrc+'">').appendTo(self.zoomLens).click(function(){self.$elem.trigger('click');});}}
if(isNaN(self.options.zoomWindowPosition)){self.zoomWindow=$("<div style='z-index:999;left:"+(self.windowOffsetLeft)+"px;top:"+(self.windowOffsetTop)+"px;"+self.zoomWindowStyle+"' class='zoomWindow'>&nbsp;</div>").appendTo('body').click(function(){self.$elem.trigger('click');});}else{self.zoomWindow=$("<div style='z-index:999;left:"+(self.windowOffsetLeft)+"px;top:"+(self.windowOffsetTop)+"px;"+self.zoomWindowStyle+"' class='zoomWindow'>&nbsp;</div>").appendTo(self.zoomContainer).click(function(){self.$elem.trigger('click');});}
self.zoomWindowContainer=$('<div/>').addClass('zoomWindowContainer').css("width",self.options.zoomWindowWidth);self.zoomWindow.wrap(self.zoomWindowContainer);if(self.options.zoomType=="lens"){self.zoomLens.css({backgroundImage:"url('"+self.imageSrc+"')"});}
if(self.options.zoomType=="window"){self.zoomWindow.css({backgroundImage:"url('"+self.imageSrc+"')"});}
if(self.options.zoomType=="inner"){self.zoomWindow.css({backgroundImage:"url('"+self.imageSrc+"')"});}
self.$elem.bind('touchmove',function(e){e.preventDefault();var touch=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];self.setPosition(touch);});self.zoomContainer.bind('touchmove',function(e){if(self.options.zoomType=="inner"){self.showHideWindow("show");}
e.preventDefault();var touch=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];self.setPosition(touch);});self.zoomContainer.bind('touchend',function(e){self.showHideWindow("hide");if(self.options.showLens){self.showHideLens("hide");}
if(self.options.tint&&self.options.zoomType!="inner"){self.showHideTint("hide");}});self.$elem.bind('touchend',function(e){self.showHideWindow("hide");if(self.options.showLens){self.showHideLens("hide");}
if(self.options.tint&&self.options.zoomType!="inner"){self.showHideTint("hide");}});if(self.options.showLens){self.zoomLens.bind('touchmove',function(e){e.preventDefault();var touch=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];self.setPosition(touch);});self.zoomLens.bind('touchend',function(e){self.showHideWindow("hide");if(self.options.showLens){self.showHideLens("hide");}
if(self.options.tint&&self.options.zoomType!="inner"){self.showHideTint("hide");}});}
self.$elem.bind('mousemove',function(e){if(self.overWindow==false){self.setElements("show");}
if(self.lastX!==e.clientX||self.lastY!==e.clientY){self.setPosition(e);self.currentLoc=e;}
self.lastX=e.clientX;self.lastY=e.clientY;});self.zoomContainer.bind('mousemove',function(e){if(self.overWindow==false){self.setElements("show");}
if(self.lastX!==e.clientX||self.lastY!==e.clientY){self.setPosition(e);self.currentLoc=e;}
self.lastX=e.clientX;self.lastY=e.clientY;});if(self.options.zoomType!="inner"){self.zoomLens.bind('mousemove',function(e){if(self.lastX!==e.clientX||self.lastY!==e.clientY){self.setPosition(e);self.currentLoc=e;}
self.lastX=e.clientX;self.lastY=e.clientY;});}
if(self.options.tint&&self.options.zoomType!="inner"){self.zoomTint.bind('mousemove',function(e){if(self.lastX!==e.clientX||self.lastY!==e.clientY){self.setPosition(e);self.currentLoc=e;}
self.lastX=e.clientX;self.lastY=e.clientY;});}
if(self.options.zoomType=="inner"){self.zoomWindow.bind('mousemove',function(e){if(self.lastX!==e.clientX||self.lastY!==e.clientY){self.setPosition(e);self.currentLoc=e;}
self.lastX=e.clientX;self.lastY=e.clientY;});}
self.zoomContainer.add(self.$elem).mouseenter(function(){if(self.overWindow==false){self.setElements("show");}}).mouseleave(function(){if(!self.scrollLock){self.setElements("hide");self.options.onDestroy(self.$elem);}});if(self.options.zoomType!="inner"){self.zoomWindow.mouseenter(function(){self.overWindow=true;self.setElements("hide");}).mouseleave(function(){self.overWindow=false;});}
if(self.options.zoomLevel!=1){}
if(self.options.minZoomLevel){self.minZoomLevel=self.options.minZoomLevel;}
else{self.minZoomLevel=self.options.scrollZoomIncrement*2;}
if(self.options.scrollZoom){self.zoomContainer.add(self.$elem).bind('mousewheel DOMMouseScroll MozMousePixelScroll',function(e){self.scrollLock=true;clearTimeout($.data(this,'timer'));$.data(this,'timer',setTimeout(function(){self.scrollLock=false;},250));var theEvent=e.originalEvent.wheelDelta||e.originalEvent.detail*-1
e.stopImmediatePropagation();e.stopPropagation();e.preventDefault();if(theEvent/120>0){if(self.currentZoomLevel>=self.minZoomLevel){self.changeZoomLevel(self.currentZoomLevel-self.options.scrollZoomIncrement);}}
else{if(self.options.maxZoomLevel){if(self.currentZoomLevel<=self.options.maxZoomLevel){self.changeZoomLevel(parseFloat(self.currentZoomLevel)+self.options.scrollZoomIncrement);}}
else{self.changeZoomLevel(parseFloat(self.currentZoomLevel)+self.options.scrollZoomIncrement);}}
return false;});}},setElements:function(type){var self=this;if(!self.options.zoomEnabled){return false;}
if(type=="show"){if(self.isWindowSet){if(self.options.zoomType=="inner"){self.showHideWindow("show");}
if(self.options.zoomType=="window"){self.showHideWindow("show");}
if(self.options.showLens){self.showHideLens("show");}
if(self.options.tint&&self.options.zoomType!="inner"){self.showHideTint("show");}}}
if(type=="hide"){if(self.options.zoomType=="window"){self.showHideWindow("hide");}
if(!self.options.tint){self.showHideWindow("hide");}
if(self.options.showLens){self.showHideLens("hide");}
if(self.options.tint){self.showHideTint("hide");}}},setPosition:function(e){var self=this;if(!self.options.zoomEnabled){return false;}
self.nzHeight=self.$elem.height();self.nzWidth=self.$elem.width();self.nzOffset=self.$elem.offset();if(self.options.tint&&self.options.zoomType!="inner"){self.zoomTint.css({top:0});self.zoomTint.css({left:0});}
if(self.options.responsive&&!self.options.scrollZoom){if(self.options.showLens){if(self.nzHeight<self.options.zoomWindowWidth/self.widthRatio){lensHeight=self.nzHeight;}
else{lensHeight=String((self.options.zoomWindowHeight/self.heightRatio))}
if(self.largeWidth<self.options.zoomWindowWidth){lensWidth=self.nzWidth;}
else{lensWidth=(self.options.zoomWindowWidth/self.widthRatio);}
self.widthRatio=self.largeWidth/self.nzWidth;self.heightRatio=self.largeHeight/self.nzHeight;if(self.options.zoomType!="lens"){if(self.nzHeight<self.options.zoomWindowWidth/self.widthRatio){lensHeight=self.nzHeight;}
else{lensHeight=String((self.options.zoomWindowHeight/self.heightRatio))}
if(self.nzWidth<self.options.zoomWindowHeight/self.heightRatio){lensWidth=self.nzWidth;}
else{lensWidth=String((self.options.zoomWindowWidth/self.widthRatio));}
self.zoomLens.css('width',lensWidth);self.zoomLens.css('height',lensHeight);if(self.options.tint){self.zoomTintImage.css('width',self.nzWidth);self.zoomTintImage.css('height',self.nzHeight);}}
if(self.options.zoomType=="lens"){self.zoomLens.css({width:String(self.options.lensSize)+'px',height:String(self.options.lensSize)+'px'})}}}
self.zoomContainer.css({top:self.nzOffset.top});self.zoomContainer.css({left:self.nzOffset.left});self.mouseLeft=parseInt(e.pageX-self.nzOffset.left);self.mouseTop=parseInt(e.pageY-self.nzOffset.top);if(self.options.zoomType=="window"){self.Etoppos=(self.mouseTop<(self.zoomLens.height()/2));self.Eboppos=(self.mouseTop>self.nzHeight-(self.zoomLens.height()/2)-(self.options.lensBorderSize*2));self.Eloppos=(self.mouseLeft<0+((self.zoomLens.width()/2)));self.Eroppos=(self.mouseLeft>(self.nzWidth-(self.zoomLens.width()/2)-(self.options.lensBorderSize*2)));}
if(self.options.zoomType=="inner"){self.Etoppos=(self.mouseTop<((self.nzHeight/2)/self.heightRatio));self.Eboppos=(self.mouseTop>(self.nzHeight-((self.nzHeight/2)/self.heightRatio)));self.Eloppos=(self.mouseLeft<0+(((self.nzWidth/2)/self.widthRatio)));self.Eroppos=(self.mouseLeft>(self.nzWidth-(self.nzWidth/2)/self.widthRatio-(self.options.lensBorderSize*2)));}
if(self.mouseLeft<0||self.mouseTop<0||self.mouseLeft>self.nzWidth||self.mouseTop>self.nzHeight){self.setElements("hide");return;}
else{if(self.options.showLens){self.lensLeftPos=String(Math.floor(self.mouseLeft-self.zoomLens.width()/2));self.lensTopPos=String(Math.floor(self.mouseTop-self.zoomLens.height()/2));}
if(self.Etoppos){self.lensTopPos=0;}
if(self.Eloppos){self.windowLeftPos=0;self.lensLeftPos=0;self.tintpos=0;}
if(self.options.zoomType=="window"){if(self.Eboppos){self.lensTopPos=Math.max((self.nzHeight)-self.zoomLens.height()-(self.options.lensBorderSize*2),0);}
if(self.Eroppos){self.lensLeftPos=(self.nzWidth-(self.zoomLens.width())-(self.options.lensBorderSize*2));}}
if(self.options.zoomType=="inner"){if(self.Eboppos){self.lensTopPos=Math.max(((self.nzHeight)-(self.options.lensBorderSize*2)),0);}
if(self.Eroppos){self.lensLeftPos=(self.nzWidth-(self.nzWidth)-(self.options.lensBorderSize*2));}}
if(self.options.zoomType=="lens"){self.windowLeftPos=String(((e.pageX-self.nzOffset.left)*self.widthRatio-self.zoomLens.width()/2)*(-1));self.windowTopPos=String(((e.pageY-self.nzOffset.top)*self.heightRatio-self.zoomLens.height()/2)*(-1));self.zoomLens.css({backgroundPosition:self.windowLeftPos+'px '+self.windowTopPos+'px'});if(self.changeBgSize){if(self.nzHeight>self.nzWidth){if(self.options.zoomType=="lens"){self.zoomLens.css({"background-size":self.largeWidth/self.newvalueheight+'px '+self.largeHeight/self.newvalueheight+'px'});}
self.zoomWindow.css({"background-size":self.largeWidth/self.newvalueheight+'px '+self.largeHeight/self.newvalueheight+'px'});}
else{if(self.options.zoomType=="lens"){self.zoomLens.css({"background-size":self.largeWidth/self.newvaluewidth+'px '+self.largeHeight/self.newvaluewidth+'px'});}
self.zoomWindow.css({"background-size":self.largeWidth/self.newvaluewidth+'px '+self.largeHeight/self.newvaluewidth+'px'});}
self.changeBgSize=false;}
self.setWindowPostition(e);}
if(self.options.tint&&self.options.zoomType!="inner"){self.setTintPosition(e);}
if(self.options.zoomType=="window"){self.setWindowPostition(e);}
if(self.options.zoomType=="inner"){self.setWindowPostition(e);}
if(self.options.showLens){if(self.fullwidth&&self.options.zoomType!="lens"){self.lensLeftPos=0;}
self.zoomLens.css({left:self.lensLeftPos+'px',top:self.lensTopPos+'px'})}}},showHideWindow:function(change){var self=this;if(change=="show"){if(!self.isWindowActive){if(self.options.zoomWindowFadeIn){self.zoomWindow.stop(true,true,false).fadeIn(self.options.zoomWindowFadeIn);}
else{self.zoomWindow.show();}
self.isWindowActive=true;}}
if(change=="hide"){if(self.isWindowActive){if(self.options.zoomWindowFadeOut){self.zoomWindow.stop(true,true).fadeOut(self.options.zoomWindowFadeOut,function(){if(self.loop){clearInterval(self.loop);self.loop=false;}});}
else{self.zoomWindow.hide();}
self.isWindowActive=false;}}},showHideLens:function(change){var self=this;if(change=="show"){if(!self.isLensActive){if(self.options.lensFadeIn){self.zoomLens.stop(true,true,false).fadeIn(self.options.lensFadeIn);}
else{self.zoomLens.show();}
self.isLensActive=true;}}
if(change=="hide"){if(self.isLensActive){if(self.options.lensFadeOut){self.zoomLens.stop(true,true).fadeOut(self.options.lensFadeOut);}
else{self.zoomLens.hide();}
self.isLensActive=false;}}},showHideTint:function(change){var self=this;if(change=="show"){if(!self.isTintActive){if(self.options.zoomTintFadeIn){self.zoomTint.css({opacity:self.options.tintOpacity}).animate().stop(true,true).fadeIn("slow");}
else{self.zoomTint.css({opacity:self.options.tintOpacity}).animate();self.zoomTint.show();}
self.isTintActive=true;}}
if(change=="hide"){if(self.isTintActive){if(self.options.zoomTintFadeOut){self.zoomTint.stop(true,true).fadeOut(self.options.zoomTintFadeOut);}
else{self.zoomTint.hide();}
self.isTintActive=false;}}},setLensPostition:function(e){},setWindowPostition:function(e){var self=this;if(!isNaN(self.options.zoomWindowPosition)){switch(self.options.zoomWindowPosition){case 1:self.windowOffsetTop=(self.options.zoomWindowOffety);self.windowOffsetLeft=(+self.nzWidth);break;case 2:if(self.options.zoomWindowHeight>self.nzHeight){self.windowOffsetTop=((self.options.zoomWindowHeight/2)-(self.nzHeight/2))*(-1);self.windowOffsetLeft=(self.nzWidth);}
else{}
break;case 3:self.windowOffsetTop=(self.nzHeight-self.zoomWindow.height()-(self.options.borderSize*2));self.windowOffsetLeft=(self.nzWidth);break;case 4:self.windowOffsetTop=(self.nzHeight);self.windowOffsetLeft=(self.nzWidth);break;case 5:self.windowOffsetTop=(self.nzHeight);self.windowOffsetLeft=(self.nzWidth-self.zoomWindow.width()-(self.options.borderSize*2));break;case 6:if(self.options.zoomWindowHeight>self.nzHeight){self.windowOffsetTop=(self.nzHeight);self.windowOffsetLeft=((self.options.zoomWindowWidth/2)-(self.nzWidth/2)+(self.options.borderSize*2))*(-1);}
else{}
break;case 7:self.windowOffsetTop=(self.nzHeight);self.windowOffsetLeft=0;break;case 8:self.windowOffsetTop=(self.nzHeight);self.windowOffsetLeft=(self.zoomWindow.width()+(self.options.borderSize*2))*(-1);break;case 9:self.windowOffsetTop=(self.nzHeight-self.zoomWindow.height()-(self.options.borderSize*2));self.windowOffsetLeft=(self.zoomWindow.width()+(self.options.borderSize*2))*(-1);break;case 10:if(self.options.zoomWindowHeight>self.nzHeight){self.windowOffsetTop=((self.options.zoomWindowHeight/2)-(self.nzHeight/2))*(-1);self.windowOffsetLeft=(self.zoomWindow.width()+(self.options.borderSize*2))*(-1);}
else{}
break;case 11:self.windowOffsetTop=(self.options.zoomWindowOffety);self.windowOffsetLeft=(self.zoomWindow.width()+(self.options.borderSize*2))*(-1);break;case 12:self.windowOffsetTop=(self.zoomWindow.height()+(self.options.borderSize*2))*(-1);self.windowOffsetLeft=(self.zoomWindow.width()+(self.options.borderSize*2))*(-1);break;case 13:self.windowOffsetTop=(self.zoomWindow.height()+(self.options.borderSize*2))*(-1);self.windowOffsetLeft=(0);break;case 14:if(self.options.zoomWindowHeight>self.nzHeight){self.windowOffsetTop=(self.zoomWindow.height()+(self.options.borderSize*2))*(-1);self.windowOffsetLeft=((self.options.zoomWindowWidth/2)-(self.nzWidth/2)+(self.options.borderSize*2))*(-1);}
else{}
break;case 15:self.windowOffsetTop=(self.zoomWindow.height()+(self.options.borderSize*2))*(-1);self.windowOffsetLeft=(self.nzWidth-self.zoomWindow.width()-(self.options.borderSize*2));break;case 16:self.windowOffsetTop=(self.zoomWindow.height()+(self.options.borderSize*2))*(-1);self.windowOffsetLeft=(self.nzWidth);break;default:self.windowOffsetTop=(self.options.zoomWindowOffety);self.windowOffsetLeft=(self.nzWidth);}}
else{self.externalContainer=$('#'+self.options.zoomWindowPosition);self.externalContainerWidth=self.externalContainer.width();self.externalContainerHeight=self.externalContainer.height();self.externalContainerOffset=self.externalContainer.offset();self.windowOffsetTop=self.externalContainerOffset.top;self.windowOffsetLeft=self.externalContainerOffset.left;}
self.isWindowSet=true;self.windowOffsetTop=self.windowOffsetTop+self.options.zoomWindowOffety;self.windowOffsetLeft=self.windowOffsetLeft+self.options.zoomWindowOffetx;self.zoomWindow.css({top:self.windowOffsetTop});self.zoomWindow.css({left:self.windowOffsetLeft});if(self.options.zoomType=="inner"){self.zoomWindow.css({top:0});self.zoomWindow.css({left:0});}
self.windowLeftPos=String(((e.pageX-self.nzOffset.left)*self.widthRatio-self.zoomWindow.width()/2)*(-1));self.windowTopPos=String(((e.pageY-self.nzOffset.top)*self.heightRatio-self.zoomWindow.height()/2)*(-1));if(self.Etoppos){self.windowTopPos=0;}
if(self.Eloppos){self.windowLeftPos=0;}
if(self.Eboppos){self.windowTopPos=(self.largeHeight/self.currentZoomLevel-self.zoomWindow.height())*(-1);}
if(self.Eroppos){self.windowLeftPos=((self.largeWidth/self.currentZoomLevel-self.zoomWindow.width())*(-1));}
if(self.fullheight){self.windowTopPos=0;}
if(self.fullwidth){self.windowLeftPos=0;}
if(self.options.zoomType=="window"||self.options.zoomType=="inner"){if(self.zoomLock==1){if(self.widthRatio<=1){self.windowLeftPos=0;}
if(self.heightRatio<=1){self.windowTopPos=0;}}
if(self.options.zoomType=="window"){if(self.largeHeight<self.options.zoomWindowHeight){self.windowTopPos=0;}
if(self.largeWidth<self.options.zoomWindowWidth){self.windowLeftPos=0;}}
if(self.options.easing){if(!self.xp){self.xp=0;}
if(!self.yp){self.yp=0;}
if(!self.loop){self.loop=setInterval(function(){self.xp+=(self.windowLeftPos-self.xp)/self.options.easingAmount;self.yp+=(self.windowTopPos-self.yp)/self.options.easingAmount;if(self.scrollingLock){clearInterval(self.loop);self.xp=self.windowLeftPos;self.yp=self.windowTopPos
self.xp=((e.pageX-self.nzOffset.left)*self.widthRatio-self.zoomWindow.width()/2)*(-1);self.yp=(((e.pageY-self.nzOffset.top)*self.heightRatio-self.zoomWindow.height()/2)*(-1));if(self.changeBgSize){if(self.nzHeight>self.nzWidth){if(self.options.zoomType=="lens"){self.zoomLens.css({"background-size":self.largeWidth/self.newvalueheight+'px '+self.largeHeight/self.newvalueheight+'px'});}
self.zoomWindow.css({"background-size":self.largeWidth/self.newvalueheight+'px '+self.largeHeight/self.newvalueheight+'px'});}
else{if(self.options.zoomType!="lens"){self.zoomLens.css({"background-size":self.largeWidth/self.newvaluewidth+'px '+self.largeHeight/self.newvalueheight+'px'});}
self.zoomWindow.css({"background-size":self.largeWidth/self.newvaluewidth+'px '+self.largeHeight/self.newvaluewidth+'px'});}
self.changeBgSize=false;}
self.zoomWindow.css({backgroundPosition:self.windowLeftPos+'px '+self.windowTopPos+'px'});self.scrollingLock=false;self.loop=false;}
else if(Math.round(Math.abs(self.xp-self.windowLeftPos)+Math.abs(self.yp-self.windowTopPos))<1){clearInterval(self.loop);self.zoomWindow.css({backgroundPosition:self.windowLeftPos+'px '+self.windowTopPos+'px'});self.loop=false;}
else{if(self.changeBgSize){if(self.nzHeight>self.nzWidth){if(self.options.zoomType=="lens"){self.zoomLens.css({"background-size":self.largeWidth/self.newvalueheight+'px '+self.largeHeight/self.newvalueheight+'px'});}
self.zoomWindow.css({"background-size":self.largeWidth/self.newvalueheight+'px '+self.largeHeight/self.newvalueheight+'px'});}
else{if(self.options.zoomType!="lens"){self.zoomLens.css({"background-size":self.largeWidth/self.newvaluewidth+'px '+self.largeHeight/self.newvaluewidth+'px'});}
self.zoomWindow.css({"background-size":self.largeWidth/self.newvaluewidth+'px '+self.largeHeight/self.newvaluewidth+'px'});}
self.changeBgSize=false;}
self.zoomWindow.css({backgroundPosition:self.xp+'px '+self.yp+'px'});}},16);}}
else{if(self.changeBgSize){if(self.nzHeight>self.nzWidth){if(self.options.zoomType=="lens"){self.zoomLens.css({"background-size":self.largeWidth/self.newvalueheight+'px '+self.largeHeight/self.newvalueheight+'px'});}
self.zoomWindow.css({"background-size":self.largeWidth/self.newvalueheight+'px '+self.largeHeight/self.newvalueheight+'px'});}
else{if(self.options.zoomType=="lens"){self.zoomLens.css({"background-size":self.largeWidth/self.newvaluewidth+'px '+self.largeHeight/self.newvaluewidth+'px'});}
if((self.largeHeight/self.newvaluewidth)<self.options.zoomWindowHeight){self.zoomWindow.css({"background-size":self.largeWidth/self.newvaluewidth+'px '+self.largeHeight/self.newvaluewidth+'px'});}
else{self.zoomWindow.css({"background-size":self.largeWidth/self.newvalueheight+'px '+self.largeHeight/self.newvalueheight+'px'});}}
self.changeBgSize=false;}
self.zoomWindow.css({backgroundPosition:self.windowLeftPos+'px '+self.windowTopPos+'px'});}}},setTintPosition:function(e){var self=this;self.nzOffset=self.$elem.offset();self.tintpos=String(((e.pageX-self.nzOffset.left)-(self.zoomLens.width()/2))*(-1));self.tintposy=String(((e.pageY-self.nzOffset.top)-self.zoomLens.height()/2)*(-1));if(self.Etoppos){self.tintposy=0;}
if(self.Eloppos){self.tintpos=0;}
if(self.Eboppos){self.tintposy=(self.nzHeight-self.zoomLens.height()-(self.options.lensBorderSize*2))*(-1);}
if(self.Eroppos){self.tintpos=((self.nzWidth-self.zoomLens.width()-(self.options.lensBorderSize*2))*(-1));}
if(self.options.tint){if(self.fullheight){self.tintposy=0;}
if(self.fullwidth){self.tintpos=0;}
self.zoomTintImage.css({'left':self.tintpos+'px'});self.zoomTintImage.css({'top':self.tintposy+'px'});}},swaptheimage:function(smallimage,largeimage){var self=this;var newImg=new Image();if(self.options.loadingIcon){self.spinner=$('<div style="background: url(\''+self.options.loadingIcon+'\') no-repeat center;height:'+self.nzHeight+'px;width:'+self.nzWidth+'px;z-index: 2000;position: absolute; background-position: center center;"></div>');self.$elem.after(self.spinner);}
self.options.onImageSwap(self.$elem);newImg.onload=function(){self.largeWidth=newImg.width;self.largeHeight=newImg.height;self.zoomImage=largeimage;self.zoomWindow.css({"background-size":self.largeWidth+'px '+self.largeHeight+'px'});self.swapAction(smallimage,largeimage);return;}
newImg.src=largeimage;},swapAction:function(smallimage,largeimage){var self=this;var newImg2=new Image();newImg2.onload=function(){self.nzHeight=newImg2.height;self.nzWidth=newImg2.width;self.options.onImageSwapComplete(self.$elem);self.doneCallback();return;}
newImg2.src=smallimage;self.currentZoomLevel=self.options.zoomLevel;self.options.maxZoomLevel=false;if(self.options.zoomType=="lens"){self.zoomLens.css({backgroundImage:"url('"+largeimage+"')"});}
if(self.options.zoomType=="window"){self.zoomWindow.css({backgroundImage:"url('"+largeimage+"')"});}
if(self.options.zoomType=="inner"){self.zoomWindow.css({backgroundImage:"url('"+largeimage+"')"});}
self.currentImage=largeimage;if(self.options.imageCrossfade){var oldImg=self.$elem;var newImg=oldImg.clone();self.$elem.attr("src",smallimage)
self.$elem.after(newImg);newImg.stop(true).fadeOut(self.options.imageCrossfade,function(){$(this).remove();});self.$elem.width("auto").removeAttr("width");self.$elem.height("auto").removeAttr("height");oldImg.fadeIn(self.options.imageCrossfade);if(self.options.tint&&self.options.zoomType!="inner"){var oldImgTint=self.zoomTintImage;var newImgTint=oldImgTint.clone();self.zoomTintImage.attr("src",largeimage)
self.zoomTintImage.after(newImgTint);newImgTint.stop(true).fadeOut(self.options.imageCrossfade,function(){$(this).remove();});oldImgTint.fadeIn(self.options.imageCrossfade);self.zoomTint.css({height:self.$elem.height()});self.zoomTint.css({width:self.$elem.width()});}
self.zoomContainer.css("height",self.$elem.height());self.zoomContainer.css("width",self.$elem.width());if(self.options.zoomType=="inner"){if(!self.options.constrainType){self.zoomWrap.parent().css("height",self.$elem.height());self.zoomWrap.parent().css("width",self.$elem.width());self.zoomWindow.css("height",self.$elem.height());self.zoomWindow.css("width",self.$elem.width());}}
if(self.options.imageCrossfade){self.zoomWrap.css("height",self.$elem.height());self.zoomWrap.css("width",self.$elem.width());}}
else{self.$elem.attr("src",smallimage);if(self.options.tint){self.zoomTintImage.attr("src",largeimage);self.zoomTintImage.attr("height",self.$elem.height());self.zoomTintImage.css({height:self.$elem.height()});self.zoomTint.css({height:self.$elem.height()});}
self.zoomContainer.css("height",self.$elem.height());self.zoomContainer.css("width",self.$elem.width());if(self.options.imageCrossfade){self.zoomWrap.css("height",self.$elem.height());self.zoomWrap.css("width",self.$elem.width());}}
if(self.options.constrainType){if(self.options.constrainType=="height"){self.zoomContainer.css("height",self.options.constrainSize);self.zoomContainer.css("width","auto");if(self.options.imageCrossfade){self.zoomWrap.css("height",self.options.constrainSize);self.zoomWrap.css("width","auto");self.constwidth=self.zoomWrap.width();}
else{self.$elem.css("height",self.options.constrainSize);self.$elem.css("width","auto");self.constwidth=self.$elem.width();}
if(self.options.zoomType=="inner"){self.zoomWrap.parent().css("height",self.options.constrainSize);self.zoomWrap.parent().css("width",self.constwidth);self.zoomWindow.css("height",self.options.constrainSize);self.zoomWindow.css("width",self.constwidth);}
if(self.options.tint){self.tintContainer.css("height",self.options.constrainSize);self.tintContainer.css("width",self.constwidth);self.zoomTint.css("height",self.options.constrainSize);self.zoomTint.css("width",self.constwidth);self.zoomTintImage.css("height",self.options.constrainSize);self.zoomTintImage.css("width",self.constwidth);}}
if(self.options.constrainType=="width"){self.zoomContainer.css("height","auto");self.zoomContainer.css("width",self.options.constrainSize);if(self.options.imageCrossfade){self.zoomWrap.css("height","auto");self.zoomWrap.css("width",self.options.constrainSize);self.constheight=self.zoomWrap.height();}
else{self.$elem.css("height","auto");self.$elem.css("width",self.options.constrainSize);self.constheight=self.$elem.height();}
if(self.options.zoomType=="inner"){self.zoomWrap.parent().css("height",self.constheight);self.zoomWrap.parent().css("width",self.options.constrainSize);self.zoomWindow.css("height",self.constheight);self.zoomWindow.css("width",self.options.constrainSize);}
if(self.options.tint){self.tintContainer.css("height",self.constheight);self.tintContainer.css("width",self.options.constrainSize);self.zoomTint.css("height",self.constheight);self.zoomTint.css("width",self.options.constrainSize);self.zoomTintImage.css("height",self.constheight);self.zoomTintImage.css("width",self.options.constrainSize);}}}},doneCallback:function(){var self=this;if(self.options.loadingIcon){self.spinner.hide();}
self.nzOffset=self.$elem.offset();self.nzWidth=self.$elem.width();self.nzHeight=self.$elem.height();self.currentZoomLevel=self.options.zoomLevel;self.widthRatio=self.largeWidth/self.nzWidth;self.heightRatio=self.largeHeight/self.nzHeight;if(self.options.zoomType=="window"){if(self.nzHeight<self.options.zoomWindowWidth/self.widthRatio){lensHeight=self.nzHeight;}
else{lensHeight=String((self.options.zoomWindowHeight/self.heightRatio))}
if(self.options.zoomWindowWidth<self.options.zoomWindowWidth){lensWidth=self.nzWidth;}
else{lensWidth=(self.options.zoomWindowWidth/self.widthRatio);}
if(self.zoomLens){self.zoomLens.css('width',lensWidth);self.zoomLens.css('height',lensHeight);}}},getCurrentImage:function(){var self=this;return self.zoomImage;},getGalleryList:function(){var self=this;self.gallerylist=[];if(self.options.gallery){$('#'+self.options.gallery+' a').each(function(){var img_src='';if($(this).data("zoom-image")){img_src=$(this).data("zoom-image");}
else if($(this).data("image")){img_src=$(this).data("image");}
if(img_src==self.zoomImage){self.gallerylist.unshift({href:''+img_src+'',title:$(this).find('img').attr("title")});}
else{self.gallerylist.push({href:''+img_src+'',title:$(this).find('img').attr("title")});}});}
else{self.gallerylist.push({href:''+self.zoomImage+'',title:$(this).find('img').attr("title")});}
return self.gallerylist;},changeZoomLevel:function(value){var self=this;self.scrollingLock=true;self.newvalue=parseFloat(value).toFixed(2);newvalue=parseFloat(value).toFixed(2);maxheightnewvalue=self.largeHeight/((self.options.zoomWindowHeight/self.nzHeight)*self.nzHeight);maxwidthtnewvalue=self.largeWidth/((self.options.zoomWindowWidth/self.nzWidth)*self.nzWidth);if(self.options.zoomType!="inner")
{if(maxheightnewvalue<=newvalue){self.heightRatio=(self.largeHeight/maxheightnewvalue)/self.nzHeight;self.newvalueheight=maxheightnewvalue;self.fullheight=true;}
else{self.heightRatio=(self.largeHeight/newvalue)/self.nzHeight;self.newvalueheight=newvalue;self.fullheight=false;}
if(maxwidthtnewvalue<=newvalue){self.widthRatio=(self.largeWidth/maxwidthtnewvalue)/self.nzWidth;self.newvaluewidth=maxwidthtnewvalue;self.fullwidth=true;}
else{self.widthRatio=(self.largeWidth/newvalue)/self.nzWidth;self.newvaluewidth=newvalue;self.fullwidth=false;}
if(self.options.zoomType=="lens"){if(maxheightnewvalue<=newvalue){self.fullwidth=true;self.newvaluewidth=maxheightnewvalue;}else{self.widthRatio=(self.largeWidth/newvalue)/self.nzWidth;self.newvaluewidth=newvalue;self.fullwidth=false;}}}
if(self.options.zoomType=="inner")
{maxheightnewvalue=parseFloat(self.largeHeight/self.nzHeight).toFixed(2);maxwidthtnewvalue=parseFloat(self.largeWidth/self.nzWidth).toFixed(2);if(newvalue>maxheightnewvalue){newvalue=maxheightnewvalue;}
if(newvalue>maxwidthtnewvalue){newvalue=maxwidthtnewvalue;}
if(maxheightnewvalue<=newvalue){self.heightRatio=(self.largeHeight/newvalue)/self.nzHeight;if(newvalue>maxheightnewvalue){self.newvalueheight=maxheightnewvalue;}else{self.newvalueheight=newvalue;}
self.fullheight=true;}
else{self.heightRatio=(self.largeHeight/newvalue)/self.nzHeight;if(newvalue>maxheightnewvalue){self.newvalueheight=maxheightnewvalue;}else{self.newvalueheight=newvalue;}
self.fullheight=false;}
if(maxwidthtnewvalue<=newvalue){self.widthRatio=(self.largeWidth/newvalue)/self.nzWidth;if(newvalue>maxwidthtnewvalue){self.newvaluewidth=maxwidthtnewvalue;}else{self.newvaluewidth=newvalue;}
self.fullwidth=true;}
else{self.widthRatio=(self.largeWidth/newvalue)/self.nzWidth;self.newvaluewidth=newvalue;self.fullwidth=false;}}
scrcontinue=false;if(self.options.zoomType=="inner"){if(self.nzWidth>=self.nzHeight){if(self.newvaluewidth<=maxwidthtnewvalue){scrcontinue=true;}
else{scrcontinue=false;self.fullheight=true;self.fullwidth=true;}}
if(self.nzHeight>self.nzWidth){if(self.newvaluewidth<=maxwidthtnewvalue){scrcontinue=true;}
else{scrcontinue=false;self.fullheight=true;self.fullwidth=true;}}}
if(self.options.zoomType!="inner"){scrcontinue=true;}
if(scrcontinue){self.zoomLock=0;self.changeZoom=true;if(((self.options.zoomWindowHeight)/self.heightRatio)<=self.nzHeight){self.currentZoomLevel=self.newvalueheight;if(self.options.zoomType!="lens"&&self.options.zoomType!="inner"){self.changeBgSize=true;self.zoomLens.css({height:String((self.options.zoomWindowHeight)/self.heightRatio)+'px'})}
if(self.options.zoomType=="lens"||self.options.zoomType=="inner"){self.changeBgSize=true;}}
if((self.options.zoomWindowWidth/self.widthRatio)<=self.nzWidth){if(self.options.zoomType!="inner"){if(self.newvaluewidth>self.newvalueheight){self.currentZoomLevel=self.newvaluewidth;}}
if(self.options.zoomType!="lens"&&self.options.zoomType!="inner"){self.changeBgSize=true;self.zoomLens.css({width:String((self.options.zoomWindowWidth)/self.widthRatio)+'px'})}
if(self.options.zoomType=="lens"||self.options.zoomType=="inner"){self.changeBgSize=true;}}
if(self.options.zoomType=="inner"){self.changeBgSize=true;if(self.nzWidth>self.nzHeight){self.currentZoomLevel=self.newvaluewidth;}
if(self.nzHeight>self.nzWidth){self.currentZoomLevel=self.newvaluewidth;}}}
self.setPosition(self.currentLoc);},closeAll:function(){if(self.zoomWindow){self.zoomWindow.hide();}
if(self.zoomLens){self.zoomLens.hide();}
if(self.zoomTint){self.zoomTint.hide();}},changeState:function(value){var self=this;if(value=='enable'){self.options.zoomEnabled=true;}
if(value=='disable'){self.options.zoomEnabled=false;}}};$.fn.elevateZoom=function(options){return this.each(function(){var elevate=Object.create(ElevateZoom);elevate.init(options,this);$.data(this,'elevateZoom',elevate);});};$.fn.elevateZoom.options={zoomActivation:"hover",zoomEnabled:true,preloading:1,zoomLevel:1,scrollZoom:false,scrollZoomIncrement:0.1,minZoomLevel:false,maxZoomLevel:false,easing:false,easingAmount:12,lensSize:200,zoomWindowWidth:400,zoomWindowHeight:400,zoomWindowOffetx:0,zoomWindowOffety:0,zoomWindowPosition:1,zoomWindowBgColour:"#fff",lensFadeIn:false,lensFadeOut:false,debug:false,zoomWindowFadeIn:false,zoomWindowFadeOut:false,zoomWindowAlwaysShow:false,zoomTintFadeIn:false,zoomTintFadeOut:false,borderSize:4,showLens:true,borderColour:"#888",lensBorderSize:1,lensBorderColour:"#000",lensShape:"square",zoomType:"window",containLensZoom:false,lensColour:"white",lensOpacity:0.4,lenszoom:false,tint:false,tintColour:"#333",tintOpacity:0.4,gallery:false,galleryActiveClass:"zoomGalleryActive",imageCrossfade:false,constrainType:false,constrainSize:false,loadingIcon:false,cursor:"default",responsive:true,onComplete:$.noop,onDestroy:function(){},onZoomedImageLoaded:function(){},onImageSwap:$.noop,onImageSwapComplete:$.noop};})(jQuery,window,document);
;
/*!
 * parallax.js v1.4.2 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2016 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */
(function($,window,document,undefined){(function(){var lastTime=0;var vendors=['ms','moz','webkit','o'];for(var x=0;x<vendors.length&&!window.requestAnimationFrame;++x){window.requestAnimationFrame=window[vendors[x]+'RequestAnimationFrame'];window.cancelAnimationFrame=window[vendors[x]+'CancelAnimationFrame']||window[vendors[x]+'CancelRequestAnimationFrame'];}
if(!window.requestAnimationFrame)
window.requestAnimationFrame=function(callback){var currTime=new Date().getTime();var timeToCall=Math.max(0,16-(currTime-lastTime));var id=window.setTimeout(function(){callback(currTime+timeToCall);},timeToCall);lastTime=currTime+timeToCall;return id;};if(!window.cancelAnimationFrame)
window.cancelAnimationFrame=function(id){clearTimeout(id);};}());function Parallax(element,options){var self=this;if(typeof options=='object'){delete options.refresh;delete options.render;$.extend(this,options);}
this.$element=$(element);if(!this.imageSrc&&this.$element.is('img')){this.imageSrc=this.$element.attr('src');}
var positions=(this.position+'').toLowerCase().match(/\S+/g)||[];if(positions.length<1){positions.push('center');}
if(positions.length==1){positions.push(positions[0]);}
if(positions[0]=='top'||positions[0]=='bottom'||positions[1]=='left'||positions[1]=='right'){positions=[positions[1],positions[0]];}
if(this.positionX!=undefined)positions[0]=this.positionX.toLowerCase();if(this.positionY!=undefined)positions[1]=this.positionY.toLowerCase();self.positionX=positions[0];self.positionY=positions[1];if(this.positionX!='left'&&this.positionX!='right'){if(isNaN(parseInt(this.positionX))){this.positionX='center';}else{this.positionX=parseInt(this.positionX);}}
if(this.positionY!='top'&&this.positionY!='bottom'){if(isNaN(parseInt(this.positionY))){this.positionY='center';}else{this.positionY=parseInt(this.positionY);}}
this.position=this.positionX+(isNaN(this.positionX)?'':'px')+' '+
this.positionY+(isNaN(this.positionY)?'':'px');if(navigator.userAgent.match(/(iPod|iPhone|iPad)/)){if(this.imageSrc&&this.iosFix&&!this.$element.is('img')){this.$element.css({backgroundImage:'url('+this.imageSrc+')',backgroundSize:'cover',backgroundPosition:this.position});}
return this;}
if(navigator.userAgent.match(/(Android)/)){if(this.imageSrc&&this.androidFix&&!this.$element.is('img')){this.$element.css({backgroundImage:'url('+this.imageSrc+')',backgroundSize:'cover',backgroundPosition:this.position});}
return this;}
this.$mirror=$('<div />').prependTo('body');var slider=this.$element.find('>.parallax-slider');var sliderExisted=false;if(slider.length==0)
this.$slider=$('<img />').prependTo(this.$mirror);else{this.$slider=slider.prependTo(this.$mirror)
sliderExisted=true;}
this.$mirror.addClass('parallax-mirror').css({visibility:'hidden',zIndex:this.zIndex,position:'fixed',top:0,left:0,overflow:'hidden',}).attr('data-order',this.$element.attr('data-order'));this.$slider.addClass('parallax-slider').one('load',function(){if(!self.naturalHeight||!self.naturalWidth){self.naturalHeight=this.naturalHeight||this.height||1;self.naturalWidth=this.naturalWidth||this.width||1;}
self.aspectRatio=self.naturalWidth/self.naturalHeight;Parallax.isSetup||Parallax.setup();Parallax.sliders.push(self);Parallax.isFresh=false;Parallax.requestRender();});if(!sliderExisted)
this.$slider[0].src=this.imageSrc;if(this.naturalHeight&&this.naturalWidth||this.$slider[0].complete||slider.length>0){this.$slider.trigger('load');}};$.extend(Parallax.prototype,{speed:0.2,bleed:0,zIndex:-100,iosFix:true,androidFix:true,position:'center',overScrollFix:false,refresh:function(){this.boxWidth=this.$element.outerWidth();this.boxHeight=this.$element.outerHeight()+this.bleed*2;this.boxOffsetTop=this.$element.offset().top-this.bleed;this.boxOffsetLeft=this.$element.offset().left;this.boxOffsetBottom=this.boxOffsetTop+this.boxHeight;var winHeight=Parallax.winHeight;var docHeight=Parallax.docHeight;var maxOffset=Math.min(this.boxOffsetTop,docHeight-winHeight);var minOffset=Math.max(this.boxOffsetTop+this.boxHeight-winHeight,0);var imageHeightMin=this.boxHeight+(maxOffset-minOffset)*(1-this.speed)|0;var imageOffsetMin=(this.boxOffsetTop-maxOffset)*(1-this.speed)|0;if(imageHeightMin*this.aspectRatio>=this.boxWidth){this.imageWidth=imageHeightMin*this.aspectRatio|0;this.imageHeight=imageHeightMin;this.offsetBaseTop=imageOffsetMin;var margin=this.imageWidth-this.boxWidth;if(this.positionX=='left'){this.offsetLeft=0;}else if(this.positionX=='right'){this.offsetLeft=-margin;}else if(!isNaN(this.positionX)){this.offsetLeft=Math.max(this.positionX,-margin);}else{this.offsetLeft=-margin/2|0;}}else{this.imageWidth=this.boxWidth;this.imageHeight=this.boxWidth/this.aspectRatio|0;this.offsetLeft=0;var margin=this.imageHeight-imageHeightMin;if(this.positionY=='top'){this.offsetBaseTop=imageOffsetMin;}else if(this.positionY=='bottom'){this.offsetBaseTop=imageOffsetMin-margin;}else if(!isNaN(this.positionY)){this.offsetBaseTop=imageOffsetMin+Math.max(this.positionY,-margin);}else{this.offsetBaseTop=imageOffsetMin-margin/2|0;}}},render:function(){var scrollTop=Parallax.scrollTop;var scrollLeft=Parallax.scrollLeft;var overScroll=this.overScrollFix?Parallax.overScroll:0;var scrollBottom=scrollTop+Parallax.winHeight;if(this.boxOffsetBottom>scrollTop&&this.boxOffsetTop<=scrollBottom){this.visibility='visible';this.mirrorTop=this.boxOffsetTop-scrollTop;this.mirrorLeft=this.boxOffsetLeft-scrollLeft;this.offsetTop=this.offsetBaseTop-this.mirrorTop*(1-this.speed);}else{this.visibility='hidden';}
this.$mirror.css({transform:'translate3d(0px, 0px, 0px)',visibility:this.visibility,top:this.mirrorTop-overScroll,left:this.mirrorLeft,height:this.boxHeight,width:this.boxWidth});this.$slider.css({transform:'translate3d(0px, 0px, 0px)',position:'absolute',top:this.offsetTop,left:this.offsetLeft,height:this.imageHeight,width:this.imageWidth,maxWidth:'none'});}});$.extend(Parallax,{scrollTop:0,scrollLeft:0,winHeight:0,winWidth:0,docHeight:1<<30,docWidth:1<<30,sliders:[],isReady:false,isFresh:false,isBusy:false,setup:function(){if(this.isReady)return;var $doc=jQuery(document),$win=jQuery(window);var loadDimensions=function(){Parallax.winHeight=$win.height();Parallax.winWidth=$win.width();Parallax.docHeight=$doc.height();Parallax.docWidth=$doc.width();};var loadScrollPosition=function(){var winScrollTop=$win.scrollTop();var scrollTopMax=Parallax.docHeight-Parallax.winHeight;var scrollLeftMax=Parallax.docWidth-Parallax.winWidth;Parallax.scrollTop=Math.max(0,Math.min(scrollTopMax,winScrollTop));Parallax.scrollLeft=Math.max(0,Math.min(scrollLeftMax,$win.scrollLeft()));Parallax.overScroll=Math.max(winScrollTop-scrollTopMax,Math.min(winScrollTop,0));};$win.on('resize.px.parallax load.px.parallax',function(){loadDimensions();Parallax.isFresh=false;Parallax.requestRender();}).on('scroll.px.parallax load.px.parallax',function(){loadScrollPosition();Parallax.requestRender();});loadDimensions();loadScrollPosition();jQuery(window).load(function(){setInterval(function(){loadDimensions();Parallax.isFresh=false;Parallax.requestRender();},300)})
this.isReady=true;},configure:function(options){if(typeof options=='object'){delete options.refresh;delete options.render;$.extend(this.prototype,options);}},refresh:function(){$.each(this.sliders,function(){this.refresh()});this.isFresh=true;},render:function(){this.isFresh||this.refresh();$.each(this.sliders,function(){this.render()});},requestRender:function(){var self=this;if(!this.isBusy){this.isBusy=true;window.requestAnimationFrame(function(){self.render();self.isBusy=false;});}},destroy:function(el){var i,parallaxElement=$(el).data('px.parallax');parallaxElement.$mirror.remove();for(i=0;i<this.sliders.length;i+=1){if(this.sliders[i]==parallaxElement){this.sliders.splice(i,1);}}
$(el).data('px.parallax',false);if(this.sliders.length===0){$(window).off('scroll.px.parallax resize.px.parallax load.px.parallax');this.isReady=false;Parallax.isSetup=false;}}});function Plugin(option){return this.each(function(){var $this=$(this);var options=typeof option=='object'&&option;if(this==window||this==document||$this.is('body')){Parallax.configure(options);}
else if(!$this.data('px.parallax')){options=$.extend({},$this.data(),options);$this.data('px.parallax',new Parallax(this,options));}
else if(typeof option=='object')
{$.extend($this.data('px.parallax'),options);}
if(typeof option=='string'){if(option=='destroy'){Parallax['destroy'](this);}else{Parallax[option]();}}})};var old=$.fn.parallax;$.fn.parallax=Plugin;$.fn.parallax.Constructor=Parallax;$.fn.parallax.noConflict=function(){$.fn.parallax=old;return this;};$(document).on('ready.px.parallax.data-api',function(){$('[data-parallax="scroll"]').parallax();});}(jQuery,window,document));
jQuery(document).ready(function($){$(".parent_category > a").on('click',function(){if($(this).hasClass("active")){$(this).removeClass("active");$(this).next().hide();return false;}else{$(this).addClass("active");$(this).next().show();return false;};});$("a").bind("focus",function(){if(this.blur)this.blur();});$("a.target_blank").attr("target","_blank");$(".styled_post_list1 > li:last-child").addClass("last");$('.footer_widget:nth-child(3n)').addClass('right_widget');$('#global_menu > ul > li:nth-child(9)').addClass('hide_menu');$('#global_menu > ul > li:nth-child(10)').addClass('hide_menu');$('#global_menu > ul > li:nth-child(11)').addClass('hide_menu');$('#global_menu > ul > li:nth-child(12)').addClass('hide_menu');jQuery.easing.easeOutExpo=function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;};var topBtn=$('#return_top');topBtn.hide();$(window).scroll(function(){if($(this).scrollTop()>100){topBtn.fadeIn();}else{topBtn.fadeOut();}});topBtn.click(function(){$('body,html').animate({scrollTop:0},1000,'easeOutExpo');return false;});$("#comment_area ol > li:even").addClass("even_comment");$("#comment_area ol > li:odd").addClass("odd_comment");$(".even_comment > .children > li").addClass("even_comment_children");$(".odd_comment > .children > li").addClass("odd_comment_children");$(".even_comment_children > .children > li").addClass("odd_comment_children");$(".odd_comment_children > .children > li").addClass("even_comment_children");$(".even_comment_children > .children > li").addClass("odd_comment_children");$(".odd_comment_children > .children > li").addClass("even_comment_children");$("#trackback_switch").click(function(){$("#comment_switch").removeClass("comment_switch_active");$(this).addClass("comment_switch_active");$("#comment_area").animate({opacity:'hide'},0);$("#trackback_area").animate({opacity:'show'},1000);return false;});$("#comment_switch").click(function(){$("#trackback_switch").removeClass("comment_switch_active");$(this).addClass("comment_switch_active");$("#trackback_area").animate({opacity:'hide'},0);$("#comment_area").animate({opacity:'show'},1000);return false;});$("#index_post_list_tab a").click(function(){$("#index_post_list_tab a").removeClass('active');$(this).addClass("active");return false;});$("#index_post_list_tab > li:first-child a").addClass("active");var index_post_list1=$('#index_post_list1');var index_post_list2=$('#index_post_list2');var index_post_list3=$('#index_post_list3');var index_post_list_button1=$('#index_post_list_button1 a');var index_post_list_button2=$('#index_post_list_button2 a');var index_post_list_button3=$('#index_post_list_button3 a');$('.index_post_list').hide();$('#index_post_list_wrap .index_post_list:first-child').show();index_post_list_button1.click(function(){index_post_list1.show();index_post_list2.hide();index_post_list3.hide();});index_post_list_button2.click(function(){index_post_list2.show();index_post_list1.hide();index_post_list3.hide();});index_post_list_button3.click(function(){index_post_list3.show();index_post_list1.hide();index_post_list2.hide();});function mediaQueryClass(width){if(width>991){$("html").removeClass("mobile");$("html").addClass("pc");$(".menu_button").css("display","none");$("#global_menu").show();$("#global_menu li").hover(function(){$(">ul:not(:animated)",this).slideDown("fast");$(this).addClass("active");},function(){$(">ul",this).slideUp("fast");$(this).removeClass("active");});}else{$("html").removeClass("pc");$("html").addClass("mobile");$("#global_menu li").off('hover');$("#global_menu ul ul").removeAttr('style');$(".menu_button").css("display","block");$('.menu_button').off('click');$(".menu_button").on('click',function(){if($(this).hasClass("active")){$(this).removeClass("active");$('#global_menu').hide();return false;}else{$(this).addClass("active");$('#global_menu').show();return false;};});$('#global_menu a[href*="#"]').on('click',function(){$(".menu_button").removeClass("active");$('#global_menu').hide();});$(".child_menu_button").remove();$('#global_menu li > ul').parent().prepend("<span class='child_menu_button'><span class='icon'></span></span>");$("#global_menu .child_menu_button").on('click',function(){if($(this).parent().hasClass("open")){$(this).parent().removeClass("open");return false;}else{$(this).parent().addClass("open");return false;};});$("#global_menu li.menu-item-has-children a").hover(function(){$(this).prev().addClass("active");},function(){$(this).prev().removeClass("active");});};};function viewport(){var e=window,a='inner';if(!('innerWidth'in window)){a='client';e=document.documentElement||document.body;}
return{width:e[a+'Width'],height:e[a+'Height']};}
var ww=viewport().width;var timer=false;mediaQueryClass(ww);$(window).bind("resize orientationchange",function(){if(timer!==false){clearTimeout(timer);}
timer=setTimeout(function(){var ww=viewport().width;mediaQueryClass(ww);},200);})});
if(window.addEventListener)
{window.addEventListener("load",syncerTelephoneLink,false);}
else
{window.attachEvent("onload",syncerTelephoneLink);}
function syncerTelephoneLink()
{var width=window.innerWidth;if(width>=640){return false;}
var elms=document.getElementsByClassName("syncer-tel");for(var i=0,l=elms.length;l>i;i++)
{var elm=elms[i];var number=elm.getAttribute("data-number");number=number.replace(/[Ａ-Ｚａ-ｚ０-９]/g,function(s){return String.fromCharCode(s.charCodeAt(0)-0xFEE0);});number=number.replace(/ー|‐|－|―|₋|—/g,"-")
number=number.replace(/-/g,"")
if(number!=null)
{if(elm.tagName=="A")
{elm.href="tel:"+number;}
else
{var text=elm.innerHTML;elm.innerHTML='<a href="tel:'+number+'">'+text+'</a>';}}}};
(function(){var is_webkit=navigator.userAgent.toLowerCase().indexOf('webkit')>-1,is_opera=navigator.userAgent.toLowerCase().indexOf('opera')>-1,is_ie=navigator.userAgent.toLowerCase().indexOf('msie')>-1;if((is_webkit||is_opera||is_ie)&&'undefined'!==typeof(document.getElementById)){var eventMethod=(window.addEventListener)?'addEventListener':'attachEvent';window[eventMethod]('hashchange',function(){var element=document.getElementById(location.hash.substring(1));if(element){if(!/^(?:a|select|input|button|textarea)$/i.test(element.tagName))
element.tabIndex=-1;element.focus();}},false);}})();
!function(a,b){"use strict";function c(){if(!e){e=!0;var a,c,d,f,g=-1!==navigator.appVersion.indexOf("MSIE 10"),h=!!navigator.userAgent.match(/Trident.*rv:11\./),i=b.querySelectorAll("iframe.wp-embedded-content");for(c=0;c<i.length;c++){if(d=i[c],!d.getAttribute("data-secret"))f=Math.random().toString(36).substr(2,10),d.src+="#?secret="+f,d.setAttribute("data-secret",f);if(g||h)a=d.cloneNode(!0),a.removeAttribute("security"),d.parentNode.replaceChild(a,d)}}}var d=!1,e=!1;if(b.querySelector)if(a.addEventListener)d=!0;if(a.wp=a.wp||{},!a.wp.receiveEmbedMessage)if(a.wp.receiveEmbedMessage=function(c){var d=c.data;if(d)if(d.secret||d.message||d.value)if(!/[^a-zA-Z0-9]/.test(d.secret)){var e,f,g,h,i,j=b.querySelectorAll('iframe[data-secret="'+d.secret+'"]'),k=b.querySelectorAll('blockquote[data-secret="'+d.secret+'"]');for(e=0;e<k.length;e++)k[e].style.display="none";for(e=0;e<j.length;e++)if(f=j[e],c.source===f.contentWindow){if(f.removeAttribute("style"),"height"===d.message){if(g=parseInt(d.value,10),g>1e3)g=1e3;else if(~~g<200)g=200;f.height=g}if("link"===d.message)if(h=b.createElement("a"),i=b.createElement("a"),h.href=f.getAttribute("src"),i.href=d.value,i.host===h.host)if(b.activeElement===f)a.top.location.href=d.value}else;}},d)a.addEventListener("message",a.wp.receiveEmbedMessage,!1),b.addEventListener("DOMContentLoaded",c,!1),a.addEventListener("load",c,!1)}(window,document);