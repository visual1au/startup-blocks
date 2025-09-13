document.addEventListener("DOMContentLoaded", () => {
    const runningButton = document.querySelector(".runningButton");
    if (!runningButton) return; // exit if button isn't on the page

    const moveRunningButton = () => {
        const x =
            Math.random() * (window.innerWidth - runningButton.offsetWidth);
        const y =
            Math.random() * (window.innerHeight - runningButton.offsetHeight);

        runningButton.style.position = "absolute";
        runningButton.style.left = `${x}px`;
        runningButton.style.top = `${y}px`;
    };

    // Move when mouse enters
    runningButton.addEventListener("mouseenter", moveRunningButton);

    // Optional: move on click too
    runningButton.addEventListener("click", moveRunningButton);
});
