// Real-Time Tremor Graph
const tremorCtx = document.getElementById("tremorGraph").getContext("2d");

new Chart(tremorCtx, {
    type: "line",
    data: {
        labels: ["10am", "12pm", "2pm", "4pm", "6pm"],
        datasets: [{
            label: "Tremor Intensity",
            data: [20, 45, 30, 70, 50],
            borderWidth: 2,
            borderColor: "#007bff",
            fill: false,
            tension: 0.4
        }]
    }
});

// Weekly Tremor Trend
const weeklyCtx = document.getElementById("weeklyGraph").getContext("2d");

new Chart(weeklyCtx, {
    type: "line",
    data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [{
                label: "This Week",
                data: [40, 50, 45, 60, 55, 48, 52],
                borderColor: "#28a745",
                borderWidth: 2,
                fill: false,
                tension: 0.4
            },
            {
                label: "Last Week",
                data: [50, 55, 48, 58, 65, 52, 57],
                borderColor: "#ff6600",
                borderWidth: 2,
                fill: false,
                tension: 0.4
            }
        ]
    }
});

// Real-Time Sensor Waveform
const signalCtx = document.getElementById("signalGraph").getContext("2d");

new Chart(signalCtx, {
    type: "line",
    data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
        datasets: [{
            label: "Sensor Signal",
            data: [0, 1, 0.4, 1.2, 0.3, 1, 0.5, 1.1],
            borderWidth: 2,
            borderColor: "#000",
            fill: false,
            tension: 0.3
        }]
    }
});