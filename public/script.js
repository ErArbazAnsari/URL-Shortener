document
    .getElementById("shorten-form")
    .addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const shortCode = formData.get("shortCode");
        const url = formData.get("url");

        // console.log(shortCode, url);
    });
