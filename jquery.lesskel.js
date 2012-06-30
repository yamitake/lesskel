/**
 jquery.lesskel.js ver1.0

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
    lesskel: function(elem , options) {
      if(elem instanceof jQuery){
        elem = $(elem).get(0);
      }
      
      /**
       * default Options
       */
      var defaults = {
        title : "test",
      };

      var opts = $.extend(defaults, options);
      var lessObj = makeLessObj(elem , null , opts);
      less_src = generate(lessObj , opts);
      return less_src;
    }
  });
  
  /**
   * make less tree object
   * @param {html element} elem
   * @param {Object} arr
   */
  function makeLessObj(elem , arr){
    if(!arr)arr = {};
    
    var tagName = elem.tagName.toLowerCase();
    
    if(elem.id){
      tagName += '&#' + elem.id;
    }
    
    if(!arr[tagName])arr[tagName] = {};
    
    if(elem.className){
      var classNames = elem.className.split(' ');
      var length = classNames.length;
      for(var i = 0; i < length; i++){
        arr[tagName]['&.' + classNames[i]] = {};
      }
    }
    
    var length = elem.children.length;
    for(var i = 0; i < length; i++){
      makeLessObj(elem.children[i] , arr[tagName]);
    }

    return arr;
  }
  
  var dist = "";
  var depth = 0;
  /**
   * generate less src code.
 * @param {Object} lessObj
 * @param {Object} options
   */
  function generate(lessObj , options){
    dist = "";
    depth = 0;
    
    makeLessSrc(lessObj , options);
    return dist;
  }
  
  /**
   * 
 * @param {Object} lessObj
 * @param {Object} options
   */
  function makeLessSrc(lessObj , options){
    for( var i in lessObj ) {
      dist += indent(depth) + (i + "{\n");
      depth++;
      makeLessSrc(lessObj[i] , options);
      depth--;
      dist += indent(depth) + "}\n";
    }
  }
  
  function indent(depth){
      var tab = "";
      for(var i = 0; i < depth; i++){
          tab += "  ";
      }
  
      return tab;
  }
})(jQuery);
