import $ from "jquery";
let count = 0;

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');


$('button').on('click', function updateCounter(){
	// Do something
    count += 1;
    $("#count").html(`${count} clicks on the button`);
});