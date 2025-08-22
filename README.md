# mystudyspire
MystudySpire is a free educational website that provides courses, notes, and study resources for students. Built with HTML, CSS, and simple design for easy access and learning.
## 1. HTML Basics  

- HTML stands for **HyperText Markup Language**  
- It is used to structure content on the web  
- Basic structure:  

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first web page.</p>
  </body>
</html>
h1 {
  color: blue;
  text-align: center;
}

p {
  font-size: 18px;
  color: gray;
}
function greet() {
  alert("Welcome to MyStudySpire!");
}
Added CSS Basics section
## 2. CSS Basics

- CSS stands for **Cascading Style Sheets**
- It is used to style and design web pages
- Example:

```css
h1 {
  color: blue;
  font-size: 24px;
}
p {
  color: green;
}
## 3. JavaScript Basics

- JavaScript is a programming language used to make web pages interactive.
- It can be used to add dynamic content, validate forms, and create animations.

- Example:

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Example</title>
</head>
<body>
  <h1 id="heading">Hello, World!</h1>
  <button onclick="changeText()">Click Me</button>

  <script>
    function changeText() {
      document.getElementById("heading").innerHTML = "Welcome to MyStudySpire!";
    }
  </script>
</body>
</html>
