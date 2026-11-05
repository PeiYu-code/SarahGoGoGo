// 已填入您的 Google Apps Script Web App 部署 URL
const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbxYLpKNLpg_Keau68B-xMg-kZSfm_Z4luO-PcyzWjM0hhhuotfe2KPRHOjD7GVKLq9w/exec';

const wordBank = [
  // --- A 開頭 ---
  { eng: 'a (an)', ch: '一個、一(冠詞)' },
  { eng: 'a few', ch: '一些、幾個(修飾可數)' },
  { eng: 'a little', ch: '一些、少許(修飾不可數)' },
  { eng: 'a lot', ch: '許多、大量' },
  { eng: 'a.m.', ch: '上午、午前' },
  { eng: 'able', ch: '能夠的(adj.)' },
  { eng: 'about', ch: '關於、大約(prep., adv.)' },
  { eng: 'above', ch: '在...上方(prep.)' },
  { eng: 'abroad', ch: '在國外、到國外(adv.)' },
  { eng: 'act', ch: '行動、表演(v., n.)' },
  { eng: 'action', ch: '動作、行動(n.)' },
  { eng: 'across', ch: '穿越、在...對面(prep.)' },
  { eng: 'actor', ch: '男演員(n.)' },
  { eng: 'actress', ch: '女演員(n.)' },
  { eng: 'afraid', ch: '害怕的(adj.)' },
  { eng: 'after', ch: '在...之後(prep., conj.)' },
  { eng: 'afternoon', ch: '下午(n.)' },
  { eng: 'again', ch: '再一次、又(adv.)' },
  { eng: 'age', ch: '年齡、時代(n.)' },
  { eng: 'ago', ch: '以前(adv.)' },
  { eng: 'agree', ch: '同意(v.)' },
  { eng: 'ahead', ch: '在前方、向前(adv.)' },
  { eng: 'air', ch: '空氣、大氣(n.)' },
  { eng: 'airplane', ch: '飛機(n.)' },
  { eng: 'airport', ch: '機場(n.)' },
  { eng: 'all', ch: '全部、所有(pron., adj.)' },
  { eng: 'almost', ch: '幾乎、差不多(adv.)' },
  { eng: 'along', ch: '沿著、順著(prep.)' },
  { eng: 'already', ch: '已經(adv.)' },
  { eng: 'also', ch: '也、亦(adv.)' },
  { eng: 'always', ch: '總是、一直(adv.)' },
  { eng: 'America', ch: '美國(n.)' },
  { eng: 'American', ch: '美國人、美國的(n., adj.)' },
  { eng: 'and', ch: '和、與(conj.)' },
  { eng: 'angry', ch: '生氣的(adj.)' },
  { eng: 'animal', ch: '動物(n.)' },
  { eng: 'another', ch: '另一個、又一個(pron., adj.)' },
  { eng: 'answer', ch: '回答、答案(v., n.)' },
  { eng: 'ant', ch: '螞蟻(n.)' },
  { eng: 'any', ch: '任何的、任一(adj., pron.)' },
  { eng: 'anyone', ch: '任何人(pron.)' },
  { eng: 'anything', ch: '任何事物(pron.)' },
  { eng: 'apartment', ch: '公寓(n.)' },
  { eng: 'appear', ch: '出現、顯現(v.)' },
  { eng: 'apple', ch: '蘋果(n.)' },
  { eng: 'April', ch: '四月(n.)' },
  { eng: 'arm', ch: '手臂(n.)' },
  { eng: 'around', ch: '環繞、在...周圍(prep.)' },
  { eng: 'arrive', ch: '到達、抵達(v.)' },
  { eng: 'art', ch: '藝術、美術(n.)' },
  { eng: 'as', ch: '如同、作為、當...時(prep., conj.)' },
  { eng: 'ask', ch: '詢問、要求(v.)' },
  { eng: 'at', ch: '在... (地方/時間)(prep.)' },
  { eng: 'attack', ch: '攻擊、進攻(v., n.)' },
  { eng: 'August', ch: '八月(n.)' },
  { eng: 'aunt', ch: '姑姑、阿姨、舅媽(n.)' },
  { eng: 'autumn', ch: '秋天(n.)' },
  { eng: 'away', ch: '離開、遠離(adv.)' },

  // --- B 開頭 ---
  { eng: 'baby', ch: '嬰兒(n.)' },
  { eng: 'back', ch: '後面、背部、回原處(n., adv.)' },
  { eng: 'bad', ch: '壞的、不好的(adj.)' },
  { eng: 'badminton', ch: '羽球(n.)' },
  { eng: 'bag', ch: '袋子、包包(n.)' },
  { eng: 'bake', ch: '烘焙、烤(v.)' },
  { eng: 'bakery', ch: '麵包店(n.)' },
  { eng: 'balcony', ch: '陽台(n.)' },
  { eng: 'ball', ch: '球(n.)' },
  { eng: 'banana', ch: '香蕉(n.)' },
  { eng: 'band', ch: '樂團、帶子(n.)' },
  { eng: 'bank', ch: '銀行、河岸(n.)' },
  { eng: 'barbecue', ch: '烤肉(n., v.)' },
  { eng: 'base', ch: '底部、基底(n.)' },
  { eng: 'baseball', ch: '棒球(n.)' },
  { eng: 'basket', ch: '籃子(n.)' },
  { eng: 'basketball', ch: '籃球(n.)' },
  { eng: 'bat', ch: '球棒、蝙蝠(n.)' },
  { eng: 'bath', ch: '洗澡、浴缸(n.)' },
  { eng: 'bathroom', ch: '浴室、廁所(n.)' },
  { eng: 'be', ch: '是、為(v.)' },
  { eng: 'beach', ch: '海灘(n.)' },
  { eng: 'bean', ch: '豆子(n.)' },
  { eng: 'bear', ch: '熊、忍受(n., v.)' },
  { eng: 'beautiful', ch: '美麗的(adj.)' },
  { eng: 'because', ch: '因為(conj.)' },
  { eng: 'become', ch: '變成、成為(v.)' },
  { eng: 'bed', ch: '床(n.)' },
  { eng: 'bedroom', ch: '臥室(n.)' },
  { eng: 'bee', ch: '蜜蜂(n.)' },
  { eng: 'beef', ch: '牛肉(n.)' },
  { eng: 'before', ch: '在...之前(prep., conj.)' },
  { eng: 'begin', ch: '開始(v.)' },
  { eng: 'behind', ch: '在...後面(prep.)' },
  { eng: 'believe', ch: '相信(v.)' },
  { eng: 'bell', ch: '鈴、鐘(n.)' },
  { eng: 'belong', ch: '屬於(v.)' },
  { eng: 'below', ch: '在...下方(prep., adv.)' },
  { eng: 'belt', ch: '皮帶、腰帶(n.)' },
  { eng: 'bench', ch: '長凳、長椅(n.)' },
  { eng: 'beside', ch: '在...旁邊(prep.)' },
  { eng: 'between', ch: '在...之間(prep.)' },
  { eng: 'bicycle', ch: '腳踏車(n.)' },
  { eng: 'big', ch: '大的(adj.)' },
  { eng: 'bird', ch: '鳥(n.)' },
  { eng: 'birthday', ch: '生日(n.)' },
  { eng: 'bite', ch: '咬(v., n.)' },
  { eng: 'black', ch: '黑色的、黑色(adj., n.)' },
  { eng: 'blackboard', ch: '黑板(n.)' },
  { eng: 'blanket', ch: '毛毯、毯子(n.)' },
  { eng: 'blind', ch: '盲目的、百葉窗(adj., n.)' },
  { eng: 'block', ch: '街區、木塊、阻擋(n., v.)' },
  { eng: 'blow', ch: '吹、吹氣(v.)' },
  { eng: 'blue', ch: '藍色的、藍色(adj., n.)' },
  { eng: 'boat', ch: '船、小舟(n.)' },
  { eng: 'body', ch: '身體(n.)' },
  { eng: 'boil', ch: '煮沸、沸騰(v.)' },
  { eng: 'book', ch: '書本、預訂(n., v.)' },
  { eng: 'bookstore', ch: '書局、書店(n.)' },
  { eng: 'bored', ch: '感到無聊的(adj.)' },
  { eng: 'boring', ch: '令人無聊的(adj.)' },
  { eng: 'born', ch: '出生、天生的(adj.)' },
  { eng: 'borrow', ch: '借入、借用(v.)' },
  { eng: 'boss', ch: '老闆、上司(n.)' },
  { eng: 'both', ch: '兩者都(pron., adj.)' },
  { eng: 'bottle', ch: '瓶子(n.)' },
  { eng: 'bottom', ch: '底部、底端(n.)' },
  { eng: 'bow', ch: '鞠躬、蝴蝶結(v., n.)' },
  { eng: 'bowl', ch: '碗(n.)' },
  { eng: 'box', ch: '盒子(n.)' },
  { eng: 'boy', ch: '男孩(n.)' },
  { eng: 'bread', ch: '麵包(n.)' },
  { eng: 'break', ch: '打破、休息(v., n.)' },
  { eng: 'breakfast', ch: '早餐(n.)' },
  { eng: 'bridge', ch: '橋樑(n.)' },
  { eng: 'bright', ch: '明亮的、聰明的(adj.)' },
  { eng: 'bring', ch: '帶來、拿來(v.)' },
  { eng: 'brother', ch: '兄弟(n.)' },
  { eng: 'brown', ch: '棕色的、棕色(adj., n.)' },
  { eng: 'brush', ch: '刷子、刷(n., v.)' },
  { eng: 'bug', ch: '蟲子、昆蟲(n.)' },
  { eng: 'build', ch: '建造、建築(v.)' },
  { eng: 'bun', ch: '小圓麵包、饅頭(n.)' },
  { eng: 'burn', ch: '燃燒、燒傷(v.)' },
  { eng: 'bus', ch: '公車、巴士(n.)' },
  { eng: 'business', ch: '商業、生意(n.)' },
  { eng: 'businessman', ch: '商人(n.)' },
  { eng: 'busy', ch: '忙碌的(adj.)' },
  { eng: 'but', ch: '但是、然而(conj.)' },
  { eng: 'butter', ch: '奶油(n.)' },
  { eng: 'butterfly', ch: '蝴蝶(n.)' },
  { eng: 'buy', ch: '購買、買(v.)' },
  { eng: 'by', ch: '藉由、在...旁邊(prep.)' },

  // --- C 開頭 ---
  { eng: 'cage', ch: '籠子(n.)' },
  { eng: 'cake', ch: '蛋糕(n.)' },
  { eng: 'call', ch: '打電話、呼叫、稱呼(v., n.)' },
  { eng: 'camera', ch: '相機(n.)' },
  { eng: 'camp', ch: '露營、陣營(v., n.)' },
  { eng: 'can', ch: '罐頭、能夠、可以(n., v.aux)' },
  { eng: 'candle', ch: '蠟燭(n.)' },
  { eng: 'candy', ch: '糖果(n.)' },
  { eng: 'cap', ch: '鴨舌帽、蓋子(n.)' },
  { eng: 'car', ch: '汽車(n.)' },
  { eng: 'card', ch: '卡片、紙牌(n.)' },
  { eng: 'care', ch: '照顧、關心、在乎(v., n.)' },
  { eng: 'careful', ch: '小心翼翼的、仔細的(adj.)' },
  { eng: 'carry', ch: '攜帶、搬運(v.)' },
  { eng: 'case', ch: '箱子、情況、案件(n.)' },
  { eng: 'castle', ch: '城堡(n.)' },
  { eng: 'cat', ch: '貓(n.)' },
  { eng: 'catch', ch: '抓住、接住(v.)' },
  { eng: 'celebrate', ch: '慶祝(v.)' },
  { eng: 'cellphone', ch: '手機、行動電話(n.)' },
  { eng: 'cent', ch: '分、一分錢(n.)' },
  { eng: 'center', ch: '中心、中央(n.)' },
  { eng: 'centimeter', ch: '公分(n.)' },
  { eng: 'chair', ch: '椅子(n.)' },
  { eng: 'chalk', ch: '粉筆(n.)' },
  { eng: 'chance', ch: '機會、可能性(n.)' },
  { eng: 'change', ch: '改變、零錢(v., n.)' },
  { eng: 'cheap', ch: '便宜的(adj.)' },
  { eng: 'cheat', ch: '欺騙、作弊(v.)' }
];

