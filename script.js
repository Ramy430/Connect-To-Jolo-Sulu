document.addEventListener('DOMContentLoaded', () => {
  // --- DOM Elements ---
  const splitBtn = document.getElementById('splitBtn');
  const resetBtn = document.getElementById('resetBtn');
  const inputText = document.getElementById('inputText');
  const wordsContainer = document.getElementById('wordsContainer');
  const saveJsonBtn = document.getElementById('saveJsonBtn');
  const copyJsonBtn = document.getElementById('copyJsonBtn');
  const printBtn = document.getElementById('printBtn');
  const notification = document.getElementById('notification');
  const totalDisplay = document.getElementById('totalDisplay');
  const wordCountEl = document.getElementById('wordCount');
  const translationCountEl = document.getElementById('translationCount');
  const lineCountEl = document.getElementById('lineCount');
  const searchBox = document.getElementById('searchBox');

  let wordData = [];

  // --- LOAD JSON ON START ---
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      if (!data.words) return;
      inputText.value = data.words.map(w => `${w.word} = ${w.translation}`).join('\n');
      splitBtn.click(); // automatically split words after loading
    })
    .catch(err => console.log('Failed to load data.json:', err));

  // --- SPLIT WORDS ---
  splitBtn.addEventListener('click', () => {
    wordsContainer.innerHTML = '';
    wordData = [];
    const lines = inputText.value.trim().split('\n');

    lines.forEach((line, i) => {
      if (!line.trim()) return;
      const [word, ...rest] = line.split('=');
      const translation = rest.join('=').trim();
      createWordBox(word.trim(), translation, i);
    });

    updateStats();
    showNotification(`Split ${wordData.length} words`);
  });

  // --- CREATE WORD BOX ---
  function createWordBox(word, translation, index) {
    wordData.push({ word, translation, index });
    const box = document.createElement('div');
    box.className = 'word-box';
    box.innerHTML = `
      <div class="word">${word}</div>
      <div>=</div>
      <div class="translation">${translation || '(no translation)'}</div>
    `;
    wordsContainer.appendChild(box);
  }

  // --- RESET ---
  resetBtn.addEventListener('click', () => {
    inputText.value = '';
    wordsContainer.innerHTML = '';
    wordData = [];
    updateStats();
    showNotification('Application reset');
  });

  // --- UPDATE STATS ---
  function updateStats() {
    totalDisplay.textContent = `Total Words: ${wordData.length}`;
    wordCountEl.textContent = wordData.length;
    translationCountEl.textContent = wordData.filter(w => w.translation).length;
    lineCountEl.textContent = inputText.value.split('\n').filter(l => l.trim()).length;
  }

  // --- EXPORT JSON ---
  saveJsonBtn.addEventListener('click', () => {
    if (!wordData.length) return alert('No data to export');
    const content = JSON.stringify({
      words: wordData,
      originalText: inputText.value,
      exportDate: new Date().toISOString()
    }, null, 2);
    downloadFile(content, 'translation-export.json');
    showNotification('JSON downloaded');
  });

  // --- COPY TO CLIPBOARD ---
  copyJsonBtn.addEventListener('click', () => {
    if (!wordData.length) return alert('No data to copy');
    const content = JSON.stringify(wordData, null, 2);
    navigator.clipboard.writeText(content)
      .then(() => showNotification('Copied to clipboard'))
      .catch(err => alert('Failed to copy: ' + err));
  });

  // --- PRINT ---
  printBtn.addEventListener('click', () => {
    if (!wordData.length) return alert('No data to print');
    const w = window.open('', '_blank');
    w.document.write('<h1>Translation Export</h1>');
    wordData.forEach(item => {
      w.document.write(`<p><b>${item.word}</b> = ${item.translation}</p>`);
    });
    w.print();
    w.close();
  });

  // --- DOWNLOAD FILE ---
  function downloadFile(content, fileName) {
    const blob = new Blob([content], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
  }

  // --- SHOW NOTIFICATION ---
  function showNotification(msg, isError = false) {
    notification.textContent = msg;
    notification.className = isError ? 'notification error' : 'notification';
    notification.style.display = 'block';
    setTimeout(() => notification.style.display = 'none', 3000);
  }

  // --- SEARCH FUNCTION ---
  searchBox.addEventListener('input', e => {
    const term = e.target.value.toLowerCase();
    document.querySelectorAll('.word-box').forEach(box => {
      const word = box.querySelector('.word').textContent.toLowerCase();
      const translation = box.querySelector('.translation').textContent.toLowerCase();
      box.style.display = (word.includes(term) || translation.includes(term)) ? 'block' : 'none';
    });
  });

});