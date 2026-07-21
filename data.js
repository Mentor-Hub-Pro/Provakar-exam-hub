/* =========================================================
   DATA.JS — Sample content for Provakar Prep Hub
   All sample data: quiz questions, syllabus, flashcards,
   formulas, vocabulary, current affairs, quotes.
   ========================================================= */

// ---------- SYLLABUS DATA ----------
const SYLLABUS = [
  {
    subject: "Mathematics", bn: "গণিত", icon: "fa-calculator",
    topics: [
      { en: "Percentage", bn: "শতকরা" },
      { en: "Profit and Loss", bn: "লাভ ও ক্ষতি" },
      { en: "Ratio and Proportion", bn: "অনুপাত ও সমানুপাত" },
      { en: "Simple Interest", bn: "সরল সুদ" },
      { en: "Compound Interest", bn: "চক্রবৃদ্ধি সুদ" },
      { en: "Time and Work", bn: "সময় ও কাজ" },
      { en: "Time, Speed and Distance", bn: "সময়, গতি ও দূরত্ব" }
    ]
  },
  {
    subject: "Reasoning", bn: "রিজনিং", icon: "fa-puzzle-piece",
    topics: [
      { en: "Number Series", bn: "সংখ্যা সিরিজ" },
      { en: "Coding-Decoding", bn: "কোডিং-ডিকোডিং" },
      { en: "Blood Relation", bn: "রক্ত সম্পর্ক" },
      { en: "Seating Arrangement", bn: "বসার বিন্যাস" },
      { en: "Direction Test", bn: "দিক নির্ণয়" },
      { en: "Analogy", bn: "সাদৃশ্য" }
    ]
  },
  {
    subject: "English", bn: "ইংরেজি", icon: "fa-language",
    topics: [
      { en: "Vocabulary", bn: "শব্দভাণ্ডার" },
      { en: "Synonyms and Antonyms", bn: "সমার্থক ও বিপরীত শব্দ" },
      { en: "Error Spotting", bn: "ভুল নির্ণয়" },
      { en: "Reading Comprehension", bn: "রিডিং কম্প্রিহেনশন" },
      { en: "Cloze Test", bn: "ক্লোজ টেস্ট" },
      { en: "Active and Passive Voice", bn: "Active-Passive Voice" }
    ]
  },
  {
    subject: "General Knowledge", bn: "সাধারণ জ্ঞান", icon: "fa-globe",
    topics: [
      { en: "Indian History", bn: "ভারতীয় ইতিহাস" },
      { en: "Geography", bn: "ভূগোল" },
      { en: "Polity", bn: "রাজবিদ্যা" },
      { en: "Constitution", bn: "সংবিধান" },
      { en: "Awards & Honours", bn: "পুরস্কার ও সম্মান" },
      { en: "Books & Authors", bn: "বই ও লেখক" }
    ]
  },
  {
    subject: "Current Affairs", bn: "কারেন্ট অ্যাফেয়ার্স", icon: "fa-newspaper",
    topics: [
      { en: "National News", bn: "জাতীয় সংবাদ" },
      { en: "International News", bn: "আন্তর্জাতিক সংবাদ" },
      { en: "Sports", bn: "খেলাধুলা" },
      { en: "Appointments", bn: "নিয়োগ" },
      { en: "Schemes", bn: "প্রকল্প" },
      { en: "Important Days", bn: "গুরুত্বপূর্ণ দিন" }
    ]
  },
  {
    subject: "Economy & Banking", bn: "অর্থনীতি ও ব্যাংকিং", icon: "fa-building-columns",
    topics: [
      { en: "Indian Economy Basics", bn: "ভারতীয় অর্থনীতির ভিত্তি" },
      { en: "RBI and Monetary Policy", bn: "RBI ও মুদ্রানীতি" },
      { en: "Banking Terms", bn: "ব্যাংকিং টার্ম" },
      { en: "Budget Basics", bn: "বাজেটের ভিত্তি" },
      { en: "Inflation", bn: "মুদ্রাস্ফীতি" },
      { en: "GDP and National Income", bn: "GDP ও জাতীয় আয়" }
    ]
  }
];

