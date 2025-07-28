const questions = [
  {
    question: "O que o campo fornece para a cidade?",
    options: ["Internet", "Produtos agrícolas", "Prédios altos"],
    answer: "Produtos agrícolas"
  },
  {
    question: "Qual é uma vantagem da cidade para o campo?",
    options: ["Tratores antigos", "Tecnologia e serviços", "Mais plantações"],
    answer: "Tecnologia e serviços"
  },
  {
    question: "Como o campo e a cidade se ajudam?",
    options: ["São rivais", "Trocam produtos e serviços", "Não se comunicam"],
    answer: "Trocam produtos e serviços"
  }
];

let current = 0;
let correct = 0;

function loadQuestion() {
  const q = questions[current];
  document.getElementById('question').textContent = q.question;
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';

  q.options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.onclick = () => {
      if (option === q.answer) correct++;
      nextQuestion();
    };
    optionsDiv.appendChild(btn);
  });
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('score').textContent = correct;
    document.getElementById('result').classList.remove('hidden');
  }
}

function restartQuiz() {
  current = 0;
  correct = 0;
  document.getElementById('quiz').classList.remove('hidden');
  document.getElementById('result').classList.add('hidden');
  loadQuestion();
}

window.onload = loadQuestion;
