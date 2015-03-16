/*!--------------------------------------------------------------------
JAVASCRIPT "Outdated Browser"
Version:    1.1.0 - 2014
author:     Burocratik
website:    http://www.burocratik.com
* @preserve
-----------------------------------------------------------------------*/
var outdatedBrowser = function(options) {

    // Default settings
    this.defaultOpts = {
        redirectTo: '#',
    }

    if (options) {
        //assign css3 property to IE browser version
        if(options.lowerThan == 'IE8' || options.lowerThan == 'borderSpacing') {
            options.lowerThan = 'borderSpacing';
        } else if (options.lowerThan == 'IE9' || options.lowerThan == 'boxShadow') {
            options.lowerThan = 'boxShadow';
        } else if (options.lowerThan == 'IE10' || options.lowerThan == 'transform' || options.lowerThan == '' || typeof options.lowerThan === "undefined") {
            options.lowerThan = 'transform';
        } else if (options.lowerThan == 'IE11' || options.lowerThan == 'borderImage') {
            options.lowerThan = 'borderImage';
        }
        //all properties
        this.defaultOpts.redirectTo = options.redirectTo;
        this.defaultOpts.lowerThan = options.lowerThan;

        redirectTo = this.defaultOpts.redirectTo;
        cssProp = this.defaultOpts.lowerThan;
    } else {
        redirectTo = this.defaultOpts.redirectTo;
        cssProp = this.defaultOpts.lowerThan;
    };//end if options

    var supports = (function() {
       var div = document.createElement('div'),
          vendors = 'Khtml Ms O Moz Webkit'.split(' '),
          len = vendors.length;

       return function(prop) {
          if ( prop in div.style ) return true;

          prop = prop.replace(/^[a-z]/, function(val) {
             return val.toUpperCase();
          });

          while(len--) {
             if ( vendors[len] + prop in div.style ) {
                return true;
             }
          }
          return false;
       };
    })();

    //if browser does not supports css3 property (transform=default), if does > exit all this
    if ( !supports(''+ cssProp +'') ) {
        window.location.href = redirectTo;
    }else{
        return;
    };//end if

////////END of outdatedBrowser function
};







