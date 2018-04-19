/**
 * ScrollAnimation: Easy scroll animation plugin
 * using Animate.css http://daneden.github.io/animate.css/
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Pavel Strashevskiy http://kreont.com
 */
(function ($) {
    $.scrollAnimation = function (el, options) {
        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;

        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;

        var attrAnimationDelay;

        // Add a reverse reference to the DOM object
        base.$el.data("scrollAnimation", base);
        var posIn = false;
        base.init = function () {
            base.options = $.extend({}, $.scrollAnimation.defaultOptions, options);

            // Put your initialization code here

            if (base.isOnView() && posIn == false) {
                console.log(posIn + '  posIn');
                attrAnimationDelay = base.$el.attr('data-animtion-delay');
                console.log(attrAnimationDelay + '  attrAnimationDelay');
                base.$el.css({'animation-name': '', 'animation-delay': attrAnimationDelay, 'opacity': '1'});
                base.$el.removeClass('is-hidden');
                base.$el.addClass('animated');
                posIn = true;

            }
        };

        base.preInit = function () {
            base.$el.css({'animation-name': 'none'});
            base.$el.css({'opacity': '0'});
            posIn = false;
            base.init();
        };

        $(window).ready(function () {
            base.preInit();
        });

        // Init plugin when window scroll
        $(window).scroll(function () {
            // Run initializer
            if (posIn == false) {
                base.init();
            }
        });

        base.isOnView = function () {
            var bounds = el.getBoundingClientRect();

            // console.log('bounds.top'+bounds.top);
            // console.log('bounds.bottom'+bounds.bottom);
            // console.log('window.innerHeight'+window.innerHeight);
            // console.log('window.pageYOffset'+window.pageYOffset);

            return bounds.top < window.innerHeight && bounds.bottom - window.innerHeight * 1.15 < window.innerHeight &&
                bounds.bottom > 0;
        };
    };

    $.scrollAnimation.defaultOptions = {
        //   selector: "is-animated",
        //  animationDelay: ".0s"
    };

    $.fn.scrollAnimation = function (options) {
        return this.each(function () {
            (new $.scrollAnimation(this, options));
        });
    };

})(jQuery);