let currentQueue = [];
let activeEng = [null, null, null, null, null];
let activeCh = [null, null, null, null, null];
let selectedEngSlot = null;
let selectedChSlot = null;
let startTime = 0;
let timerInterval = null;
let completedCount = 0;
// 追蹤答錯相關數據
let wrongCount = 0;
let wrongWordsSet = new Set();

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function initGame() {
  clearInterval(timerInterval);
  completedCount = 0;
  wrongCount = 0;
  wrongWordsSet.clear();
  selectedEngSlot = null;
  selectedChSlot = null;
  document.getElementById('progress').textContent = `0 / ${wordBank.length}`;
  document.getElementById('timer').textContent = '00:00';
  document.getElementById('result-modal').classList.add('hidden');
  
  const indexedWords = wordBank.map((item, index) => ({ ...item, id: index }));
  currentQueue = shuffle(indexedWords);
  
  // 初始化前 5 個單字
  const initialItems = [];
  for (let i = 0; i < 5 && currentQueue.length > 0; i++) {
    initialItems.push(currentQueue.pop());
  }
  activeEng = [...initialItems];
  activeCh = shuffle([...initialItems]);
  
  // 開局初始化不執行 fade out 動畫，直接渲染
  updateSlotContentsSmoothly(-1, false);
  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 1000);
}

