<style>
* { font-size: 18px }
h1 { font-size: 32px }
h2 { font-size: 28px }
h3 { font-size: 20px; padding-top: 6px; color: yellow; }
hr { border-top: 2px solid #ddd; }
blockquote { background: #333; padding: 6px; padding-left: 12px; }
</style>

<h1>Unit Summary: 05 Third-Party APIs</h1>

<h2>Key Concepts</h2>

Reminder: API stands for Application Programming Interface. When we use systems or code that has been developed by others, those developers decide which parts of their system or code we have access to, and how we access it. The parts that we have access to and the rules governing that access are the API for that system.

In this unit, we work with code developed by others. To use that code, we work with the properties and methods that are exposed by the developers of that code for our use. The two main packages we work with are jQuery and Bootstrap.

Both of these packages are **syntactic sugar**: they don't change what Javascript or CSS can do, they simply give us more convenient ways of accomplishing common or hard-to-do tasks.

<h3>jQuery</h3>

jQuery is loaded in the browser via the `script` tag, usually from a CDN (Content Distribution Network). 

To use jQuery in your code, you always preface any method you wish to use with the $. This tells Javascript that the method which follows belongs to jQuery, not vanilla Javascript.

jQuery allows you to select items on the page in virtually the same way you would select them via CSS. All of the following jQuery selectors are valid:

```
var elem1 = $(".anything-with-this-class");
var elem2 = $("#anything-with-this-id");
var elem3 = $("anything-with-this-tag");
``` 

You can also create new elements with jQuery. This is very much like selecting an element by its tag name, except that you put the html brackets around tag name. See below:

```
var newDiv = $("<div>");
var newPTag = $("<p>");
```

| Subject | Activities |
| ----------- | ----------- |
| Selecting and Creating Elements | 01, 02 |


<h4>Click Events</h4>

Click events are handled via the `.on()` method. You select the element to be targeted, then specify the type of event to be tracked, and then provide a callback function:

```
$("#item-with-this-id").on("click", function(){
  //...
})
```

You can also delegate an event listener to an element that is a child element of the one you target. For instance, your html page may contain a `div` tag with an id of "foo". In your JS code, you dynamically add a button inside that div tag. To target that button:

```
$("div#foo").on("click", "button", function(){
  //....
})
```

| Subject | Activities |
| ----------- | ----------- |
| Click Events | 03, 04 |
| Event Delegation | 09, 10 |


<h3>Bootstrap</h3>

Bootstrap is to CSS what jQuery is to Javascript. It makes it easier (and sometimes fun) to style your page, and to take advantage of powerful CSS features that would normally require a lot more code.

Bootstrap is loaded on your web page via CSS file in the `<head>` area, and (sometimes) a Javasript file before the closing `</body>` tag.

Bootstrap comes with many, many, pre-built components which you can copy and paste into your code, and modify to your heart's content.

The main thing you should be comfortable using Bootstrap for, though, is responsive design.

Bootstrap, like most UI systems, employs a 12-column grid. By specifying how different parts of your layout should fill the grid, you achieve designs that look well-balanced and aligned.

Creating a layout in Bootstrap always starts with a container class, and each row gets its own `div` as well. Inside each row, you create div tags for as many columns as should be in that row, and you can specify how wide eah column is. See below:

```
<div class="container">
  <div class="row">
    <div class="col-6">
      This column takes up half the page
    </div>
    <div class="col-6">
      This column takes up half the page
    </div>
  </div>
</div>
```

You can also specify how column sizing should change as the screen size changes. Suppose we want the two columns above to be stacked on top of each other, full-with, on a small screen size; and only split in two at medium screen size or larger:

```
<div class="container">
  <div class="row">
    <div class="col-12 col-md-6">
      This column takes up half the page
    </div>
    <div class="col-12 col-md-6">
      This column takes up half the page
    </div>
  </div>
</div>
```

| Subject | Activities |
| ----------- | ----------- |
| Bootstrap Layout | 13, 14 |


<br/>
<br/>


**Important Code to Know**
```
jQuery selectors
jQuery event handling
Bootstrap responsive design classes
```

