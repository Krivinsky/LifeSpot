// �������� ������ Map ��� �������� ������
let session = new Map();

let sessionLog = function logSession() {
	// ����� � �������
	for (let result of session) {
		console.log(result)
	}
}

function handleSession() {
	// �������� ����� ������ ������
	session.set("startDate", new Date().toLocaleString())

	// �������� UserAgent
	session.set("userAgent", window.navigator.userAgent);
}

function checkAge() {
	session.set("age", prompt("Enter yor age"))

	if (session.get("age") >= 18) {
		let startDate = new Date().toLocaleString();
		alert("Welcome to LifeSpot! " + '\n' + "Current time: " + startDate);
	}
	else {
		alert("���� ���������� �� ������������� ��� ��� ������ 18 ���. �� ������ ��������������");
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