// ---------- QUIZ QUESTIONS (22 sample questions) ----------
const QUIZ_QUESTIONS = [
  // Mathematics
  {
    subject: "Mathematics", difficulty: "Easy",
    q: "25% of 400 কত?",
    options: ["50", "100", "150", "200"],
    answer: 1,
    explain: "25% = 25/100। তাই, 400 × 25/100 = 100।"
  },
  {
    subject: "Mathematics", difficulty: "Medium",
    q: "A train runs at 60 km/h. How far does it travel in 2.5 hours?",
    options: ["120 km", "150 km", "180 km", "200 km"],
    answer: 1,
    explain: "Distance = Speed × Time = 60 × 2.5 = 150 km."
  },
  {
    subject: "Mathematics", difficulty: "Easy",
    q: "একটি জিনিসের ক্রয়মূল্য 200 টাকা, বিক্রয়মূল্য 250 টাকা। লাভ কত?",
    options: ["25 টাকা", "40 টাকা", "50 টাকা", "60 টাকা"],
    answer: 2,
    explain: "লাভ = বিক্রয়মূল্য - ক্রয়মূল্য = 250 - 200 = 50 টাকা।"
  },
  {
    subject: "Mathematics", difficulty: "Hard",
    q: "What is the compound interest on ₹10,000 for 2 years at 10% per annum?",
    options: ["₹2000", "₹2100", "₹2200", "₹2300"],
    answer: 1,
    explain: "CI = P[(1+r/100)^t - 1] = 10000[(1.1)^2 - 1] = 10000 × 0.21 = ₹2100."
  },
  {
    subject: "Mathematics", difficulty: "Medium",
    q: "5 জন লোক একটি কাজ 10 দিনে করে। 10 জন লোক কত দিনে করবে?",
    options: ["3 দিন", "5 দিন", "7 দিন", "8 দিন"],
    answer: 1,
    explain: "মানুষ × দিন = ধ্রুবক। 5×10 = 10×x → x = 5 দিন।"
  },

  // Reasoning
  {
    subject: "Reasoning", difficulty: "Easy",
    q: "If CAT is coded as DBU, then DOG is coded as?",
    options: ["EPH", "DPH", "EOG", "FPH"],
    answer: 0,
    explain: "প্রতিটি অক্ষর 1 বেশি: D→E, O→P, G→H। তাই EPH।"
  },
  {
    subject: "Reasoning", difficulty: "Medium",
    q: "Find the next number in the series: 2, 6, 12, 20, 30, ?",
    options: ["40", "42", "44", "46"],
    answer: 1,
    explain: "পার্থক্য: 4, 6, 8, 10, 12। তাই 30 + 12 = 42।"
  },
  {
    subject: "Reasoning", difficulty: "Easy",
    q: "Pointing to a man, a woman said, 'His mother is the only daughter of my mother.' How is the woman related to the man?",
    options: ["Sister", "Mother", "Aunt", "Daughter"],
    answer: 1,
    explain: "মহিলার মায়ের একমাত্র কন্যা = মহিলা নিজে। তাই মহিলা ঐ লোকটির মা।"
  },
  {
    subject: "Reasoning", difficulty: "Hard",
    q: "In a row of 20 children, Riya is 7th from the left. What is her position from the right?",
    options: ["13th", "14th", "15th", "16th"],
    answer: 1,
    explain: "ডান থেকে অবস্থান = (মোট + 1) - বাম থেকে = 21 - 7 = 14তম।"
  },
  {
    subject: "Reasoning", difficulty: "Medium",
    q: "If South-East becomes North, then what will North-East become?",
    options: ["North-West", "South-East", "West", "South-West"],
    answer: 1,
    explain: "South-East থেকে North হলে 135° ঘূর্ণন। তাই North-East ঘুরলে South-East হবে।"
  },

  // English
  {
    subject: "English", difficulty: "Easy",
    q: "Choose the synonym of 'Rapid'.",
    options: ["Slow", "Quick", "Weak", "Late"],
    answer: 1,
    explain: "Rapid মানে দ্রুত বা quick।"
  },
  {
    subject: "English", difficulty: "Medium",
    q: "Find the error: 'He do not like coffee.'",
    options: ["He", "do not", "like", "coffee"],
    answer: 1,
    explain: "Third person singular - 'does not' হবে, 'do not' নয়।"
  },
  {
    subject: "English", difficulty: "Easy",
    q: "Choose the antonym of 'Diligent'.",
    options: ["Hardworking", "Lazy", "Active", "Careful"],
    answer: 1,
    explain: "Diligent মানে পরিশ্রমী, বিপরীত শব্দ Lazy (অলস)।"
  },
  {
    subject: "English", difficulty: "Hard",
    q: "Change to passive voice: 'She writes a letter.'",
    options: ["A letter is written by her", "A letter was written by her",
              "A letter is being written by her", "A letter has been written by her"],
    answer: 0,
    explain: "Present Simple Passive: a letter is written by her."
  },
  {
    subject: "English", difficulty: "Medium",
    q: "Choose the correctly spelled word.",
    options: ["Accomodate", "Acommodate", "Accommodate", "Acomodate"],
    answer: 2,
    explain: "সঠিক বানান: Accommodate (দুটি c এবং দুটি m)।"
  },

  // General Knowledge
  {
    subject: "General Knowledge", difficulty: "Easy",
    q: "ভারতের সংবিধান কবে থেকে কার্যকর হয়?",
    options: ["15 August 1947", "26 January 1950", "26 November 1949", "2 October 1950"],
    answer: 1,
    explain: "ভারতের সংবিধান 26 January 1950 থেকে কার্যকর হয় (প্রজাতন্ত্র দিবস)।"
  },
  {
    subject: "General Knowledge", difficulty: "Medium",
    q: "Who is known as the 'Father of the Indian Constitution'?",
    options: ["Mahatma Gandhi", "Jawaharlal Nehru", "B. R. Ambedkar", "Rajendra Prasad"],
    answer: 2,
    explain: "ড. বি. আর. আম্বেদকরকে ভারতীয় সংবিধানের জনক বলা হয়।"
  },
  {
    subject: "General Knowledge", difficulty: "Easy",
    q: "ভারতের জাতীয় খেলা কোনটি?",
    options: ["ক্রিকেট", "ফুটবল", "হকি", "কবাডি"],
    answer: 2,
    explain: "হকিকে ভারতের জাতীয় খেলা হিসেবে বিবেচনা করা হয়।"
  },
  {
    subject: "General Knowledge", difficulty: "Hard",
    q: "The Battle of Plassey was fought in which year?",
    options: ["1757", "1761", "1764", "1857"],
    answer: 0,
    explain: "পলাশীর যুদ্ধ হয়েছিল 1757 সালে, নবাব সিরাজউদ্দৌলা ও ইস্ট ইন্ডিয়া কোম্পানির মধ্যে।"
  },

  // Economy & Banking
  {
    subject: "Economy & Banking", difficulty: "Easy",
    q: "ভারতের কেন্দ্রীয় ব্যাংক কোনটি?",
    options: ["SBI", "RBI", "NABARD", "SEBI"],
    answer: 1,
    explain: "RBI (Reserve Bank of India) ভারতের কেন্দ্রীয় ব্যাংক।"
  },
  {
    subject: "Economy & Banking", difficulty: "Medium",
    q: "What is Repo Rate?",
    options: ["Rate at which RBI lends to commercial banks",
              "Rate at which banks lend to customers",
              "Rate at which RBI borrows from banks",
              "Rate of foreign exchange"],
    answer: 0,
    explain: "Repo Rate হলো সেই হার যে হারে RBI বাণিজ্যিক ব্যাংকগুলিকে ঋণ দেয়।"
  },
  {
    subject: "Economy & Banking", difficulty: "Hard",
    q: "GDP কে পরিমাপ করা হয় কোন পদ্ধতিতে?",
    options: ["কেবল উৎপাদন পদ্ধতি", "উৎপাদন, আয় ও ব্যয় — তিন পদ্ধতিতেই",
              "কেবল আয় পদ্ধতি", "কেবল ব্যয় পদ্ধতি"],
    answer: 1,
    explain: "GDP তিনটি পদ্ধতিতে পরিমাপ করা যায় — উৎপাদন, আয় ও ব্যয় পদ্ধতি।"
  }
];

