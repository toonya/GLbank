
(function($) {
	$.fn.sizeCheck = function(options) {
		return this.each(function(){
			var data = $(this).data();
			var options = $.extend({}, options, data);
			options.$this = $(this);
			new sizeCheck(options);
		})
	}

	var sizeCheck = function(options){
		this.init(options);
	}

	sizeCheck.prototype = {
		init: function(options) {
			this.options = options;
			this.bind();
			this.check();
		},
		bind: function() {
			$( window ).resize( $.proxy(function() {
				this.check();
			}, this) )
		},
		check: function() {
			var base = $('body'),
				w    = base.outerWidth(),
				h    = base.outerHeight();
			if( w>h )
				base.addClass( 'horizontal-screen' );
			else
				base.removeClass( 'horizontal-screen' );
		}
	}

	$('body.mobile').sizeCheck();
})(jQuery)