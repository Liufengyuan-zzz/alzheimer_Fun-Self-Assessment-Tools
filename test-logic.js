// 高质量内联 SVG 图库
const svgs = {
    // 槽位1 & 2 物品
    apple: `<svg viewBox="0 0 100 100"><circle cx="50" cy="55" r="35" fill="#e74c3c"/><path d="M50 20 Q55 10 65 15" stroke="#7f8c8d" stroke-width="4" fill="none"/><path d="M50 20 Q40 5 30 20" fill="#2ecc71"/></svg>`,
    umbrella: `<svg viewBox="0 0 100 100"><path d="M10 50 A40 40 0 0 1 90 50 Z" fill="#3498db"/><path d="M50 50 V80 A10 10 0 0 0 70 80" stroke="#7f8c8d" stroke-width="6" fill="none"/></svg>`,
    camel: `<svg viewBox="0 0 100 100"><text x="50" y="80" font-size="75" text-anchor="middle">🐫</text></svg>`,
    lion: `<svg viewBox="0 0 100 100"><path d="M 50,5 L 60,15 L 75,10 L 80,25 L 95,35 L 85,50 L 95,65 L 80,75 L 75,90 L 60,85 L 50,95 L 40,85 L 25,90 L 20,75 L 5,65 L 15,50 L 5,35 L 20,25 L 25,10 L 40,15 Z" fill="#e67e22" stroke="#d35400" stroke-width="4" stroke-linejoin="round"/><circle cx="35" cy="35" r="10" fill="#f39c12"/><circle cx="65" cy="35" r="10" fill="#f39c12"/><circle cx="50" cy="55" r="25" fill="#f39c12"/><circle cx="50" cy="65" r="15" fill="#f1c40f"/><polygon points="45,60 55,60 50,65" fill="#333"/><path d="M 43,68 Q 50,75 50,65 Q 50,75 57,68" fill="none" stroke="#333" stroke-width="3" stroke-linecap="round"/><circle cx="42" cy="50" r="4" fill="#333"/><circle cx="58" cy="50" r="4" fill="#333"/><path d="M 38,43 Q 42,40 46,43 M 54,43 Q 58,40 62,43" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/></svg>`,
    bicycle: `<svg viewBox="0 0 100 100"><circle cx="25" cy="70" r="20" stroke="#333" stroke-width="4" fill="none"/><circle cx="75" cy="70" r="20" stroke="#333" stroke-width="4" fill="none"/><path d="M25 70 L40 40 L70 40 L75 70 M40 40 L30 30 M70 40 V25" stroke="#e74c3c" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`,
    scissors: `<svg viewBox="0 0 100 100"><circle cx="30" cy="30" r="10" stroke="#7f8c8d" stroke-width="6" fill="none"/><circle cx="30" cy="70" r="10" stroke="#7f8c8d" stroke-width="6" fill="none"/><path d="M38 36 L90 70 M38 64 L90 30" stroke="#bdc3c7" stroke-width="6" stroke-linecap="round"/><circle cx="50" cy="50" r="3" fill="#333"/></svg>`,
    red_balloon: `<svg viewBox="0 0 100 100"><ellipse cx="50" cy="40" rx="30" ry="35" fill="#e74c3c"/><path d="M50 75 Q40 85 50 100" stroke="#333" stroke-width="2" fill="none"/></svg>`,
    magnifying_glass: `<svg viewBox="0 0 100 100"><circle cx="40" cy="40" r="25" stroke="#34495e" stroke-width="8" fill="#ecf0f1"/><line x1="58" y1="58" x2="85" y2="85" stroke="#7f8c8d" stroke-width="12" stroke-linecap="round"/></svg>`,
    clock_face: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" stroke="#333" stroke-width="6" fill="#ecf0f1"/><line x1="50" y1="15" x2="50" y2="25" stroke="#333" stroke-width="4"/><line x1="50" y1="85" x2="50" y2="75" stroke="#333" stroke-width="4"/><line x1="15" y1="50" x2="25" y2="50" stroke="#333" stroke-width="4"/><line x1="85" y1="50" x2="75" y2="50" stroke="#333" stroke-width="4"/><line x1="50" y1="50" x2="50" y2="25" stroke="#c0392b" stroke-width="6" stroke-linecap="round"/><line x1="50" y1="50" x2="70" y2="50" stroke="#333" stroke-width="4" stroke-linecap="round"/></svg>`,
    green_tree: `<svg viewBox="0 0 100 100"><rect x="42" y="60" width="16" height="35" fill="#8e44ad"/><circle cx="50" cy="40" r="30" fill="#2ecc71"/><circle cx="35" cy="50" r="20" fill="#27ae60"/><circle cx="65" cy="50" r="20" fill="#27ae60"/></svg>`,
    key: `<svg viewBox="0 0 100 100"><circle cx="30" cy="50" r="15" stroke="#f1c40f" stroke-width="8" fill="none"/><line x1="45" y1="50" x2="85" y2="50" stroke="#f1c40f" stroke-width="8" stroke-linecap="round"/><line x1="70" y1="50" x2="70" y2="70" stroke="#f1c40f" stroke-width="8" stroke-linecap="round"/><line x1="80" y1="50" x2="80" y2="65" stroke="#f1c40f" stroke-width="8" stroke-linecap="round"/></svg>`,
    chair: `<svg viewBox="0 0 100 100"><text x="50" y="80" font-size="75" text-anchor="middle">🪑</text></svg>`,
    
    // 槽位3 时钟选项 
    c_correct: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" stroke="#333" stroke-width="4" fill="white"/><line x1="50" y1="50" x2="35" y2="25" stroke="#333" stroke-width="6" stroke-linecap="round"/><line x1="50" y1="50" x2="75" y2="30" stroke="#333" stroke-width="4" stroke-linecap="round"/></svg>`,
    c_wrong1: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" stroke="#333" stroke-width="4" fill="white"/><line x1="50" y1="50" x2="25" y2="50" stroke="#333" stroke-width="6" stroke-linecap="round"/><line x1="50" y1="50" x2="60" y2="80" stroke="#333" stroke-width="4" stroke-linecap="round"/></svg>`,
    c_wrong2: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" stroke="#333" stroke-width="4" fill="white"/><line x1="50" y1="50" x2="50" y2="20" stroke="#333" stroke-width="6" stroke-linecap="round"/><line x1="50" y1="50" x2="25" y2="70" stroke="#333" stroke-width="4" stroke-linecap="round"/></svg>`,
    c_wrong3: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" stroke="#333" stroke-width="4" fill="white"/><line x1="50" y1="50" x2="65" y2="20" stroke="#333" stroke-width="6" stroke-linecap="round"/><line x1="50" y1="50" x2="80" y2="60" stroke="#333" stroke-width="4" stroke-linecap="round"/></svg>`,
    
    // 槽位3 五边形
    p_correct: `<svg viewBox="0 0 100 100"><polygon points="30,20 60,20 70,50 45,70 20,50" fill="transparent" stroke="#333" stroke-width="3"/><polygon points="45,40 75,40 85,70 60,90 35,70" fill="transparent" stroke="#333" stroke-width="3"/></svg>`,
    p_wrong1: `<svg viewBox="0 0 100 100"><polygon points="20,20 50,20 60,50 35,70 10,50" fill="transparent" stroke="#333" stroke-width="3"/><polygon points="65,30 95,30 95,60 65,60" fill="transparent" stroke="#333" stroke-width="3"/></svg>`,
    p_wrong2: `<svg viewBox="0 0 100 100"><polygon points="30,20 60,20 70,50 45,70 20,50" fill="transparent" stroke="#333" stroke-width="3"/><circle cx="70" cy="70" r="20" fill="transparent" stroke="#333" stroke-width="3"/></svg>`,
    p_wrong3: `<svg viewBox="0 0 100 100"><polygon points="40,20 70,20 80,50 55,70 30,50" fill="transparent" stroke="#333" stroke-width="3"/><polygon points="30,40 20,70 50,80 40,50" fill="transparent" stroke="#333" stroke-width="3"/></svg>`,

    // 槽位4 情绪
    face_happy: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#f1c40f"/><path d="M 30 60 Q 50 80 70 60" stroke="#333" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="35" cy="40" r="5" fill="#333"/><circle cx="65" cy="40" r="5" fill="#333"/></svg>`,
    face_sad: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#f1c40f"/><path d="M 30 70 Q 50 50 70 70" stroke="#333" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="35" cy="45" r="5" fill="#333"/><circle cx="65" cy="45" r="5" fill="#333"/></svg>`,
    face_angry: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#f1c40f"/><path d="M 30 70 Q 50 60 70 70" stroke="#333" stroke-width="4" fill="none" stroke-linecap="round"/><line x1="25" y1="30" x2="40" y2="40" stroke="#333" stroke-width="4" stroke-linecap="round"/><line x1="75" y1="30" x2="60" y2="40" stroke="#333" stroke-width="4" stroke-linecap="round"/><circle cx="35" cy="45" r="4" fill="#333"/><circle cx="65" cy="45" r="4" fill="#333"/></svg>`,
    face_surprise: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#f1c40f"/><ellipse cx="50" cy="70" rx="10" ry="15" fill="#333"/><circle cx="35" cy="40" r="6" fill="#333"/><circle cx="65" cy="40" r="6" fill="#333"/></svg>`,
    
    // 槽位4 剪影 (简单多边形代表)
    sil_dog: `<svg viewBox="0 0 100 100"><g fill="#333"><ellipse cx="50" cy="50" rx="25" ry="15"/><ellipse cx="75" cy="35" rx="12" ry="10"/><polygon points="60,40 75,35 70,50 50,55"/><line x1="35" y1="60" x2="33" y2="85" stroke="#333" stroke-width="7" stroke-linecap="round"/><line x1="45" y1="60" x2="43" y2="85" stroke="#333" stroke-width="7" stroke-linecap="round"/><line x1="60" y1="60" x2="62" y2="85" stroke="#333" stroke-width="7" stroke-linecap="round"/><line x1="70" y1="60" x2="72" y2="85" stroke="#333" stroke-width="7" stroke-linecap="round"/><path d="M 25,45 Q 10,30 15,20" stroke="#333" stroke-width="6" stroke-linecap="round" fill="none"/><ellipse cx="85" cy="35" rx="8" ry="6"/><ellipse cx="70" cy="38" rx="4" ry="12"/></g></svg>`,
    sil_cat: `<svg viewBox="0 0 100 100"><g fill="#333"><circle cx="50" cy="65" r="25"/><circle cx="45" cy="40" r="18"/><circle cx="60" cy="25" r="12"/><polygon points="56,15 65,3 68,18"/><polygon points="48,18 52,5 57,15"/><path d="M 30,70 Q 5,85 15,40" stroke="#333" stroke-width="6" stroke-linecap="round" fill="none"/></g></svg>`,
    sil_elephant: `<svg viewBox="0 0 100 100"><g fill="#333"><circle cx="60" cy="50" r="25"/><circle cx="35" cy="45" r="18"/><path d="M 20,50 Q 5,75 25,85" stroke="#333" stroke-width="12" stroke-linecap="round" fill="none"/><rect x="40" y="65" width="12" height="25" rx="4"/><rect x="52" y="65" width="12" height="25" rx="4"/><rect x="68" y="65" width="12" height="25" rx="4"/><line x1="85" y1="50" x2="95" y2="70" stroke="#333" stroke-width="4" stroke-linecap="round"/><path d="M 40,35 Q 30,50 45,65" stroke="#fff" stroke-width="2" fill="none" opacity="0.8"/></g></svg>`,
    sil_bird: `<svg viewBox="0 0 100 100"><g fill="#333"><ellipse cx="50" cy="50" rx="25" ry="15" transform="rotate(-20 50 50)"/><circle cx="75" cy="35" r="12"/><polygon points="85,32 100,38 85,42"/><path d="M 25,55 L 5,70 L 15,45 Z"/><path d="M 50,45 Q 60,70 30,65 Z" fill="#333" stroke="#fff" stroke-width="2"/><line x1="45" y1="60" x2="40" y2="85" stroke="#333" stroke-width="4" stroke-linecap="round"/><line x1="55" y1="60" x2="50" y2="85" stroke="#333" stroke-width="4" stroke-linecap="round"/></g></svg>`
};

