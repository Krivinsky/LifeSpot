// создадим объект Map для хранения сессии
let session = new Map();

let sessionLog = function logSession() {
	// Вывод в консоль
	for (let result of session) {
		console.log(result)
	}
}

function handleSession() {
	// Сохраним время начала сессии
	session.set("startDate", new Date().toLocaleString())

	// Сохраним UserAgent
	session.set("userAgent", window.navigator.userAgent);
}

function checkAge() {
	session.set("age", prompt("Enter yor age"))

	if (session.get("age") >= 18) {
		let startDate = new Date().toLocaleString();
		alert("Welcome to LifeSpot! " + '\n' + "Current time: " + startDate);
	}
	else {
		alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
		window.location.href = "http://www.google.com"
	}
}

function filter() {
	// Находим контейнеры с видео, которые необходимо фильтровать
	let elements = document.getElementsByClassName('video-container');

	// Пробегаемся по контейнерам
	for (let i = 0; i <= elements.length; i++) {
		// Вытаскиваем текст описания видео, которое необходимо отфильтровать
		let videoText = elements[i].querySelector(".video-title").innerText;

		// Выполняем фильтрацию, сравнивая значения в нижнем регистре
		if (!videoText.toLowerCase().includes(inputParseFunction().toLowerCase())) {
			// Скрываем неподходящие
			elements[i].style.display = 'none';
		} else {
			// Показываем подходящие
			elements[i].style.display = 'inline-block';
		}
	}
	let childElements = elements[i];
	// Получим элемент, содержащий описание видео
	// Он у нас единственный с тегом h3, снова воспользуемся поиском по тегу
	let videoDescription = childElements.getElementsByTagName('h3')[0];
	console.log(videoDescription.innerText);
}

function getReview() {
	// Создадим объект
	let review = {}

	// Сохраним свойство имени
	review["userName"] = prompt("Как вас зовут ?")
	if (review["userName"] == null) {
		return
	}

	// Сохраним текст отзыва
	review["comment"] = prompt("Напишите свой отзыв")
	if (review["comment"] == null) {
		return
	}

	// Сохраним текущее время
	review["date"] = new Date().toLocaleString()

	// Добавим на страницу
	writeReview(review)
}

const writeReview = review => {
	document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
		`<p> <i> <b>${review['userName']}</b>  ${review['date']}</i></p>` +
		`<p>${review['comment']}</p>` +
		'</div>';
}