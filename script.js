const dataURL = "https://raw.githubusercontent.com/ezhiiik/student-helper/main/data.json";

async function loadData() {
    try {
        const response = await fetch(dataURL);
        const data = await response.json();
        loadCalendar(data.calendar);
    } catch (error) {
        console.error("Ошибка загрузки данных:", error);
    }
}

function loadCalendar(events) {
    let listContainer = document.getElementById("calendar-list");
    listContainer.innerHTML = "";

    events.forEach(event => {
        let div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
            <h3>${event.title}</h3>
            <p><strong>Дата:</strong> ${event.date}</p>
            <p><strong>Время:</strong> ${event.time}</p>
            <p>${event.description}</p>
        `;
        div.style.backgroundColor = event.type === "coworking" ? "#e6f5d0" : "#f0e6d2";
        listContainer.appendChild(div);
    });
}

function goBack() {
    window.history.back();
}

loadData();