// 题库构建
const questions = [
    { // Slot 1: Name 3 items
        type: 'inputBoxes',
        A: { title: "看图命名 (此题不限时)", desc: "请看下面的三张图片，并在下方框内分别输入它们的名称。",
             images: ['apple', 'umbrella', 'camel'], valid: [['苹果'], ['雨伞', '伞'], ['骆驼']], score: 3 },
        B: { title: "看图命名 (此题不限时)", desc: "请看下面的三张图片，并在下方框内分别输入它们的名称。",
             images: ['lion', 'bicycle', 'scissors'], valid: [['狮子'], ['自行车', '单车'], ['剪刀']], score: 3 }
    },
    { // Slot 2: Delay memory
        type: 'memorize',
        A: { title: "记忆测试", desc: "请在接下来的10秒内，尽力记住下面的三样东西。稍后我们将测试您的回忆情况。",
             images: ['red_balloon', 'magnifying_glass', 'clock_face'], valid: [['气球', '红气球'], ['放大镜'], ['钟表', '钟', '表']], score: 0 },
        B: { title: "记忆测试", desc: "请在接下来的10秒内，尽力记住下面的三样东西。稍后我们将测试您的回忆情况。",
             images: ['green_tree', 'key', 'chair'], valid: [['树', '绿树', '大树'], ['钥匙'], ['椅子', '板凳']], score: 0 }
    },
    { // Slot 3: Visuospatial
        type: 'selectOne',
        A: { title: "形状与执行", desc: "请从以下四个选项中，选出时间指示为“11点10分”的正确时钟。",
             options: [ {svg:'c_wrong1'}, {svg:'c_wrong2'}, {svg:'c_correct', correct:true}, {svg:'c_wrong3'} ], score: 3 },
        B: { title: "形状与执行", desc: "请从以下四个选项中，选出两个五边形完全正确交叉重叠的图形。",
             options: [ {svg:'p_wrong1'}, {svg:'p_correct', correct:true}, {svg:'p_wrong2'}, {svg:'p_wrong3'} ], score: 3 }
    },
    { // Slot 4: Perception
        type: 'matchLabels',
        A: { title: "情绪识别", desc: "请根据图片，在下拉框中选择正确的表情情绪。",
             images: ['face_happy', 'face_sad', 'face_angry', 'face_surprise'], labels: ["快乐", "悲伤", "愤怒", "惊讶"], score: 4 },
        B: { title: "剪影识别", desc: "请根据图片，在下拉框中选择正确的动物名字。",
             images: ['sil_dog', 'sil_cat', 'sil_elephant', 'sil_bird'], labels: ["狗", "猫", "大象", "鸟"], score: 4 }
    },
    { // Slot 5: Orientation/Math
        type: 'inputBoxes',
        A: { title: "注意力与定向", desc: "请在以下空格中输入当前的年份、月份、星期几及季节（例如：2026、3、四、春）。",
             labels: ["年份", "月份", "星期几", "季节"], isDynamicDate: true, score: 4 },
        B: { title: "注意力计算", desc: "连续减法：100减7等于多少？请把每次减7的结果依次填入下方框内。",
             labels: ["100减7=", "再减7=", "再减7=", "再减7="], valid: [["93"], ["86"], ["79"], ["72"]], score: 4 }
    },
    { // Slot 6: Fluency
        type: 'textareaFluency',
        A: { title: "词语流畅性", desc: "请在1分钟内，在下方文本框中尽可能多地输入你能想到的“动物”名称。每一种动物之间用【空格】或者【逗号】隔开。",
             category: "动物", score: 3 },
        B: { title: "词语流畅性", desc: "请在1分钟内，在下方文本框中尽可能多地输入你能想到的“水果和蔬菜”名称。每一种之间用【空格】或者【逗号】隔开。",
             category: "果蔬", score: 3 }
    },
    { // Slot 7: Daily AD8 variation
        type: 'yesNo',
        A: { title: "日常记忆与行为", desc: "回顾过去几周内，判断自己是否出现了以下情况：",
             questions: ["您最近是否经常忘记重要的约会或事情？", "您是否在熟悉的地方（如自家小区）迷路过？", "您是否反复问同一个问题？", "您是否感到难以处理熟悉的财务事务（如算账、缴费）？"], score: 4 },
        B: { title: "日常记忆与行为", desc: "回顾过去几周内，判断自己是否出现了以下情况：",
             questions: ["您是否经常找不到常用物品（如钥匙、眼镜）？", "您在叫熟人的名字时是否经常感到困难？", "您近一年性格是否发生明显改变（变得易怒或多疑）？", "您是否感到难以学会使用新的简单家电或工具？"], score: 4 }
    },
    { // Slot 8: Recall
        type: 'inputBoxes',
        A: { title: "延迟回忆", desc: "在这个测试最开始时，我们让您记住了三样东西。现在请您回忆并把它们输入到下框中。",
             labels: ["物品1", "物品2", "物品3"], score: 3 },  // matches Slot 2 memory logically filled later
        B: { title: "延迟回忆", desc: "在这个测试最开始时，我们让您记住了三样东西。现在请您回忆并把它们输入到下框中。",
             labels: ["物品1", "物品2", "物品3"], score: 3 }
    }
];

