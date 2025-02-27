const dataURL = "https://raw.githubusercontent.com/ТВОЙ_GITHUB_USER/student-helper/main/data.json";

// Загружаем данные из JSON
async function loadData() {
    try {
        const response = await fetch(dataURL);
        const data = await response.json();

        // Загружаем практикумы
        loadPractices(data.practices);

        // Загружаем рекомендации
        loadTips(data.tips);

        // Загружаем календарь встреч
        loadCalendar(data.calendar);

    } catch (error) {
        console.error("Ошибка загрузки данных:", error);
    }
}

// Загружаем список практикумов
function loadPractices(practices) {
    let listContainer = document.getElementById("practice-list");
    listContainer.innerHTML = "";

    practices.forEach(practice => {
        let btn = document.createElement("button");
        btn.textContent = practice.title;
        btn.onclick = () => alert(`Видео: ${practice.video}\nСоветы: ${practice.tips}`);
        listContainer.appendChild(btn);
    });
}

// Загружаем рекомендации
function loadTips(tips) {
    let listContainer = document.getElementById("tips-list");
    listContainer.innerHTML = "";

    tips.forEach(tip => {
        let div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `<h3>${tip.title}</h3><p>${tip.content}</p>`;
        listContainer.appendChild(div);
    });
}

// Загружаем календарь встреч
function loadCalendar(meetings) {
    let listContainer = document.getElementById("calendar-list");
    listContainer.innerHTML = "";

    meetings.forEach(event => {
        let div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `<h3>${event.title}</h3><p>${event.date}</p>`;
        div.style.backgroundColor = event.type === "coworking" ? "#e6f5d0" : "#f0e6d2";
        listContainer.appendChild(div);
    });
}

// Вызываем загрузку данных при старте
loadData();
