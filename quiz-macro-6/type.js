const quizData = [
    {
        question: "Apa ibukota Indonesia?",
        options: ["Jakarta", "Surabaya", "Bandung", "Semarang"],
        correct: "Jakarta",
    },
    {
        question: "rendang merupakan makanan khas dari daerah ?",
        options: ["jawa barat", "kalimantan", "sumatra", "ambon"],
        correct: "sumatra"
    },
    {
        question: "siapakah president pertama republik indonesia",
        options: ["Joko Widodo", "Prabowo Subianto", "Susilo Bambang Yudhoyono", "Soekarno"],
        correct: "Soekarno"
    },
    {
        question: "dari daerah manakah asal alat musik angklung berada",
        options: ["jawa", "sulawesi", "papua", "riau"],
        correct: "jawa"
    },
    {
        question: "tradisi kebo-keboan berasal dari daerah?",
        options: ["Banyuasin", "boyolali", "lamongan", "banyuwangi"],
        correct: "banyuwangi"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const scoreElement = document.getElementById("score");

function loadQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionElement.textContent = currentQuiz.question;

    optionsElement.innerHTML = "";

    currentQuiz.options.forEach((option, index) => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="answer" value="${option}"> Jawaban ${String.fromCharCode(65 + index)}: ${option}`;
        optionsElement.appendChild(label);
    });
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        return;
    }

    const userAnswer = selectedAnswer.value;
    const correctAnswer = quizData[currentQuestion].correct;

    if (userAnswer === correctAnswer) {
        score++;
    }

    selectedAnswer.checked = false;

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        questionElement.textContent = "Quiz selesai!, Wah kamu Hebat Kembangkan terus ya!!";
        optionsElement.innerHTML = "";
        nextButton.style.display = "none";
        scoreElement.textContent = `Skor Akhir: ${score} dari ${quizData.length}`;
    }

    scoreElement.textContent = `Skor: ${score}`;
}

loadQuestion();

nextButton.addEventListener("click", checkAnswer);
