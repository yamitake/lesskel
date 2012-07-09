(function(){
  var _selectedClassName = "lesskel_selected";
  var selected_elem;
  var statusbar = $("#lesskel_statusbar");
  var statusmsg = $("#lesskel_statusmsg")
  
  $("head").append("<style>html body .lesskel_selected{border:3px dashed #5371b7;cursol:crosshair;box-shadow: 1px 1px 3px #009;}</style>");
  
  if(statusbar.length == 0){
    $("body").append('<div id="lesskel_statusbar" class="" style="background:#333;color:#fff;border:1px solid #ccc;width:500px;margin:0px auto;position:fixed;top:0px;left:50%;z-index:10001;border-radius:10px;padding:10px">' + 
      '<img src="http://yamitake.github.com/lesskel/logo.png" style="width:20px;" />' +
      ':' + 
      '<span id="lesskel_statusmsg">select html elements</span>' +
      '<a href="http://yamitake.github.com/lesskel" style="float:right;" target="_blank">?</a>' +
    '</div>');
    statusbar = $("#lesskel_statusbar");
    statusmsg = $("#lesskel_statusmsg");
  }
  statusbar.fadeIn("slow");
  
  function inspect(e){
      if(selected_elem && selected_elem === e.target){
        $(selected_elem).removeClass(_selectedClassName);
      }else{
        $(selected_elem).removeClass(_selectedClassName);
        selected_elem = e.target;
        $(e.target).addClass(_selectedClassName);
        statusmsg.html(selected_elem.tagName.toLowerCase() + (selected_elem.id ? '#' + selected_elem.id : '' ) + (selected_elem.className ? '.' + selected_elem.className : '' ));
      }
  };
  
  $(document).mouseover(inspect);
  
  $(document).click(function(e){
    $(selected_elem).removeClass(_selectedClassName);
    var src = $.lesskel(selected_elem);
    statusbar.delay(5000).fadeOut("slow");
    alert(src);
    
    $(document).unbind("click");
    $(document).unbind("mouseover" , inspect);
  });
})();