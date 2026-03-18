/* === Text Content === */
const COMMON_WORDS = [
  "the","of","and","to","in","is","you","that","it","he","was","for","on","are","as","with","his","they",
  "at","be","this","have","from","or","one","had","by","but","not","what","all","were","we","when","your",
  "can","said","there","each","which","she","do","how","their","if","will","up","other","about","out","many",
  "then","them","these","so","some","her","would","make","like","him","into","time","has","look","two","more",
  "write","go","see","number","no","way","could","people","my","than","first","water","been","call","who",
  "oil","its","find","long","down","day","did","get","come","made","may","part","over","new","sound","take",
  "only","little","work","know","place","year","live","me","back","give","most","very","after","thing","our",
  "just","name","good","sentence","man","think","say","great","where","help","through","much","before","line",
  "right","too","mean","old","any","same","tell","boy","follow","came","want","show","also","around","form",
  "three","small","set","put","end","does","another","well","large","must","big","even","such","here","why",
  "ask","went","men","read","need","land","different","home","us","move","try","kind","hand","picture","again",
  "change","off","play","spell","air","away","animal","house","point","page","letter","mother","answer","found",
  "study","still","learn","should","world","high","every","near","add","food","between","own","below","country",
  "plant","last","school","father","keep","tree","never","start","city","earth","eye","light","thought","head",
  "under","story","saw","left","few","while","along","might","close","something","seem","next","hard","open",
  "example","begin","life","always","those","both","paper","together","got","group","often","run","important",
  "until","children","side","feet","car","mile","night","walk","white","sea","began","grow","took","river",
  "four","carry","state","once","book","hear","stop","without","second","late","miss","idea","enough","eat",
  "face","watch","far","real","almost","let","above","girl","sometimes","mountain","cut","young","talk","soon",
  "list","song","being","leave","family","body","music","color","stand","sun","question","fish","area","mark",
  "dog","horse","bird","problem","complete","room","knew","since","ever","piece","told","usually","green",
  "fast","door","between","space","best","hour","better","true","during","hundred","five","remember","step",
  "early","hold","west","ground","interest","reach","morning","table","north","slowly","money","map","farm",
  "draw","voice","seen","cold","class","field","lead","plan","ready","science","direct","main","able","force",
  "south","class","behind","clear","brought","heat","full","hot","check","object","am","rule","among","noun",
  "power","cannot","human","sure","dark","machine","note","wait","front","test","though","language","warm",
  "common","tail","produce","fact","street","inch","lot","nothing","course","stay","wheel","surface","center",
  "town","heart","kept","short","contain","island","sleep","notice","child","happen","region","strong","unit",
  "quite","already","gone","else","measure","rest","record","boat","free","figure","deep","wind","happy","act",
  "build","final","wild","age","create","remain","rock","effect","least","minute","stood","across","visit",
  "class","window","smile","able","team","love","friend","rain","fine","system","result","press","fire","fill",
  "north","basic","woman","dance","pattern","subject","game","cross","model","join","simple","market","half",
  "past","drive","store","order","chair","pick","square","tool","cover","whole","rock","month","move","total",
  "safe","summer","cold","clear","voice","edge","plant","shape","range","heavy","sing","stage","brother",
  "road","dark","ship","glass","save","serve","train","stood","touch","stone","bring","track","design","event",
  "wonder","enter","present","pretty","round","speed","steel","spring","village","account","ball","break",
  "weight","metal","scene","spread","flower","cause","climb","compare","pair","truck","beat","supply","share",
  "gentle","board","modern","seat","lake","crowd","imagine","forest","finger","doctor","collect","shop","flow",
  "block","fresh","search","church","stick","corner","coast","suit","crowd","born","valley","thick","single",
  "string","mouth","bridge","trade","depend","brown","ship","plain","dream","favor","control","climb","cool",
  "loud","level","judge","size","warm","circle","skill","garden","please","wild","chief","grade","ring","allow",
  "wire","charge","silent","trouble","bought","nose","deal","sight","cloud","silver","taste","broad","grain",
  "cotton","grew","strange","wave","smile","sharp","spread","branch","grew","capital","winter","settle",
  "crowd","master","whose","bread","tool","chair","guide","column","fight","thick","poem","proper","piano",
  "sell","symbol","roll","gather","excite","solve","observe","dictionary","score","favor","stream","develop",
  "figure","planet","million","gentle","brave","support","manage","captain","chart","suggest","paint","native",
  "market","power","speak","length","steel","silent","current","afraid","anger","neighbor","reply","exact",
  "divide","product","camp","please","raise","collect","fresh","famous","shoulder","engine","prepare","claim",
  "surprise","weather","stretch","caught","sudden","gentle","repeat","require","sharp","skill","broad","tube",
  "silent","rich","thick","soldier","process","operate","guess","necessary","bite","quite","grass","studio",
  "favor","pitch","locate","discuss","travel","guide","protect","double","cream","allow","motion","coast",
  "object","forest","fruit","rich","guard","castle","major","trial","belong","master","string","valley"
];

