// Проверяем, что Web App открыт в Telegram
if (window.Telegram && window.Telegram.WebApp) {
    let tg = window.Telegram.WebApp;
    tg.expand(); // Разворачивает Web App на весь экран
    console.log("WebApp работает в Telegram");
} else {
    console.warn("WebApp открыт в браузере, а не в Telegram");
}


const dataURL = "https://raw.githubusercontent.com/ezhiiik/student-helper/main/data.json";

// Стек истории для кнопки "Назад"
let historyStack = ["welcome"];

// Функция показа нужного раздела
function showSection(sectionId, fromPage) {
    document.querySelectorAll("section").forEach(section => {
        section.style.display = "none";
    });

    document.getElementById(sectionId).style.display = "block";

    if (fromPage) {
        historyStack.push(fromPage);
    }
}

// Кнопка "Назад"
function goBack() {
    if (historyStack.length > 1) {
        historyStack.pop();
        let previousPage = historyStack[historyStack.length - 1];
        showSection(previousPage);
    }
}

// Загружаем данные из JSON
async function loadData() {
    try {
        const response = await fetch(dataURL);
        const data = await response.json();

        loadPractices(data.practices);
        loadTips(data.tips);
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

// Загружаем данные при старте
loadData();
