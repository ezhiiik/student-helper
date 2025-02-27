let historyStack = ["welcome"]; // Стек истории переходов

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
    { title: "Коворкинг с кураторами", date: "27 февраля 18:30", type: "coworking" }
];

// Показываем список практикумов
function loadPractices(type) {
    showSection("practices", "welcome");
    document.getElementById("practice-title").textContent = type === "videos" ? "Записи практикумов" : "Рекомендации";

    let listContainer = document.getElementById("practice-list");
    listContainer.innerHTML = "";

    practices[type].forEach(practice => {
        let btn = document.createElement("button
