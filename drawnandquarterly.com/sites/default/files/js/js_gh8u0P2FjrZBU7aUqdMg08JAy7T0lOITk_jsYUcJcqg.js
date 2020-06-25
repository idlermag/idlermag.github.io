/**
 * BxSlider v4.1.1 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2013, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
!function(t){var e={},s={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){}};t.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},s,n),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),f(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:v()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",u()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:50,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&P(),o.active.last=o.settings.startSlide==x()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&T(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&E(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,h)},g=function(e,i){var s=e.find("img, iframe").length;if(0==s)return i(),void 0;var n=0;e.find("img, iframe").each(function(){t(this).one("load",function(){++n==s&&i()}).each(function(){this.complete&&t(this).load()})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),s=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(s)}o.loader.remove(),S(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(p()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",B),o.settings.auto&&o.settings.autoStart&&H(),o.settings.ticker&&L(),o.settings.pager&&I(o.settings.startSlide),o.settings.controls&&W(),o.settings.touchEnabled&&!o.settings.ticker&&O()},p=function(){var e=0,s=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var n=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(s=o.children.eq(n),i=1;i<=o.settings.maxSlides-1;i++)s=n+i>=o.children.length?s.add(o.children.eq(i-1)):s.add(o.children.eq(n+i))}else s=o.children.eq(o.active.index);else s=o.children;return"vertical"==o.settings.mode?(s.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(!1)}).get()),e},v=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},u=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},x=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/m();else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},S=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();b(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*m()).position();o.active.index==x()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?b(-e.left,"reset",0):"vertical"==o.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,s){if(o.usingCSS){var n="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?r.css(o.animProp,n):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(s.resetValue,"reset",0),N()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){D()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){b(s.resetValue,"reset",0),N()})}},w=function(){for(var e="",i=x(),s=0;i>s;s++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(s),o.pagerEl.addClass("bx-custom-pager")):(n=s+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},T=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.delegate("a","click",q)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",y),o.controls.prev.bind("click",z),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},E=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.delegate(".bx-start","click",k),o.controls.autoEl.delegate(".bx-stop","click",M),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),A(o.settings.autoStart?"stop":"start")},P=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},y=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},k=function(t){r.startAuto(),t.preventDefault()},M=function(t){r.stopAuto(),t.preventDefault()},q=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),s=parseInt(i.attr("data-slide-index"));s!=o.active.index&&r.goToSlide(s),e.preventDefault()},I=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")}),void 0)},D=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==x()-1&&o.carousel?t=o.children.eq((x()-1)*m()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),"horizontal"==o.settings.mode?b(-t.left,"reset",0):"vertical"==o.settings.mode&&b(-t.top,"reset",0)}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},A=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},W=function(){1==x()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==x()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},H=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}b(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,s="horizontal"==o.settings.mode?"left":"top",n=i*(e-Math.abs(parseInt(r.css(s))));N(n)}),N()},N=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var s="horizontal"==o.settings.mode?-e.left:-e.top,n="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:n};b(s,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",X)},X=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",Y),o.viewport.bind("touchend",V)}},Y=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>s&&o.settings.preventDefaultSwipeX?t.preventDefault():3*s>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var n=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;n=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;n=o.touch.originalPos.top+r}b(n,"reset",0)}},V=function(t){o.viewport.unbind("touchmove",Y);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var s=Math.abs(o.touch.start.x-o.touch.end.x);s>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var s=0;"horizontal"==o.settings.mode?(s=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(s=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&s>0||o.active.last&&0>s)?b(i,"reset",200):Math.abs(s)>=o.settings.swipeThreshold?(0>s?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):b(i,"reset",200)}o.viewport.unbind("touchend",V)},B=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,r.redrawSlider())};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?x()-1:e>=x()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=x()-1,o.settings.pager&&I(o.active.index),o.settings.controls&&W(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=p()&&o.viewport.animate({height:p()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",51).fadeIn(o.settings.speed,function(){t(this).css("zIndex",50),D()});else{o.settings.adaptiveHeight&&o.viewport.height()!=p()&&o.viewport.animate({height:p()},o.settings.adaptiveHeightSpeed);var s=0,n={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);n=a.position(),s=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;n=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(x()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);n=a.position()}else if("next"==i&&0==o.active.index)n=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*m();n=o.children.eq(c).position()}if("undefined"!=typeof n){var g="horizontal"==o.settings.mode?-(n.left-s):-n.top;b(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&A("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&A("start"))},r.getCurrentSlide=function(){return o.active.index},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).outerWidth(u()),o.viewport.css("height",p()),o.settings.ticker||S(),o.active.last&&(o.active.index=x()-1),o.active.index>=x()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),I(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",B))},r.reloadSlider=function(t){void 0!=t&&(n=t),r.destroySlider(),d()},d(),this}}(jQuery);;
(function ($) {
  function getClassNameLike(c,p) {
    
    return $.grep(c.split(" "), function(v, i){
       return v.indexOf(p) === 0;
   }).join();
  }
  function getAllMethods(object) {
    return Object.getOwnPropertyNames(object).filter(function(property) {
        return typeof object[property] == 'function';
    });
  }

  function doNewsLists() {

    if(Drupal.settings.dq_slider != undefined){
      Drupal.settings.dq_slider.newsSliders = {};
    }

    $('.ui-tabs-panel .view').once(function(){
      var list = $(this).find('.news-slides');
      var len = list.children().length;

      var parent = $(this).closest('.block-quicktabs');
      var parentid = parent.attr('id');
      
      var viewid = getClassNameLike(this.className,'view-id-');
      
      
      

      if('undefined' != typeof blocks && blocks.hasOwnProperty(parentid) && blocks[parentid].hasOwnProperty(viewid)) {
        var th = blocks[parentid][viewid]['threshhold'];
        var numSlides = blocks[parentid][viewid]['numSlides'];

        if(len > th) {
          var tab = $(this).closest('.ui-tabs-panel');
          var tabid = tab.attr('id');
          var nextId = tabid+'-nav-header';
          var prevId = tabid+'-nav-footer';
          $(this).find('.view-content').prepend('<div id="'+tabid+'-nav-header" class="dq-slides-nav-header"><img src="/sites/all/modules/dq_slider/img/slider_arrow_up.png" /></div>');
          $(this).find('.view-content').append('<div id="'+tabid+'-nav-footer" class="dq-slides-nav-footer"><img src="/sites/all/modules/dq_slider/img/slider_arrow_down.png" /></div>');
          
          
          var newsSlider = $(this).find('.news-slides').bxSlider({
            mode:'vertical',
            minSlides: numSlides,
            maxSlides: numSlides,
            moveSlides: numSlides,
            slideMargin:0,
            infiniteLoop:false,
            pager:false,
            controls:false,
            adaptiveHeight: false,
          });

          Drupal.settings.dq_slider.newsSliders[viewid] = newsSlider;
          
          
          
          //$('#'+tabid+'-nav-footer').click(function(){
          $(this).find('.dq-slides-nav-footer').click(function(){
            
            newsSlider.goToNextSlide();
          });
          //$('#'+tabid+'-nav-header').click(function(){
          $(this).find('.dq-slides-nav-header').click(function(){
            
            newsSlider.goToPrevSlide();
          });

          // var tabIndex = tab.index()-1;
            
          // $(this).parents('.quicktabs-ui-wrapper').bind("tabsactivate", function( event, ui ) {
          //   if(ui.index == tabIndex) {
          //     //if(typeof newsSlider.reloadSlider === 'function') {
          //       newsSlider.reloadSlider();
          //       //
          //       
          //       
          //       
          //       

          //     //}
          //   }
          // });

          var tabIndex = tab.index()-1;
          


          $(this).parents('.quicktabs-ui-wrapper').bind("tabsactivate", function( event, ui ) {
            
            var active = $(this).tabs( "option", "active" );
            
            if(active == tabIndex) {
              
              if(typeof newsSlider.reloadSlider === 'function') {
                newsSlider.reloadSlider();
              }
              
            }
          });
      }
    }

      
      
    });
  }
  function initAuthorBrowser() {
    var pathArray = window.location.pathname.split( 'https://drawnandquarterly.com/' );
    if(pathArray[1] == 'author') {
      $('#block-dq-slider-dq-slider-authorbrowser .view').slideToggle();
      $('#block-dq-slider-dq-slider-authorbrowser h2.block-title').css({'cursor':'pointer'}).addClass('no-bottom-margin').once().click(function() {
        //currentSlide = authorSlider.getCurrentSlide();
        headerElement = $(this);

        //$('#block-dq-slider-dq-slider-authorbrowser .view').slideToggle();

        if($('#block-dq-slider-dq-slider-authorbrowser .view').is(":visible")) {
          $('#block-dq-slider-dq-slider-authorbrowser .view').slideUp();
          headerElement.addClass('no-bottom-margin');
          //settings = authorSlider.o.settings;
          //authorSlider.reloadSlider();
          //authorSlider.goToSlide(currentSlide);
        } else {
          $('#block-dq-slider-dq-slider-authorbrowser .view').slideDown();
          headerElement.removeClass('no-bottom-margin');
        }
        
        
      });
    }
  }
  $(document).ready(function(){
    
    

  });
  $(window).load(function() {
    doNewsLists();
    initAuthorBrowser();
  });
  Drupal.behaviors.dq_slider = {
    attach: function(context, settings) {
      
      
      
      sliderSettings = {
        moveSlides: 1,
        startSlide: 0,
        mode: 'horizontal',
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        slideWidth: 100,
        startSlide: 0,
        slideMargin: 11,
        infiniteLoop:false,
        controls:false,
        pager:false,
        responsive:false,
        adaptiveHeight:false,
        onSlideAfter: function(slideElement, oldIndex, newIndex){
          slideElement.closest('.block-dq-slider').find('.dq-slide-nav-item').eq(oldIndex).removeClass('dq-slider-active-nav');
          slideElement.closest('.block-dq-slider').find('.dq-slide-nav-item').eq(newIndex).addClass('dq-slider-active-nav');
        },
      };
      navSettings = {
        mode:'vertical',
        minSlides:1,
        maxSlides:1,
        moveSlides:1,
        startSlide: 0,
        slideMargin:0,
        infiniteLoop:false,
        controls:false,
        pager:false,
        adaptiveHeight: false
      };

      doTabs = true;

      if('dq_slider' in Drupal.settings) {
        for (var id in Drupal.settings.dq_slider.sliders) {

          $('#' + id, context).once('dq-slider-processed',function () {
            var el = $(this);

            $('.dq-slides',el).css({'height':'auto','overflow':'visible'});

            // Fire up the gallery.
            var bxSettings = $.extend(
              sliderSettings,
              Drupal.settings.dq_slider.sliders[id].slider_settings
            );

            var navBxSettings = $.extend(
              navSettings,
              Drupal.settings.dq_slider.sliders[id].nav_settings
              );
            
            var sliderObj;
            var navSliderObj;
            var numSlides = bxSettings.maxSlides;
            var numNavSlides = navBxSettings.maxSlides;
            
            var el = $(this);
            var sliderObj = $(this).find('.dq-slides').bxSlider(bxSettings);

            Drupal.settings.dq_slider.sliders[id].sliderObj = sliderObj;

            //set navigation elements to change active slide

            var startSlide = Drupal.settings.dq_slider.sliders[id].slider_settings.startSlide;

            var useAjaxFetch = Drupal.settings.dq_slider.sliders[id].dq_slider_force_nav_display;
           

            var pause_nav = Drupal.settings.dq_slider.sliders[id].pause_nav;
            var nav_on_click = Drupal.settings.dq_slider.sliders[id].nav_on_click;

            $(this).find('.dq-slides-nav li').eq(startSlide).addClass('dq-slider-active-nav');
            
            $(this).find('.dq-slides-nav li').click(function() {
              index = $(this).attr('data-slide-index');
              if(index > sliderObj.getSlideCount()-numSlides) {
                index = sliderObj.getSlideCount()-numSlides;
              }
              sliderObj.goToSlide(index);

              $(this).addClass('dq-slider-active-nav')
              $(this).siblings().removeClass('dq-slider-active-nav');
              if(pause_nav) {
                sliderObj.stopAuto();
              }
              
              // delayed double-click: If this item was clicked on once, navigate to it
              // otherwise, set that it has been clicked on once
              if($(this).attr('data-dq-slider-was-clicked')) {
                if($(this).attr('data-slide-href') != undefined && nav_on_click) {
                if (!window.location.origin) {
                  window.location.origin = window.location.protocol+"//"+window.location.host;
                }
                window.location.href = window.location.origin+$(this).attr('data-slide-href');
                }
              } else {
                $(this).attr('data-dq-slider-was-clicked',1);
                $(this).siblings().removeAttr('data-dq-slider-was-clicked');
              }
              

              
              
            });
            $(this).find('.dq-slides-nav li').dblclick(function(){
              // index = $(this).index();
              // parentid = $(this).closest('.block-dq-slider').attr('id');
              
              
              // el = $(this).closest('.block-dq-slider').find('.dq-slide a').eq(index);

              if (!window.location.origin)
                window.location.origin = window.location.protocol+"//"+window.location.host;
              window.location.href = window.location.origin+$(this).attr('data-slide-href');
              
              
              
            });

            //apply nav slider
            var navSliderObj = $(this).find('.dq-slides-nav-wrapper.dq-slides-nav-with-slider .dq-slides-nav').bxSlider(navBxSettings);
            Drupal.settings.dq_slider.sliders[id].navSliderObj = navSliderObj;
            

            if(useAjaxFetch) {
              sliderWrapper = $(this).find('.dq-slides-nav-wrapper');
              var start = sliderWrapper.attr('data-dq-start');
              var offset = parseInt(sliderWrapper.attr('data-dq-offset'));
              var page = parseInt(sliderWrapper.attr('data-dq-pagesize'));
              var href = sliderWrapper.attr('data-dq-ajaxbase');
              var total = parseInt(sliderWrapper.attr('data-dq-total'));
            }

            var headerElement;
            if($(this).find('.dq-slides-nav-wrapper').hasClass('dq-slides-nav-with-letters')) {
              headerElement = $('.dq-slides-nav-header img',el);
            } else {
              headerElement = $('.dq-slides-nav-header',el);
            }
            
            headerElement.click(function() {
              
              if(useAjaxFetch && offset > 0) {
                if(offset-page > 0) {
                  new_offset = offset-page;
                } else {
                  new_offset = 0;
                }

                href += '?';
                var section = getQueryVariable('section');
                if(section) {
                  href += 'section='+section+'&';
                }
                var author = getQueryVariable('author');
                if(author) {
                  href += 'author='+author+'&';
                }
                var book = getQueryVariable('book');
                if(book) {
                  href += 'book='+book+'&';
                }
                href += 'offset='+new_offset;

                var  element_settings = {
                  //url: window.location.protocol + '//' + window.location.hostname +  settings.basePath + settings.pathPrefix + 'ajax/remote',
                  url: href,
                  event: 'click',
                  progress: {
                    type: 'throbber'
                  }
                };
                var base  = $(this).closest('.block-dq-slider').attr('id');
                var element = $(this).closest('.block-dq-slider');
               

                Drupal.ajax[base] = new Drupal.ajax(base, element, element_settings);
              } else if(!useAjaxFetch) {
                current = navSliderObj.getCurrentSlide();
                p_current = sliderObj.getCurrentSlide();

                if(current-numNavSlides > 0) {
                    navGo = current-numNavSlides;
                }
                else {
                    navGo = 0;
                }  
                navSliderObj.goToSlide(navGo);
                if(bxSettings.mode == 'horizontal') {
                  sliderObj.goToSlide(navGo);
                }
              }
              
              
              
              
              
              
            });
            $('.dq-slides-nav-footer',el).click(function() {
              
             
              if(useAjaxFetch && (offset < (total-page))) {
               
                
               
                
               
                if(offset+page < total-page) {
                  new_offset = offset+page;
                } else {
                  if((total-page) > 0) {
                    new_offset = total-page;
                  } else {
                    new_offset = 0;
                  }
                }
                href += '?';
                var section = getQueryVariable('section');
                if(section) {
                  href += 'section='+section+'&';
                }
                var author = getQueryVariable('author');
                if(author) {
                  href += 'author='+author+'&';
                }
                var book = getQueryVariable('book');
                if(book) {
                  href += 'book='+book+'&';
                }
                href += 'offset='+new_offset;
               


                var  element_settings = {
                  //url: window.location.protocol + '//' + window.location.hostname +  settings.basePath + settings.pathPrefix + 'ajax/remote',
                  url: href,
                  event: 'click',
                  progress: {
                    type: 'throbber'
                  }
                };
                var base  = $(this).closest('.block-dq-slider').attr('id');
                var element = $(this).closest('.block-dq-slider');
               

                Drupal.ajax[base] = new Drupal.ajax(base, element, element_settings); 
              } else if (!useAjaxFetch) {

                current = navSliderObj.getCurrentSlide();
                max = navSliderObj.getSlideCount();
               

                if(current+numNavSlides < max-numNavSlides) {
                  navGo = current+numNavSlides;
                }
                else {
                    navGo = max-numNavSlides;
                }
                navSliderObj.goToSlide(navGo);
              
                if(bxSettings.mode == 'horizontal') {
                  
                  sliderObj.goToSlide(navGo);
                }
              }


              
              
              
            });
            
            // $('.dq-slides-nav-letter',el).click(function() {
            //   //var numSlides = Drupal.settings.dq_slider.sliders[id].slider_settings.maxSlides;
            //   
            //   
            //   var letter = $(this).attr('data-dq-nav-letter');
            //   
            //   offset = null;
            //   parentOffset = null;
            //   if(letter.match(/[0-9]/)) {
            //     offset = 0;
            //     parentOffset = 0;
            //   }
            //   else {
            //     wrapper = $(this).closest('.dq-slides-nav-wrapper');
            //     first = wrapper.find('.title-group-'+letter).first();
            //     
            //     if(first.index() == -1) {
            //       while(first.index() == -1 && letter < 'Z') {
            //         letter = nextChar(letter);
            //         
            //         first = wrapper.find('.title-group-'+letter);
            //       }
            //     }
            //     if(first.index() != -1) {
            //       offset = first.index();
            //       parentOffset = offset;
            //     } else if (first.index() == -1 && letter == 'Z') {
            //       
            //       offset = navSliderObj.getSlideCount()-numNavSlides;
            //       parentOffset = sliderObj.getSlideCount()-numSlides;
            //     }
            //   }
              
              
            //   if(offset != null) {
            //     
            //     if(offset > navSliderObj.getSlideCount() - numNavSlides) {
            //       
            //       offset = navSliderObj.getSlideCount() - numNavSlides;
            //     }
            //     
            //     navSliderObj.goToSlide(offset);
            //   }
              
            //   if(parentOffset != null) {
            //     
            //     
            //     

            //     if(parentOffset > sliderObj.getSlideCount()-numSlides) {
            //       parentOffset = sliderObj.getSlideCount()-numSlides;
            //     }
            //     
            //     sliderObj.goToSlide(parentOffset)
            //   }
            // });

            //if in tabs, set the parent tab to reload the slider on activation
            if(doTabs) {
              var tabIndex = $(this).parents('.ui-tabs-panel').index()-1;
              
              $(this).parents('.quicktabs-ui-wrapper').bind("tabsactivate", function( event, ui ) {
                
                
                
                var active = $(this).tabs( "option", "active" );
                
                var newIndex = ui.newPanel.selector.substring(ui.newPanel.selector.length-1)-1;
                
                
                if(active == tabIndex) {
                  
                  if(typeof sliderObj.redrawSlider === 'function') {
                    sliderObj.redrawSlider();
                    
                    
                    

                  }
                  if(typeof navSliderObj.redrawSlider === 'function') {
                    navSliderObj.redrawSlider();
                    el.find('.dq-slides-nav li').removeClass('dq-slider-active-nav');
                    el.find('.dq-slides-nav li').eq(0).addClass('dq-slider-active-nav');
                    
                    
                  }
                }
              });
            }
            
            if(Drupal.settings.dq_slider.sliders[id]['dq_slider_slider_usekeys']) {
              
              $(window).keydown(function(e){
                
                    if (e.keyCode == 39) {
                        sliderObj.goToNextSlide();
                        
                        return false;
                    }
                    else if (e.keyCode == 37) {
                        sliderObj.goToPrevSlide();
                        
                        return false;
                    }
                });
            }

          });


        }
      }

//BEGIN AJAX STUFF

// $('#block-dq-slider-dq-slider-store').once('dq-ajax-wrapper',function() {
//   var base = $(this).attr('id');
//   var display_id = $(this).find('.block-dq-slider-wrapper').attr('data-dq-slider-display-name');
//   var element = this;
//   $('.dq-slides-nav-letter',this).click(function() {
    
//     letter = $(this).attr('data-dq-nav-letter');
//     href = 'dq-slider/ajax/viewspage/'+display_id+'/'+letter;
//    
//    
//     var  element_settings = {
//       //url: window.location.protocol + '//' + window.location.hostname +  settings.basePath + settings.pathPrefix + 'ajax/remote',
//       url: href,
//       event: 'click',
//       progress: {
//         type: 'throbber'
//       }
//     };

//     Drupal.ajax[base] = new Drupal.ajax(base, element, element_settings);
//   });
// });


// $('.dq-slides-nav-letter').once(function(index){
//   $(this).click(function() {
    

//     var parent = $(this).closest('.block-dq-slider');
//     var parts = parent.attr('id').split('-');
//     var display_id = parts[2];

//     var href = 'dq-slider/ajax/viewspage/'+display_id+'/'+$(this).attr('data-dq-slider-nid');

//    
//    
//     new Drupal.ajax('#'+parent.attr('id'), $(this), {
//           url: href,
//           settings: {},
//           effect: 'slide',
//           event: 'click tap'
//         });
//   });
  
// });

//       
//       //var $mySpecialLink = $('#block-dq-slider-dq-slider-store .dq-slide a');
//       $('#block-dq-slider-dq-slider-events .dq-slide a').once(function (index) {
//         href = 'dq-slider/ajax/event/'+$(this).attr('data-dq-slider-nid');
//         
//         new Drupal.ajax('#dq-events-viewbox', $(this), {
//           url: href,
//           settings: {},
//           effect: 'slide',
//           event: 'click tap'
//         });
//       });
        
//       
//       $('#block-dq-slider-dq-slider-store .dq-slide a').once('dq-slide-click',function (index) {
//         href = 'dq-slider/ajax/book/'+$(this).attr('data-dq-slider-nid');
//         $(this).click(function() {
//           $('.dq-block-progress').show();
//         });
//         new Drupal.ajax('#dq-store-viewbox', $(this), {
//           url: href,
//           settings: {},
//           effect: 'slide',
//           event: 'click tap'
//         });
//       });
         
// $('#dq-store-slider-author .dq-slide a').once('dq-author-slide-click',function(index){
//  href = 'dq-slider/ajax/book/'+$(this).attr('data-dq-slider-nid');
//  $(this).click(function() {
//    $('.dq-author-progress').show();
//  });
//  new Drupal.ajax('#dq-store-viewbox', $(this), {
//   url: href,
//   settings: {},
//   effect: 'slide',
//   event: 'click tap'
// });
// });
// $('#block-dq-slider-dq-slider-store .dq-author-slide a').once('dq-author-click',function (index) {
//  $(this).click(function(){
//    $('.dq-block-progress').show();
//    $('.dq-content-progress').show();
//  });
//  href = 'dq-slider/ajax/author/'+$(this).attr('data-dq-slider-nid');
//  new Drupal.ajax('#dq-store-slider-author', $(this), {
//    url: href,
//    settings: {},
//    effect: 'slide',
//    event: 'click tap'
//  });
// });
// $('#block-dq-slider-dq-slider-store .dq-author-slider .dq-slides-nav-content .dq-slide-nav-item').once(function (index){
//  $(this).click(function(){
//    $('.dq-content-progress').show();
//  });
//  index = $(this).index();
//  url = $(this).closest('#dq-slider-slider-wrapper').find('.dq-author-slide a')[index].getAttribute('data-dq-slider-nid');
//  url = 'dq-slider/ajax/author/'+url;
//            
//            new Drupal.ajax('#dq-store-slider-author', $(this), {
//              url: url,
//              settings: {},
//              effect: 'slide',
//              event: 'click tap'
//            });
//          });

//END AJAX STUFF

// $('.dq-store-slider-header-nav li a').once(function(index) {

//  new Drupal.ajax('#dq-slider-slider-wrapper', $(this), {
//   url: $(this).attr('href'),
//   settings: {
//     progress: {
//       type: 'none'
//     }
//   },
//   event: 'click tap'
// });

// });
// $('.dq-store-slider-header-nav li a').click(function() {
//            
//            //$('#dq-store-viewbox').hide();
//            $('.dq-block-progress').show();
//            $('.dq-store-slider-header-nav li').removeClass('dq-store-slider-header-active');
//            $(this).parent().addClass('dq-store-slider-header-active');
//          });
}
} // dq_slider behavior

Drupal.behaviors.dq_slider_init_store = {
 attach: function(context, settings) {  
   $('#dq-slider-slider-wrapper').ajaxComplete(function(event, xhr, settings) {
         
         $('.dq-block-progress').hide();
         $('.dq-author-progress').hide();
         if (event.target.id == 'dq-slider-slider-wrapper') {//initAuthorBrowser
           initSlider('#block-dq-slider-dq-slider-store #dq-slider-slider-wrapper',148,4);
           
           if(settings.url.indexOf('https://drawnandquarterly.com/author/') != -1) {
             initSlider('#dq-slider-author-wrapper',148,3);
             
           } else if (settings.url.indexOf('https://drawnandquarterly.com/section/') != -1) {
             $('#dq-store-slider-author').empty();
             
           }
           if($('#dq-store-slider-author').is(':empty')){
            $('#dq-store-slider-author').removeClass('slash-border');
          } else {
            $('#dq-store-slider-author').addClass('slash-border');
          }
          initSlider('.dq-creation-gallery',623,1,1,'fade');


        }

      });

 }
     }
     
     if (Drupal.ajax) {
       Drupal.ajax.prototype.commands.dq_slider_cart_update = function (ajax, response, status) {
         //window.clearTimeout(Drupal.behaviors.commerce_add_to_cart_show_ajax_cart.timer);
         $.post('/dq-slider/ajax/cart', function (data) {

           //$('.view-id-commerce_cart_block').replaceWith(data.view);
           var qtytext = "My Cart (" + data.count + ")";
           $('#cart-qty').text(qtytext);

           blink('#block-block-1', 3, 500);

           var build_id = $('input[value=' + response.data.form_build_id + ']');
           var submit_button = build_id.closest('form').find('.form-submit');
           submit_button.once('dq-buy-check').val($("<div>").html("&#10003;").text() + ' ' + submit_button.val());
         });
       }

       Drupal.ajax.prototype.commands.dq_slider_book_loaded = function (ajax, response, status) {
         //window.clearTimeout(Drupal.behaviors.commerce_add_to_cart_show_ajax_cart.timer);
         //Drupal.attachBehaviors();

         //Drupal.attachBehaviors(ajax.selector);
       }
     }
     
     /**
      * Purpose: blink a page element
      * Preconditions: the element you want to apply the blink to, 
          the number of times to blink the element (or -1 for infinite times),
          the speed of the blink
      **/
      function blink(elem, times, speed)
      {
          if (times > 0 || times < 0) { 
            if ($(elem).hasClass("blink"))
               $(elem).removeClass("blink");
            else
               $(elem).addClass("blink");
           }

           clearTimeout(function() { blink(elem, times, speed); });

           if (times > 0 || times < 0) {
             setTimeout(function() { blink(elem, times, speed); }, speed);
             times-= .5;
           }
      }

     function nextChar(c) {
         return String.fromCharCode(c.charCodeAt(0) + 1);
     }

    /**
     * Get query variables
     */
    function getQueryVariable(variable) {
           var query = window.location.search.substring(1);
           var vars = query.split("&");
           for (var i=0;i<vars.length;i++) {
                   var pair = vars[i].split("=");
                   if(pair[0] == variable){return pair[1];}
           }
           return(false);
    }
})(jQuery, Drupal);
;
