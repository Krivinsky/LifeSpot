let checker = function (newVisit) {
	if (window.sessionStorage.getItem("userAge") >= 18) {
		// ������� �������� �� ������ ���������, ����� �� ���������� �����������
		// ������ ���
		if (newVisit) {
			alert("Welcome to LifeSpot! " + '\n' + "Current time: " + new Date().toLocaleString());
		}
	}
	else {
		alert("Our broadcasts are not intended for people under the age of 18. You will be redirected");
		window.location.href = "http://www.google.com"
	}
}

//���������� ������ ������ ����� ��� ������ ������������ �� ��������
function handleSession(logger, checker) {

	// ��������� ���� ������ � �����������, ���� ����� �����
	if (window.sessionStorage.getItem("startDate") == null) {
		window.sessionStorage.setItem("startDate", new Date().toLocaleString())
	}

	// ��������� userAgent � �����������, ���� ����� �����
	if (window.sessionStorage.getItem("userAgent") == null) {
		window.sessionStorage.setItem("userAgent", window.navigator.userAgent)
	}

	// ��������� ������� � �����������, ���� ����� �����
	if (window.sessionStorage.getItem("userAge") == null) {
		let input = prompt("Enter your age");
		window.sessionStorage.setItem("userAge", input)

		/* ������� ������������ � sessionStorage. ������, ��� ������ ����� ������������, �
		 ��� ����������� �������� �� ������� �� ������ �����������*/
		checker(true)
	} else {

		/* ������������ ������� �� ������ ���, ����������� �� ����������. */
		checker(false)
	}

	/* �������� ���������� � �������� ����-���� ������� �����������.
		���������� � �������� �������� �� �����������, ����� ������� � ��������, �� �� �������� ��� ����������.
	*/
	logger()
}


//����� ������ ������ � �������
let logger = function () {
	console.log('������ ������: ' + window.sessionStorage.getItem("startDate"))
	console.log('������ �������: ' + window.sessionStorage.getItem("userAgent"))
	console.log('������� ������������: ' + window.sessionStorage.getItem("userAge"))
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
	// ������� ���������� � �����, ������� ���������� �����������
	let elements = document.getElementsByClassName('video-container');

	// ����������� �� �����������
	for (let i = 0; i <= elements.length; i++) {
		// ����������� ����� �������� �����, ������� ���������� �������������
		let videoText = elements[i].querySelector(".video-title").innerText;

		// ��������� ����������, ��������� �������� � ������ ��������
		if (!videoText.toLowerCase().includes(inputParseFunction().toLowerCase())) {
			// �������� ������������
			elements[i].style.display = 'none';
		} else {
			// ���������� ����������
			elements[i].style.display = 'inline-block';
		}
	}
	let childElements = elements[i];
	// ������� �������, ���������� �������� �����
	// �� � ��� ������������ � ����� h3, ����� ������������� ������� �� ����
	let videoDescription = childElements.getElementsByTagName('h3')[0];
	console.log(videoDescription.innerText);
}

function getReview() {
	// �������� ������
	let review = {}

	// �������� �������� �����
	review["userName"] = prompt("��� ��� ����� ?")
	if (review["userName"] == null) {
		return
	}

	// �������� ����� ������
	review["comment"] = prompt("�������� ���� �����")
	if (review["comment"] == null) {
		return
	}

	// �������� ������� �����
	review["date"] = new Date().toLocaleString()

	// ������� �� ��������
	writeReview(review)
}

const writeReview = review => {
	document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
		`<p> <i> <b>${review['userName']}</b>  ${review['date']}</i></p>` +
		`<p>${review['comment']}</p>` +
		'</div>';
}