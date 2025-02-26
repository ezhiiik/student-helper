// Данные о практикумах
const practices = {
    videos: [
        { title: "Практикум 1", content: "Запись: https://video1.com" },
        { title: "Практикум 2", content: "Запись: https://video2.com" }
    ],
    tips: [
        { title: "Практикум 1", content: "Советы: Подготовьте материалы." },
        { title: "Практикум 2", content: "Советы: Используйте справочники." }
    ]
};

// Данные о встречах
const meetings = [
    { title: "Встреча с Павлом", date: "11 февраля 11:00-13:00", type: "meeting" },
    { title: "Коворкинг с кураторами", date: "27 февраля 18:30", type: "coworking" },
    { title: "Встреча с Павлом", date: "4 марта 13:00-15:30", type: "meeting" },
    { title: "Коворкинг с кураторами", date: "6 марта 18:30", type: "coworking" }
];

// Показать раздел
function showSection(sectionId) {
    document.querySelectorAll("section").forEach(section => {
        section.style.display = "none";
    });
    document.getElementById(sectionId).style.display = "block";

    if (sectionId === "videos" || sectionId === "tips") {
        loadPractices(sectionId);
    } else if (sectionId === "calendar") {
        loadCalendar();
    }
}

// Загрузить практикумы
function loadPractices(type) {
    let listContainer = document.getElementById("practice-list");
    listContainer.innerHTML = "";
    document.getElementById("practice-title").textContent = type === "videos" ? "Записи практикумов" : "Рекомендации";

    practices[type].forEach(practice => {
        let btn = document.createElement("button");
        btn.textContent = practice.title;
        btn.onclick = () => showPracticeDetails(practice.title, practice.content);
        listContainer.appendChild(btn);
    });
}

// Показать детали практикума
function showPracticeDetails(title, content) {
    document.getElementById("practices").style.display = "none";
    document.getElementById("practice-details").style.display = "block";
    document.getElementById("selected-practice-title").textContent = title;
    document.getElementById("selected-practice-content").textContent = content;
}

// Загрузить календарь встреч
function loadCalendar() {
    let listContainer = document.getElementById("calendar-list");
    listContainer.innerHTML = "";

    meetings.forEach(meeting => {
        let div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `<h3>${meeting.title}</h3><p>${meeting.date}</p>`;
        if (meeting.type === "coworking") {
            div.style.backgroundColor = "#e6f5d0"; // Зеленоватый фон для коворкинга
        } else {
            div.style.backgroundColor = "#f0e6d2"; // Бежевый фон для встреч
        }
        listContainer.appendChild(div);
    });
}

// Кнопка "Назад"
function goBack() {
    document.querySelectorAll("section").forEach(section => {
        section.style.display = "none";
    });
    document.getElementById("welcome").style.display = "block";
}

// Кнопка "Назад" к списку практикумов
function goBackToList() {
    document.getElementById("practice-details").style.display = "none";
    document.getElementById("practices").style.display = "block";
}
