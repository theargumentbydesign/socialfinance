(function ($) {

  /**
   * The recommended way for producing HTML markup through JavaScript is to write
   * theming functions. These are similiar to the theming functions that you might
   * know from 'phptemplate' (the default PHP templating engine used by most
   * Drupal themes including Omega). JavaScript theme functions accept arguments
   * and can be overriden by sub-themes.
   *
   * In most cases, there is no good reason to NOT wrap your markup producing
   * JavaScript in a theme function.
   */
  Drupal.theme.prototype.socialfinanceExampleButton = function (path, title) {
    // Create an anchor element with jQuery.
    return $('<a href="' + path + '" title="' + title + '">' + title + '</a>');
  };

  /**
   * Behaviors are Drupal's way of applying JavaScript to a page. In short, the
   * advantage of Behaviors over a simple 'document.ready()' lies in how it
   * interacts with content loaded through Ajax. Opposed to the
   * 'document.ready()' event which is only fired once when the page is
   * initially loaded, behaviors get re-executed whenever something is added to
   * the page through Ajax.
   *
   * You can attach as many behaviors as you wish. In fact, instead of overloading
   * a single behavior with multiple, completely unrelated tasks you should create
   * a separate behavior for every separate task.
   *
   * In most cases, there is no good reason to NOT wrap your JavaScript code in a
   * behavior.
   *
   * @param context
   *   The context for which the behavior is being executed. This is either the
   *   full page or a piece of HTML that was just added through Ajax.
   * @param settings
   *   An array of settings (added through drupal_add_js()). Instead of accessing
   *   Drupal.settings directly you should use this because of potential
   *   modifications made by the Ajax callback that also produced 'context'.
   */
  Drupal.behaviors.socialfinanceExampleBehavior = {
    attach: function (context, settings) {
      // By using the 'context' variable we make sure that our code only runs on
      // the relevant HTML. Furthermore, by using jQuery.once() we make sure that
      // we don't run the same piece of code for an HTML snippet that we already
      // processed previously. By using .once('foo') all processed elements will
      // get tagged with a 'foo-processed' class, causing all future invocations
      // of this behavior to ignore them.
      $('.some-selector', context).once('foo', function () {
        // Now, we are invoking the previously declared theme function using two
        // settings as arguments.
        var $anchor = Drupal.theme('socialfinanceExampleButton', settings.myExampleLinkPath, settings.myExampleLinkTitle);

        // The anchor is then appended to the current element.
        $anchor.appendTo(this);
      });
    }
  };

})(jQuery);
;
;
/*

SMINT V1.0 by Robert McCracken
SMINT V2.0 by robert McCracken with some awesome help from Ryan Clarke (@clarkieryan) and mcpacosy ‏(@mcpacosy)
SMINT V3.0 by robert McCracken with some awesome help from Ryan Clarke (@clarkieryan) and mcpacosy ‏(@mcpacosy)

SMINT is my first dabble into jQuery plugins!

http://www.outyear.co.uk/smint/

If you like Smint, or have suggestions on how it could be improved, send me a tweet @rabmyself

*/


