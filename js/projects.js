const tabs = document.querySelectorAll(".tab");
const projects = document.querySelectorAll(".project");

// Switch project tabs
tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
        e.preventDefault();

        const index = tab.dataset.project;

        // Disable all tabs
        tabs.forEach(t => t.classList.remove("active"));
        projects.forEach(p => p.classList.remove("active"));

        // Enable only active tab
        tab.classList.add("active");
        projects[index].classList.add("active");
    });
});

// Individual sliders per project
document.querySelectorAll("[data-slider]").forEach(slider => {
    let index = 0;

    const project = slider.closest(".project");
    const images = slider.querySelectorAll("img");

    const nextBtn = project.querySelector(".next");
    const prevBtn = project.querySelector(".prev");

    function showImage(newIndex) {
        images[index].classList.remove("active");

        if (newIndex < 0) {
            index = images.length - 1;
        } else if (newIndex >= images.length) {
            index = 0;
        } else {
            index = newIndex;
        }
        images[index].classList.add("active");
    }

    nextBtn.addEventListener("click", () => {
        showImage(index + 1);
    });

    prevBtn.addEventListener("click", () => {
        showImage(index - 1);
    });
});