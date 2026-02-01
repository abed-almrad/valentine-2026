document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("no");
    const buttonContainer = document.getElementById("button-container");
    const yesButton = document.getElementById("yes");

    function moveNoButton() {
        // Get button container dimensions
        const containerRect = buttonContainer.getBoundingClientRect();
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;

        // Generate a random position within the button container with padding
        const padding = 10;
        const maxX = containerRect.width - buttonWidth - padding;
        const maxY = containerRect.height - buttonHeight - padding;

        const x = Math.random() * maxX + padding;
        const y = Math.random() * maxY + padding;

        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
        noButton.style.transform = "none";
    }

    // Track mouse movement over the container
    buttonContainer.addEventListener("mousemove", function (e) {
        const noRect = noButton.getBoundingClientRect();
        const noCenterX = noRect.left + noRect.width / 2;
        const noCenterY = noRect.top + noRect.height / 2;

        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Calculate distance from mouse to "No" button center
        const distance = Math.sqrt(
            Math.pow(mouseX - noCenterX, 2) + Math.pow(mouseY - noCenterY, 2)
        );

        // If mouse is within 100px of the "No" button, move it away
        if (distance < 100) {
            moveNoButton();
        }
    });

    // Backup: also trigger on mouseenter
    noButton.addEventListener("mouseenter", moveNoButton);

    yesButton.addEventListener("click", function () {
        window.location.href = "date.html";
    });
});
