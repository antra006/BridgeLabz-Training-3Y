// Q7: Track mouse coordinates and place a red dot on double-click.
const trackingBox = document.getElementById("trackingBox");
const coordinates = document.getElementById("coordinates");

trackingBox.addEventListener("mousemove", function (event) {
    const boxPosition = trackingBox.getBoundingClientRect();
    const x = Math.round(event.clientX - boxPosition.left);
    const y = Math.round(event.clientY - boxPosition.top);

    // Display both viewport coordinates and coordinates inside the box.
    coordinates.textContent =
        "clientX: " + event.clientX + " | clientY: " + event.clientY +
        " | Box X: " + x + " | Box Y: " + y;
});

trackingBox.addEventListener("dblclick", function (event) {
    const boxPosition = trackingBox.getBoundingClientRect();
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.style.left = (event.clientX - boxPosition.left) + "px";
    dot.style.top = (event.clientY - boxPosition.top) + "px";
    trackingBox.appendChild(dot);
});
