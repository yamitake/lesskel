/**
 jquery.cssproperties.js ver1.0

 The MIT License

 Copyright (c) since 2012 Yapr! inc. jun takeno
 http://www.facebook.com/yamitake

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */
(function($) {
  $.extend({
    cssproperties : function(elem, options) {
      if ( elem instanceof jQuery) {
        elem = $(elem).get(0);
      }

      /**
       * default Options
       */
      var defaults = {
        type: "cssText",
        prefix: "" ,
        suffix: ";\n",
        includeCssText : false ,
      };

      var opts = $.extend(defaults, options);
      var result = '';
      
      for(var i = 0 ; i < propertiesLength; i++){
        var propety = '';
        if(propety = $(elem).css(properties[i])){
          result += opts.prefix + properties[i] + ':' + propety + opts.suffix;
        }
      }

      return result;
    }
  });

  var properties = ["animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "appearance", "backface-visibility", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-inline-policy", "background-origin", "background-position", "background-repeat", "background-size", "border-collapse", "border-color", "border-end", "border-image", "border-radius", "border-spacing", "border-start", "border-style", "border-top", "border-right", "border-bottom", "border-left", "border-top-color", "border-right-color", "border-bottom-color", "border-left-color", "border-top-left-radius", "border-top-right-radius", "border-bottom-right-radius", "border-bottom-left-radius", "border-top-style", "border-right-style", "border-bottom-style", "border-left-style", "border-top-width", "border-right-width", "border-bottom-width", "border-left-width", "bottom", "box-align", "box-decoration-break", "box-flex", "box-ordinal-group", "box-orient", "box-pack", "box-reflect", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "columns", "column-span", "column-width", "content", "counter-increment", "counter-reset", "cursor", "direction", "display", "display", "display", "empty-cells", "flow-from", "flow-into", "flow-wrap", "font", "font-family", "font-feature-settings", "font-size", "font-size-adjust", "font-smoothing", "font-style", "font-variant", "font-weight", "grid-column", "grid-column-align", "grid-columns", "grid-column-span", "grid-row", "grid-row-align", "grid-rows", "grid-row-span", "height", "hyphens", "image-rendering", "interpolation-mode", "left", "letter-spacing", "line-break", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin-top", "margin-right", "margin-bottom", "margin-left", "marquee-direction", "marquee-play-count", "marquee-speed", "marquee-style", "mask", "mask-attachment", "mask-box-image", "mask-clip", "mask-image", "mask-origin", "mask-position", "mask-repeat", "mask-size", "max-height", "max-width", "min-height", "min-width", "nbsp-mode", "object-fit", "object-position", "opacity", "orient", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-scrolling", "overflow-x", "overflow-y", "padding-top", "padding-right", "padding-bottom", "padding-left", "page-break-after", "page-break-before", "page-break-inside", "perspective", "perspective-origin", "position", "position", "quotes", "resize", "right", "ruby-align", "ruby-position", "table-layout", "tab-size", "tap-highlight-color", "text-align", "text-align-last", "text-autospace", "text-decoration", "text-decoration-line", "text-decoration-color", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-fill-color", "text-indent", "text-justify", "text-overflow", "text-rendering", "text-shadow", "text-size-adjust", "text-stroke", "text-stroke-color", "text-stroke-width", "text-transform", "text-underline-position", "top", "touch-callout", "transform", "transform", "transform-origin", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "white-space", "widows", "width", "word-break", "word-spacing", "word-wrap", "writing-mode", "z-index"];
  var propertiesLength = properties.length;
})(jQuery);