const QUOTES = [
  { text: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.", author: "Steve Jobs" },
  { text: "In the middle of every difficulty lies opportunity. Life is like riding a bicycle. To keep your balance, you must keep moving.", author: "Albert Einstein" },
  { text: "It is during our darkest moments that we must focus to see the light. The best time to plant a tree was twenty years ago.", author: "Aristotle" },
  { text: "The future belongs to those who believe in the beauty of their dreams. No one can make you feel inferior without your consent.", author: "Eleanor Roosevelt" },
  { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
  { text: "Be yourself; everyone else is already taken. To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
  { text: "In three words I can sum up everything I've learned about life: it goes on. The road not taken makes all the difference.", author: "Robert Frost" },
  { text: "You must be the change you wish to see in the world. The weak can never forgive. Forgiveness is the attribute of the strong.", author: "Mahatma Gandhi" },
  { text: "The greatest glory in living lies not in never falling, but in rising every time we fall. It always seems impossible until it is done.", author: "Nelson Mandela" },
  { text: "Life is what happens when you're busy making other plans. Imagine all the people living life in peace.", author: "John Lennon" },
  { text: "Tell me and I forget. Teach me and I remember. Involve me and I learn. An investment in knowledge pays the best interest.", author: "Benjamin Franklin" },
  { text: "The way to get started is to quit talking and begin doing. All our dreams can come true, if we have the courage to pursue them.", author: "Walt Disney" },
  { text: "If you look at what you have in life, you'll always have more. If you look at what you don't have, you'll never have enough.", author: "Oprah Winfrey" },
  { text: "The mind is everything. What you think you become. Peace comes from within. Do not seek it without.", author: "Buddha" },
  { text: "Strive not to be a success, but rather to be of value. Imagination is more important than knowledge.", author: "Albert Einstein" },
  { text: "It is not the strongest of the species that survives, nor the most intelligent, but the one most responsive to change.", author: "Charles Darwin" },
  { text: "The only impossible journey is the one you never begin. Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "I have not failed. I've just found ten thousand ways that won't work. Genius is one percent inspiration and ninety-nine percent perspiration.", author: "Thomas Edison" },
  { text: "That which does not kill us makes us stronger. He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche" },
  { text: "To be, or not to be, that is the question. All the world is a stage, and all the men and women merely players.", author: "William Shakespeare" },
  { text: "The unexamined life is not worth living. I know that I am intelligent because I know that I know nothing.", author: "Socrates" },
  { text: "I think, therefore I am. It is not enough to have a good mind; the main thing is to use it well.", author: "Rene Descartes" },
  { text: "Do what you can, with what you have, where you are. Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit. Quality is not an act, it is a habit.", author: "Aristotle" },
  { text: "The only thing we have to fear is fear itself. When you reach the end of your rope, tie a knot in it and hang on.", author: "Franklin D. Roosevelt" },
  { text: "Not all those who wander are lost. All that is gold does not glitter. Even the smallest person can change the course of the future.", author: "J.R.R. Tolkien" },
  { text: "Stay hungry, stay foolish. Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.", author: "Martin Luther King Jr." },
  { text: "The best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.", author: "Helen Keller" },
  { text: "Whatever you are, be a good one. Give me six hours to chop down a tree and I will spend the first four sharpening the axe.", author: "Abraham Lincoln" },
  { text: "Happiness is not something ready made. It comes from your own actions. In the practice of tolerance, your enemy is your best teacher.", author: "Dalai Lama" },
  { text: "It does not matter how slowly you go as long as you do not stop. Our greatest glory is not in never failing, but in rising every time we fall.", author: "Confucius" },
  { text: "Everything you've ever wanted is on the other side of fear. You miss one hundred percent of the shots you never take.", author: "Wayne Gretzky" },
  { text: "The purpose of our lives is to be happy. Get busy living or get busy dying. Life is ten percent what happens and ninety percent how you react.", author: "Charles Swindoll" },
  { text: "Try not to become a man of success. Rather become a man of value. Logic will get you from A to B. Imagination will take you everywhere.", author: "Albert Einstein" },
  { text: "A room without books is like a body without a soul. The only true wisdom is in knowing you know nothing.", author: "Marcus Tullius Cicero" },
  { text: "You only live once, but if you do it right, once is enough. Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
  { text: "Education is the most powerful weapon which you can use to change the world. It always seems impossible until it is done.", author: "Nelson Mandela" },
  { text: "The journey of a thousand miles begins with a single step. Knowing others is intelligence; knowing yourself is true wisdom.", author: "Lao Tzu" },
  { text: "Success is walking from failure to failure with no loss of enthusiasm. History will be kind to me for I intend to write it.", author: "Winston Churchill" },
  { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us. To be great is to be misunderstood.", author: "Ralph Waldo Emerson" },
  { text: "Keep your face always toward the sunshine and shadows will fall behind you. How wonderful it is that nobody need wait a single moment before starting to improve the world.", author: "Anne Frank" },
  { text: "I have learned over the years that when one's mind is made up, this diminishes fear. Knowing what must be done does away with fear.", author: "Rosa Parks" },
  { text: "Life is really simple, but we insist on making it complicated. Before you embark on a journey of revenge, dig two graves.", author: "Confucius" },
  { text: "Spread love everywhere you go. Let no one ever come to you without leaving happier. If you judge people, you have no time to love them.", author: "Mother Teresa" },
  { text: "A person who never made a mistake never tried anything new. Look deep into nature, and then you will understand everything better.", author: "Albert Einstein" },
  { text: "The secret of getting ahead is getting started. The man who does not read has no advantage over the man who cannot read.", author: "Mark Twain" },
  { text: "Act as if what you do makes a difference. It does. The art of being wise is the art of knowing what to overlook.", author: "William James" },
  { text: "The best preparation for tomorrow is doing your best today. How far you go in life depends on your being tender with the young.", author: "George Washington Carver" },
  { text: "Nothing is impossible, the word itself says I'm possible. You can never cross the ocean until you have the courage to lose sight of the shore.", author: "Christopher Columbus" }
];

const CODE_SNIPPETS = [
  "const sum = (a, b) => a + b;",
  "function greet(name) { return `Hello, ${name}!`; }",
  "const arr = [1, 2, 3].map(x => x * 2);",
  "if (x > 0 && x < 100) { console.log(x); }",
  "for (let i = 0; i < arr.length; i++) { sum += arr[i]; }",
  "const { name, age } = person;",
  "const data = await fetch('/api/users').then(r => r.json());",
  "export default function App() { return <div>Hello</div>; }",
  "document.querySelector('.btn').addEventListener('click', handler);",
  "const filtered = items.filter(item => item.active === true);",
  "try { JSON.parse(input); } catch (e) { console.error(e); }",
  "const obj = { ...defaults, ...options };",
  "arr.reduce((acc, val) => acc + val, 0);",
  "setTimeout(() => { clearInterval(timer); }, 1000);",
  "class Animal { constructor(name) { this.name = name; } }",
  "def fibonacci(n): return n if n <= 1 else fibonacci(n-1) + fibonacci(n-2)",
  "for key, value in dictionary.items(): print(f'{key}: {value}')",
  "result = [x**2 for x in range(10) if x % 2 == 0]",
  "with open('file.txt', 'r') as f: content = f.read()",
  "import os; path = os.path.join(base, 'data', 'file.csv')",
  "SELECT * FROM users WHERE age > 18 ORDER BY name ASC;",
  "INSERT INTO products (name, price) VALUES ('Widget', 9.99);",
  "UPDATE orders SET status = 'shipped' WHERE id = 42;",
  "CREATE TABLE posts (id INT PRIMARY KEY, title VARCHAR(255));",
  "SELECT COUNT(*) FROM orders GROUP BY customer_id HAVING COUNT(*) > 5;",
  ".container { display: flex; justify-content: center; gap: 16px; }",
  "@media (max-width: 768px) { .sidebar { display: none; } }",
  "border: 1px solid #ccc; border-radius: 8px; padding: 16px;",
  "<a href=\"https://example.com\" target=\"_blank\" rel=\"noopener\">Link</a>",
  "<input type=\"email\" placeholder=\"you@example.com\" required />",
  "const [count, setCount] = useState(0);",
  "useEffect(() => { fetchData(); return () => cleanup(); }, []);",
  "router.get('/users/:id', async (req, res) => { res.json(user); });",
  "npm install express cors dotenv && node server.js",
  "git commit -m 'fix: resolve null pointer in auth module'",
  "docker run -p 3000:3000 -d --name app my-image:latest",
  "const promise = new Promise((resolve, reject) => { resolve(42); });",
  "Object.keys(config).forEach(key => { env[key] = config[key]; });",
  "const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;",
  "async function* generate() { yield 1; yield 2; yield 3; }",
  "lambda x, y: x + y if x > 0 else y",
  "interface User { id: number; name: string; email?: string; }",
  "type Result<T> = { ok: true; data: T } | { ok: false; error: string };",
  "switch (action.type) { case 'INCREMENT': return state + 1; }",
  "const ws = new WebSocket('wss://api.example.com/stream');"
];

function generateNumberText() {
  const patterns = [];
  const types = ['phone','ip','date','currency','mixed'];
  for (let i = 0; i < 40; i++) {
    const t = types[Math.floor(Math.random() * types.length)];
    switch(t) {
      case 'phone': {
        const a = String(Math.floor(Math.random()*900)+100);
        const b = String(Math.floor(Math.random()*900)+100);
        const c = String(Math.floor(Math.random()*9000)+1000);
        patterns.push(`(${a}) ${b}-${c}`);
        break;
      }
      case 'ip':
        patterns.push(Array.from({length:4},()=>Math.floor(Math.random()*256)).join('.'));
        break;
      case 'date': {
        const m = String(Math.floor(Math.random()*12)+1).padStart(2,'0');
        const d = String(Math.floor(Math.random()*28)+1).padStart(2,'0');
        const y = Math.floor(Math.random()*30)+1995;
        patterns.push(`${m}/${d}/${y}`);
        break;
      }
      case 'currency':
        patterns.push('$' + (Math.random()*9999).toFixed(2));
        break;
      case 'mixed':
        patterns.push(String(Math.floor(Math.random()*999999)).padStart(6,'0'));
        break;
    }
  }
  return patterns.join(' ');
}

/* === App State === */
const state = {
  duration: 60,
  mode: 'words',
  soundEnabled: false,
  fontSize: 24,
  testActive: false,
  testStarted: false,
  testFinished: false,
  timer: null,
  timeRemaining: 60,
  text: '',
  chars: [],
  currentIndex: 0,
  correctCount: 0,
  incorrectCount: 0,
  extraCount: 0,
  wpmPerSecond: [],
  startTime: null,
  quoteAuthor: null,
  tabPressed: false
};

/* === Audio Context (lazy) === */
let audioCtx = null;
function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}
function playSound(type) {
  if (!state.soundEnabled) return;
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    if (type === 'key') {
      osc.frequency.value = 800;
      gain.gain.value = 0.03;
      osc.start(); osc.stop(ctx.currentTime + 0.02);
    } else if (type === 'error') {
      osc.frequency.value = 300;
      gain.gain.value = 0.05;
      osc.start(); osc.stop(ctx.currentTime + 0.08);
    } else if (type === 'complete') {
      osc.frequency.value = 600;
      gain.gain.value = 0.05;
      osc.start();
      osc.frequency.linearRampToValueAtTime(900, ctx.currentTime + 0.15);
      osc.stop(ctx.currentTime + 0.2);
    }
  } catch(e) {}
}

/* === DOM Elements === */
const $ = id => document.getElementById(id);
const textDisplay = $('textDisplay');
const hiddenInput = $('hiddenInput');
const typingArea = $('typingArea');
const typingContainer = $('typingContainer');
const testScreen = $('testScreen');
const resultsScreen = $('resultsScreen');
const liveStats = $('liveStats');
const liveWpm = $('liveWpm');
const liveAccuracy = $('liveAccuracy');
const liveTimer = $('liveTimer');
const startPrompt = $('startPrompt');
const focusHint = $('focusHint');
const mainApp = $('mainApp');

/* === Initialize === */
function init() {
  loadPreferences();
  setupEventListeners();
  generateText();
  renderText();
  updateFooterBest();
  checkMobile();
  registerSW();
}

function loadPreferences() {
  const theme = localStorage.getItem('suite_theme');
  if (theme) document.documentElement.setAttribute('data-theme', theme);
  const sound = localStorage.getItem('tt_sound');
  if (sound === 'true') { state.soundEnabled = true; $('soundToggle').classList.add('active'); }
  const fontSize = localStorage.getItem('tt_fontSize');
  if (fontSize) { state.fontSize = parseInt(fontSize); $('fontSizeSelect').value = fontSize; }
  textDisplay.style.fontSize = state.fontSize + 'px';
}

function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }
}

function checkMobile() {
  if (/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)) {
    const dismissed = localStorage.getItem('tt_mobileDismissed');
    if (!dismissed) {
      $('mobileBanner').style.display = 'flex';
    }
  }
}

/* === Text Generation === */
function generateText() {
  state.quoteAuthor = null;
  switch(state.mode) {
    case 'words': {
      const words = [];
      const pool = [...COMMON_WORDS];
      const count = Math.max(200, state.duration * 4);
      for (let i = 0; i < count; i++) {
        const idx = Math.floor(Math.random() * pool.length);
        words.push(pool[idx]);
      }
      state.text = words.join(' ');
      break;
    }
    case 'quotes': {
      let text = '';
      const used = new Set();
      while (text.length < state.duration * 12) {
        let idx;
        do { idx = Math.floor(Math.random() * QUOTES.length); } while (used.has(idx) && used.size < QUOTES.length);
        used.add(idx);
        text += (text ? ' ' : '') + QUOTES[idx].text;
        state.quoteAuthor = QUOTES[idx].author;
      }
      state.text = text;
      break;
    }
    case 'code': {
      const snippets = [];
      const count = Math.max(20, state.duration);
      for (let i = 0; i < count; i++) {
        snippets.push(CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)]);
      }
      state.text = snippets.join(' ');
      break;
    }
    case 'numbers':
      state.text = generateNumberText();
      break;
    case 'custom':
      break;
  }
}

