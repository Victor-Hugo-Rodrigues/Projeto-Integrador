function updateJobListings() {
    jobContainer.innerHTML = "";

    const startIndex = currentPage * maxCardsPerPage;
    const endIndex = startIndex + maxCardsPerPage;
    const searchTerm = document.getElementById("search-input").value.toLowerCase();

    const filteredJobs = jobs.filter((job, index) => {
        return job.jobTitle.toLowerCase().includes(searchTerm);
    });

    for (let i = startIndex; i < endIndex && i < filteredJobs.length; i++) {
        const jobListing = createJobListing(filteredJobs[i], i);
        jobContainer.appendChild(jobListing);
    }

    updatePaginationButtons();
}

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");


    searchInput.addEventListener("input", updateJobListings);


    const paginationButtons = document.querySelectorAll(".pagination .page-button");

    paginationButtons.forEach(function (button, index) {
        button.addEventListener("click", function () {
            paginationButtons.forEach(function (btn) {
                btn.classList.remove("selected");
            });

            button.classList.add("selected");
        });
    });

    updateJobListings();
});


