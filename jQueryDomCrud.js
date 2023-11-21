// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>

// Access (read) the data-color attribute of the <img>,
// log to the console

// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"
$(document).ready(function () {
    const imgColor = $("img").data("color");
    console.log(imgColor);
  
    $("li:eq(2)").addClass("highlight");
  
    $("<a>")
      .text("Buy Now!")
      .attr("id", "cta")
      .insertAfter("p:last");
  
    $("p:last").remove();
  
    $("#cta").click(function () {
      $(this).replaceWith("Added to cart");
    });
  });