/* === Render Text === */
function renderText() {
  state.chars = [];
  textDisplay.innerHTML = '';
  const text = state.text;
  for (let i = 0; i < text.length; i++) {
    const span = document.createElement('span');
    span.className = 'char ' + (i === 0 ? 'current' : 'upcoming');
    span.textContent = text[i];
    textDisplay.appendChild(span);
    state.chars.push({ el: span, char: text[i], state: 'upcoming' });
  }
  if (state.chars.length > 0) state.chars[0].state = 'current';
  state.currentIndex = 0;
  textDisplay.style.transform = 'translateY(0)';
}

/* === Focus Management === */
function focusInput() {
  hiddenInput.focus({ preventScroll: true });
  typingArea.classList.add('focused');
}

/* === Event Listeners === */
function setupEventListeners() {
  // Click to focus
  typingArea.addEventListener('click', focusInput);
  document.addEventListener('click', (e) => {
    if (state.testActive && !state.testFinished) {
      // Keep focus unless clicking on buttons/controls
      if (!e.target.closest('button') && !e.target.closest('select') && !e.target.closest('.header') &&
          !e.target.closest('.history-drawer') && !e.target.closest('.custom-text-area')) {
        focusInput();
      }
    }
  });

  hiddenInput.addEventListener('focus', () => typingArea.classList.add('focused'));
  hiddenInput.addEventListener('blur', () => {
    if (!state.testFinished) typingArea.classList.remove('focused');
  });

  // Prevent paste
  hiddenInput.addEventListener('paste', e => { e.preventDefault(); });

  // Input handling
  hiddenInput.addEventListener('input', handleInput);

  // Keydown for backspace & Tab+Enter
  document.addEventListener('keydown', handleKeydown);

  // Duration control
  $('durationControl').addEventListener('click', e => {
    const btn = e.target.closest('.seg-btn');
    if (!btn || state.testStarted) return;
    $('durationControl').querySelectorAll('.seg-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.duration = parseInt(btn.dataset.value);
    state.timeRemaining = state.duration;
    liveTimer.textContent = state.duration;
    resetTest();
  });

  // Mode control
  $('modeControl').addEventListener('click', e => {
    const btn = e.target.closest('.seg-btn');
    if (!btn || state.testStarted) return;
    $('modeControl').querySelectorAll('.seg-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.mode = btn.dataset.value;
    if (state.mode === 'custom') {
      $('customTextArea').style.display = 'flex';
    } else {
      $('customTextArea').style.display = 'none';
    }
    resetTest();
  });

  // Sound toggle
  $('soundToggle').addEventListener('click', () => {
    state.soundEnabled = !state.soundEnabled;
    $('soundToggle').classList.toggle('active');
    localStorage.setItem('tt_sound', state.soundEnabled);
  });

  // Theme toggle
  $('themeToggle').addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('suite_theme', next);
  });

  // Font size
  $('fontSizeSelect').addEventListener('change', e => {
    state.fontSize = parseInt(e.target.value);
    textDisplay.style.fontSize = state.fontSize + 'px';
    localStorage.setItem('tt_fontSize', state.fontSize);
    if (state.testStarted) scrollToCurrentLine();
  });

  // History
  $('historyBtn').addEventListener('click', openHistory);
  $('viewHistoryBtn').addEventListener('click', openHistory);
  $('drawerClose').addEventListener('click', closeHistory);
  $('historyOverlay').addEventListener('click', closeHistory);
  $('clearHistoryBtn').addEventListener('click', () => {
    localStorage.removeItem('tt_history');
    localStorage.removeItem('tt_personalBests');
    renderHistory();
    renderStats();
    updateFooterBest();
    showToast('History cleared');
  });

  // Drawer tabs
  document.querySelectorAll('.drawer-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.drawer-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      if (tab.dataset.tab === 'history') {
        $('historyPanel').style.display = 'block';
        $('statsPanel').style.display = 'none';
      } else {
        $('historyPanel').style.display = 'none';
        $('statsPanel').style.display = 'block';
        renderStats();
      }
    });
  });

  // Results buttons
  $('restartBtn').addEventListener('click', () => { resetTest(); showTestScreen(); });
  $('shareBtn').addEventListener('click', shareResult);

  // Custom text
  $('customStartBtn').addEventListener('click', () => {
    const text = $('customTextInput').value.trim();
    if (!text) return;
    state.text = text;
    renderText();
    $('customTextArea').style.display = 'none';
    focusInput();
  });

  // Mobile banner
  $('mobileBannerClose').addEventListener('click', () => {
    $('mobileBanner').style.display = 'none';
    localStorage.setItem('tt_mobileDismissed', 'true');
  });

  // Ctrl/Cmd+Shift+S for sound
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'S') {
      e.preventDefault();
      state.soundEnabled = !state.soundEnabled;
      $('soundToggle').classList.toggle('active');
      localStorage.setItem('tt_sound', state.soundEnabled);
    }
  });

  // Auto-focus on load
  setTimeout(focusInput, 100);
}

