//define functions here

function getIt(){
$('p').on('click', function(){
  alert("Hey!");})
}

function frameIt(){
$('img').on('load', function(){
  
})
}

function pressIt() {
$("form").on('keydown', function(){
  if(key.which == 71)
  { alert('You have pressed the G key.');}
})
}

function submitIt(){
  $("form").on("submit", function(){
  if ($("input:first").val()==="correct")  
    alert("Your form is going to be submitted now.");
})
}

$(document).ready(function(){
  window.getIt();
  window.frameIt();
  window.pressIt();
  window.submitIt();
  return;

// call functions here

});
