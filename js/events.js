// Definitions

function getIt(){
$('p').on('click', function(){
  alert("Hey!");})
}

function frameIt(){
$('img').on('load', function(){
  $('img').addClass('tasty');
})
}

function pressIt() {
$("form").on('keydown', function(key){
  if(key.which == 71)
  { alert('You have pressed the G key.');}
})
}

function submitIt(){
  $("form").on("submit", function(){
    alert("Your form is going to be submitted now.");
})
}

// Call Functions

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
  return;

});
