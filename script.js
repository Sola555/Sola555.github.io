function change(){
    document.body.style.backgroundImage = 'none'
    var color = document.getElementById("colorpicker").value;
    document.body.style.backgroundColor = color;
  }
function showimage(){
    document.body.style.backgroundImage = "url('avatar.png')";
}
function showimage2(){
  document.body.style.backgroundImage = "url('inverted.png')";
}
function changef(){
  var all = document.getElementsByTagName("*");

  for (var i=0, max=all.length; i < max; i++) {
    var color = document.getElementById("colorpicker").value;
    all[i].style.color = color;
}
}
function changefr(){
  var all = document.getElementsByTagName("*");

  for (var i=0, max=all.length; i < max; i++) {
    var color = document.getElementById("colorpickerr").value;
    all[i].style.color = color;
}}
function changer(){
    document.body.style.backgroundImage = 'none'
    var color = document.getElementById("colorpickerr").value;
    document.body.style.backgroundColor = color;
  }
function showhide(){
  console.log("1");
  var x = document.getElementById("alot");
  
  if (x.style.display === "none") {
    console.log("a")
    x.style.display = "block";
    x.style.backgroundColor = "red";
    var y = document.getElementById("nam").innerHTML = "Hide Toggle Colors Setting";
    
  } else {
    console.log("b")
    x.style.display = "none";
    var y = document.getElementById("nam").innerHTML = "Show Toggle Colors Setting";
    
  }

  console.log("2")
}