/* === Input Handling === */
function handleInput(e) {
  if (state.testFinished) return;
  const data = e.data;
  if (data === null) return; // handled by keydown for backspace

  // Start test on first input
  if (!state.testStarted) {
    startTest();
  }

  // Process each character
  for (let i = 0; i < data.length; i++) {
    typeCharacter(data[i]);
  }

  hiddenInput.value = '';
  updateLiveStats();
  scrollToCurrentLine();
}

function handleKeydown(e) {
  // Tab handling
  if (e.key === 'Tab') {
    e.preventDefault();
    state.tabPressed = true;
    setTimeout(() => { state.tabPressed = false; }, 500);
    return;
  }

  if (e.key === 'Enter' && state.tabPressed) {
    e.preventDefault();
    state.tabPressed = false;
    resetTest();
    showTestScreen();
    return;
  }

  // Backspace
  if (e.key === 'Backspace' && state.testStarted && !state.testFinished) {
    e.preventDefault();
    handleBackspace(e.ctrlKey || e.metaKey);
    hiddenInput.value = '';
    updateLiveStats();
    scrollToCurrentLine();
  }
}

function typeCharacter(char) {
  if (state.currentIndex >= state.chars.length) return;

  const current = state.chars[state.currentIndex];
  const expected = current.char;

  if (char === expected) {
    current.el.className = 'char correct';
    current.state = 'correct';
    state.correctCount++;
    playSound('key');
  } else {
    current.el.className = 'char incorrect';
    current.state = 'incorrect';
    state.incorrectCount++;
    playSound('error');
  }

  state.currentIndex++;

  // Mark next as current
  if (state.currentIndex < state.chars.length) {
    state.chars[state.currentIndex].el.className = 'char current';
    state.chars[state.currentIndex].state = 'current';
  }

  // Mark completed words (dim everything before the current word boundary)
  markCompletedWords();
}

