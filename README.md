🎓 Provakar Prep Hub
Your Smart Competitive Exam Preparation Companion

A premium, bilingual (Bengali / English), fully static Competitive Exam Preparation Dashboard built for Provakar — a B.Com Honours Graduate preparing for SSC, Banking, Railway, PSC/WBCS, Insurance and other Government exams.

✨ Features
🏠 Hero Section with animated gradient blobs, floating glass cards & particles
📊 Dashboard — study hours, completed topics, quiz average, study streak (animated counters, 3D tilt)
✅ Today's Tasks — add / complete / delete, saved to localStorage with progress bar
⏳ Exam Countdown — set your target exam name & date
📅 Study Planner — full CRUD with subject, duration, priority, date + filters (All / Today / Completed / Pending / High Priority)
🍅 Pomodoro Focus Timer — 25 / 5 / 15 min modes with circular SVG progress + soft beep
📚 Syllabus Tracker — 6 subjects, expandable topic lists, auto progress %
❓ Quiz Zone — 22 sample MCQs, filter by subject / difficulty / count, timer, score ring, wrong-answer review
📰 Current Affairs — searchable, category-filtered sample notes with bookmarks
🧠 Smart Revision — Flashcards (3D flip), Formula Book, Vocabulary (Bengali + English)
📈 Progress Analytics — Chart.js weekly study bar + subject doughnut + quiz history table + weak area suggestions
💡 Daily Motivation — rotating bilingual quotes
👤 About — Provakar's profile card
🌗 Dark Mode + 🌐 Bilingual (বাংলা / English) toggle, both saved in localStorage
📱 Fully Responsive — desktop / tablet / mobile with hamburger menu
♿ Accessible — semantic HTML, aria-labels, keyboard focus states
🛠️ Technologies Used
HTML5 (semantic structure)
CSS3 (custom properties, glassmorphism, grid, animations)
Vanilla JavaScript (no frameworks)
Google Fonts — Poppins (English) + Hind Siliguri (Bengali)
Font Awesome 6 — icons
Chart.js 4 — analytics charts
localStorage — data persistence (no backend)
📁 File Structure
provakar-prep-hub/├── index.html      # Main HTML structure├── style.css       # All styling, themes, responsive├── data.js         # Sample questions, syllabus, flashcards, notes, quotes├── script.js       # All interactive logic└── README.md       # This file
🚀 How to Run Locally
Download / clone all 5 files into one folder.
Open index.html in any modern browser (Chrome, Firefox, Edge, Safari).
Done! No build step, no server, no dependencies to install.
💡 Tip: For best experience use a modern browser with JavaScript enabled.

