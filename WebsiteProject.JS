document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const selectedOption = form.querySelector('input[name="pasta"]:checked');
      
      if (selectedOption) {
        alert(`You voted for: ${selectedOption.value}`);
        form.reset();
      } else {
        alert("Please select an option before submitting.");
      }
    });
  });
  