### Установка зависимостей

npm install

### Запуск проекта

npm start

сервер запустится на http://localhost:3000

### Описание задачи

В данном тестовом проекте реализован упрощённый интерфейс редактора кода (аналог leetcode.com), где пользователь может писать код на одном из двух заданных языков (например, Go и Python).

### Имитация "сервера"

Моковые данные прописаны в самом коде, имитируется посредством вызова setTimeout() через условие:
ответ из "сервера" приходит с ошибкой, если на "сервер" отправлена пустая строка, в противном случае ответ успешен.

### Варианты расширения приложения

Вариантов расширения приложения много. Основные:
    1. Создание API на Node, подключение сервера.
    2. Разработка приложения в ключе "учебного" приложения для изучения ЯП.
    3. Подключение дополнительных учебных материалов.
    4. Разделение возможностей приложения по уровням (или другая бизнес-идея)

### Дополнительно

Порядок разработки тестового проекта можно отследить через коммиты.

Функционал ограничен в части написания кода из-за отстутсивя серверной