// 测试状态
let currentTest = [];
let currentIndex = 0;
let totalScore = 0;
let timerInterval = null;

// 初始化测试
function startTest() {
    // 随机选择 Variant
    currentTest = [];
    let isVariantB = Math.random() > 0.5 ? 'B' : 'A';
    
    questions.forEach((slot, index) => {
        let variant = Math.random() > 0.5 ? 'B' : 'A';
        // Slot 8 必须与 Slot 2 的 variant 一致
        if (index === 7) variant = currentTest[1].variant; 
        
        let q = slot[variant];
        q.slotType = slot.type;
        q.variant = variant;
        
        // Dynamic matching logic for Slot 8
        if (index === 7) {
            q.valid = questions[1][variant].valid;
        }
        
        currentTest.push(q);
    });
    
    document.getElementById('view-intro').classList.remove('active');
    document.getElementById('progressContainer').style.display = 'block';
    
    currentIndex = 0;
    totalScore = 0;
    renderQuestion();
}

// 渲染核心逻辑
function renderQuestion() {
    updateProgress();
    const q = currentTest[currentIndex];
    const container = document.getElementById('view-quiz');
    
    // 生成题目通用结构
    let html = `
        <h2 class="question-title">题目 ${currentIndex + 1}/8：${q.title}</h2>
        <p class="question-desc">${q.desc}</p>
    `;

    if (q.slotType === 'inputBoxes' && q.images) {
        html += `<div class="svg-grid">`;
        q.images.forEach(img => html += `<div class="svg-card"><div class="svg-image">${svgs[img]}</div></div>`);
        html += `</div>`;
        html += `<div id="inputs-container">`;
        q.images.forEach((_, i) => html += `<div class="input-group"><input type="text" class="input-field" placeholder="请输入第${i+1}张图片的名称" id="q_inp_${i}"></div>`);
        html += `</div>`;
        html += `<button class="btn" onclick="submitInputBoxes()">下一题</button>`;
    }
    else if (q.slotType === 'memorize') {
        html += `<div class="svg-grid">`;
        q.images.forEach(img => html += `<div class="svg-card"><div class="svg-image">${svgs[img]}</div></div>`);
        html += `</div>`;
        html += `<button class="btn" onclick="nextQuestion()">我已经记住了，下一题</button>`;
    }
    else if (q.slotType === 'selectOne') {
        // shuffle options visually
        let ops = [...q.options].sort(() => 0.5 - Math.random());
        html += `<div class="options-grid">`;
        ops.forEach((opt, i) => {
            html += `<div class="option-card" onclick="selectCard(this, ${opt.correct ? 1 : 0})">${svgs[opt.svg]}</div>`;
        });
        html += `</div>`;
        html += `<button class="btn" id="nextBtn" disabled onclick="submitSelectOne()">下一题</button>`;
    }
    else if (q.slotType === 'matchLabels') {
        html += `<div class="svg-grid" style="grid-template-columns: repeat(2, 1fr);">`;
        
        let shuffledLabels = [...q.labels].sort(() => 0.5 - Math.random());
        q.images.forEach((img, i) => {
            let selectHtml = `<select class="input-field" id="q_sel_${i}" style="margin-top:8px"><option value="">请选择...</option>`;
            shuffledLabels.forEach(l => selectHtml += `<option value="${l}">${l}</option>`);
            selectHtml += `</select>`;
            html += `<div class="svg-card" style="padding:10px"><div class="svg-image">${svgs[img]}</div>${selectHtml}</div>`;
        });
        html += `</div>`;
        html += `<button class="btn" onclick="submitMatchLabels()">下一题</button>`;
    }
    else if (q.slotType === 'inputBoxes' && q.labels) {
        html += `<div id="inputs-container">`;
        q.labels.forEach((label, i) => {
            html += `<div class="input-group"><label>${label}</label><input type="text" class="input-field" id="q_inp_${i}"></div>`;
        });
        html += `</div>`;
        html += `<button class="btn" onclick="submitLabelsInput()">下一题</button>`;
    }
    else if (q.slotType === 'textareaFluency') {
        html += `<div class="timer-box" id="timerDisplay">01:00</div>`;
        html += `<div class="input-group"><textarea class="input-field" rows="6" id="q_textarea" placeholder="输入你想到的词语..."></textarea></div>`;
        html += `<button class="btn" id="fluentBtn" onclick="submitFluency()">下一题 (可提前结束)</button>`;
        setTimeout(startTimer, 100);
    }
    else if (q.slotType === 'yesNo') {
        q.questions.forEach((txt, i) => {
            html += `<div class="yn-item">
                        <div class="yn-text">${i+1}. ${txt}</div>
                        <div class="yn-buttons">
                            <div class="yn-btn" onclick="selectYn(this, ${i}, 1)">是</div>
                            <div class="yn-btn" onclick="selectYn(this, ${i}, 0)">否</div>
                        </div>
                    </div>`;
        });
        html += `<button class="btn" onclick="submitYesNo()">下一题</button>`;
        window.ynAnswers = [-1, -1, -1, -1];
    }
    
    container.innerHTML = html;
    container.classList.add('active');
}

