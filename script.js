// 🎭 QUOTES
const quotes = [
  {q:"I do not try to dance better than anyone else. I only try to dance better than myself.", a:"Mikhail Baryshnikov"},
  {q:"Practice like you’ve never won. Perform like you’ve never lost.", a:"Unknown"},
  {q:"To dance is to be out of yourself. Larger, more beautiful, more powerful.", a:"Agnes de Mille"},
  {q:"The body says what words cannot.", a:"Martha Graham"},
  {q:"Great dancers are not great because of their technique, they are great because of their passion.", a:"Martha Graham"}
];

function newQuote() {
  let r = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[r].q;
  document.getElementById("author").innerText = "- " + quotes[r].a;
}

// 🎮 GAME
let score = 0;
let step = 0;

const questions = [
  "Do you rest properly?",
  "Do you train every single day intensely?",
  "Do you sleep at least 7–8 hours?",
  "Do you ignore pain and keep dancing?",
  "Do you warm up before class?",
  "Do you stretch after training?",
  "Do you feel constantly tired?",
  "Do you take rest days during the week?",
  "Do you eat properly to support your training?",
  "Do you feel stressed or pressured to improve quickly?"
];

function startGame() {
  document.getElementById("startBox").style.display = "none";
  document.getElementById("gameBox").style.display = "block";
  ask();
}

function ask() {
  if (step < questions.length) {
    document.getElementById("question").innerText = questions[step];
  } else {
    showResult();
  }
}

function answer(ans) {
  // healthy answers give points
  if (
    (step === 0 && ans) || // rest
    (step === 1 && !ans) || // not overtraining
    (step === 2 && ans) || // sleep
    (step === 3 && !ans) || // don't ignore pain
    (step === 4 && ans) || // warm up
    (step === 5 && ans) || // stretch after
    (step === 6 && !ans) || // not always tired
    (step === 7 && ans) || // rest days
    (step === 8 && ans) || // eat properly
    (step === 9 && !ans) // not overly stressed
  ) {
    score++;
  }

  step++;
  ask();
}

function showResult() {
  let result = document.getElementById("result");

  if (score >= 8) {
    result.innerText = "Sophie is a healthy, balanced dancer 💖 😊";
  } else if (score >= 5) {
    result.innerText = "Sophie is okay, but needs better balance ⚠️ 😐";
  } else {
    result.innerText = "Sophie is overtrained 😵";
  }
}

// 👀 VIEW COUNTER
let views = localStorage.getItem("views") || 0;
views++;
localStorage.setItem("views", views);
document.getElementById("views").innerText = "Views: " + views;
