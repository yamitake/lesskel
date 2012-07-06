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
        skelton : true ,
        includeCssText: false ,
        excludeTag : ["head" , "meta" , "style" , "script"],
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
  function makeLessObj(elem , arr , opts){
    if(!arr)arr = {};
    
    var tagName = elem.tagName.toLowerCase();
    
    //check exclude tag
    if($.inArray(tagName, opts.excludeTag) >= 0){
      return arr;
    }
    
    if(elem.id){
      tagName += '#' + elem.id;
    }
    
    if(elem.className){
      var classNames = elem.className.split(' ');
      var length = classNames.length;
      for(var i = 0; i < length; i++){
        if(i == 0 && length == 1){
          tagName += '.' + classNames[i];
          if(!arr[tagName])arr[tagName] = {};
          
         break;
        }
        
        if(!arr[tagName])arr[tagName] = {};
        arr[tagName]['&.' + classNames[i]] = {};
      }
    }
    
    if(!arr[tagName])arr[tagName] = {};
    if(opts.includeCssText)arr[tagName]["@style"] = elem.style.cssText;
    
    if(tagName == 'a'){
      arr[tagName]["&:hover"] = {};
    }
    
    var length = elem.children.length;
    for(var i = 0; i < length; i++){
      makeLessObj(elem.children[i] , arr[tagName] , opts);
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
  function generate(lessObj , opts){
    dist = "";
    depth = 0;
    
    makeLessSrc(lessObj , opts);
    return dist;
  }
  
  /**
   * 
 * @param {Object} lessObj
 * @param {Object} options
   */
  function makeLessSrc(lessObj , opts){
    for( var i in lessObj ) {
      if (i == "@style") continue ;

      dist += indent(depth) + (i + "{\n") + indent(depth+1) + (lessObj[i]["@style"]||'') + "\n";
      depth++;
      makeLessSrc(lessObj[i] , opts);
      depth--;
      dist += indent(depth) + "}\n";
    }
  }
  
  function indent(depth ){
      var tab = "";
      for(var i = 0; i < depth; i++){
          tab += "  ";
      }
  
      return tab;
  }
})(jQuery);