// 提交逻辑
function submitInputBoxes() {
    let q = currentTest[currentIndex];
    let score = 0;
    q.valid.forEach((valArr, i) => {
        let val = document.getElementById('q_inp_' + i).value.trim();
        if (valArr.some(v => val.includes(v))) score++;
    });
    totalScore += score;
    nextQuestion();
}

function submitLabelsInput() {
    let q = currentTest[currentIndex];
    let score = 0;
    if (q.isDynamicDate) {
        let d = new Date();
        let y = d.getFullYear().toString();
        let m = (d.getMonth()+1).toString();
        let wd = ["日","一","二","三","四","五","六"][d.getDay()];
        let isRight = (input, target) => document.getElementById(input).value.includes(target);
        
        if (isRight('q_inp_0', y)) score++;
        if (isRight('q_inp_1', m)) score++;
        if (isRight('q_inp_2', wd)) score++;
        let seasonInput = document.getElementById('q_inp_3').value;
        if (seasonInput.length > 0) score++; // 季节宽容度较高
    } else {
        q.valid.forEach((valArr, i) => {
            if (document.getElementById('q_inp_'+i).value.trim() === valArr[0]) score++;
        });
    }
    totalScore += score;
    nextQuestion();
}

let autoSelectScore = 0;
function selectCard(card, isCorrect) {
    document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    autoSelectScore = isCorrect ? currentTest[currentIndex].score : 0;
    document.getElementById('nextBtn').disabled = false;
}
function submitSelectOne() {
    totalScore += autoSelectScore;
    nextQuestion();
}

