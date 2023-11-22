// Wrap your code in the jQuery function that ensures the DOM is fully loaded.
 
  $(document).ready(function () {
    //Toggles "done" class on <li> element
      $(".today-list").on("click", "li", function () {
        $(this).toggleClass("done");
      });


 //Delete element when delete link clicked
 $(".today-list").on("click", ".delete", function () {
        $(this).parent().fadeOut(500, function () {
          $(this).remove();
        });
      });


// Adds new list item to <ul>
 

  $(".add-item").click(function () {
    const newItemText = $("#new-todo").val();
    if (newItemText) {
      const newItem = $("<li><span>" + newItemText + "</span><a class='delete'>Delete</a></li>");
      $(".today-list").append(newItem);
      $("#new-todo").val("");
    }
  });
});

