* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f5f7fa;
    color: #333;
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

header {
    background: linear-gradient(135deg, #1a73e8 0%, #6c5ce7 100%);
    color: white;
    padding: 2rem 0;
    text-align: center;
    border-radius: 0 0 10px 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
}

header h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

header p {
    font-size: 1.1rem;
    opacity: 0.9;
}

.search-container {
    background-color: white;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    margin-bottom: 2rem;
}

.search-box {
    display: flex;
    max-width: 600px;
    margin: 0 auto;
}

.search-box input {
    flex: 1;
    padding: 12px 16px;
    border: 2px solid #ddd;
    border-radius: 8px 0 0 8px;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s;
}

.search-box input:focus {
    border-color: #1a73e8;
}

.search-box button {
    background-color: #1a73e8;
    color: white;
    border: none;
    padding: 0 20px;
    border-radius: 0 8px 8px 0;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.3s;
}

.search-box button:hover {
    background-color: #0d62c9;
}

.alphabet-filter {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    margin-bottom: 1.5rem;
}

.alphabet-filter button {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 50%;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.2s;
}

.alphabet-filter button:hover {
    background-color: #1a73e8;
    color: white;
    border-color: #1a73e8;
}

.alphabet-filter button.active {
    background-color: #1a73e8;
    color: white;
    border-color: #1a73e8;
}

.dictionary-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}

@media (min-width: 768px) {
    .dictionary-content {
        grid-template-columns: 1fr 2fr;
    }
}

.word-list {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    padding: 1rem;
    max-height: 600px;
    overflow-y: auto;
}

.word-list h2 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #f0f0f0;
}

.word-item {
    padding: 10px 15px;
    border-bottom: 1px solid #f0f0f0;
    cursor: pointer;
    transition: background-color 0.2s;
}

.word-item:hover {
    background-color: #f0f7ff;
}

.word-item.active {
    background-color: #e3f2fd;
    border-left: 4px solid #1a73e8;
}

.word-detail {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    padding: 2rem;
}

.word-detail h2 {
    font-size: 2rem;
    color: #1a73e8;
    margin-bottom: 0.5rem;
}

.word-detail .phonetic {
    color: #666;
    font-style: italic;
    margin-bottom: 1rem;
}

.definition {
    margin-bottom: 1.5rem;
}

.definition h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #333;
}

.definition p {
    margin-bottom: 0.5rem;
}

.example {
    background-color: #f9f9f9;
    padding: 1rem;
    border-left: 3px solid #1a73e8;
    border-radius: 0 4px 4px 0;
    margin-top: 0.5rem;
}

.no-result {
    text-align: center;
    padding: 2rem;
    color: #666;
}

.data-management {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    padding: 1.5rem;
    margin-top: 2rem;
}

.data-management h2 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: #1a73e8;
}

.data-buttons {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.data-btn {
    padding: 10px 20px;
    background-color: #1a73e8;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.3s;
}

.data-btn:hover {
    background-color: #0d62c9;
}

.export-btn {
    background-color: #2ecc71;
}

.export-btn:hover {
    background-color: #27ae60;
}

.import-btn {
    background-color: #f39c12;
}

.import-btn:hover {
    background-color: #e67e22;
}

.reset-btn {
    background-color: #e74c3c;
}

.reset-btn:hover {
    background-color: #c0392b;
}

footer {
    text-align: center;
    margin-top: 3rem;
    padding: 1rem;
    color: #666;
    font-size: 0.9rem;
}

.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 20px;
    background-color: #2ecc71;
    color: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 0.3s, transform 0.3s;
    z-index: 1000;
}

.notification.show {
    opacity: 1;
    transform: translateY(0);
}

.notification.error {
    background-color: #e74c3c;
}