(function($){


	$.fn.smint = function( options ) {

		var settings = $.extend({
			'scrollSpeed'  : 500,
			'mySelector'     : 'div'
		}, options);

		// adding a class to users div
		$(this).addClass('smint');


				
		
		//Set the variables needed
		var optionLocs = new Array(),
			lastScrollTop = 0,
			menuHeight = $(".smint").height(),
			smint = $('.smint'),
        	smintA = $('.smint a'),
        	myOffset = smint.height('105px');

      



		if ( settings.scrollSpeed ) {
				var scrollSpeed = settings.scrollSpeed
			}

		if ( settings.mySelector ) {
				var mySelector = settings.mySelector
		};



		return smintA.each( function(index) {
            
			var id = $(this).attr('href').split('#')[1];

			if (!$(this).hasClass("extLink")) {
				$(this).attr('id', id);
			}

			
			//Fill the menu
			optionLocs.push(Array(
				$(mySelector+"."+id).position().top-menuHeight, 
				$(mySelector+"."+id).height()+$(mySelector+"."+id).position().top, id)
			);

			///////////////////////////////////

			// get initial top offset for the menu 
			var stickyTop = smint.offset().top;	

			// check position and make sticky if needed
			var stickyMenu = function(direction){

				// current distance top
				var scrollTop = $(window).scrollTop()+myOffset; 

				// if we scroll more than the navigation, change its position to fixed and add class 'fxd', otherwise change it back to absolute and remove the class
				if (scrollTop > stickyTop+myOffset) { 
					smint.css({ 'position': 'fixed', 'top':0,'left':0 }).addClass('fxd');

					// add padding to the body to make up for the loss in heigt when the menu goes to a fixed position.
					// When an item is fixed, its removed from the flow so its height doesnt impact the other items on the page
					$('body').css('padding-top', menuHeight );	
				} else {
					smint.css( 'position', 'relative').removeClass('fxd'); 
					//remove the padding we added.
					$('body').css('padding-top', '0' );	
				}   

				// Check if the position is inside then change the menu
				// Courtesy of Ryan Clarke (@clarkieryan)
				if(optionLocs[index][0] <= scrollTop && scrollTop <= optionLocs[index][1]){	
					if(direction == "up"){
						$("#"+id).addClass("active");
						$("#"+optionLocs[index+1][2]).removeClass("active");
					} else if(index > 0) {
						$("#"+id).addClass("active");
						$("#"+optionLocs[index-1][2]).removeClass("active");
					} else if(direction == undefined){
						$("#"+id).addClass("active");
					}
					$.each(optionLocs, function(i){
						if(id != optionLocs[i][2]){
							
							$("#"+optionLocs[i][2]).removeClass("active");
						}
					});
				}
			};

			// run functions
			stickyMenu();

			// run function every time you scroll
			$(window).scroll(function() {
				//Get the direction of scroll
				var st = $(this).scrollTop()+myOffset;
				if (st > lastScrollTop) {
				    direction = "down";
				} else if (st < lastScrollTop ){
				    direction = "up";
				}
				lastScrollTop = st;
				stickyMenu(direction);

				// Check if at bottom of page, if so, add class to last <a> as sometimes the last div
				// isnt long enough to scroll to the top of the page and trigger the active state.

				if($(window).scrollTop() + $(window).height() == $(document).height()) {
	       			smintA.removeClass('active')
	       			$(".smint a:not('.extLink'):last").addClass('active')
	       			
   				} else {
   					smintA.last().removeClass('active')
   				}
			});

			///////////////////////////////////////
        
        	$(this).on('click', function(e){
				// gets the height of the users div. This is used for off-setting the scroll so the menu doesnt overlap any content in the div they jst scrolled to
				var myOffset = smint.height();   

        		// stops hrefs making the page jump when clicked
				e.preventDefault();
				
				// get the hash of the button you just clicked
				var hash = $(this).attr('href').split('#')[1];

				

				var goTo =  $(mySelector+'.'+ hash).offset().top-myOffset;
				
				// Scroll the page to the desired position!
				$("html, body").stop().animate({ scrollTop: goTo }, scrollSpeed);
				
				// if the link has the '.extLink' class it will be ignored 
		 		// Courtesy of mcpacosy ‏(@mcpacosy)
				if ($(this).hasClass("extLink"))
                {
                    return false;
                }

			});	


			//This lets yo use links in body text to scroll. Just add the class 'intLink' to your button and it will scroll

			$('.intLink').on('click', function(e){
				var myOffset = smint.height();   

				e.preventDefault();
				
				var hash = $(this).attr('href').split('#')[1];

				if (smint.hasClass('fxd')) {
					var goTo =  $(mySelector+'.'+ hash).position().top-myOffset;
				} else {
					var goTo =  $(mySelector+'.'+ hash).position().top-myOffset*2;
				}
				
				$("html, body").stop().animate({ scrollTop: goTo }, scrollSpeed);

				if ($(this).hasClass("extLink"))
                {
                    return false;
                }

			});	
		});

	};

	$.fn.smint.defaults = { 'scrollSpeed': 500, 'mySelector': 'div'};
})(jQuery);;
function tamingselect()
{
	if(!document.getElementById && !document.createTextNode){return;}
	
// Classes for the link and the visible dropdown
	var ts_selectclass='turnintodropdown'; 	// class to identify selects
	var ts_listclass='turnintoselect';		// class to identify ULs
	var ts_boxclass='dropcontainer'; 		// parent element
	var ts_triggeron='activetrigger'; 		// class for the active trigger link
	var ts_triggeroff='trigger';			// class for the inactive trigger link
	var ts_dropdownclosed='dropdownhidden'; // closed dropdown
	var ts_dropdownopen='dropdownvisible';	// open dropdown
/*
	Turn all selects into DOM dropdowns
*/
	var count=0;
	var toreplace=new Array();
	var sels=document.getElementsByTagName('select');
	for(var i=0;i<sels.length;i++){
		if (ts_check(sels[i],ts_selectclass))
		{
			var hiddenfield=document.createElement('input');
			hiddenfield.name=sels[i].name;
			hiddenfield.type='hidden';
			hiddenfield.id=sels[i].id;
			hiddenfield.value=sels[i].options[0].value;
			sels[i].parentNode.insertBefore(hiddenfield,sels[i])
			var trigger=document.createElement('a');
			ts_addclass(trigger,ts_triggeroff);
			trigger.href='#';
			trigger.onclick=function(){
				ts_swapclass(this,ts_triggeroff,ts_triggeron)
				ts_swapclass(this.parentNode.getElementsByTagName('ul')[0],ts_dropdownclosed,ts_dropdownopen);
				return false;
			}
			trigger.appendChild(document.createTextNode(sels[i].options[0].text));
			sels[i].parentNode.insertBefore(trigger,sels[i]);
			var replaceUL=document.createElement('ul');
			for(var j=0;j<sels[i].getElementsByTagName('option').length;j++)
			{
				var newli=document.createElement('li');
				var newa=document.createElement('a');
				newli.v=sels[i].getElementsByTagName('option')[j].value;
				newli.elm=hiddenfield;
				newli.istrigger=trigger;
				newa.href='#';
				newa.appendChild(document.createTextNode(
				sels[i].getElementsByTagName('option')[j].text));
				newli.onclick=function(){ 
					this.elm.value=this.v;
					ts_swapclass(this.istrigger,ts_triggeron,ts_triggeroff);
					ts_swapclass(this.parentNode,ts_dropdownopen,ts_dropdownclosed)
					this.istrigger.firstChild.nodeValue=this.firstChild.firstChild.nodeValue;
					return false;
				}
				newli.appendChild(newa);
				replaceUL.appendChild(newli);
			}
			ts_addclass(replaceUL,ts_dropdownclosed);
			var div=document.createElement('div');
			div.appendChild(replaceUL);
			ts_addclass(div,ts_boxclass);
			sels[i].parentNode.insertBefore(div,sels[i])
			toreplace[count]=sels[i];
			count++;
		}
	}
	
/*
	Turn all ULs with the class defined above into dropdown navigations
*/	

	var uls=document.getElementsByTagName('ul');
	for(var i=0;i<uls.length;i++)
	{
		if(ts_check(uls[i],ts_listclass))
		{
			var newform=document.createElement('form');
			var newselect=document.createElement('select');
			for(j=0;j<uls[i].getElementsByTagName('a').length;j++)
			{
				var newopt=document.createElement('option');
				newopt.value=uls[i].getElementsByTagName('a')[j].href;	
				newopt.appendChild(document.createTextNode(uls[i].getElementsByTagName('a')[j].innerHTML));	
				newselect.appendChild(newopt);
			}
			newselect.onchange=function()
			{
				window.location=this.options[this.selectedIndex].value;
			}
			newform.appendChild(newselect);
			uls[i].parentNode.insertBefore(newform,uls[i]);
			toreplace[count]=uls[i];
			count++;
		}
	}
	for(i=0;i<count;i++){
		toreplace[i].parentNode.removeChild(toreplace[i]);
	}
	function ts_check(o,c)
	{
	 	return new RegExp('\\b'+c+'\\b').test(o.className);
	}
	function ts_swapclass(o,c1,c2)
	{
		var cn=o.className
		o.className=!ts_check(o,c1)?cn.replace(c2,c1):cn.replace(c1,c2);
	}
	function ts_addclass(o,c)
	{
		if(!ts_check(o,c)){o.className+=o.className==''?c:' '+c;}
	}
}

window.onload=function()
{
	tamingselect();
	// add more functions if necessary
}
;
