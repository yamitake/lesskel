(function(){
  var _selectedClassName = "lesskel_selected";
  var selected_elem;
  
  $("head").append("<style>html body .lesskel_selected{border:3px dashed #5371b7;cursol:crosshair;box-shadow: 1px 1px 3px #009;}</style>");
  
  function inspect(e){
      if(selected_elem && selected_elem === e.target){
        $(selected_elem).removeClass(_selectedClassName);
      }else{
        $(selected_elem).removeClass(_selectedClassName);
        selected_elem = e.target;
        $(e.target).addClass(_selectedClassName);
      }
  };
  
  $(document).mouseover(inspect);
  
  $(document).click(function(e){
    $(selected_elem).removeClass(_selectedClassName);
    var src = $.lesskel(selected_elem);
    alert(src);
    
    $(document).unbind("click");
    $(document).unbind("mouseover" , inspect);
  });
})();