function updateSlotContentsSmoothly(replacedEngIndex = -1, animate = true) {
  const engSlots = document.querySelectorAll('#english-column .slot');
  const chSlots = document.querySelectorAll('#chinese-column .slot');
  
  // 定義要觸發 fade 動畫的文字元素 (Span)
  let fadingSpans = [];
  if (animate) {
    chSlots.forEach(slot => {
      const span = slot.querySelector('.slot-text');
      if (span) fadingSpans.push(span);
    });
    if (replacedEngIndex !== -1 && replacedEngIndex >= 0 && replacedEngIndex < engSlots.length) {
      const span = engSlots[replacedEngIndex].querySelector('.slot-text');
      if (span) fadingSpans.push(span);
    }
    fadingSpans.forEach(span => span.classList.add('fade-out'));
    
    setTimeout(() => {
      renderSlotsContent(engSlots, chSlots);
      fadingSpans.forEach(span => {
        span.classList.remove('fade-out');
        span.classList.add('fade-in');
      });
      setTimeout(() => {
        fadingSpans.forEach(span => span.classList.remove('fade-in'));
      }, 300);
    }, 300);
  } else {
    renderSlotsContent(engSlots, chSlots);
  }
}

function renderSlotsContent(engSlots, chSlots) {
  engSlots.forEach((slot, index) => {
    slot.innerHTML = '';
    const item = activeEng[index];
    if (item) {
      const span = document.createElement('span');
      span.className = 'slot-text';
      span.textContent = item.eng;
      slot.appendChild(span);
      slot.dataset.id = item.id;
      slot.classList.remove('matched', 'selected');
      slot.onclick = () => selectEngSlot(index);
    } else {
      slot.dataset.id = '';
      slot.classList.remove('matched', 'selected');
      slot.onclick = null;
    }
  });

  chSlots.forEach((slot, index) => {
    slot.innerHTML = '';
    const item = activeCh[index];
    if (item) {
      const span = document.createElement('span');
      span.className = 'slot-text';
      span.textContent = item.ch;
      slot.appendChild(span);
      slot.dataset.id = item.id;
      slot.classList.remove('matched', 'selected', 'shake');
      slot.onclick = () => selectChSlot(index);
    } else {
      slot.dataset.id = '';
      slot.classList.remove('matched', 'selected', 'shake');
      slot.onclick = null;
    }
  });
}

