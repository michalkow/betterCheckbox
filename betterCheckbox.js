(function( $ ){

  var methods = {
    init : function( options ) {
	 
	// Default settings 
	 var settings = $.extend( {
      boxClass : 'betterCheckbox-box',
	  tickClass : 'betterCheckbox-tick',
	  tickInnerHTML : '',
	  disabledBoxClass : 'disabled',
	  disabledTickClass : 'disabled',
    }, options);

       return this.each(function(){
			var root = this;
			var $this=$(this);
			root.checked=root.checked;
			root.disabled=root.disabled;
			root.bgclass=settings.boxClass;
			root.tickclass=settings.tickClass;
			root.tickinner=settings.tickInnerHTML;
			root.disbgclass=settings.disabledBoxClass;
			root.distickclass=settings.disabledTickClass;
			
			$this.css('display', 'none');
			$this.after('<div class="'+settings.boxClass+'"></div>');
			$this.next().css('user-select', 'none');
			if(root.checked) {
				$this.next().append('<div class="'+settings.tickClass+'">'+settings.tickInnerHTML+'</div>');
			}
			if(root.disabled) {
				$this.next().addClass(root.disbgclass);
				$this.next().children().addClass(root.distickclass);
			}
			
			$this.next().on('click', function() {
				if(!root.disabled) {
					if(root.checked) {
						$(this).empty();
						root.checked = false;
						$this.prop('checked', false);
					} else {
						$(this).append('<div class="'+settings.tickClass+'">'+settings.tickInnerHTML+'</div>');
						root.checked = true;
						$this.prop('checked', true);
					}
				}
			});		
			
			$this.on('change', function() {
					if(!root.checked) {
						$this.next().empty();
						root.checked = false;
						$this.prop('checked', false);
					} else {
						$this.next().append('<div class="'+settings.tickClass+'">'+settings.tickInnerHTML+'</div>');
						root.checked = true;
						$this.prop('checked', true);
					}
			});		
			return this;				
       });
    },
	
    destroy : function( ) {
       return this.each(function(){
				var root = this;
				var $this=$(this);
				$this.css('display', 'inline-block');
				$this.next().remove();
				return this;
       });
    },
	
	disable : function( ) {
       return this.each(function(){
				var root = this;
				var $this=$(this);
				$this.next().addClass(root.disbgclass);
				$this.next().children().addClass(root.distickclass);
				root.disabled=true;
				$this.prop('disabled', true);
				return this;
       });
    },

	enable : function( ) {
       return this.each(function(){
				var root = this;
				var $this=$(this);
				$this.next().removeClass(root.disbgclass);
				$this.next().children().removeClass(root.distickclass);
				root.disabled=false;
				$this.prop('disabled', false);
				return this;
       });
    },
	
	check : function( ) {
       return this.each(function(){
				var root = this;
				var $this=$(this);
				$this.next().append('<div class="'+root.tickclass+'">'+root.tickinner+'</div>');
				if(root.disabled) {
					$this.next().children().addClass(root.distickclass);
				}
				root.checked = true;
				$this.prop('checked', true);
				return this;
       });
    },
	
	uncheck : function( ) {
       return this.each(function(){
				var root = this;
				var $this=$(this);
				$this.next().empty();
				root.checked = false;
				$this.prop('checked', false);
				return this;
       });
    },
	
  };

  $.fn.betterCheckbox = function( method ) {

    if ( methods[method] ) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.betterCheckbox' );
    }    
  
  };

})( jQuery );