function handleBackspace(ctrlKey) {
  if (state.currentIndex <= 0) return;

  if (ctrlKey) {
    // Delete whole word
    let idx = state.currentIndex - 1;
    // Remove current marker
    if (state.currentIndex < state.chars.length) {
      state.chars[state.currentIndex].el.className = 'char upcoming';
      state.chars[state.currentIndex].state = 'upcoming';
    }
    // Go back to start of word
    while (idx > 0 && state.chars[idx - 1].char !== ' ') {
      const c = state.chars[idx];
      if (c.state === 'correct') state.correctCount--;
      else if (c.state === 'incorrect') state.incorrectCount--;
      c.el.className = 'char upcoming';
      c.state = 'upcoming';
      idx--;
    }
    // Also clear the character at idx
    const c = state.chars[idx];
    if (c.state === 'correct') state.correctCount--;
    else if (c.state === 'incorrect') state.incorrectCount--;
    c.el.className = 'char current';
    c.state = 'current';
    state.currentIndex = idx;
  } else {
    // Remove current marker
    if (state.currentIndex < state.chars.length) {
      state.chars[state.currentIndex].el.className = 'char upcoming';
      state.chars[state.currentIndex].state = 'upcoming';
    }
    state.currentIndex--;
    const prev = state.chars[state.currentIndex];
    if (prev.state === 'correct') state.correctCount--;
    else if (prev.state === 'incorrect') state.incorrectCount--;
    prev.el.className = 'char current';
    prev.state = 'current';
  }
  markCompletedWords();
}

