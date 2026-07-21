/* =========================================================
   SCRIPT.JS — Provakar Prep Hub
   All interactive logic: bilingual, dark mode, planner,
   pomodoro, syllabus, quiz, notes, revision, charts.
   ========================================================= */

/* ---------- 0. UTILITY HELPERS ---------- */
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const LS = {
  get: (k, def) => { try { return JSON.parse(localStorage.getItem(k)) ?? def; } catch { return def; } },
  set: (k, v) => localStorage.setItem(k, JSON.stringify(v))
};

/* ---------- 1. TRANSLATIONS ---------- */
const I18N = {
  bn: {
    "nav.home":"হোম","nav.dashboard":"ড্যাশবোর্ড","nav.planner":"স্টাডি প্ল্যানার",
    "nav.syllabus":"সিলেবাস","nav.quiz":"কুইজ জোন","nav.current":"কারেন্ট অ্যাফেয়ার্স",
    "nav.revision":"রিভিশন","nav.progress":"অগ্রগতি","nav.about":"সম্পর্কে",
    "hero.badge":"তোমার স্মার্ট প্রস্তুতি সঙ্গী","hero.welcome":"স্বাগতম, প্রবাকর!",
    "hero.subheading":"তোমার Competitive Exam Preparation এখন আরও স্মার্ট, সংগঠিত এবং লক্ষ্যভিত্তিক।",
    "hero.startStudying":"পড়া শুরু করো","hero.takeQuiz":"কুইজ দাও","hero.goal":"আজকের লক্ষ্য",
    "hero.hours":"ঘণ্টা","hero.study":"পড়াশোনা","hero.streak":"স্টাডি স্ট্রিক","hero.days":"দিন","hero.quizScore":"কুইজ স্কোর",
    "dashboard.tag":"সংক্ষিপ্ত","dashboard.heading":"আজকের প্রস্তুতি","dashboard.subtitle":"তোমার দৈনিক অগ্রগতি এক নজরে",
    "dashboard.studyHours":"পড়ার সময়","dashboard.completedTopics":"সম্পন্ন টপিক","dashboard.quizAverage":"কুইজ গড়",
    "dashboard.streak":"ধারাবাহিকতা","dashboard.todaysTasks":"আজকের কাজ","dashboard.examCountdown":"পরীক্ষার কাউন্টডাউন",
    "dashboard.daysRemaining":"দিন বাকি","dashboard.defaultExam":"পরবর্তী লক্ষ্য পরীক্ষা: SSC CGL 2026",
    "dashboard.examName":"পরীক্ষার নাম","dashboard.examDate":"পরীক্ষার তারিখ","dashboard.setExam":"সেভ করো",
    "common.add":"যোগ","common.high":"উচ্চ","common.medium":"মধ্যম","common.low":"নিম্ন",
    "planner.tag":"পরিকল্পনা","planner.heading":"স্টাডি প্ল্যানার","planner.subtitle":"তোমার পড়াশোনার সময়সূচি সংগঠিত করো",
    "planner.addTask":"নতুন কাজ যোগ করো","planner.taskName":"কাজের নাম","planner.subject":"বিষয়","planner.duration":"সময় (মিনিট)",
    "planner.priority":"অগ্রাধিকার","planner.date":"তারিখ","planner.addTaskBtn":"কাজ যোগ করো","planner.myTasks":"আমার কাজসমূহ",
    "planner.filterAll":"সব","planner.filterToday":"আজ","planner.filterCompleted":"সম্পন্ন","planner.filterPending":"বাকি","planner.filterHigh":"উচ্চ অগ্রাধিকার",
    "pomodoro.focus":"ফোকাস","pomodoro.shortBreak":"শর্ট ব্রেক","pomodoro.longBreak":"লং ব্রেক",
    "pomodoro.start":"শুরু","pomodoro.pause":"বিরতি","pomodoro.reset":"রিসেট",
    "pomodoro.motivation":"ফোকাস রাখো, প্রবাকর! ছোট ছোট নিয়মিত প্রচেষ্টাই বড় সাফল্য আনে।",
    "syllabus.tag":"ট্র্যাক","syllabus.heading":"সিলেবাস ট্র্যাকার","syllabus.subtitle":"বিষয় অনুযায়ী সম্পন্ন টপিক চিহ্নিত করো",
    "quiz.tag":"অনুশীলন","quiz.heading":"কুইজ জোন","quiz.subtitle":"নিয়মিত অনুশীলন দিয়ে নিজেকে যাচাই করো",
    "quiz.subject":"বিষয়","quiz.difficulty":"কঠিনতা","quiz.count":"প্রশ্ন সংখ্যা","quiz.easy":"সহজ","quiz.medium":"মধ্যম","quiz.hard":"কঠিন",
    "quiz.start":"কুইজ শুরু করো","quiz.prev":"আগের","quiz.next":"পরের","quiz.yourScore":"তোমার স্কোর",
    "quiz.correct":"সঠিক","quiz.wrong":"ভুল","quiz.time":"সময়","quiz.retry":"আবার চেষ্টা করো","quiz.review":"ভুল উত্তর রিভিউ",
    "quiz.reviewTitle":"ভুল উত্তর রিভিউ","quiz.questionOf":"প্রশ্ন",
    "current.tag":"নোট","current.heading":"কারেন্ট অ্যাফেয়ার্স","current.subtitle":"গুরুত্বপূর্ণ তথ্য ও নোট সংরক্ষণ করো",
    "current.sample":"নমুনা ডেমো কনটেন্ট — এটি লাইভ বা রিয়েল-টাইম তথ্য নয়।",
    "current.all":"সব","current.national":"জাতীয়","current.international":"আন্তর্জাতিক","current.economy":"অর্থনীতি",
    "current.sports":"খেলাধুলা","current.awards":"পুরস্কার","current.sciTech":"বিজ্ঞান ও প্রযুক্তি",
    "revision.tag":"ঝালাই","revision.heading":"স্মার্ট রিভিশন","revision.subtitle":"ফ্ল্যাশকার্ড, ফর্মুলা ও শব্দভাণ্ডার দিয়ে ঝালিয়ে নাও",
    "revision.flashcards":"ফ্ল্যাশকার্ড","revision.formula":"ফর্মুলা বুক","revision.vocab":"শব্দভাণ্ডার",
    "revision.flipHint":"ক্লিক করে উল্টাও","revision.prev":"আগের","revision.next":"পরের","revision.shuffle":"শাফল",
    "revision.known":"জানা আছে","revision.needRevision":"আবার পড়তে হবে",
    "progress.tag":"বিশ্লেষণ","progress.heading":"তোমার অগ্রগতি","progress.subtitle":"ডেটা দিয়ে নিজেকে বিশ্লেষণ করো",
    "progress.weekly":"সাপ্তাহিক পড়ার সময়","progress.subject":"বিষয়ভিত্তিক পারফরম্যান্স","progress.recentQuiz":"সাম্প্রতিক কুইজ ফলাফল",
    "progress.suggestions":"দুর্বল ক্ষেত্রের পরামর্শ","progress.colQuiz":"কুইজ","progress.colScore":"স্কোর","progress.colPercent":"শতকরা",
    "motivation.tag":"অনুপ্রেরণা","motivation.heading":"আজকের অনুপ্রেরণা","motivation.newQuote":"নতুন অনুপ্রেরণা",
    "about.tag":"পরিচিতি","about.heading":"প্রবাকর প্রেপ হাব সম্পর্কে","about.qualLabel":"যোগ্যতা:","about.goalLabel":"লক্ষ্য:","about.skillsLabel":"দক্ষতা:",
    "about.qual":"B.Com Honours Graduate","about.goal":"Competitive Exam Aspirant","about.skills":"Self-learning, Consistent Practice, Digital Study Planning",
    "about.textBn":"Provakar Prep Hub হলো একটি ব্যক্তিগত Competitive Exam Preparation Dashboard। এটি তৈরি করা হয়েছে প্রতিদিনের পড়াশোনা পরিকল্পনা করা, সিলেবাস ট্র্যাক করা, MCQ অনুশীলন করা, কারেন্ট অ্যাফেয়ার্স রিভিশন করা এবং নিজের অগ্রগতি পর্যবেক্ষণ করার জন্য।",
    "about.textEn":"Provakar Prep Hub is a personal competitive exam preparation dashboard designed to organize daily study plans, track syllabus progress, practice MCQs, revise current affairs, and monitor learning performance.",
    "footer.tagline":"তোমার স্মার্ট Competitive Exam Preparation সঙ্গী","footer.madeBy":"ভক্তির সঙ্গে তৈরি — Provakar",
    "footer.education":"B.Com Honours Graduate | Competitive Exam Aspirant","footer.rights":"সর্বস্বত্ব সংরক্ষিত।"
  },
  en: {
    "nav.home":"Home","nav.dashboard":"Dashboard","nav.planner":"Study Planner",
    "nav.syllabus":"Syllabus","nav.quiz":"Quiz Zone","nav.current":"Current Affairs",
    "nav.revision":"Revision","nav.progress":"Progress","nav.about":"About",
    "hero.badge":"Your Smart Preparation Companion","hero.welcome":"Welcome, Provakar!",
    "hero.subheading":"Make your competitive exam preparation smarter, organized, and goal-oriented.",
    "hero.startStudying":"Start Studying","hero.takeQuiz":"Take a Quiz","hero.goal":"Today's Goal",
    "hero.hours":"Hours","hero.study":"Study","hero.streak":"Study Streak","hero.days":"Days","hero.quizScore":"Quiz Score",
    "dashboard.tag":"Overview","dashboard.heading":"Today's Preparation","dashboard.subtitle":"Your daily progress at a glance",
    "dashboard.studyHours":"Study Hours","dashboard.completedTopics":"Completed Topics","dashboard.quizAverage":"Quiz Average",
    "dashboard.streak":"Streak","dashboard.todaysTasks":"Today's Tasks","dashboard.examCountdown":"Exam Countdown",
    "dashboard.daysRemaining":"Days Remaining","dashboard.defaultExam":"Next Target Exam: SSC CGL 2026",
    "dashboard.examName":"Exam Name","dashboard.examDate":"Exam Date","dashboard.setExam":"Save",
    "common.add":"Add","common.high":"High","common.medium":"Medium","common.low":"Low",
    "planner.tag":"Plan","planner.heading":"Study Planner","planner.subtitle":"Organize your study schedule",
    "planner.addTask":"Add New Task","planner.taskName":"Task Name","planner.subject":"Subject","planner.duration":"Duration (min)",
    "planner.priority":"Priority","planner.date":"Date","planner.addTaskBtn":"Add Task","planner.myTasks":"My Tasks",
    "planner.filterAll":"All","planner.filterToday":"Today","planner.filterCompleted":"Completed","planner.filterPending":"Pending","planner.filterHigh":"High Priority",
    "pomodoro.focus":"Focus","pomodoro.shortBreak":"Short Break","pomodoro.longBreak":"Long Break",
    "pomodoro.start":"Start","pomodoro.pause":"Pause","pomodoro.reset":"Reset",
    "pomodoro.motivation":"Stay focused, Provakar! Small consistent efforts create big success.",
    "syllabus.tag":"Track","syllabus.heading":"Syllabus Tracker","syllabus.subtitle":"Mark completed topics subject-wise",
    "quiz.tag":"Practice","quiz.heading":"Quiz Zone","quiz.subtitle":"Test yourself with regular practice",
    "quiz.subject":"Subject","quiz.difficulty":"Difficulty","quiz.count":"Question Count","quiz.easy":"Easy","quiz.medium":"Medium","quiz.hard":"Hard",
    "quiz.start":"Start Quiz","quiz.prev":"Previous","quiz.next":"Next","quiz.yourScore":"Your Score",
    "quiz.correct":"Correct","quiz.wrong":"Wrong","quiz.time":"Time","quiz.retry":"Retry Quiz","quiz.review":"Review Wrong Answers",
    "quiz.reviewTitle":"Wrong Answer Review","quiz.questionOf":"Question",
    "current.tag":"Notes","current.heading":"Current Affairs","current.subtitle":"Save important notes & facts",
    "current.sample":"Sample Demo Content — This is not live or real-time information.",
    "current.all":"All","current.national":"National","current.international":"International","current.economy":"Economy",
    "current.sports":"Sports","current.awards":"Awards","current.sciTech":"Science & Tech",
    "revision.tag":"Revise","revision.heading":"Smart Revision","revision.subtitle":"Revise with flashcards, formulas & vocabulary",
    "revision.flashcards":"Flashcards","revision.formula":"Formula Book","revision.vocab":"Vocabulary",
    "revision.flipHint":"Click to flip","revision.prev":"Previous","revision.next":"Next","revision.shuffle":"Shuffle",
    "revision.known":"Known","revision.needRevision":"Need Revision",
    "progress.tag":"Analytics","progress.heading":"Your Progress","progress.subtitle":"Analyze yourself with data",
    "progress.weekly":"Weekly Study Hours","progress.subject":"Subject Performance","progress.recentQuiz":"Recent Quiz Results",
    "progress.suggestions":"Weak Area Suggestions","progress.colQuiz":"Quiz","progress.colScore":"Score","progress.colPercent":"Percent",
    "motivation.tag":"Inspire","motivation.heading":"Daily Motivation","motivation.newQuote":"New Quote",
    "about.tag":"About","about.heading":"About Provakar Prep Hub","about.qualLabel":"Qualification:","about.goalLabel":"Goal:","about.skillsLabel":"Skills:",
    "about.qual":"B.Com Honours Graduate","about.goal":"Competitive Exam Aspirant","about.skills":"Self-learning, Consistent Practice, Digital Study Planning",
    "about.textBn":"Provakar Prep Hub is a personal competitive exam preparation dashboard designed to organize daily study plans, track syllabus progress, practice MCQs, revise current affairs, and monitor learning performance.",
    "about.textEn":"Provakar Prep Hub is a personal competitive exam preparation dashboard designed to organize daily study plans, track syllabus progress, practice MCQs, revise current affairs, and monitor learning performance.",
    "footer.tagline":"Your Smart Competitive Exam Preparation Companion","footer.madeBy":"Made with dedication by Provakar",
    "footer.education":"B.Com Honours Graduate | Competitive Exam Aspirant","footer.rights":"All rights reserved."
  }
};