// ---------- FLASHCARDS ----------
const FLASHCARDS = [
  { front: "GDP কী?", back: "GDP বা Gross Domestic Product হলো একটি দেশের নির্দিষ্ট সময়ে উৎপাদিত চূড়ান্ত পণ্য ও পরিষেবার মোট বাজারমূল্য।" },
  { front: "What is Simple Interest?", back: "Simple Interest = (Principal × Rate × Time) / 100" },
  { front: "RBI কী সংক্ষেপে?", back: "RBI = Reserve Bank of India — ভারতের কেন্দ্রীয় ব্যাংক।" },
  { front: "Profit = ?", back: "Profit = Selling Price (SP) − Cost Price (CP)" },
  { front: "ভারতের সংবিধান কবে কার্যকর হয়?", back: "26 January 1950 তারিখে ভারতের সংবিধান কার্যকর হয়।" },
  { front: "What is the formula for Average?", back: "Average = Sum of observations ÷ Number of observations" },
  { front: "Repo Rate কী?", back: "Repo Rate হলো সেই হার যে হারে RBI বাণিজ্যিক ব্যাংককে ঋণ দেয়।" },
  { front: "Percentage formula?", back: "Percentage = (Part ÷ Whole) × 100" }
];

// ---------- FORMULAS ----------
const FORMULAS = [
  { title: "Percentage", formula: "(Part / Whole) × 100" },
  { title: "Profit", formula: "Selling Price − Cost Price" },
  { title: "Simple Interest", formula: "(P × R × T) / 100" },
  { title: "Compound Interest", formula: "P[(1 + R/100)^T − 1]" },
  { title: "Average", formula: "Sum of observations / Number of observations" },
  { title: "Speed", formula: "Distance / Time" },
  { title: "Loss Percentage", formula: "(Loss / CP) × 100" },
  { title: "Time & Work", formula: "Work = Efficiency × Time" },
  { title: "Discount", formula: "Marked Price − Selling Price" }
];

