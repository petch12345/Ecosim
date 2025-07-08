let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = 10;
let questionsAnswered = 0;

// Array to hold the questions
const originalQuestions = [
    {
        question: "สิ่งมีชีวิตที่ผลิตอาหารได้เองโดยใช้แสงแดดเรียกว่าอะไร?",
        options: ["ผู้ผลิต", "ผู้บริโภค"],
        correct: "ผู้ผลิต",
        explanation: "ผู้ผลิต คือ สิ่งมีชีวิตที่สามารถผลิตอาหารได้เองโดยใช้แสงแดด เช่น ต้นไม้และพืชต่างๆ"
    },
    {
        question: "ห่วงโซ่อาหารเริ่มต้นจากสิ่งมีชีวิตประเภทใด?",
        options: ["ผู้ผลิต", "ผู้บริโภคอันดับหนึ่ง"],
        correct: "ผู้ผลิต",
        explanation: "ห่วงโซ่อาหารเริ่มต้นจากผู้ผลิต เพราะเป็นแหล่งพลังงานหลักของระบบนิเวศน์"
    },
    {
        question: "สัตว์ที่กินพืชเป็นอาหารเรียกว่าอะไร?",
        options: ["สัตว์กินพืช", "สัตว์กินเนื้อ"],
        correct: "สัตว์กินพืช",
        explanation: "สัตว์กินพืช คือ สัตว์ที่กินพืชเป็นอาหารหลัก เช่น กวาง กระรอก"
    },
    {
        question: "ในระบบนิเวศน์ป่าไผ่ ใครเป็นผู้ผลิตหลัก?",
        options: ["ต้นไผ่", "หมีแพนด้า"],
        correct: "ต้นไผ่",
        explanation: "ต้นไผ่เป็นผู้ผลิตหลักในระบบนิเวศน์ป่าไผ่"
    },
    {
        question: "การสูญเสียพลังงานในห่วงโซ่อาหารเกิดขึ้นอย่างไร?",
        options: ["ลดลงในแต่ละระดับ", "เพิ่มขึ้นในแต่ละระดับ"],
        correct: "ลดลงในแต่ละระดับ",
        explanation: "พลังงานจะลดลงในแต่ละระดับของห่วงโซ่อาหาร เพราะมีการสูญเสียพลังงานในรูปของความร้อน"
    },
    {
        question: "ผู้ย่อยสลายมีหน้าที่อะไรในระบบนิเวศน์?",
        options: ["ย่อยสลายซากสิ่งมีชีวิต", "ผลิตอาหาร"],
        correct: "ย่อยสลายซากสิ่งมีชีวิต",
        explanation: "ผู้ย่อยสลายมีหน้าที่ย่อยสลายซากสิ่งมีชีวิต ทำให้สารอาหารกลับสู่ดิน"
    },
    {
        question: "ระบบนิเวศน์ที่สมบูรณ์ต้องมีองค์ประกอบอะไรบ้าง?",
        options: ["ผู้ผลิต ผู้บริโภค ผู้ย่อยสลาย", "เฉพาะผู้ผลิต"],
        correct: "ผู้ผลิต ผู้บริโภค ผู้ย่อยสลาย",
        explanation: "ระบบนิเวศน์ที่สมบูรณ์ต้องมี ผู้ผลิต ผู้บริโภค และผู้ย่อยสลาย"
    },
    {
        question: "แสงแดดมีบทบาทอะไรในระบบนิเวศน์?",
        options: ["แหล่งพลังงานหลัก", "ไม่มีบทบาท"],
        correct: "แหล่งพลังงานหลัก",
        explanation: "แสงแดดเป็นแหล่งพลังงานหลักของระบบนิเวศน์ที่ผู้ผลิตใช้ในการสังเคราะห์แสง"
    },
    {
        question: "เมื่อจำนวนผู้ผลิตลดลง จะส่งผลกระทบต่อระบบนิเวศน์อย่างไร?",
        options: ["ส่งผลกระทบต่อทุกระดับ", "ไม่ส่งผลกระทบ"],
        correct: "ส่งผลกระทบต่อทุกระดับ",
        explanation: "การลดลงของผู้ผลิตจะส่งผลกระทบต่อทุกระดับในห่วงโซ่อาหาร"
    },
    {
        question: "ความสมดุลของระบบนิเวศน์ขึ้นอยู่กับอะไร?",
        options: ["ความสัมพันธ์ระหว่างสิ่งมีชีวิต", "จำนวนสัตว์เท่านั้น"],
        correct: "ความสัมพันธ์ระหว่างสิ่งมีชีวิต",
        explanation: "ความสมดุลของระบบนิเวศน์ขึ้นอยู่กับความสัมพันธ์ระหว่างสิ่งมีชีวิตทุกประเภท"
    }
];

let questions = [];

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function shuffleQuestions() {
    questions = originalQuestions.map(q => {
        const shuffledOptions = shuffleArray(q.options);
        const correctIndex = shuffledOptions.indexOf(q.correct);
        return {
            ...q,
            options: shuffledOptions,
            correct: correctIndex
        };
    });
}

function startPractice() {
    shuffleQuestions();
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('practice-screen').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question-text').textContent = question.question;

    const answerButtons = document.querySelectorAll('.answer-btn');
    answerButtons.forEach((btn, index) => {
        if (index < question.options.length) {
            btn.textContent = question.options[index];
            btn.style.display = 'inline-block';
            btn.className = 'answer-btn';
            btn.onclick = () => selectAnswer(index);
        } else {
            btn.style.display = 'none';
        }
    });

    document.getElementById('feedback').classList.add('hidden');
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
}

function selectAnswer(selectedIndex) {
    questionsAnswered++;
    const question = questions[currentQuestionIndex];
    const answerButtons = document.querySelectorAll('.answer-btn');
    const feedback = document.getElementById('feedback');
    
    answerButtons.forEach(btn => btn.onclick = null);
    
    if (selectedIndex === question.correct) {
        score++;
        answerButtons[selectedIndex].classList.add('correct');
        feedback.textContent = "ถูกต้อง! " + question.explanation;
        feedback.className = 'feedback correct';
    } else {
        answerButtons[selectedIndex].classList.add('incorrect');
        answerButtons[question.correct].classList.add('correct');
        feedback.textContent = "ผิด! " + question.explanation;
        feedback.className = 'feedback incorrect';
    }
    
    feedback.classList.remove('hidden');
    
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showScore();
        }
    }, 3000);
}

function showScore() {
    document.getElementById('practice-screen').classList.add('hidden');
    document.getElementById('score-screen').classList.remove('hidden');
    document.querySelector('.practice-btn').disabled = true;
    
    document.getElementById('final-score').textContent = score;
    
    const percentage = (score / totalQuestions) * 100;
    document.getElementById('progress-fill').style.width = percentage + '%';
}

function resetGame() {
    currentQuestionIndex = 0;
    score = 0;
    questionsAnswered = 0;
    shuffleQuestions();
    
    document.getElementById('score-screen').classList.add('hidden');
    document.getElementById('welcome-screen').classList.remove('hidden');
    document.querySelector('.practice-btn').disabled = false;
}

function goHome() {
    window.location.href = 'index.html';
}

document.querySelector('.back-btn').addEventListener('click', function() {
    window.history.back();
});
