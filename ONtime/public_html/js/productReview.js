
function validateform() {
    var review = document.forms["productReview"]["review"].value;

      if (review == "") {
        alert("Form must be filled out");
        return false;
      }