// ---------- VOCABULARY ----------
const VOCAB = [
  { word: "Abundant", meaning: "Plentiful", bn: "প্রচুর" },
  { word: "Candid", meaning: "Honest", bn: "অকপট" },
  { word: "Diligent", meaning: "Hardworking", bn: "পরিশ্রমী" },
  { word: "Eloquent", meaning: "Fluent speaker", bn: "বাগ্মী" },
  { word: "Frugal", meaning: "Economical", bn: "মিতব্যয়ী" },
  { word: "Benign", meaning: "Kind, gentle", bn: "কৃপালু" },
  { word: "Lucid", meaning: "Clear, easy to understand", bn: "স্বচ্ছ" },
  { word: "Meticulous", meaning: "Very careful", bn: "যত্নশীল" },
  { word: "Obscure", meaning: "Not clear", bn: "অস্পষ্ট" }
];

// ---------- CURRENT AFFAIRS NOTES (sample) ----------
const NOTES = [
  {
    cat: "Economy", catBn: "অর্থনীতি",
    date: "2026-01-15",
    title: "Understanding Inflation / মুদ্রাস্ফীতি বোঝা",
    preview: "Inflation means a general increase in prices over time.",
    full: "মুদ্রাস্ফীতি হলো সময়ের সঙ্গে পণ্য ও পরিষেবার সাধারণ মূল্য বৃদ্ধি। এর ফলে অর্থের ক্রয়ক্ষমতা কমে। ভারতে CPI (Consumer Price Index) দিয়ে মুদ্রাস্ফীতি পরিমাপ করা হয়।"
  },
  {
    cat: "Economy", catBn: "অর্থনীতি",
    date: "2026-01-14",
    title: "What is Repo Rate? / Repo Rate কী?",
    preview: "Repo rate is the rate at which RBI lends money to commercial banks.",
    full: "Repo Rate হলো সেই হার যে হারে RBI বাণিজ্যিক ব্যাংকগুলিকে স্বল্পমেয়াদী ঋণ দেয়। বর্তমান ভারতে Repo Rate 6.5% (নমুনা)। Repo Rate বাড়লে ঋণের সুদ বাড়ে, ফলে মুদ্রাস্ফীতি কমে।"
  },
  {
    cat: "National", catBn: "জাতীয়",
    date: "2026-01-13",
    title: "Indian Constitution Quick Fact / ভারতীয় সংবিধান তথ্য",
    preview: "The Constitution of India was adopted on 26 November 1949.",
    full: "ভারতের সংবিধান 26 নভেম্বর 1949-এ গৃহীত হয় এবং 26 জানুয়ারি 1950 থেকে কার্যকর হয়। এটি বিশ্বের সবচেয়ে বড় লিখিত সংবিধান। এতে 448টি অনুচ্ছেদ রয়েছে।"
  },
  {
    cat: "Sports", catBn: "খেলাধুলা",
    date: "2026-01-12",
    title: "Sports Current Affairs Practice / খেলাধুলা অনুশীলন",
    preview: "Use this section to add major tournament winners and sports awards.",
    full: "এই সেকশনে তুমি বড় টুর্নামেন্টের বিজয়ী, অলিম্পিক, বিশ্বকাপ, খেলাধুলা বিষয়ক পুরস্কার যেমন রাজীব গান্ধী খেলরত্ন, অর্জুন পুরস্কার ইত্যাদি সম্পর্কিত নোট রাখতে পারো।"
  },
  {
    cat: "International", catBn: "আন্তর্জাতিক",
    date: "2026-01-11",
    title: "UN & Its Bodies / জাতিসংঘ ও এর সংস্থা",
    preview: "The United Nations has 6 principal organs including General Assembly and Security Council.",
    full: "জাতিসংঘের 6টি প্রধান অঙ্গসংস্থা হলো — General Assembly, Security Council, ECOSOC, Trusteeship Council, ICJ এবং Secretariat। ভারত জাতিসংঘের প্রতিষ্ঠাতা সদস্য।"
  },
  {
    cat: "Awards", catBn: "পুরস্কার",
    date: "2026-01-10",
    title: "Bharat Ratna / ভারতরত্ন",
    preview: "Bharat Ratna is the highest civilian award of India.",
    full: "ভারতরত্ন ভারতের সর্বোচ্চ অসামরিক পুরস্কার। 1954 সালে চালু হয়। যে কোনো ক্ষেত্রে অসাধারণ অবদানের জন্য এটি দেওয়া হয়। প্রথম প্রাপক: সর্বপল্লী রাধাকৃষ্ণণ, সি. রাজাগোপালাচারী, সি. ভি. রামন।"
  },
  {
    cat: "Science & Technology", catBn: "বিজ্ঞান ও প্রযুক্তি",
    date: "2026-01-09",
    title: "ISRO Missions / ইসরো মিশন",
    preview: "ISRO is India's national space agency, founded in 1969.",
    full: "ইসরো (ISRO) ভারতের জাতীয় মহাকাশ সংস্থা, 1969 সালে প্রতিষ্ঠিত। চন্দ্রযান-৩ (2023) চাঁদের দক্ষিণ মেরুতে সফলভাবে অবতরণ করেছে — ভারত প্রথম দেশ হিসেবে এই কীর্তি অর্জন করে।"
  },
  {
    cat: "National", catBn: "জাতীয়",
    date: "2026-01-08",
    title: "Government Schemes / সরকারি প্রকল্প",
    preview: "Important central government schemes for competitive exams.",
    full: "গুরুত্বপূর্ণ কেন্দ্রীয় প্রকল্প: PMJDY (আর্থিক সংযোজন), PMAY (আবাসন), Ayushman Bharat (স্বাস্থ্য), Skill India, Make in India, Digital India, Ujjwala Yojana ইত্যাদি।"
  }
];

