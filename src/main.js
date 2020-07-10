function seeShareMedia(){
  var element = document.getElementById('contentShare');

  
  if(element.style.getPropertyValue("opacity") === "1"){
    element.style.setProperty("visibility","hidden");
    element.style.setProperty("opacity", "0");  
  }else{
    element.style.setProperty("visibility","visible");
    element.style.setProperty("opacity", "1");  
  }
}