/* ---------- 2. LANGUAGE & DARK MODE ---------- */
let currentLang = LS.get("pph_lang", "bn");
let currentTheme = LS.get("pph_theme", "light");

function applyLanguage(lang) {
  currentLang = lang;
  LS.set("pph_lang", lang);
  document.documentElement.lang = lang;
  document.body.setAttribute("lang", lang);
  // Translate all data-i18n elements
  $$("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (I18N[lang][key]) el.textContent = I18N[lang][key];
  });
  // Update lang toggle label (show the OTHER language)
  $("#langLabel").textContent = lang === "bn" ? "English" : "বাংলা";
  // Re-render dynamic sections that depend on language
  renderPlanner();
  renderSyllabus();
  renderNotes();
  renderQuizHistory();
  renderSuggestions();
}

function applyTheme(theme) {
  currentTheme = theme;
  LS.set("pph_theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
  $("#darkIcon").className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
  // Re-render charts to refresh colors
  if (window._charts) { initCharts(); }
}

/* ---------- 3. NAVBAR & MOBILE MENU ---------- */
function initNavbar() {
  const navbar = $("#navbar");
  const hamburger = $("#hamburger");
  const navLinks = $("#navLinks");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 30);
    $("#scrollTop").classList.toggle("show", window.scrollY > 400);
    // Active link based on scroll position
    let current = "";
    $$("section[id]").forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    $$(".nav-link").forEach(l => {
      l.classList.toggle("active", l.getAttribute("href") === "#" + current);
    });
  });

  hamburger.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", open);
    hamburger.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
  });

  // Close mobile menu on link click
  $$(".nav-link").forEach(l => l.addEventListener("click", () => {
    navLinks.classList.remove("open");
    hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
    hamburger.setAttribute("aria-expanded", false);
  }));

  // Smooth scroll (CSS handles it, but offset for fixed navbar)
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const target = $(a.getAttribute("href"));
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
      }
    });
  });

  $("#scrollTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ---------- 4. REVEAL ON SCROLL (IntersectionObserver) ---------- */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add("visible");
        // Trigger counter animation when stat cards enter
        if (en.target.classList.contains("stat-card")) {
          const c = $(".counter", en.target);
          if (c && !c.dataset.done) animateCounter(c);
        }
        obs.unobserve(en.target);
      }
    });
  }, { threshold: 0.15 });
  $$(".reveal, .stat-card").forEach(el => obs.observe(el));
}