function markCompletedWords() {
  // Find the start of the current word
  let wordStart = state.currentIndex;
  while (wordStart > 0 && state.chars[wordStart - 1].char !== ' ') {
    wordStart--;
  }
  // Mark everything before current word start as completed (if correct/incorrect)
  for (let i = 0; i < wordStart; i++) {
    const c = state.chars[i];
    if (c.state === 'correct') {
      c.el.className = 'char completed';
      // Keep state as correct for counting
    }
  }
}

/* === Smooth Scroll === */
function scrollToCurrentLine() {
  if (state.currentIndex >= state.chars.length) return;
  const currentEl = state.chars[state.currentIndex].el;
  const containerRect = typingArea.getBoundingClientRect();
  const charRect = currentEl.getBoundingClientRect();
  const lineHeight = state.fontSize * 1.8;
  const visibleLines = 3;
  const visibleHeight = lineHeight * visibleLines;

  // Calculate relative position
  const relativeTop = charRect.top - containerRect.top - 24; // 24px padding
  const currentTransform = parseFloat(textDisplay.style.transform.replace('translateY(','').replace('px)','')) || 0;

  if (relativeTop > lineHeight * 1.5) {
    const newTransform = currentTransform - (relativeTop - lineHeight);
    textDisplay.style.transform = `translateY(${newTransform}px)`;
  }
}

/* === Test Control === */
function startTest() {
  state.testStarted = true;
  state.testActive = true;
  state.startTime = Date.now();
  state.timeRemaining = state.duration;
  state.wpmPerSecond = [];

  startPrompt.style.display = 'none';
  liveStats.classList.add('visible');
  liveTimer.textContent = state.duration;

  // Disable settings
  $('durationControl').querySelectorAll('.seg-btn').forEach(b => b.style.pointerEvents = 'none');
  $('modeControl').querySelectorAll('.seg-btn').forEach(b => b.style.pointerEvents = 'none');

  // Timer
  state.timer = setInterval(() => {
    state.timeRemaining--;
    liveTimer.textContent = state.timeRemaining;

    // Record WPM for this second
    const elapsed = (state.duration - state.timeRemaining) / 60;
    if (elapsed > 0) {
      const wpm = Math.round((state.correctCount / 5) / elapsed);
      state.wpmPerSecond.push(wpm);
    }

    updateLiveStats();

    if (state.timeRemaining <= 0) {
      endTest();
    }
  }, 1000);
}

function endTest() {
  clearInterval(state.timer);
  state.testFinished = true;
  state.testActive = false;
  playSound('complete');

  const results = calculateResults();
  saveResult(results);
  showResults(results);
}

function resetTest() {
  clearInterval(state.timer);
  state.testStarted = false;
  state.testActive = false;
  state.testFinished = false;
  state.timer = null;
  state.timeRemaining = state.duration;
  state.currentIndex = 0;
  state.correctCount = 0;
  state.incorrectCount = 0;
  state.extraCount = 0;
  state.wpmPerSecond = [];
  state.startTime = null;
  state.tabPressed = false;

  liveStats.classList.remove('visible');
  startPrompt.style.display = '';
  liveTimer.textContent = state.duration;
  liveWpm.textContent = '0';
  liveAccuracy.textContent = '100';

  // Re-enable settings
  $('durationControl').querySelectorAll('.seg-btn').forEach(b => b.style.pointerEvents = '');
  $('modeControl').querySelectorAll('.seg-btn').forEach(b => b.style.pointerEvents = '');

  if (state.mode !== 'custom') {
    generateText();
  }
  renderText();
  hiddenInput.value = '';

  setTimeout(focusInput, 50);
}

function showTestScreen() {
  testScreen.style.display = '';
  resultsScreen.style.display = 'none';
  setTimeout(focusInput, 50);
}

/* === Live Stats === */
function updateLiveStats() {
  const totalTyped = state.correctCount + state.incorrectCount;
  const elapsed = state.startTime ? (Date.now() - state.startTime) / 60000 : 0;

  if (elapsed > 0) {
    const grossWpm = Math.round((totalTyped / 5) / elapsed);
    const netWpm = Math.max(0, Math.round(((state.correctCount / 5) / elapsed)));
    liveWpm.textContent = netWpm;
  }

  const accuracy = totalTyped > 0 ? Math.round((state.correctCount / totalTyped) * 100) : 100;
  liveAccuracy.textContent = accuracy;
}