function selectEngSlot(index) {
  const engSlots = document.querySelectorAll('#english-column .slot');
  if (engSlots[index].classList.contains('matched') || !activeEng[index]) return;
  
  engSlots.forEach(s => s.classList.remove('selected'));
  engSlots[index].classList.add('selected');
  selectedEngSlot = index;
  checkMatch();
}

function selectChSlot(index) {
  const chSlots = document.querySelectorAll('#chinese-column .slot');
  if (chSlots[index].classList.contains('matched') || !activeCh[index]) return;
  
  chSlots.forEach(s => s.classList.remove('selected'));
  chSlots[index].classList.add('selected');
  selectedChSlot = index;
  checkMatch();
}

function checkMatch() {
  if (selectedEngSlot !== null && selectedChSlot !== null) {
    const engItem = activeEng[selectedEngSlot];
    const chItem = activeCh[selectedChSlot];
    const engSlots = document.querySelectorAll('#english-column .slot');
    const chSlots = document.querySelectorAll('#chinese-column .slot');
    
    if (engItem.id === chItem.id) {
      // 答對
      engSlots[selectedEngSlot].classList.add('matched');
      chSlots[selectedChSlot].classList.add('matched');
      engSlots[selectedEngSlot].classList.remove('selected');
      chSlots[selectedChSlot].classList.remove('selected');
      
      completedCount++;
      document.getElementById('progress').textContent = `${completedCount} / ${wordBank.length}`;
      
      const matchedEngIndex = selectedEngSlot;
      selectedEngSlot = null;
      selectedChSlot = null;
      
      setTimeout(() => {
        if (currentQueue.length > 0) {
          const nextItem = currentQueue.pop();
          activeEng[matchedEngIndex] = nextItem;
          
          let emptyChIndices = [];
          chSlots.forEach((slot, idx) => {
            if (slot.classList.contains('matched')) {
              emptyChIndices.push(idx);
            }
          });
          
          if (emptyChIndices.length > 0) {
            const targetChIdx = emptyChIndices[Math.floor(Math.random() * emptyChIndices.length)];
            activeCh[targetChIdx] = nextItem;
          }
          
          updateSlotContentsSmoothly(matchedEngIndex, true);
        } else {
          activeEng[matchedEngIndex] = null;
          chSlots.forEach((slot, idx) => {
            if (slot.classList.contains('matched')) {
              activeCh[idx] = null;
            }
          });
          updateSlotContentsSmoothly(-1, true);
          
          if (completedCount >= wordBank.length) {
            endGame();
          }
        }
      }, 400);
      
    } else {
      // 答錯
      wrongCount++;
      wrongWordsSet.add(engItem.eng);
      
      chSlots[selectedChSlot].classList.add('shake');
      setTimeout(() => {
        chSlots.forEach(s => s.classList.remove('shake', 'selected'));
        engSlots.forEach(s => s.classList.remove('selected'));
        selectedEngSlot = null;
        selectedChSlot = null;
      }, 400);
    }
  }
}

