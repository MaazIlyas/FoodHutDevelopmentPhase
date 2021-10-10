// Code from: https://www.solodev.com/blog/web-design/adding-a-datetime-picker-to-your-forms.stml
// Telling the datetimepicker to where to find the date input and how to handle it.
$( document ).ready(function() {
    $('#datetimepicker1').datetimepicker();
});


//Function to cancel the even of submitting button
function cancelSubmission() {
    document.getElementById("reservationForm").addEventListener("click", function (event) {
        event.preventDefault()
    });

}