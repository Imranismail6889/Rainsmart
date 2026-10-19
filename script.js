
const form = document.getElementById("rain-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const roofInput = document.getElementById("roof");
    const rainInput = document.getElementById("rainfall");

    const roof = Number(roofInput.value);
    const rainfall = Number(rainInput.value);

    const result = document.getElementById("result");
    const note = document.getElementById("result-note");

    if (
        roofInput.value === "" ||
        rainInput.value === "" ||
        !Number.isFinite(roof) ||
        !Number.isFinite(rainfall) ||
        roof <= 0 ||
        rainfall < 0
    ) {
        result.textContent = "Check your values";
        note.textContent =
            "Roof area must be above zero and rainfall cannot be negative.";

        document.getElementById("water-stat").textContent = "0 L";
        document.getElementById("roof-stat").textContent = "— m²";
        document.getElementById("rain-stat").textContent = "— mm";
        return;
    }

    const water = roof * rainfall * 0.8;

    if (!Number.isFinite(water)) {
        result.textContent = "Value too large";
        note.textContent = "Please enter smaller numbers.";
        return;
    }

    result.innerHTML =
        water.toLocaleString("en-IN", {
            maximumFractionDigits: 2
        }) + ' <small>litres</small>';

    note.textContent =
        "Approximately " +
        (water / 1000).toLocaleString("en-IN", {
            maximumFractionDigits: 3
        }) +
        " kilolitres may be collected.";

    document.getElementById("water-stat").textContent =
        water.toLocaleString("en-IN", {
            maximumFractionDigits: 2
        }) + " L";

    document.getElementById("roof-stat").textContent =
        roof.toLocaleString("en-IN") + " m²";

const form = document.getElementById("rain-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const roofInput = document.getElementById("roof");
    const rainInput = document.getElementById("rainfall");

    const roof = Number(roofInput.value);
    const rainfall = Number(rainInput.value);

    const result = document.getElementById("result");
    const note = document.getElementById("result-note");

    if (
        roofInput.value === "" ||
        rainInput.value === "" ||
        !Number.isFinite(roof) ||
        !Number.isFinite(rainfall) ||
        roof <= 0 ||
        rainfall < 0
    ) {
        result.textContent = "Check your values";
        note.textContent =
            "Roof area must be above zero and rainfall cannot be negative.";

        document.getElementById("water-stat").textContent = "0 L";
        document.getElementById("roof-stat").textContent = "— m²";
        document.getElementById("rain-stat").textContent = "— mm";
        return;
    }

    const water = roof * rainfall * 0.8;

    if (!Number.isFinite(water)) {
        result.textContent = "Value too large";
        note.textContent = "Please enter smaller numbers.";
        return;
    }

    result.innerHTML =
        water.toLocaleString("en-IN", {
            maximumFractionDigits: 2
        }) + ' <small>litres</small>';

    note.textContent =
        "Approximately " +
        (water / 1000).toLocaleString("en-IN", {
            maximumFractionDigits: 3
        }) +
        " kilolitres may be collected.";

    document.getElementById("water-stat").textContent =
        water.toLocaleString("en-IN", {
            maximumFractionDigits: 2
        }) + " L";

    document.getElementById("roof-stat").textContent =
        roof.toLocaleString("en-IN") + " m²";

    document.getElementById("rain-stat").textContent =
        rainfall.toLocaleString("en-IN") + " mm";
});

    document.getElementById("rain-stat").textContent =
        rainfall.toLocaleString("en-IN") + " mm";
});