function updateTimer() {
  const elapsed = Math.floor((Date.now() - startTime) / 1000);
  const minutes = String(Math.floor(elapsed / 60)).padStart(2, '0');
  const seconds = String(elapsed % 60).padStart(2, '0');
  document.getElementById('timer').textContent = `${minutes}:${seconds}`;
}

function endGame() {
  clearInterval(timerInterval);
  const finalTimeStr = document.getElementById('timer').textContent;
  
  document.getElementById('final-time').textContent = finalTimeStr;
  document.getElementById('final-wrong-count').textContent = wrongCount;
  
  const wrongListEl = document.getElementById('wrong-words-list');
  wrongListEl.innerHTML = '';
  if (wrongWordsSet.size === 0) {
    wrongListEl.innerHTML = '<li class="text-green-600 font-medium">太棒了！零失誤通關！🎉</li>';
  } else {
    wrongWordsSet.forEach(word => {
      const li = document.createElement('li');
      li.textContent = word;
      wrongListEl.appendChild(li);
    });
  }
  
  document.getElementById('result-modal').classList.remove('hidden');
  
  // 自動發送成績至 Google Sheets
  sendScoreToGoogleSheet(finalTimeStr, wrongCount);
}

function sendScoreToGoogleSheet(timeStr, errors) {
  const payload = {
    time: timeStr,
    wrongCount: errors,
    totalWords: wordBank.length,
    timestamp: new Date().toISOString()
  };
  
  fetch(GOOGLE_SHEET_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  }).then(() => {
    console.log('成績已成功送出至 Google Sheets');
  }).catch(err => {
    console.error('送出成績失敗:', err);
  });
}

// 頁面載入時初始化遊戲
window.onload = () => {
  initGame();
};
