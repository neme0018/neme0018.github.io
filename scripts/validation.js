window.onload=init;
function init () {
<script>
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
        var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Email must be filled out");
        return false;
        var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Phone Number must be filled out");
        return false;
        var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Subject must be filled out");
        return false;
    }
}
</script>
</head>
<body>

<form name="myForm" action="/action_page.php"
onsubmit="return validateForm()" method="post">
Name: <input type="text" name="fname">
<input type="submit" value="Submit">
Email: <input type="text" name="fname">
<input type="submit" value="Submit">
Phone Number: <input type="text" name="fname">
<input type="submit" value="Submit">
Subject: <input type="text" name="fname">
<input type="submit" value="Submit">
</form>