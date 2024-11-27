<script>
    // Function to handle social media icon clicks
    function socialMediaAlert(platform) {
        alert("You clicked on the " + platform + " icon!")
    }

    // Adding event listeners to social media icons
    document.querySelectorAll('.social a').forEach(function(icon) {
        icon.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default anchor click behavior
            const platform = this.querySelector('i').classList[1].split('-')[2]; // Extract platform name
            socialMediaAlert(platform);
        })
    })
</script>