/* === Results === */
function calculateResults() {
  const totalTyped = state.correctCount + state.incorrectCount;
  const minutes = state.duration / 60;
  const grossWpm = Math.round((totalTyped / 5) / minutes);
  const netWpm = Math.max(0, Math.round(grossWpm - (state.incorrectCount / minutes)));
  const accuracy = totalTyped > 0 ? Math.round((state.correctCount / totalTyped) * 100) : 0;

  // Consistency
  let consistency = 0;
  if (state.wpmPerSecond.length > 1) {
    const avg = state.wpmPerSecond.reduce((a,b) => a+b, 0) / state.wpmPerSecond.length;
    if (avg > 0) {
      const variance = state.wpmPerSecond.reduce((sum, v) => sum + Math.pow(v - avg, 2), 0) / state.wpmPerSecond.length;
      const stdev = Math.sqrt(variance);
      consistency = Math.max(0, Math.round(100 - (stdev / avg * 100)));
    }
  }

  return {
    grossWpm,
    netWpm,
    accuracy,
    correctCount: state.correctCount,
    incorrectCount: state.incorrectCount,
    consistency,
    duration: state.duration,
    mode: state.mode,
    wpmOverTime: [...state.wpmPerSecond],
    date: new Date().toISOString(),
    quoteAuthor: state.quoteAuthor
  };
}

function showResults(results) {
  testScreen.style.display = 'none';
  resultsScreen.style.display = '';

  $('resultsWpm').textContent = results.grossWpm;
  $('resultNetWpm').textContent = results.netWpm;
  $('resultAccuracy').textContent = results.accuracy + '%';
  $('resultCorrect').textContent = results.correctCount;
  $('resultIncorrect').textContent = results.incorrectCount;
  $('resultConsistency').textContent = results.consistency + '%';
  $('resultDurationMode').textContent = results.duration + 's · ' + capitalize(results.mode);

  // Personal best check
  const bestKey = `${results.duration}_${results.mode}`;
  const bests = JSON.parse(localStorage.getItem('tt_personalBests') || '{}');
  const prevBest = bests[bestKey] || 0;
  const indicator = $('personalBestIndicator');

  if (results.netWpm > prevBest && results.netWpm > 0) {
    bests[bestKey] = results.netWpm;
    localStorage.setItem('tt_personalBests', JSON.stringify(bests));
    indicator.innerHTML = '&#127881; New Personal Best!';
    indicator.style.display = 'block';
    showToast('New personal best!');
  } else if (prevBest > 0) {
    indicator.innerHTML = `Previous best: ${prevBest} WPM`;
    indicator.style.display = 'block';
  } else {
    indicator.style.display = 'none';
  }

  updateFooterBest();
  renderWpmChart(results.wpmOverTime);
}

/* === WPM Chart === */
function renderWpmChart(data) {
  const svg = $('wpmChart');
  svg.innerHTML = '';
  if (!data.length) return;

  const w = 600, h = 200, pad = { top: 20, right: 20, bottom: 30, left: 45 };
  const plotW = w - pad.left - pad.right;
  const plotH = h - pad.top - pad.bottom;
  const maxWpm = Math.max(10, ...data) * 1.1;

  // Grid lines
  for (let i = 0; i <= 4; i++) {
    const y = pad.top + (plotH / 4) * i;
    const val = Math.round(maxWpm - (maxWpm / 4) * i);
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', pad.left); line.setAttribute('y1', y);
    line.setAttribute('x2', w - pad.right); line.setAttribute('y2', y);
    line.setAttribute('stroke', 'var(--border)'); line.setAttribute('stroke-width', '1');
    svg.appendChild(line);
    const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    label.setAttribute('x', pad.left - 8); label.setAttribute('y', y + 4);
    label.setAttribute('text-anchor', 'end');
    label.setAttribute('font-family', 'DM Sans, sans-serif'); label.setAttribute('font-size', '10');
    label.setAttribute('fill', 'var(--text-muted)');
    label.textContent = val;
    svg.appendChild(label);
  }

  // X-axis labels
  const step = Math.max(1, Math.floor(data.length / 6));
  for (let i = 0; i < data.length; i += step) {
    const x = pad.left + (i / (data.length - 1 || 1)) * plotW;
    const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    label.setAttribute('x', x); label.setAttribute('y', h - 5);
    label.setAttribute('text-anchor', 'middle');
    label.setAttribute('font-family', 'DM Sans, sans-serif'); label.setAttribute('font-size', '10');
    label.setAttribute('fill', 'var(--text-muted)');
    label.textContent = (i + 1) + 's';
    svg.appendChild(label);
  }

  // Line path
  const points = data.map((v, i) => {
    const x = pad.left + (i / (data.length - 1 || 1)) * plotW;
    const y = pad.top + plotH - (v / maxWpm) * plotH;
    return `${x},${y}`;
  });

  // Fill
  const fillPath = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
  const firstX = pad.left;
  const lastX = pad.left + plotW;
  const bottom = pad.top + plotH;
  fillPath.setAttribute('points', `${firstX},${bottom} ${points.join(' ')} ${lastX},${bottom}`);
  fillPath.setAttribute('fill', 'var(--accent)'); fillPath.setAttribute('opacity', '0.1');
  svg.appendChild(fillPath);

  // Line
  const line = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
  line.setAttribute('points', points.join(' '));
  line.setAttribute('fill', 'none'); line.setAttribute('stroke', 'var(--accent)');
  line.setAttribute('stroke-width', '2'); line.setAttribute('stroke-linecap', 'round');
  line.setAttribute('stroke-linejoin', 'round');
  svg.appendChild(line);
}

