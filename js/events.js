//define functions here

function getIt(){
  alert("Hey!");
  return;
})

$('img').on('load', function frameIt(){
  
})

$("form").on('keydown', function pressIt(){
  if(key.which == 71)
  { alert('You have pressed the G key.');}
})

$("form").on("submit", function submitIt(){
  if ($("input:first").val()==="correct")  
    alert("Your form is going to be submitted now.");
})

$(document).ready(function(){
  window.getIt();
  window.frameIt();
  window.pressIt();
  window.submitIt();
  return;

// call functions here

});