function submitMatchLabels() {
    let q = currentTest[currentIndex];
    let score = 0;
    q.labels.forEach((trueLabel, i) => {
        if (document.getElementById('q_sel_'+i).value === trueLabel) score++;
    });
    totalScore += score;
    nextQuestion();
}

window.ynAnswers = [];
function selectYn(btn, idx, val) {
    let parent = btn.parentElement;
    parent.querySelectorAll('.yn-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    window.ynAnswers[idx] = val;
}
function submitYesNo() {
    if (window.ynAnswers.includes(-1)) {
        alert("请回答完所有问题"); return;
    }
    // "否" is healthy (+1 pt)
    let score = window.ynAnswers.filter(a => a === 0).length;
    totalScore += score;
    nextQuestion();
}

function submitFluency() {
    clearInterval(timerInterval);
    let val = document.getElementById('q_textarea').value;
    let words = val.split(/[,\s，、]+/).filter(w => w.trim().length > 0);
    // basic uniqueness
    let uniqueWords = [...new Set(words)]; 
    let count = uniqueWords.length;
    let score = 0;
    if (count >= 15) score = 3;
    else if (count >= 10) score = 2;
    else if (count >= 5) score = 1;
    totalScore += score;
    nextQuestion();
}

function startTimer() {
    let time = 60;
    let disp = document.getElementById('timerDisplay');
    timerInterval = setInterval(() => {
        time--;
        if(time < 0) { clearInterval(timerInterval); submitFluency(); return; }
        let sec = (time < 10) ? '0' + time : time;
        disp.innerText = `00:${sec}`;
    }, 1000);
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex >= currentTest.length) {
        showResult();
    } else {
        document.getElementById('view-quiz').classList.remove('active');
        // trigger reflow for css animation
        void document.getElementById('view-quiz').offsetWidth;
        renderQuestion();
    }
}