/* === Storage === */
function saveResult(results) {
  const history = JSON.parse(localStorage.getItem('tt_history') || '[]');
  history.unshift({
    date: results.date,
    wpm: results.grossWpm,
    netWpm: results.netWpm,
    accuracy: results.accuracy,
    consistency: results.consistency,
    duration: results.duration,
    mode: results.mode
  });
  if (history.length > 50) history.length = 50;
  localStorage.setItem('tt_history', JSON.stringify(history));
}

function updateFooterBest() {
  const bests = JSON.parse(localStorage.getItem('tt_personalBests') || '{}');
  let best = 0, bestLabel = '';
  for (const key in bests) {
    if (bests[key] > best) {
      best = bests[key];
      const [dur, mode] = key.split('_');
      bestLabel = `${dur}s, ${capitalize(mode)} mode`;
    }
  }
  $('footerBest').textContent = best > 0 ? `Personal best: ${best} WPM (${bestLabel})` : 'Personal best: — WPM';
}

/* === History Drawer === */
function openHistory() {
  $('historyOverlay').classList.add('open');
  $('historyDrawer').classList.add('open');
  renderHistory();
}

function closeHistory() {
  $('historyOverlay').classList.remove('open');
  $('historyDrawer').classList.remove('open');
}

function renderHistory() {
  const history = JSON.parse(localStorage.getItem('tt_history') || '[]');
  const list = $('historyList');
  const summary = $('summaryStats');

  if (history.length === 0) {
    list.innerHTML = '<div class="history-empty">No tests completed yet</div>';
    summary.innerHTML = '';
    return;
  }

  // Summary
  const avgWpm = Math.round(history.reduce((s,h) => s + h.wpm, 0) / history.length);
  const bestWpm = Math.max(...history.map(h => h.wpm));
  const avgAcc = Math.round(history.reduce((s,h) => s + h.accuracy, 0) / history.length);
  const totalTime = history.reduce((s,h) => s + h.duration, 0);

  summary.innerHTML = `
    <div class="summary-stat"><span class="summary-stat-value">${avgWpm}</span><span class="summary-stat-label">Avg WPM</span></div>
    <div class="summary-stat"><span class="summary-stat-value">${bestWpm}</span><span class="summary-stat-label">Best WPM</span></div>
    <div class="summary-stat"><span class="summary-stat-value">${avgAcc}%</span><span class="summary-stat-label">Avg Accuracy</span></div>
    <div class="summary-stat"><span class="summary-stat-value">${history.length}</span><span class="summary-stat-label">Tests</span></div>
  `;

  list.innerHTML = history.map(h => {
    const d = new Date(h.date);
    const dateStr = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const timeStr = d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    return `<div class="history-item">
      <div class="history-item-left">
        <span class="history-item-wpm">${h.wpm} WPM</span>
        <span class="history-item-meta">${h.duration}s · ${capitalize(h.mode)}</span>
      </div>
      <div class="history-item-right">
        <span class="history-item-accuracy">${h.accuracy}%</span>
        <span class="history-item-date">${dateStr} ${timeStr}</span>
      </div>
    </div>`;
  }).join('');
}

function renderStats() {
  const history = JSON.parse(localStorage.getItem('tt_history') || '[]');
  const dashboard = $('statsDashboard');

  if (history.length === 0) {
    dashboard.innerHTML = '<div class="history-empty">No statistics yet</div>';
    return;
  }

  const avgWpm = Math.round(history.reduce((s,h) => s + h.wpm, 0) / history.length);
  const bestWpm = Math.max(...history.map(h => h.wpm));
  const avgAcc = Math.round(history.reduce((s,h) => s + h.accuracy, 0) / history.length);
  const totalTime = history.reduce((s,h) => s + h.duration, 0);
  const totalMin = Math.floor(totalTime / 60);

  dashboard.innerHTML = `
    <div class="stats-row">
      <div class="summary-stat"><span class="summary-stat-value">${avgWpm}</span><span class="summary-stat-label">Average WPM</span></div>
      <div class="summary-stat"><span class="summary-stat-value">${bestWpm}</span><span class="summary-stat-label">Best WPM</span></div>
    </div>
    <div class="stats-row">
      <div class="summary-stat"><span class="summary-stat-value">${avgAcc}%</span><span class="summary-stat-label">Average Accuracy</span></div>
      <div class="summary-stat"><span class="summary-stat-value">${history.length}</span><span class="summary-stat-label">Tests Completed</span></div>
    </div>
    <div class="stats-row">
      <div class="summary-stat"><span class="summary-stat-value">${totalMin}m</span><span class="summary-stat-label">Total Time Typing</span></div>
      <div class="summary-stat"><span class="summary-stat-value">${Math.round(history.reduce((s,h) => s + (h.consistency || 0), 0) / history.length)}%</span><span class="summary-stat-label">Avg Consistency</span></div>
    </div>
  `;
}

/* === Share === */
function shareResult() {
  const wpm = $('resultsWpm').textContent;
  const acc = $('resultAccuracy').textContent;
  const text = `I just typed ${wpm} WPM with ${acc} accuracy on freetypingtest.app!`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => showToast('Result copied!'));
  } else {
    showToast('Could not copy to clipboard');
  }
}

/* === Toast === */
function showToast(msg) {
  const container = $('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

/* === Utility === */
function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

/* === Init === */
document.addEventListener('DOMContentLoaded', init);
