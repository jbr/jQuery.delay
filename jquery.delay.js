/*
 * jQuery Delay Plugin
 *
 * (c) 2009 Jacob Rothstein
 * MIT license
 */

(function($){
  $.fn.delay = function(fn, timeout) {
    fn_data = 'delay-fn'
    timeout_data = 'timeout'

    if ($.isFunction(fn)) {
	item = $(this)
	item.delay('clear')
    item
	.data(fn_data, fn)
	.data(timeout_data, setTimeout(function(){
            $(item).delay('fire')
	}, timeout || 50))
    } else if (fn == "clear") {
	clearTimeout($(this).data('timeout'));
	$(this)
	.data(timeout_data, '')
	.data(fn_data, '')
    } else if (fn == "fire") {
	fn = $(this).data(fn_data);
	$(this).delay('clear');
	if ($.isFunction(fn)) { fn.call($(this)) }
    }
    return $(this);
  }
})(jQuery);