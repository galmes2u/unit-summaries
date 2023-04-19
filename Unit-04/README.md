<style>
* { font-size: 18px }
h1 { font-size: 32px }
h2 { font-size: 28px }
h3 { font-size: 20px; padding-top: 6px; color: yellow; }
hr { border-top: 2px solid #ddd; }
blockquote { background: #333; padding: 6px; padding-left: 12px; }
</style>

<h1>Unit Summary: 04 Web APIs</h1>

<h2>Key Concepts</h2>

API stands for Application Programming Interface. When we use systems or code that has been developed by others, those developers decide which parts of their system or code we have access to, and how we access it. The parts that we have access to and the rules governing that access are the API for that system.

In this unit, we look at the Web browser itself, and API it exposes for Javascript developers. In short, any Web browser makes a great many methods and properties available, so we can write code to make a Web page do whatever we need it to do.


<h3>The Window Object</h3>

The Window Object is the "highest-level" object available within the browser. Anything and everything we might have access to is contained somehere within that object. You can see everything exposed by the window object by running this code in a script.js file:  `console.log(window)`

| Subject | Activities |
| ----------- | ----------- |
| Window Object Basics | 01, 02 |
| setInterval() | 09, 10 |


<h3>The Document Object Model (DOM)</h3>

When the browser receives html and css, it has to convert the information in those files to a structure it can work with more easily. It creates the **document object**, and uses that for all its internal "housekeeping" of the web page from that point forward. The Document Object Model not only stores the entire structure and content of a Web page, it also gives Javascript developers access to a wealth of properties and methods so we can affect the way the page looks and behaves:


| Subject | Activities |
| ----------- | ----------- |
| Selecting elements on the page | 05, 06 |
| Getting and Setting Attributes on DOM Elements | 05, 06 |
| Creating new DOM elements | 07, 08 |


<h3>Callback Functions</h3>

One of the most important concepts in Javascript development is the **callback function**. You will encounter it for the first time in Activities 09 and 10 (Intervals).

A callback function is a function that you write, and pass into another function. When that target function is finished with whatever it has to do, it can then execute your callback function. In many cases, the target function can also provide data to your callback function (which is the real benefit of using callback functions). An example of this is the **event listener** (see below).

| Subject | Activities |
| ----------- | ----------- |
| First look at callback functions | 09, 10 |
| Callback functions w/ the event object | 11, 12 |


<h3>Event Listeners</h3>

As developers, many times we want something to happen on a Web page in response to something the user does. So we tell Javscript to listen for a specific event when it occurs on a specific element on the page. Consider this code:

```
var myButton = document.querySelector("button");
var hiddenDiv = document.querySelector(".special-offer");

myButton.addEventListener("click", function(event){
  hiddenDiv.setAttribute("style", "display: block;");
})
```

In this example, when the user clicks the button, we make a previously-hidden div tag visible on the page.

Event Listeners also provide to our callback functions the **Event Object**. The Event Object is an object which provides to our code all the information about whatever event just got triggered. The most important part of the event object (usually) is target of the event; i.e: the element on the web page which received the event. In the example above, the event target would e the button that was clicked.

| Subject | Activities |
| ----------- | ----------- |
| Event Listeners | 11, 12 |


<h3>Event Bubbling</h3>

When an event occurs anywhere in the DOM, Javascript automatically "bubbles" that event upward in case any parent elements have a listener for the same event. This usually causes no issues, unless you've written an event listener for a parent element that matches the same event, but has different instructions for that event. In any case, if you ever want to be sure that event bubbling doesn't happen, the event object is your friend. In your event listener callback, simply put: `event.stopPropagation()`.

| Subject | Activities |
| ----------- | ----------- |
| Event Bubbling | 17,18 |


<h3>Local Storage</h3>

Every browser built into it a convenient way of storing small-to-medium size pieces of data: Local Storage. With Local Storage, you can store any string or numeric value, simply by assigning it a reference key.

Example:   `localStorage.setItem("username", "frodobaggins")` 

Don't forget that you can also store complex data such as arrays and objects as long as you stringify them first. This puts them into a format called **JSON** which you'll encounter a lot in your JS learning.

Stringify example:

```
var obj = { name: "Frodo", location: "The Shire" };
localStorage.setItem("user", JSON.stringify(obj));
```

And, of course, to get a value out of Local Storage, use the `getItem()` method: `var user = localStorage.getItem("user")`

| Subject | Activities |
| ----------- | ----------- |
| Local Storage | 21 through 26 |

<br/>
<br/>


**Important Code to Know**
```
document.createElement()
document.querySelector()
document.querySelectorAll()
getAttribute()
setAttribute()
appendChild()
event.preventDefault()
event.stopPropagation()
localStorage.getItem()
localStorage.setItem()
```

