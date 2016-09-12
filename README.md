# create-animation-plugin
Plugin provides the ability to animate your sprites


This plugin help you to animate sprites.<br>
### How to use plugin?

First of all you need to attach script to your index file: 
`<script async src="main.js"></script>`
To start using plugin create object with main information about your animation: 
```Javascript
  var myObj = {
    element: "hero", // here is ID of target element 
    image: "hero.png", // image url 
    animationName: "moveUp", // some name 
    startCoords: "148px 64px", // start point of animation. From this coordinates animation will be start
    endCoords: "-49px 64px", // end point of animation. 
    steps: 4, // how many images in interval 
    speed: "0.5s" // speed of animation 
  }
```

And after that call function : ` addAnimationProp(myObj)`

NOTICE: Plugin work with one line of sprite!

