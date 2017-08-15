// console.log("hi adam")

document.addEventListener("DOMContentLoaded", () => {

  console.log("dom content loaded");
    //sets up div for loop.

  function divAdder() {
    var pixelContainer = document.createElement("div");
    pixelContainer.setAttribute("class", "pixelContainer");
    document.body.appendChild(pixelContainer);

    // var colorPallet = document.createElement("div");
    // colorPallet.setAttribute("class", "colorPallet")


      //creates and numbers divs
    for (var i = 0; i < 1073; i++) {

      var id = "Div ID #";
      var element = document.createElement("div");

      // element.setAttribute("id", id + i);
      element.setAttribute("class", "pixelClass");
      document.addEventListener("click",colorPicker);
      element.addEventListener("click",colorSet);
      pixelContainer.appendChild(element);

    }
  }
divAdder()

var currentColor = undefined
  function colorPicker(event) {
      // if ("id" !== null){
      currentColor = event.target.getAttribute("id")
      console.log("currentColor = " + currentColor)
    // }

      // currentColor = window.getComputedStyle(event.target).backgroundColor ;
      // event.target.pixelClass.style.backgroundColor = currentColor;
      // event.target.getAttribute("id");
      // setAttribute("id", currentColor);
  }

  function colorSet(event){
    console.log( "colorSet = " + currentColor)
    // if ("id" !== null){
    event.target.setAttribute("id", currentColor)
    // event.target.style.backgroundColor = currentColor
  // }
  };


})
    //sets colors for selector
  //  var red =
  //  var blue =
  //  var yellow =
  //  var black =
  //  var black =
  //  var currentColor =














// });
