// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

$(document).ready(function() {
    
        $(window).scroll( function(){    
        /* Check the location of each desired element */
        $('.fade-in-left').each( function(i){            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){                
                $(this).animate({
					opacity:1,
					right: '0'
					},1000),"linear";                    
            }            
        });     
    });
	$(window).scroll( function(){    
        /* Check the location of each desired element */
        $('.fade-in-right').each( function(i){            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){                
                $(this).animate({
					opacity:1,
					left: '0'
					},1000),"linear";                    
            }            
        });     
    });
	$(window).scroll( function(){    
        /* Check the location of each desired element */
        $('.fade-in-top').each( function(i){            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){                
                $(this).animate({
					opacity:1,
					top: '0'
					},1000),"linear";                    
            }            
        });     
    }); 
	$(window).scroll( function(){    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){                
                $(this).animate({
					opacity:1
					},1500),"linear";                    
            }            
        });     
    }); 
	
	/* delay from left 1 */
	$(window).scroll( function(){           
        $('.fade-in-left2').each( function(i){            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();            
            if( bottom_of_window > bottom_of_object ){                
                $(this).delay(200).animate({
					opacity:1,
					top: '0'
					},1000),"linear";                    
            }            
        }); 
		$('.fade-in-left3').each( function(i){            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();            
            if( bottom_of_window > bottom_of_object ){                
                $(this).delay(400).animate({
					opacity:1,
					top: '0'
					},1000),"linear";                    
            }            
        }); 
    }); 
	
	/* delay from top 1 */
	$(window).scroll( function(){           
        $('.fade-in-top2').each( function(i){            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();            
            if( bottom_of_window > bottom_of_object ){                
                $(this).delay(200).animate({
					opacity:1,
					top: '0'
					},1000),"linear";                    
            }            
        }); 
		$('.fade-in-top3').each( function(i){            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();            
            if( bottom_of_window > bottom_of_object ){                
                $(this).delay(350).animate({
					opacity:1,
					top: '0'
					},1000),"linear";                    
            }            
        }); 
		$('.fade-in-top4').each( function(i){            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();            
            if( bottom_of_window > bottom_of_object ){                
                $(this).delay(500).animate({
					opacity:1,
					top: '0'
					},1000),"linear";                    
            }            
        }); 
		$('.fade-in-top5').each( function(i){            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();            
            if( bottom_of_window > bottom_of_object ){                
                $(this).delay(650).animate({
					opacity:1,
					top: '0'
					},1000),"linear";                    
            }            
        }); 
    
});
});