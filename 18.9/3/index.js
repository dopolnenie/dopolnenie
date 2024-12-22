// Мок-функция для получения данных 1
function mockFunction1() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Мок-функция 1 завершена!");
        }, Math.random() * (5000 - 2000) + 2000); // Задержка от 2 до 5 секунд
    });
}

// Мок-функция для получения данных 2
function mockFunction2() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Мок-функция 2 завершена!");
        }, Math.random() * (5000 - 2000) + 2000); // Задержка от 2 до 5 секунд
    });
}

// Функция для анимации прогресс-бара
function progress(time, progressBar, timer, resultContainer) {
    const maxWidth = 500; // Максимальная ширина прогресс-бара
    const startTime = performance.now(); // Время начала анимации

    // Анимация прогресс-бара с таймером
    function animateProgress() {
        const elapsedTime = (performance.now() - startTime) / 1000; // Прошедшее время в секундах
        const progressWidth = (elapsedTime / time) * maxWidth; // Рассчитываем текущую ширину прогресс-бара

        // Обновляем ширину прогресс-бара с помощью scaleX
        progressBar.style.transform = `scaleX(${Math.min(elapsedTime / time, 1)})`;

        // Обновление таймера
        timer.textContent = Math.floor(elapsedTime);

        // Если анимация еще не закончена, продолжаем обновлять
        if (elapsedTime < time) {
            requestAnimationFrame(animateProgress); // Повторно вызываем функцию для плавной анимации
        } else {
            // Если время завершено, устанавливаем ширину на максимум
            progressBar.style.transform = `scaleX(1)`;
            timer.textContent = time; // Устанавливаем финальное значение таймера
            resultContainer.textContent = "Завершено!";
        }
    }

    // Запускаем анимацию прогресс-бара
    animateProgress();
}

// Функция для показа изображений
function showImages(imageRowId, images) {
    const imageRow = document.getElementById(imageRowId);
    images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        imageRow.appendChild(img);
    });
}

// Функция для вызова мок-функций и анимации прогресс-баров
async function startProcess() {
    const progressBar1 = document.getElementById('progress-bar-1');
    const timer1 = document.getElementById('timer-1');
    const result1 = document.getElementById('result-1');
    
    // Запускаем первую мок-функцию и прогресс-бар
    progress(3, progressBar1, timer1, result1);
    const result1Message = await mockFunction1();
    result1.textContent = result1Message; // Выводим результат первой мок-функции
    
    // Показываем изображения для первой функции
    const images1 = ['images/cat1.jpg', 'images/cat2.jpg', 'images/cat3.jpg'];
    showImages('image-row-1', images1);

    // После завершения первой мок-функции, запускаем вторую мок-функцию и второй прогресс-бар
    const progressBar2 = document.getElementById('progress-bar-2');
    const timer2 = document.getElementById('timer-2');
    const result2 = document.getElementById('result-2');
    
    progress(5, progressBar2, timer2, result2); // Второй прогресс-бар
    const result2Message = await mockFunction2();
    result2.textContent = result2Message; // Выводим результат второй мок-функции

    // Показываем изображения для второй функции
    const images2 = ['images/dog1.jpg', 'images/dog2.jpg', 'images/dog3.jpg'];
    showImages('image-row-2', images2);
}

// Запуск процесса при загрузке страницы
window.onload = function() {
    startProcess();
};
