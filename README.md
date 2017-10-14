# Carousel using plain javascript
Create a rotating carousel using javascript

## Method
First place all the divs/images one above the other. Then keeping one element as the active element, translate the elements to its right and left to create the effect.

```
<a class="carousel-item" style="transform:translateX(-320px) translateY(0px);z-index:-2" id="1">
	<img src="https://s3.amazonaws.com/hakuapps/prod/album-1.png">If Your'e Reading This It's Too Late<span>DRAKE</span>
</a>
<a class="carousel-item" style="transform:translateX(-160px) translateY(50px);z-index:-1" id="2">
	<img src="https://s3.amazonaws.com/hakuapps/prod/album-2.png">Hotter Than July<span>Stevie Wonder</span>
</a>
<a class="active carousel-item" style="transform:translateX(0px) translateY(100px);z-index:1" id="3">
	<img src="https://s3.amazonaws.com/hakuapps/prod/album-3.png">Overexposed<span>Maroon 5</span>
</a>
<a class="carousel-item" style="transform:translateX(160px) translateY(50px);z-index:-1" id="4">
	<img src="https://s3.amazonaws.com/hakuapps/prod/album-4.png">Hit n Run Phase One<span>PRINCE</span>
</a>
<a class="carousel-item" style="transform:translateX(320px) translateY(0px);z-index:-2" id="5">
	<img src="https://s3.amazonaws.com/hakuapps/prod/album-5.png">Brothers<span>The Black Keys</span>
</a>
```
In this the third element, which is the active element is kept at the center, and the two elements before it is translated towards the left and the two after it are translated towards the right.

## Javascript
The function moveRight() places the previous element of active element at the center and uses the methods **setLeftPartWhenRight** and **setRightPartWhenRight** to place all the other elements accordingly when the right arrow is clicked.
Similarly for moveLeft() when left arrow is clicked.

## Using images only
Define HTML code as

```
<img src="https://s3.amazonaws.com/hakuapps/prod/album-1.png" class="carousel-item" style="transform:translateX(-320px) translateY(0px);z-index:-2" id="1">
<img src="https://s3.amazonaws.com/hakuapps/prod/album-2.png"  class="carousel-item" style="transform:translateX(-160px) translateY(50px);z-index:-1" id="2">
<img src="https://s3.amazonaws.com/hakuapps/prod/album-3.png" class="active carousel-item" style="transform:translateX(0px) translateY(100px);z-index:1" id="3">
<img src="https://s3.amazonaws.com/hakuapps/prod/album-4.png"  class="carousel-item" style="transform:translateX(160px) translateY(50px);z-index:-1" id="4">
<img src="https://s3.amazonaws.com/hakuapps/prod/album-5.png" class="carousel-item" style="transform:translateX(320px) translateY(0px);z-index:-2" id="5">
```

and in the script.js file, make the following change to functions **moveRight** and **moveLeft**
```
var child = document.getElementsByClassName("carousel-content")[0].getElementsByTagName("img");
```

