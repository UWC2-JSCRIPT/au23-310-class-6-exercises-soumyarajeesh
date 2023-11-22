// Do not change
document.getElementById('cat').addEventListener('click', () => {
 alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage
   document.addEventListener("DOMContentLoaded", function () {
   $("#more-info").click(function (event) {
     event.preventDefault(); // Prevent the default link behavior (going to a new webpage).
     alert("Here's some info");
   });

// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
$("#dog").click(function (event) { 
  event.preventDefault(); // Prevent the default button behavior (submitting forms).
      event.stopPropagation(); // Prevent event propagation to parent elements.
  alert("Bow wow");
  });
});

  
  


  
  
 

  