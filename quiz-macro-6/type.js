const quizData = [
    {
        question: "Apa ibukota Indonesia?",
        options: ["Jakarta", "Surabaya", "Bandung", "Semarang"],
        correct: "Jakarta",
    },
    {
        question: "Rendang merupakan makanan khas dari daerah?",
        options: ["Jawa Barat", "Kalimantan", "Sumatra", "Ambon"],
        correct: "Sumatra"
    },
    {
        question: "Siapakah presiden pertama Republik Indonesia?",
        options: ["Joko Widodo", "Prabowo Subianto", "Susilo Bambang Yudhoyono", "Soekarno"],
        correct: "Soekarno"
    },
    {
        question: "Dari daerah manakah asal alat musik angklung berada?",
        options: ["Jawa", "Sulawesi", "Papua", "Riau"],
        correct: "Jawa"
    },
    {
        question: "Tradisi kebo-keboan berasal dari daerah?",
        options: ["Banyuasin", "Boyolali", "Lamongan", "Banyuwangi"],
        correct: "Banyuwangi"
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
        label.innerHTML = `<input type="radio" name="answer" value="${option}" /> ${String.fromCharCode(65 + index)}. ${option}`;
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
        questionElement.textContent = "Quiz selesai! Wah kamu Hebat, kembangkan terus ya!!";
        optionsElement.innerHTML = "";
        nextButton.style.display = "none";
        scoreElement.textContent = `Skor Akhir: ${score} dari ${quizData.length}`;
    }

    scoreElement.textContent = `Skor: ${score}`;
}

loadQuestion();

nextButton.addEventListener("click", checkAnswer);
