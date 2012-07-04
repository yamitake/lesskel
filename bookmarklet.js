(function(){
  $(document).mouseover(function(e){
                      console.log(e.target);
                });
  /*
  $(document).mouseout(function(e){
                      console.log(e.target);
                    });
                    */
  
  $(document).click(function(e){
    var src = $.lesskel(e.target);
    alert(src);
  });
})();