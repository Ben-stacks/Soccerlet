 // Get the modal2
        var modal4 = document.getElementById('myModal4');

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn4");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close4")[0];

        // When the user clicks the button, open the modal
        btn.onclick = function() {
            modal4.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal4.style.display = "none";
        }
