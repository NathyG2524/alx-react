import $ from "jquery";
import _ from "lodash";
import  "../css/main.css"
// import Icon from "../assets/holberton-logo.jpg"

let count = 0;

$('body').append('<div id="logo"></div>');
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

  // Add the image to our existing div.
// const myIcon = new Image();
// myIcon.src = Icon;
// myIcon.alt = "logo";

// ("#logo").appendChild(myIcon);

$('button').on('click', _.debounce(function updateCounter() {
    // Do something
    count += 1;
    $("#count").html(`${count} clicks on the button`);
}, 500));