🌍 How to Deploy on GitHub Pages
Go to GitHub and sign in.
Click New repository → name it provakar-prep-hub → set Public → Create repository.
Click Add file → Upload files and upload all 5 files (index.html, style.css, data.js, script.js, README.md).
Commit changes with a message like "Initial commit".
Go to Settings → Pages (left sidebar).
Under Source, choose Deploy from a branch.
Select branch main and folder / (root) → click Save.
Wait 1–2 minutes. Refresh the page — your site URL will appear like:https://your-username.github.io/provakar-prep-hub/
Open the link and share with anyone! 🎉
✏️ Customization Guide for Provakar
1. Change Your Name / Profile
Open index.html and find the About section (#about). Edit:

<h3 id="profileName">Provakar</h3>
And update the hero welcome in script.js → I18N.bn.hero.welcome and I18N.en.hero.welcome.

2. Add / Edit Quiz Questions
Open data.js → find QUIZ_QUESTIONS array. Copy any question object and modify:

{  subject: "Mathematics",      // Mathematics, Reasoning, English, General Knowledge, Economy & Banking  difficulty: "Easy",          // Easy, Medium, Hard  q: "Your question here?",  options: ["A", "B", "C", "D"],  answer: 1,                   // index of correct option (0-based)  explain: "Explanation here."}
3. Add / Edit Current Affairs Notes
In data.js → NOTES array, add:

{  cat: "National",             // National, International, Economy, Sports, Awards, Science & Technology  catBn: "জাতীয়",  date: "2026-01-20",  title: "Your Title / বাংলা শিরোনাম",  preview: "Short preview text.",  full: "Full detailed note text here."}
4. Add / Edit Syllabus Topics
In data.js → SYLLABUS array, find the subject and add topics:

{ en: "New Topic", bn: "নতুন টপিক" }
5. Add Flashcards / Formulas / Vocabulary
FLASHCARDS array → { front: "...", back: "..." }
FORMULAS array → { title: "...", formula: "..." }
VOCAB array → { word: "...", meaning: "...", bn: "অর্থ" }
6. Set Your Target Exam Date
Open the website → Dashboard → Exam Countdown → fill Exam Name and Exam Date → click Save. It persists in your browser.

7. Change Colors
Open style.css → top :root block. Edit the CSS variables like --blue, --cyan, etc.

8. Change Default Language
In script.js find:

let currentLang = LS.get("pph_lang", "bn");
Change "bn" to "en" for English default.

9. Add Motivational Quotes
In data.js → QUOTES array:

{ text: "Your English quote.", bn: "আপনার বাংলা অনুবাদ।" }
📦 Data Persistence
All user data is stored in browser localStorage under these keys:

Key	Purpose
pph_lang	Selected language
pph_theme	Dark/Light theme
pph_today_tasks	Today's tasks list
pph_exam	Target exam name & date
pph_planner	Study planner tasks
pph_syllabus	Checked syllabus topics
pph_quiz_history	Recent quiz results
pph_bookmarks	Bookmarked current affairs notes
pph_weekly	Weekly study hours
pph_fc_status	Flashcard revision status
Clear browser data / localStorage to reset everything.

⚠️ Notes
Current Affairs content is sample demo content and not real-time news.
Quiz questions are sample practice questions. Add more in data.js for a richer bank.
Works 100% offline after first load (CDN assets load once).
👨‍🎓 About the Owner
Provakar
B.Com Honours Graduate | Competitive Exam Aspirant
Skills: Self-learning, Consistent Practice, Digital Study Planning

📜 License
© 2026 Provakar Prep Hub. All rights reserved.
Free for personal educational use.

8. Step-by-Step GitHub Pages Deployment Instructions
Create a GitHub account (if you don't have one) at github.com.
Click the + icon (top-right) → New repository.
Repository name: provakar-prep-hub → set to Public → Create repository.
Click Add file → Upload files.
Drag and drop all 5 files: index.html, style.css, data.js, script.js, README.md.
Add a commit message like "Initial commit" → click Commit changes.
Go to Settings tab → left sidebar → Pages.
Under Build and deployment → Source, choose Deploy from a branch.
Under Branch, select main and / (root) → click Save.
Wait 1–2 minutes, then refresh. Your live URL will be:
https://<your-username>.github.io/provakar-prep-hub/
Click the link to open your website. Share it with friends, mentors, or on your portfolio! 🎉
To update later: just edit files on GitHub (or re-upload), and the site updates automatically in 1–2 minutes.
9. Simple Customization Guide for Provakar
What you want to change
File to edit
Where
Your name / welcome text	script.js	I18N.bn.hero.welcome & I18N.en.hero.welcome
Profile info (qualification, goal)	script.js	I18N.bn.about.* & I18N.en.about.*
Add quiz questions	data.js	QUIZ_QUESTIONS array
Add current affairs notes	data.js	NOTES array
Add syllabus topics	data.js	SYLLABUS array
Add flashcards	data.js	FLASHCARDS array
Add formulas	data.js	FORMULAS array
Add vocabulary	data.js	VOCAB array
Add motivational quotes	data.js	QUOTES array
Change theme colors	style.css	:root variables (top of file)
Change default language	script.js	LS.get("pph_lang", "bn") → change to "en"
Set your exam date	Website UI	Dashboard → Exam Countdown → Save
Add new subject to planner	index.html	<select id="pSubject"> options

Quick tip: Always test locally first by opening index.html in your browser. If everything works, push to GitHub. To reset all saved data, open Browser DevTools (F12) → Application → Local Storage → Clear.