function updateProgress() {
    let percent = (currentIndex / 8) * 100;
    document.getElementById('progressBar').style.width = percent + '%';
}

function showResult() {
    document.getElementById('view-quiz').style.display = 'none';
    document.getElementById('progressContainer').style.display = 'none';
    
    let resView = document.getElementById('view-result');
    resView.classList.add('active');
    
    let circle = document.getElementById('resultCircle');
    document.getElementById('resultScore').innerText = `${totalScore}/24`;
    circle.innerText = totalScore;
    
    let desc = "";
    if (totalScore >= 20) {
        circle.style.borderColor = 'var(--low-risk)';
        circle.style.color = 'var(--low-risk)';
        document.getElementById('resultTitle').innerText = "🟢 低风险";
        desc = "您的认知功能表现良好！请继续保持健康生活方式：规律运动、均衡饮食、保持社交、持续学习。建议每年复查一次。";
    } else if (totalScore >= 13) {
        circle.style.borderColor = 'var(--mid-risk)';
        circle.style.color = 'var(--mid-risk)';
        document.getElementById('resultTitle').innerText = "🟡 中风险";
        desc = "您可能存在轻度的认知功能下降。<br><br>建议：<br>1) 1个月内到医院神经内科就诊进一步全面检查。<br>2) 排查高血压、糖尿病等危险因素。<br>3) 增加益智和社交类认知训练活动。";
    } else {
        circle.style.borderColor = 'var(--high-risk)';
        circle.style.color = 'var(--high-risk)';
        document.getElementById('resultTitle').innerText = "🔴 高风险";
        desc = "您的认知功能评估表现下降较明显，继续存在风险。<br><br>建议：<br>请尽快前往专业医院的‘神经内科’或‘记忆门诊’进行专业量表评估与全方位医疗检查，早发现早干预非常关键。";
    }
    document.getElementById('resultDesc').innerHTML = desc;
}
