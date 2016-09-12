function addAnimationProp(animInfo) { // props - object with properties: element, image, animationName, startCoords, endCoords, steps, speed
  var elem = document.getElementById(animInfo.element),
      image = animInfo.image,
      animName = animInfo.animationName,
      start = animInfo.startCoords,
      end = animInfo.endCoords,
      steps = animInfo.steps,
      speed = animInfo.speed,
      styles;
  stylesKey = "@keyframes " + animName + "{ 0% { background-position: " + start + ";} 100% { background-position: " +
  end + "}}"; // create keyframes
  function addStyles(style) {
    var styleElt, styleSheet;
    var head = document.getElementsByTagName("head")[0];
    styleElt = document.createElement("style");
    head.appendChild(styleElt);
    styleSheet = document.styleSheets[document.styleSheets.length-1];

    if (typeof style === "string") {
      if (styleElt) styleElt.innerHTML = style;
    }
  }
  addStyles(stylesKey); // add keyframe style

}
(function(){
  var upObj = {
    element: "hero",
    image: "hero.png",
    animationName: "moveUp",
    startCoords: "148px 64px",
    endCoords: "-49px 64px",
    steps: 4,
    speed: "0.45"
  },
    moveUp;
  moveUp = addAnimationProp(upObj);
})();