function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const suffix = el.dataset.suffix || "";
  const isDecimal = target % 1 !== 0;
  let cur = 0;
  const step = target / 60;
  const tick = () => {
    cur += step;
    if (cur >= target) { el.textContent = (isDecimal ? target.toFixed(1) : target) + suffix; el.dataset.done = "1"; return; }
    el.textContent = (isDecimal ? cur.toFixed(1) : Math.floor(cur)) + suffix;
    requestAnimationFrame(tick);
  };
  tick();
}

/* ---------- 5. 3D TILT EFFECT ---------- */
function initTilt() {
  $$(".tilt").forEach(card => {
    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `translateY(-6px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) rotateX(0) rotateY(0)";
    });
  });
  // Button ripple
  $$(".btn").forEach(b => {
    b.addEventListener("mousemove", e => {
      const r = b.getBoundingClientRect();
      b.style.setProperty("--rx", ((e.clientX - r.left) / r.width * 100) + "%");
      b.style.setProperty("--ry", ((e.clientY - r.top) / r.height * 100) + "%");
    });
  });
}

/* ---------- 6. TODAY'S TASKS ---------- */
let todayTasks = LS.get("pph_today_tasks", [
  { id: 1, text: "Quantitative Aptitude: Percentage chapter revision", done: false },
  { id: 2, text: "English: Learn 20 new vocabulary words", done: false },
  { id: 3, text: "Reasoning: Practice 25 seating arrangement questions", done: false },
  { id: 4, text: "Current Affairs: Read today's important news", done: false }
]);

function renderTodayTasks() {
  const list = $("#todayTaskList");
  list.innerHTML = "";
  if (todayTasks.length === 0) {
    list.innerHTML = `<li class="empty-state"><i class="fa-solid fa-clipboard"></i><p>কোনো কাজ নেই</p></li>`;
  }
  todayTasks.forEach(t => {
    const li = document.createElement("li");
    li.className = "task-item" + (t.done ? " done" : "");
    li.innerHTML = `
      <input type="checkbox" ${t.done ? "checked" : ""} data-id="${t.id}" aria-label="task" />
      <span>${t.text}</span>
      <button class="del-btn" data-id="${t.id}" aria-label="delete"><i class="fa-solid fa-trash"></i></button>`;
    list.appendChild(li);
  });
  // Bind events
  $$('input[type="checkbox"]', list).forEach(c => c.addEventListener("change", e => {
    todayTasks = todayTasks.map(t => t.id == e.target.dataset.id ? { ...t, done: e.target.checked } : t);
    LS.set("pph_today_tasks", todayTasks);
    updateTaskProgress();
  }));
  $$(".del-btn", list).forEach(b => b.addEventListener("click", e => {
    const id = e.currentTarget.dataset.id;
    todayTasks = todayTasks.filter(t => t.id != id);
    LS.set("pph_today_tasks", todayTasks);
    renderTodayTasks();
  }));
  updateTaskProgress();
}

function updateTaskProgress() {
  const done = todayTasks.filter(t => t.done).length;
  const total = todayTasks.length;
  const pct = total ? (done / total) * 100 : 0;
  $("#todayProgressBar").style.width = pct + "%";
  $("#todayProgressText").textContent = `${done} / ${total}`;
}

function initTodayTaskForm() {
  $("#todayTaskForm").addEventListener("submit", e => {
    e.preventDefault();
    const v = $("#todayTaskInput").value.trim();
    if (!v) return;
    todayTasks.push({ id: Date.now(), text: v, done: false });
    LS.set("pph_today_tasks", todayTasks);
    $("#todayTaskInput").value = "";
    renderTodayTasks();
  });
}

/* ---------- 7. EXAM COUNTDOWN ---------- */
let examInfo = LS.get("pph_exam", { name: "SSC CGL 2026", date: "" });

function renderCountdown() {
  const today = new Date(); today.setHours(0,0,0,0);
  if (examInfo.name) $("#countdownExamName").textContent = currentLang === "bn" ? "পরবর্তী লক্ষ্য পরীক্ষা: " + examInfo.name : "Next Target Exam: " + examInfo.name;
  if (examInfo.date) {
    const d = new Date(examInfo.date); d.setHours(0,0,0,0);
    const diff = Math.ceil((d - today) / (1000 * 60 * 60 * 24));
    $("#countdownDays").textContent = diff > 0 ? diff : 0;
  } else {
    // Default 145 days demo
    $("#countdownDays").textContent = "145";
  }
  // Prefill form
  $("#examNameInput").value = examInfo.name || "";
  $("#examDateInput").value = examInfo.date || "";
}

function initExamForm() {
  $("#examForm").addEventListener("submit", e => {
    e.preventDefault();
    examInfo = { name: $("#examNameInput").value.trim() || "SSC CGL 2026", date: $("#examDateInput").value };
    LS.set("pph_exam", examInfo);
    renderCountdown();
    showToast(currentLang === "bn" ? "পরীক্ষার তারিখ সেভ হয়েছে!" : "Exam date saved!");
  });
}

/* ---------- 8. STUDY PLANNER ---------- */
let plannerTasks = LS.get("pph_planner", [
  { id: 1, name: "Percentage Revision", subject: "Mathematics", duration: 60, priority: "High", date: new Date().toISOString().slice(0,10), done: false },
  { id: 2, name: "Read Indian Economy Notes", subject: "Economy", duration: 45, priority: "Medium", date: new Date().toISOString().slice(0,10), done: false },
  { id: 3, name: "Practice English Vocabulary", subject: "English", duration: 30, priority: "Low", date: new Date().toISOString().slice(0,10), done: false }
]);
let plannerFilter = "all";

function renderPlanner() {
  const wrap = $("#plannerList");
  wrap.innerHTML = "";
  const today = new Date().toISOString().slice(0,10);
  let filtered = plannerTasks.filter(t => {
    if (plannerFilter === "all") return true;
    if (plannerFilter === "today") return t.date === today;
    if (plannerFilter === "completed") return t.done;
    if (plannerFilter === "pending") return !t.done;
    if (plannerFilter === "High") return t.priority === "High";
    return true;
  });
  if (filtered.length === 0) {
    wrap.innerHTML = `<div class="empty-state"><i class="fa-solid fa-folder-open"></i><p>${currentLang==="bn"?"এখানে কোনো কাজ নেই":"No tasks here"}</p></div>`;
    return;
  }
  filtered.forEach(t => {
    const div = document.createElement("div");
    div.className = "planner-item" + (t.done ? " done" : "");
    div.innerHTML = `
      <input type="checkbox" ${t.done?"checked":""} data-id="${t.id}" />
      <div>
        <div class="pi-name">${t.name}</div>
        <div class="pi-meta">
          <span><i class="fa-solid fa-book"></i> ${t.subject}</span>
          <span><i class="fa-solid fa-clock"></i> ${t.duration} ${currentLang==="bn"?"মিনিট":"min"}</span>
          <span class="prio-${t.priority}">${t.priority}</span>
          ${t.date ? `<span><i class="fa-solid fa-calendar"></i> ${t.date}</span>` : ""}
        </div>
      </div>
      <button class="pi-del" data-id="${t.id}" aria-label="delete"><i class="fa-solid fa-trash"></i></button>`;
    wrap.appendChild(div);
  });
  $$('input[type="checkbox"]', wrap).forEach(c => c.addEventListener("change", e => {
    plannerTasks = plannerTasks.map(t => t.id == e.target.dataset.id ? { ...t, done: e.target.checked } : t);
    LS.set("pph_planner", plannerTasks);
    renderPlanner();
  }));
  $$(".pi-del", wrap).forEach(b => b.addEventListener("click", e => {
    const id = e.currentTarget.dataset.id;
    plannerTasks = plannerTasks.filter(t => t.id != id);
    LS.set("pph_planner", plannerTasks);
    renderPlanner();
  }));
}

function initPlannerForm() {
  // Set default date today
  $("#pDate").value = new Date().toISOString().slice(0,10);
  $("#plannerForm").addEventListener("submit", e => {
    e.preventDefault();
    const task = {
      id: Date.now(),
      name: $("#pName").value.trim(),
      subject: $("#pSubject").value,
      duration: parseInt($("#pDuration").value) || 30,
      priority: $("#pPriority").value,
      date: $("#pDate").value,
      done: false
    };
    if (!task.name) return;
    plannerTasks.unshift(task);
    LS.set("pph_planner", plannerTasks);
    $("#plannerForm").reset();
    $("#pDate").value = new Date().toISOString().slice(0,10);
    renderPlanner();
    showToast(currentLang==="bn"?"কাজ যোগ হয়েছে!":"Task added!");
  });
  // Filters
  $$("#plannerFilters .filter").forEach(b => b.addEventListener("click", () => {
    $$("#plannerFilters .filter").forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    plannerFilter = b.dataset.filter;
    renderPlanner();
  }));
}

/* ---------- 9. POMODORO TIMER ---------- */
const POMO = { focus: 25*60, short: 5*60, long: 15*60 };
let pomoMode = "focus";
let pomoSec = POMO.focus;
let pomoTimer = null;
let pomoRunning = false;
const T_CIRC = 565; // 2*pi*90

function updateTimerDisplay() {
  const m = Math.floor(pomoSec / 60).toString().padStart(2,"0");
  const s = (pomoSec % 60).toString().padStart(2,"0");
  $("#timerText").textContent = `${m}:${s}`;
  $("#timerMode").textContent = currentLang === "bn"
    ? (pomoMode === "focus" ? "ফোকাস" : pomoMode === "short" ? "শর্ট ব্রেক" : "লং ব্রেক")
    : (pomoMode === "focus" ? "Focus" : pomoMode === "short" ? "Short Break" : "Long Break");
  const pct = 1 - pomoSec / POMO[pomoMode];
  $("#tProgress").style.strokeDashoffset = T_CIRC * pct;
}

function initPomodoro() {
  updateTimerDisplay();
  $$(".pmode").forEach(b => b.addEventListener("click", () => {
    $$(".pmode").forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    pomoMode = b.dataset.mode;
    pomoSec = POMO[pomoMode];
    clearInterval(pomoTimer); pomoRunning = false;
    updateTimerDisplay();
  }));
  $("#tStart").addEventListener("click", () => {
    if (pomoRunning) return;
    pomoRunning = true;
    pomoTimer = setInterval(() => {
      pomoSec--;
      if (pomoSec <= 0) {
        clearInterval(pomoTimer); pomoRunning = false;
        pomoSec = 0;
        updateTimerDisplay();
        playBeep();
        showToast(currentLang==="bn"?"সময় শেষ! ব্রেক নাও।":"Time's up! Take a break.");
        // Save study session (focus mode only)
        if (pomoMode === "focus") saveStudySession();
        return;
      }
      updateTimerDisplay();
    }, 1000);
  });
  $("#tPause").addEventListener("click", () => {
    clearInterval(pomoTimer); pomoRunning = false;
  });
  $("#tReset").addEventListener("click", () => {
    clearInterval(pomoTimer); pomoRunning = false;
    pomoSec = POMO[pomoMode];
    updateTimerDisplay();
  });
}

function playBeep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator(); const g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    o.type = "sine"; o.frequency.value = 880;
    g.gain.setValueAtTime(0.2, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.8);
    o.start(); o.stop(ctx.currentTime + 0.8);
  } catch(e) { /* ignore */ }
}

function saveStudySession() {
  // Add 25 min to today's study hours in weekly data
  let weekly = LS.get("pph_weekly", [3, 4, 2.5, 5, 4.5, 6, 3]);
  const day = (new Date().getDay() + 6) % 7; // Mon=0
  weekly[day] = Math.round((weekly[day] + 25/60) * 10) / 10;
  LS.set("pph_weekly", weekly);
  if (window._charts) initCharts();
}

/* ---------- 10. SYLLABUS TRACKER ---------- */
let syllabusProgress = LS.get("pph_syllabus", {});

function renderSyllabus() {
  const grid = $("#syllabusGrid");
  grid.innerHTML = "";
  SYLLABUS.forEach((sub, idx) => {
    const key = sub.subject;
    const saved = syllabusProgress[key] || [];
    const total = sub.topics.length;
    const done = sub.topics.filter((_, i) => saved.includes(i)).length;
    const pct = Math.round((done / total) * 100);
    const card = document.createElement("article");
    card.className = "syllabus-card" + (idx === 0 ? " open" : "");
    card.innerHTML = `
      <div class="sc-head">
        <div class="sc-icon"><i class="fa-solid ${sub.icon}"></i></div>
        <div class="sc-title">
          <h4>${currentLang==="bn"?sub.bn:sub.subject}</h4>
          <small>${currentLang==="bn"?sub.subject:sub.bn}</small>
        </div>
        <i class="fa-solid fa-chevron-down sc-toggle"></i>
      </div>
      <div class="sc-progress-wrap">
        <div class="sc-progress-bar"><span style="width:${pct}%"></span></div>
        <div class="sc-progress-text">${done}/${total} (${pct}%)</div>
      </div>
      <div class="sc-topics">
        ${sub.topics.map((t,i) => `
          <label class="sc-topic ${saved.includes(i)?"done":""}">
            <input type="checkbox" data-sub="${key}" data-i="${i}" ${saved.includes(i)?"checked":""} />
            <span>${currentLang==="bn"?t.bn:t.en} <small style="color:var(--text-muted)">(${currentLang==="bn"?t.en:t.bn})</small></span>
          </label>`).join("")}
      </div>`;
    grid.appendChild(card);
  });
  // Toggle expand
  $$(".sc-head", grid).forEach(h => h.addEventListener("click", () => h.parentElement.classList.toggle("open")));
  // Checkbox events
  $$('input[type="checkbox"]', grid).forEach(c => c.addEventListener("change", e => {
    const sub = e.target.dataset.sub; const i = parseInt(e.target.dataset.i);
    let saved = syllabusProgress[sub] || [];
    if (e.target.checked) { if (!saved.includes(i)) saved.push(i); }
    else { saved = saved.filter(x => x !== i); }
    syllabusProgress[sub] = saved;
    LS.set("pph_syllabus", syllabusProgress);
    renderSyllabus();
  }));
}

/* ---------- 11. QUIZ ENGINE ---------- */
let quizState = {
  active: false, questions: [], current: 0, answers: [], startTime: 0, timerInt: null
};

function startQuiz() {
  const subject = $("#quizSubject").value;
  const difficulty = $("#quizDifficulty").value;
  const count = parseInt($("#quizCount").value);
  // Filter questions
  let pool = QUIZ_QUESTIONS.filter(q => q.subject === subject && q.difficulty === difficulty);
  // If not enough, fill from same subject any difficulty
  if (pool.length < count) {
    const extra = QUIZ_QUESTIONS.filter(q => q.subject === subject && !pool.includes(q));
    pool = pool.concat(extra);
  }
  // If still not enough, fill from any
  if (pool.length < count) {
    const more = QUIZ_QUESTIONS.filter(q => !pool.includes(q));
    pool = pool.concat(more);
  }
  pool = pool.slice(0, count);
  // Shuffle
  pool = pool.sort(() => Math.random() - 0.5);
  quizState = { active: true, questions: pool, current: 0, answers: Array(pool.length).fill(null), startTime: Date.now(), timerInt: null };
  $("#quizSetup").hidden = true;
  $("#quizResult").hidden = true;
  $("#quizReviewPanel").hidden = true;
  $("#quizActive").hidden = false;
  renderQuizQuestion();
  // Start timer
  quizState.timerInt = setInterval(() => {
    const sec = Math.floor((Date.now() - quizState.startTime) / 1000);
    const m = Math.floor(sec/60).toString().padStart(2,"0");
    const s = (sec%60).toString().padStart(2,"0");
    $("#quizTimer").textContent = `${m}:${s}`;
  }, 1000);
}

function renderQuizQuestion() {
  const q = quizState.questions[quizState.current];
  const i = quizState.current + 1;
  const total = quizState.questions.length;
  $("#quizQuestionCount").textContent = (currentLang==="bn"?"প্রশ্ন ":"Question ") + i + (currentLang==="bn"?" এর ":" of ") + total;
  $("#quizProgressBar").style.width = (i / total * 100) + "%";
  $("#quizQuestionText").textContent = q.q;
  const opts = $("#quizOptionsList");
  opts.innerHTML = "";
  q.options.forEach((opt, idx) => {
    const sel = quizState.answers[quizState.current] === idx ? "selected" : "";
    const div = document.createElement("div");
    div.className = `quiz-option ${sel}`;
    div.innerHTML = `<span class="opt-letter">${String.fromCharCode(65+idx)}</span> <span>${opt}</span>`;
    div.addEventListener("click", () => {
      quizState.answers[quizState.current] = idx;
      $$(".quiz-option", opts).forEach(o => o.classList.remove("selected"));
      div.classList.add("selected");
    });
    opts.appendChild(div);
  });
  // Toggle nav buttons
  $("#quizPrev").style.visibility = quizState.current === 0 ? "hidden" : "visible";
  $("#quizNext").innerHTML = quizState.current === total - 1
    ? `<span>${currentLang==="bn"?"জমা দাও":"Submit"}</span> <i class="fa-solid fa-check"></i>`
    : `<span>${currentLang==="bn"?"পরের":"Next"}</span> <i class="fa-solid fa-arrow-right"></i>`;
}

function initQuiz() {
  $("#startQuizBtn").addEventListener("click", startQuiz);
  $("#quizPrev").addEventListener("click", () => {
    if (quizState.current > 0) { quizState.current--; renderQuizQuestion(); }
  });
  $("#quizNext").addEventListener("click", () => {
    if (quizState.current < quizState.questions.length - 1) {
      quizState.current++; renderQuizQuestion();
    } else {
      finishQuiz();
    }
  });
  $("#quizRetry").addEventListener("click", () => {
    $("#quizResult").hidden = true;
    $("#quizSetup").hidden = false;
    $("#quizActive").hidden = true;
  });
  $("#quizReview").addEventListener("click", () => {
    $("#quizReviewPanel").hidden = false;
    renderQuizReview();
    $("#quizReviewPanel").scrollIntoView({ behavior: "smooth", block: "center" });
  });
  $("#closeReview").addEventListener("click", () => $("#quizReviewPanel").hidden = true);
}

function finishQuiz() {
  clearInterval(quizState.timerInt);
  const total = quizState.questions.length;
  let correct = 0;
  const wrong = [];
  quizState.questions.forEach((q, i) => {
    if (quizState.answers[i] === q.answer) correct++;
    else wrong.push({ q, given: quizState.answers[i] });
  });
  const pct = Math.round((correct / total) * 100);
  const timeTaken = Math.floor((Date.now() - quizState.startTime) / 1000);
  // Save to history
  let history = LS.get("pph_quiz_history", []);
  history.unshift({
    subject: $("#quizSubject").value,
    score: `${correct}/${total}`,
    pct, time: timeTaken,
    date: new Date().toISOString().slice(0,10)
  });
  history = history.slice(0, 10);
  LS.set("pph_quiz_history", history);
  // Display result
  $("#quizActive").hidden = true;
  $("#quizResult").hidden = false;
  $("#resultPercent").textContent = pct + "%";
  $("#resultCorrect").textContent = correct;
  $("#resultWrong").textContent = total - correct;
  $("#resultTime").textContent = formatTime(timeTaken);
  // Animate ring
  const ring = $("#resultRing");
  const C = 534;
  ring.style.strokeDashoffset = C - (C * pct / 100);
  ring.style.stroke = pct >= 75 ? "var(--emerald)" : pct >= 50 ? "var(--amber)" : "var(--red)";
  $("#resultCenter span") ? $("#resultPercent").style.color = ring.style.stroke : null;
  // Feedback
  let fb = "";
  if (pct >= 80) fb = currentLang==="bn"?"দুর্দান্ত, প্রবাকর! তুমি প্রস্তুত।":"Excellent, Provakar! You're well prepared.";
  else if (pct >= 60) fb = currentLang==="bn"?"ভালো করেছ! আরেকটু অনুশীলন করো।":"Good job! Practice a bit more.";
  else fb = currentLang==="bn"?"চিন্তা নেই। ভুল থেকে শিখো এবং আবার চেষ্টা করো।":"Don't worry. Learn from mistakes and try again.";
  $("#resultFeedback").textContent = fb;
  // Refresh quiz history table & charts
  renderQuizHistory();
  if (window._charts) initCharts();
}

function renderQuizReview() {
  const wrong = [];
  quizState.questions.forEach((q, i) => {
    if (quizState.answers[i] !== q.answer) wrong.push({ q, given: quizState.answers[i] });
  });
  const wrap = $("#reviewContent");
  if (wrong.length === 0) {
    wrap.innerHTML = `<div class="empty-state"><i class="fa-solid fa-circle-check" style="color:var(--emerald)"></i><p>${currentLang==="bn"?"কোনো ভুল নেই! সব সঠিক!":"No mistakes! All correct!"}</p></div>`;
    return;
  }
  wrap.innerHTML = wrong.map(({q, given}) => `
    <div class="review-item">
      <h4>${q.q}</h4>
      ${q.options.map((o, i) => {
        let cls = "";
        if (i === q.answer) cls = "correct";
        else if (i === given) cls = "wrong";
        return `<span class="review-answer ${cls}">${String.fromCharCode(65+i)}. ${o}</span>`;
      }).join("")}
      <p class="review-explain"><i class="fa-solid fa-lightbulb"></i> ${q.explain}</p>
    </div>`).join("");
}

function renderQuizHistory() {
  const history = LS.get("pph_quiz_history", [
    { subject: "Mathematics Practice Test", score: "8/10", pct: 80, date: "2026-01-10" },
    { subject: "English Vocabulary Quiz", score: "7/10", pct: 70, date: "2026-01-09" },
    { subject: "Economy Basics Quiz", score: "9/10", pct: 90, date: "2026-01-08" }
  ]);
  const body = $("#quizHistoryBody");
  body.innerHTML = "";
  history.slice(0, 6).forEach(h => {
    const cls = h.pct >= 75 ? "good" : h.pct >= 50 ? "mid" : "low";
    body.innerHTML += `<tr>
      <td>${h.subject}</td>
      <td>${h.score}</td>
      <td><span class="pct-pill ${cls}">${h.pct}%</span></td>
    </tr>`;
  });
}

function formatTime(s) {
  const m = Math.floor(s / 60); const sec = s % 60;
  return m > 0 ? `${m}m ${sec}s` : `${sec}s`;
}

/* ---------- 12. CURRENT AFFAIRS / NOTES ---------- */
let notesFilter = "all";
let notesSearch = "";
let bookmarks = LS.get("pph_bookmarks", []);

function renderNotes() {
  const grid = $("#notesGrid");
  grid.innerHTML = "";
  const filtered = NOTES.filter(n => {
    if (notesFilter !== "all" && n.cat !== notesFilter) return false;
    if (notesSearch && !(n.title.toLowerCase().includes(notesSearch) || n.preview.toLowerCase().includes(notesSearch))) return false;
    return true;
  });
  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><i class="fa-solid fa-magnifying-glass"></i><p>${currentLang==="bn"?"কোনো নোট পাওয়া যায়নি":"No notes found"}</p></div>`;
    return;
  }
  filtered.forEach((n, i) => {
    const realIdx = NOTES.indexOf(n);
    const marked = bookmarks.includes(realIdx);
    const catLabel = currentLang === "bn" ? n.catBn : n.cat;
    const div = document.createElement("div");
    div.className = "note-card";
    div.innerHTML = `
      <div class="note-meta">
        <span class="note-cat">${catLabel}</span>
        <div>
          <small class="note-date">${n.date}</small>
          <button class="note-bookmark ${marked?"active":""}" data-idx="${realIdx}" aria-label="bookmark">
            <i class="fa-${marked?"solid":"regular"} fa-bookmark"></i>
          </button>
        </div>
      </div>
      <h4>${n.title}</h4>
      <p class="note-preview">${n.preview}</p>
      <p class="note-full">${n.full}</p>
      <button class="note-readmore">${currentLang==="bn"?"আরও পড়ো":"Read More"} <i class="fa-solid fa-arrow-right"></i></button>`;
    grid.appendChild(div);
  });
  // Bind events
  $$(".note-bookmark", grid).forEach(b => b.addEventListener("click", e => {
    e.stopPropagation();
    const idx = parseInt(b.dataset.idx);
    bookmarks = bookmarks.includes(idx) ? bookmarks.filter(x => x !== idx) : [...bookmarks, idx];
    LS.set("pph_bookmarks", bookmarks);
    renderNotes();
  }));
  $$(".note-readmore", grid).forEach(b => b.addEventListener("click", e => {
    e.target.closest(".note-card").classList.toggle("expanded");
    b.innerHTML = b.innerHTML.includes("arrow-right")
      ? (currentLang==="bn"?"কম পড়ো ":"Read Less ") + '<i class="fa-solid fa-arrow-up"></i>'
      : (currentLang==="bn"?"আরও পড়ো ":"Read More ") + '<i class="fa-solid fa-arrow-right"></i>';
  }));
}

function initNotesControls() {
  $("#currentSearch").addEventListener("input", e => {
    notesSearch = e.target.value.toLowerCase();
    renderNotes();
  });
  $$("#currentFilters .filter").forEach(b => b.addEventListener("click", () => {
    $$("#currentFilters .filter").forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    notesFilter = b.dataset.filter;
    renderNotes();
  }));
}

/* ---------- 13. REVISION (FLASHCARDS, FORMULA, VOCAB) ---------- */
let fcIndex = 0;
let fcStatus = LS.get("pph_fc_status", {}); // {front: 'known'|'need'|undefined}

function renderFlashcard() {
  const fc = FLASHCARDS[fcIndex];
  $("#fcFront").textContent = fc.front;
  $("#fcBack").textContent = fc.back;
  $("#fcCounter").textContent = `${fcIndex+1} / ${FLASHCARDS.length}`;
  $("#flashcard").classList.remove("flipped");
}

function initRevision() {
  // Tabs
  $$("#revisionTabs .tab").forEach(t => t.addEventListener("click", () => {
    $$("#revisionTabs .tab").forEach(x => x.classList.remove("active"));
    $$(".tab-panel").forEach(p => p.classList.remove("active"));
    t.classList.add("active");
    $("#tab-" + t.dataset.tab).classList.add("active");
  }));
  // Flashcard flip
  $("#flashcard").addEventListener("click", () => $("#flashcard").classList.toggle("flipped"));
  $("#fcPrev").addEventListener("click", () => { fcIndex = (fcIndex - 1 + FLASHCARDS.length) % FLASHCARDS.length; renderFlashcard(); });
  $("#fcNext").addEventListener("click", () => { fcIndex = (fcIndex + 1) % FLASHCARDS.length; renderFlashcard(); });
  $("#fcShuffle").addEventListener("click", () => {
    FLASHCARDS.sort(() => Math.random() - 0.5);
    fcIndex = 0; renderFlashcard();
    showToast(currentLang==="bn"?"শাফল হয়েছে!":"Shuffled!");
  });
  $("#fcKnown").addEventListener("click", () => {
    fcStatus[FLASHCARDS[fcIndex].front] = "known";
    LS.set("pph_fc_status", fcStatus);
    showToast(currentLang==="bn"?"চিহ্নিত: জানা আছে ✓":"Marked: Known ✓");
    fcIndex = (fcIndex + 1) % FLASHCARDS.length; renderFlashcard();
  });
  $("#fcNeed").addEventListener("click", () => {
    fcStatus[FLASHCARDS[fcIndex].front] = "need";
    LS.set("pph_fc_status", fcStatus);
    showToast(currentLang==="bn"?"চিহ্নিত: আবার পড়তে হবে":"Marked: Need Revision");
    fcIndex = (fcIndex + 1) % FLASHCARDS.length; renderFlashcard();
  });
  // Formula grid
  $("#formulaGrid").innerHTML = FORMULAS.map(f => `
    <div class="formula-card">
      <h4><i class="fa-solid fa-square-root-variable"></i> ${f.title}</h4>
      <code>${f.formula}</code>
    </div>`).join("");
  // Vocab grid
  $("#vocabGrid").innerHTML = VOCAB.map(v => `
    <div class="vocab-card">
      <div class="vw">${v.word}</div>
      <div class="vm">${v.meaning}</div>
      <div class="vb">${v.bn}</div>
    </div>`).join("");
}

/* ---------- 14. CHARTS (Chart.js) ---------- */
window._charts = {};

function initCharts() {
  // Destroy old charts
  Object.values(window._charts).forEach(c => c && c.destroy());
  const isDark = currentTheme === "dark";
  const textColor = isDark ? "#94A3B8" : "#475569";
  const gridColor = isDark ? "rgba(148,163,184,0.15)" : "rgba(148,163,184,0.2)";
  Chart.defaults.color = textColor;
  Chart.defaults.font.family = currentLang === "bn" ? "Hind Siliguri" : "Poppins";

  const weekly = LS.get("pph_weekly", [3, 4, 2.5, 5, 4.5, 6, 3]);
  const days = currentLang === "bn" ? ["সোম","মঙ্গল","বুধ","বৃহ","শুক্র","শনি","রবি"] : ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  window._charts.weekly = new Chart($("#weeklyChart"), {
    type: "bar",
    data: {
      labels: days,
      datasets: [{
        label: currentLang==="bn"?"ঘণ্টা":"Hours",
        data: weekly,
        backgroundColor: (ctx) => {
          const g = ctx.chart.ctx.createLinearGradient(0,0,0,300);
          g.addColorStop(0, "#2563EB"); g.addColorStop(1, "#22D3EE");
          return g;
        },
        borderRadius: 10
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: true,
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true, grid: { color: gridColor }, ticks: { color: textColor } },
        x: { grid: { display: false }, ticks: { color: textColor } }
      }
    }
  });

  // Subject performance — uses syllabus progress if available
  const subjects = ["Mathematics","Reasoning","English","GK","Economy"];
  const labels = currentLang==="bn" ? ["গণিত","রিজনিং","ইংরেজি","সাধারণ জ্ঞান","অর্থনীতি"] : subjects;
  const data = subjects.map(s => {
    const fullKey = s === "GK" ? "General Knowledge" : s === "Economy" ? "Economy & Banking" : s;
    const saved = syllabusProgress[fullKey] || [];
    const total = (SYLLABUS.find(x => x.subject === fullKey)?.topics || []).length || 1;
    return Math.round((saved.length / total) * 100) || [75,80,70,65,85][subjects.indexOf(s)];
  });
  // Fallback to sample if all zero
  const finalData = data.every(d => d === 0) ? [75,80,70,65,85] : data;

  window._charts.subject = new Chart($("#subjectChart"), {
    type: "doughnut",
    data: {
      labels: labels,
      datasets: [{
        data: finalData,
        backgroundColor: ["#2563EB","#22D3EE","#10B981","#F59E0B","#EF4444"],
        borderWidth: 0, hoverOffset: 8
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: true,
      cutout: "65%",
      plugins: { legend: { position: "bottom", labels: { padding: 14, usePointStyle: true, pointStyle: "circle" } } }
    }
  });
}

/* ---------- 15. SUGGESTIONS ---------- */
function renderSuggestions() {
  const list = [
    currentLang==="bn"?"সাধারণ জ্ঞান উন্নত করো: প্রতিদিন ১০টি GK প্রশ্ন অনুশীলন করো।":"Improve General Knowledge: Try 10 GK questions daily.",
    currentLang==="bn"?"প্রতিদিন ১৫ মিনিট ইংরেজি শব্দভাণ্ডার অনুশীলন করো।":"Practice English Vocabulary for 15 minutes every day.",
    currentLang==="bn"?"এই সপ্তাহে Percentage ও Ratio টপিক রিভিশন দাও।":"Revise Percentage and Ratio topics this week.",
    currentLang==="bn"?"রিজনিং প্রতিদিন ৩০ মিনিট অনুশীলন করো।":"Practice Reasoning for 30 minutes daily.",
    currentLang==="bn"?"কারেন্ট অ্যাফেয়ার্স প্রতিদিন ২০ মিনিট পড়ো।":"Read Current Affairs for 20 minutes daily."
  ];
  $("#suggestionList").innerHTML = list.map(s => `<li><i class="fa-solid fa-lightbulb"></i> ${s}</li>`).join("");
}

/* ---------- 16. MOTIVATION QUOTES ---------- */
let quoteIdx = 0;
function showQuote() {
  quoteIdx = Math.floor(Math.random() * QUOTES.length);
  const q = QUOTES[quoteIdx];
  $("#quoteText").textContent = `"${q.text}"`;
  $("#quoteTranslation").textContent = q.bn;
}
function initMotivation() {
  showQuote();
  $("#newQuoteBtn").addEventListener("click", showQuote);
}

/* ---------- 17. TOAST ---------- */
function showToast(msg) {
  let t = $("#pphToast");
  if (!t) {
    t = document.createElement("div");
    t.id = "pphToast";
    t.style.cssText = `position:fixed;bottom:2rem;left:50%;transform:translateX(-50%) translateY(20px);
      background:linear-gradient(135deg,var(--blue),var(--cyan));color:#fff;padding:0.8rem 1.4rem;
      border-radius:12px;font-weight:600;font-size:0.9rem;z-index:9999;opacity:0;transition:all 0.3s;
      box-shadow:0 10px 25px rgba(37,99,235,0.4);`;
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = "1";
  t.style.transform = "translateX(-50%) translateY(0)";
  clearTimeout(t._timer);
  t._timer = setTimeout(() => {
    t.style.opacity = "0";
    t.style.transform = "translateX(-50%) translateY(20px)";
  }, 2500);
}

/* ---------- 18. INIT EVERYTHING ---------- */
function init() {
  applyTheme(currentTheme);
  applyLanguage(currentLang);
  initNavbar();
  initReveal();
  initTilt();
  initTodayTaskForm();
  renderTodayTasks();
  initExamForm();
  renderCountdown();
  initPlannerForm();
  renderPlanner();
  initPomodoro();
  renderSyllabus();
  initQuiz();
  initNotesControls();
  renderNotes();
  initRevision();
  renderFlashcard();
  initMotivation();
  renderSuggestions();
  renderQuizHistory();
  initCharts();

  // Dark & language toggles
  $("#darkToggle").addEventListener("click", () => applyTheme(currentTheme === "dark" ? "light" : "dark"));
  $("#langToggle").addEventListener("click", () => applyLanguage(currentLang === "bn" ? "en" : "bn"));

  // Hide skeleton after 1s
  setTimeout(() => {
    const sk = $("#skeletonLoader");
    if (sk) {
      sk.classList.add("hide");
      setTimeout(() => sk.remove(), 500);
    }
  }, 1000);
}

document.addEventListener("DOMContentLoaded", init);
