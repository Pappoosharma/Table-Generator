// Get the input element
      const inputElement = document.getElementById("numberInput");

      // Add an event listener for 'keypress' event
      inputElement.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
          document.getElementById("numberInput").click();
          console.log("Enter key pressed!");

          // Calling the function
          generateTable();
        }
        // generateTable();
      });

      function generateTable() {
        // Get the number entered by the user
        let number = document.getElementById("numberInput").value;

        // Validate if the input is a number and not empty
        if (isNaN(number) || number === "") {
          alert("Please enter a number.");
          return;
        }

        // Convert input to integer
        // number = parseInt(number);
           number = parseFloat(number);

        // Generate the multiplication table and display it in the tableContainer
        let table = "<h2>Table of " + number + "</h2>";
        table += "<table border='5'>";
        for (let i = 1; i <= 10; i++) {
          table += "<tr>";
          table += "<td>" + number + " × " + i + "</td>";
          table += "<td>" + number * i + "</td>";
          table += "</tr>";
        }
        table += "</table>";

        // Display the table inside the tableContainer
        document.getElementById("tableContainer").innerHTML = table;
      }


          // Disable right-click context menu
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    });

    // Disable copy (Ctrl+C)
    document.addEventListener('keydown', function (e) {
      if (e.ctrlKey && (e.key === 'c' || e.key === 'C')) {
        e.preventDefault();
      }
    });

    // Disable paste (Ctrl+V)
    document.addEventListener('keydown', function (e) {
      if (e.ctrlKey && (e.key === 'v' || e.key === 'V')) {
        e.preventDefault();
      }
    });
