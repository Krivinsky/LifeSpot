let checker = function (newVisit) {
	if (window.sessionStorage.getItem("userAge") >= 18) {
		// Добавим проверку на первое посещение, чтобы не показывать приветствие
		// лишний раз
		if (newVisit) {
			alert("Welcome to LifeSpot! " + '\n' + "Current time: " + new Date().toLocaleString());
		}
	}
	else {
		alert("Our broadcasts are not intended for people under the age of 18. You will be redirected");
		window.location.href = "http://www.google.com"
	}
}

//Сохранение данных сессии сразу при заходе пользователя на страницу
function handleSession(logger, checker) {

	// Проверяем дату захода и проставляем, если новый визит
	if (window.sessionStorage.getItem("startDate") == null) {
		window.sessionStorage.setItem("startDate", new Date().toLocaleString())
	}

	// Проверяем userAgent и проставляем, если новый визит
	if (window.sessionStorage.getItem("userAgent") == null) {
		window.sessionStorage.setItem("userAgent", window.navigator.userAgent)
	}

	// Проверяем возраст и проставляем, если новый визит
	if (window.sessionStorage.getItem("userAge") == null) {
		let input = prompt("Enter your age");
		window.sessionStorage.setItem("userAge", input)

		/* Возраст отсутствовал в sessionStorage. Значит, это первый визит пользователя, и
		 при прохождении проверки на возраст он увидит приветствие*/
		checker(true)
	} else {

		/* Пользователь заходит не первый раз, приветствие не показываем. */
		checker(false)
	}

	/* Вызываем переданную в качестве колл-бэка функцию логирования.
		передавать в качестве коллбека не обязательно, можно вызвать и напрямую, но мы добавили для повторения.
	*/
	logger()
}


//Вывод данных сессии в консоль
let logger = function () {
	console.log('Начало сессии: ' + window.sessionStorage.getItem("startDate"))
	console.log('Даныне клиента: ' + window.sessionStorage.getItem("userAgent"))
	console.log('Возраст пользователя: ' + window.sessionStorage.getItem("userAge"))
}

function checkAge() {
	if (session.age >= 18) {
		alert("Welcome to LifeSpot! " + '\n' + "Current time: " + new Date().toLocaleString());
	}
	else {
		alert("Our broadcasts are not intended for people under the age of 18. You will be redirected");
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