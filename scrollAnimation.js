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

        base.init = function () {
            base.options = $.extend({}, $.scrollAnimation.defaultOptions, options);

            // Put your initialization code here
            var posIsOnScreen = base.isOnView();
            //console.log(posIsOnScreen);
            if (posIsOnScreen) {
                attrAnimationDelay = base.$el.attr('animation-delay');
                // base.$el.css({'animation-name': '', 'animationDelay': options.animationDelay});
                base.$el.css({'animation-name': '', 'animationDelay': attrAnimationDelay});
                base.$el.removeClass('is-hidden');
                base.$el.css({'opacity': '1'});
                base.$el.addClass('animated');
            }
        };

        base.preInit = function () {
            base.$el.css({'animation-name': 'none'});
            base.$el.css({'opacity': '0'});
            //window.scrollBy(0,5);
            //window.scrollBy(0,-5);
            base.init();
        };

        $(window).ready(function () {
            base.preInit();
        });

        // Init plugin when window scroll
        $(window).scroll(function () {

            // Run initializer
            base.init();
        });

        base.isOnView = function () {
            var bounds = el.getBoundingClientRect();

            // console.log('bounds.top'+bounds.top);
            // console.log('bounds.bottom'+bounds.bottom);
            // console.log('window.innerHeight'+window.innerHeight);
            // console.log('window.pageYOffset'+window.pageYOffset);

            return bounds.top < window.innerHeight && bounds.bottom - 50 < window.innerHeight &&
                bounds.bottom > 0;
        };
    };

    $.scrollAnimation.defaultOptions = {
        selector: "is-animated",
        animationDelay: ".0s"
    };

    $.fn.scrollAnimation = function (options) {
        return this.each(function () {
            (new $.scrollAnimation(this, options));
        });
    };

})(jQuery);