// ---------- MOTIVATIONAL QUOTES ----------
const QUOTES = [
  {
    text: "Success is the sum of small efforts, repeated day in and day out.",
    bn: "সাফল্য হলো প্রতিদিনের ছোট ছোট প্রচেষ্টার যোগফল।"
  },
  {
    text: "আজকের পরিশ্রমই আগামীকালের আত্মবিশ্বাস।",
    bn: "Today's hard work becomes tomorrow's confidence."
  },
  {
    text: "Do not compare your Chapter 1 with someone else's Chapter 20.",
    bn: "তোমার প্রথম অধ্যায়কে অন্য কারও বিশতম অধ্যায়ের সঙ্গে তুলনা করো না।"
  },
  {
    text: "The expert in anything was once a beginner.",
    bn: "যে কোনো বিষয়ের বিশেষজ্ঞ একসময় নতুন শিক্ষার্থী ছিলেন।"
  },
  {
    text: "Discipline is the bridge between goals and accomplishment.",
    bn: "শৃঙ্খলা হলো লক্ষ্য ও সাফল্যের মধ্যবর্তী সেতু।"
  },
  {
    text: "পরীক্ষায় ভালো ফলাফল কোনো আকস্মিকতা নয়, এটি প্রতিদিনের চেষ্টার ফল।",
    bn: "Good results in exams are not accidents — they are the result of daily effort."
  },
  {
    text: "Read, revise, repeat — the simple formula of toppers.",
    bn: "পড়ো, রিভিশন দাও, আবার পড়ো — টপারদের সহজ সূত্র।"
  }
];
