document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const searchButton = document.querySelector("#search-button");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        // Fetch JSON data from the GitHub repository
        fetch("data.json")
            .then(response => response.json())
            .then(data => {
                data.push(formDataObject);

                // Update JSON file with new data
                const jsonData = JSON.stringify(data, null, 2);
                fetch("data.json", {
                    method: "PUT",
                    body: jsonData,
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                // Clear form inputs
                form.reset();
            })
            .catch(error => {
                console.error("Error fetching or updating JSON data:", error);
            });
    });

    searchButton.addEventListener("click", function () {
        const searchName = document.querySelector("#search-name").value;

        // Implement your search logic here using the data from data.json
        // and display the search results on the page.
    });
});
