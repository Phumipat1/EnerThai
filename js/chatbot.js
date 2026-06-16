/* ==========================================================================
   Ener Thai Premium E-Commerce Website - AI Chatbot Front-end Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject Chatbot HTML Structure into Document Body
    const chatWidget = document.createElement('div');
    chatWidget.id = 'enerBotWidget';
    chatWidget.innerHTML = `
        <!-- Float Toggle Button -->
        <button class="chatbot-toggle" id="chatbotToggle" aria-label="Open Chatbot">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
        </button>

        <!-- Chatbot Window -->
        <div class="chatbot-window" id="chatbotWindow">
            <div class="chatbot-header">
                <div class="chatbot-brand-row">
                    <div class="chatbot-avatar">ET</div>
                    <div class="chatbot-status-info">
                        <div class="chatbot-name">EnerBot</div>
                        <div class="chatbot-status-row">
                            <span class="chatbot-status-dot"></span>
                            <span>
                                <span lang="en">Nutrition Coach (Online)</span>
                                <span lang="th">โค้ชโภชนาการการกีฬา (ออนไลน์)</span>
                            </span>
                        </div>
                    </div>
                </div>
                <button class="chatbot-close-btn" id="chatbotClose" aria-label="Close Chatbot">&times;</button>
            </div>
            
            <div class="chatbot-messages" id="chatbotMessages">
                <!-- Message logs loaded dynamically -->
            </div>

            <div class="chatbot-suggestions" id="chatbotSuggestions">
                <button class="chatbot-chip" data-msg-en="Recommend a fueling plan for me." data-msg-th="ช่วยวางแผนการเติมพลังงานให้ฉันหน่อย" data-msg="Recommend a fueling plan for me.">
                    <span lang="en">Plan my fuel 🏃‍♂️</span>
                    <span lang="th">วางแผนพลังงาน 🏃‍♂️</span>
                </button>
                <button class="chatbot-chip" data-msg-en="Are your energy gels vegan?" data-msg-th="เจลพลังงานของคุณเป็นเจ/วีแกนไหม" data-msg="Are your energy gels vegan?">
                    <span lang="en">Are they Vegan? 🌱</span>
                    <span lang="th">เป็นเจ/วีแกนไหม 🌱</span>
                </button>
                <button class="chatbot-chip" data-msg-en="Will I get fat from taking 4 gels?" data-msg-th="กินเจล 4 ซองจะอ้วนไหม" data-msg="Will I get fat from taking 4 gels?">
                    <span lang="en">Will I get fat? ⚖️</span>
                    <span lang="th">จะอ้วนไหม? ⚖️</span>
                </button>
                <button class="chatbot-chip" data-msg-en="Why are all gels priced at 99 THB?" data-msg-th="ทำไมเจลทุกสูตรราคา 99 บาท" data-msg="Why are all gels priced at 99 THB?">
                    <span lang="en">Why 99 THB? ฿</span>
                    <span lang="th">ทำไมต้อง 99 บาท? ฿</span>
                </button>
            </div>

            <form class="chatbot-input-form" id="chatbotInputForm">
                <input type="text" class="chatbot-input" id="chatbotInput" placeholder="Ask EnerBot something..." data-placeholder-en="Ask EnerBot something..." data-placeholder-th="ถามคำถามกับ EnerBot..." autocomplete="off" required>
                <button type="submit" class="chatbot-send-btn" id="chatbotSend" aria-label="Send Message">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                </button>
            </form>
        </div>
    `;
    document.body.appendChild(chatWidget);

    // 2. DOM Selectors
    const toggleBtn = document.getElementById('chatbotToggle');
    const closeBtn = document.getElementById('chatbotClose');
    const chatWindow = document.getElementById('chatbotWindow');
    const messagesContainer = document.getElementById('chatbotMessages');
    const inputField = document.getElementById('chatbotInput');
    const inputForm = document.getElementById('chatbotInputForm');
    const sendBtn = document.getElementById('chatbotSend');
    const suggestionChips = document.querySelectorAll('.chatbot-chip');

    // 3. Conversation State
    let isOpen = false;
    let isWaiting = false;
    const sessionKey = 'enerthai_chat_history';
    
    // Welcome message helper
    const getWelcomeMessage = (lang) => {
        return lang === 'th'
            ? "สวัสดีครับ! ผมชื่อ EnerBot **โค้ชโภชนาการการกีฬาของ Ener Thai** 🏃‍♂️\n\nสามารถสอบถามผมเกี่ยวกับเจลพลังงาน วิธีการทำงาน หรือให้ผมช่วยคำนวณตารางการเติมพลังงานสำหรับการวิ่งครั้งต่อไปของคุณได้เลยครับ!"
            : "Hi! I'm EnerBot, your **Ener Thai sports nutrition coach**. 🏃‍♂️\n\nAsk me about our energy gels, how they work, or let me calculate a customized fueling schedule for your next run!";
    };

    // Load existing history or set default welcome
    const activeLang = localStorage.getItem('enerthai_lang') || 'en';
    let chatHistory = JSON.parse(sessionStorage.getItem(sessionKey)) || [
        {
            role: 'assistant',
            content: getWelcomeMessage(activeLang)
        }
    ];

    // 4. Initial Render of History
    function renderMessages() {
        messagesContainer.innerHTML = '';
        chatHistory.forEach(msg => {
            appendBubble(msg.role, msg.content, false);
        });
        scrollToBottom();
    }

    // Convert raw text/markdown to formatted HTML safely
    function parseMarkdown(text) {
        // Safe characters escape
        let html = text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

        // Bold formatting: **text** -> <strong>text</strong>
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        // Link formatting: [text](url) -> <a href="$2">$1</a>
        html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

        // Lists and Paragraph separation
        const paragraphs = html.split('\n\n');
        return paragraphs.map(p => {
            const trimmed = p.trim();
            if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
                const lines = trimmed.split('\n');
                const listItems = lines.map(line => `<li>${line.replace(/^[*\-]\s+/, '')}</li>`).join('');
                return `<ul>${listItems}</ul>`;
            }
            if (/^\d+\.\s+/.test(trimmed)) {
                const lines = trimmed.split('\n');
                const listItems = lines.map(line => `<li>${line.replace(/^\d+\.\s+/, '')}</li>`).join('');
                return `<ol>${listItems}</ol>`;
            }
            return `<p>${p.replace(/\n/g, '<br>')}</p>`;
        }).join('');
    }

    function appendBubble(role, text, animate = true) {
        const bubble = document.createElement('div');
        bubble.className = `chatbot-msg-bubble ${role}`;
        bubble.innerHTML = parseMarkdown(text);
        
        if (animate) {
            bubble.style.opacity = '0';
            bubble.style.transform = 'translateY(10px)';
        }
        
        messagesContainer.appendChild(bubble);
        
        if (animate) {
            // Force reflow
            bubble.offsetHeight;
            bubble.style.transition = 'all 0.25s ease-out';
            bubble.style.opacity = '1';
            bubble.style.transform = 'translateY(0)';
        }
    }

    function appendTypingIndicator() {
        const bubble = document.createElement('div');
        bubble.className = 'chatbot-msg-bubble assistant typing-bubble';
        bubble.id = 'typingIndicator';
        bubble.innerHTML = `
            <div class="typing-dots">
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
            </div>
        `;
        messagesContainer.appendChild(bubble);
        scrollToBottom();
    }

    function removeTypingIndicator() {
        const indicator = document.getElementById('typingIndicator');
        if (indicator) {
            indicator.remove();
        }
    }

    function scrollToBottom() {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function saveHistory() {
        sessionStorage.setItem(sessionKey, JSON.stringify(chatHistory));
    }

    // 5. Open/Close Actions
    function toggleChat() {
        isOpen = !isOpen;
        if (isOpen) {
            chatWindow.classList.add('active');
            toggleBtn.classList.add('active');
            // Change toggle icon to cross
            toggleBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            `;
            setTimeout(() => {
                inputField.focus();
            }, 100);
            renderMessages();
        } else {
            chatWindow.classList.remove('active');
            toggleBtn.classList.remove('active');
            // Change toggle icon back to bubble
            toggleBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
            `;
        }
    }

    toggleBtn.addEventListener('click', toggleChat);
    closeBtn.addEventListener('click', () => {
        if (isOpen) toggleChat();
    });

    // Close when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (isOpen && !chatWindow.contains(e.target) && !toggleBtn.contains(e.target) && window.innerWidth < 768) {
            toggleChat();
        }
    });

    // 6. Messaging Request Action
    async function sendMessage(text) {
        if (!text.trim() || isWaiting) return;

        // Add user message
        chatHistory.push({ role: 'user', content: text });
        appendBubble('user', text);
        inputField.value = '';
        saveHistory();
        scrollToBottom();

        // Lock UI and show typing animation
        isWaiting = true;
        inputField.disabled = true;
        sendBtn.disabled = true;
        appendTypingIndicator();

        try {
            // Query local proxy endpoint
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: text,
                    history: chatHistory.slice(0, -1) // Send context except the brand-new user message
                })
            });

            const data = await response.json();
            removeTypingIndicator();

            if (response.ok && data.reply) {
                chatHistory.push({ role: 'assistant', content: data.reply });
                appendBubble('assistant', data.reply);
            } else {
                const isTh = (localStorage.getItem('enerthai_lang') || 'en') === 'th';
                const defaultErr = isTh 
                    ? "ขออภัยครับ ขณะนี้การเชื่อมต่อไปยังเซิร์ฟเวอร์ขัดข้อง กรุณาลองใหม่อีกครั้งในภายหลัง"
                    : "Sorry, I am having trouble connecting to my servers right now. Please try again in a bit.";
                const errMsg = data.error || defaultErr;
                appendBubble('assistant', `⚠️ **Error:** ${errMsg}`);
            }

        } catch (err) {
            console.error("Chatbot transmission error:", err);
            removeTypingIndicator();
            const isTh = (localStorage.getItem('enerthai_lang') || 'en') === 'th';
            const netErr = isTh
                ? "⚠️ **การเชื่อมต่อขัดข้อง:** ไม่สามารถติดต่อ EnerBot ได้ โปรดตรวจสอบการเชื่อมต่ออินเทอร์เน็ตของคุณ"
                : "⚠️ **Network Error:** Could not contact EnerBot. Please check your internet connection.";
            appendBubble('assistant', netErr);
        } finally {
            isWaiting = false;
            inputField.disabled = false;
            sendBtn.disabled = false;
            saveHistory();
            scrollToBottom();
            inputField.focus();
        }
    }

    // 7. Event Listeners
    inputForm.addEventListener('submit', (e) => {
        e.preventDefault();
        sendMessage(inputField.value);
    });

    // Suggestion chips handler
    suggestionChips.forEach(chip => {
        chip.addEventListener('click', () => {
            const lang = localStorage.getItem('enerthai_lang') || 'en';
            const msg = chip.getAttribute(`data-msg-${lang}`) || chip.getAttribute('data-msg') || chip.textContent;
            sendMessage(msg);
        });
    });

    // Initial placeholder setup
    const initLang = localStorage.getItem('enerthai_lang') || 'en';
    const initPh = initLang === 'th' ? inputField.getAttribute('data-placeholder-th') : inputField.getAttribute('data-placeholder-en');
    if (initPh) inputField.placeholder = initPh;

    // 8. Register Language Change Listener to dynamically update chatbot UI elements
    window.addEventListener('langchange', (e) => {
        const lang = e.detail.lang || localStorage.getItem('enerthai_lang') || 'en';
        
        // Update placeholder
        if (inputField) {
            const ph = lang === 'th' ? inputField.getAttribute('data-placeholder-th') : inputField.getAttribute('data-placeholder-en');
            if (ph) inputField.placeholder = ph;
        }
        
        // Update welcome message if it's the only message in history
        if (chatHistory.length === 1 && chatHistory[0].role === 'assistant') {
            const enWelcome = getWelcomeMessage('en');
            const thWelcome = getWelcomeMessage('th');
            
            if (lang === 'th' && chatHistory[0].content === enWelcome) {
                chatHistory[0].content = thWelcome;
                saveHistory();
                renderMessages();
            } else if (lang === 'en' && chatHistory[0].content === thWelcome) {
                chatHistory[0].content = enWelcome;
                saveHistory();
                renderMessages();
            }
        }
    });
});
