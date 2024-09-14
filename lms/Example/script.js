document.querySelectorAll('.sidebar ul li a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        // Get the target page from the data-page attribute
        const page = this.getAttribute('data-page');

        // Fetch the content of the target page and load it into the content-view section
        fetch(page)
            .then(response => response.text())
            .then(data => {
                // Load the fetched content into the content-view section
                document.getElementById('content-view').innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading page:', error);
            });
    });
});
