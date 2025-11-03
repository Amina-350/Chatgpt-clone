// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const chatContainer = document.getElementById('chatContainer');
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');
const chatItems = document.querySelectorAll('.chat-item');
const newChatBtn = document.querySelector('.new-chat-btn');

// ✅ Toggle Sidebar (Mobile)
menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    document.body.classList.toggle('sidebar-open');
});

// ✅ Close Sidebar on Overlay Click (Mobile)
document.addEventListener('click', (e) => {
    const isMobile = window.innerWidth <= 768;
    const sidebarOpen = sidebar.classList.contains('open');
    const clickOutside = !sidebar.contains(e.target) && !menuToggle.contains(e.target);

    if (isMobile && sidebarOpen && clickOutside) {
        sidebar.classList.remove('open');
        document.body.classList.remove('sidebar-open');
    }
});

// ✅ Switch Chats
chatItems.forEach(item => {
    item.addEventListener('click', () => {
        chatItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        chatContainer.innerHTML = '<div class="message ai-message">Welcome to this chat!</div>';
        sidebar.classList.remove('open');
        document.body.classList.remove('sidebar-open');
    });
});

// ✅ New Chat
newChatBtn.addEventListener('click', () => {
    chatItems.forEach(i => i.classList.remove('active'));
    chatContainer.innerHTML = '<div class="message ai-message">New chat started. How can I help?</div>';
    sidebar.classList.remove('open');
    document.body.classList.remove('sidebar-open');
});

// ✅ Send Message
sendBtn.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

function sendMessage() {
    const message = messageInput.value.trim();
    if (!message) return;

    // Add User Message
    const userMsg = document.createElement('div');
    userMsg.className = 'message user-message';
    userMsg.textContent = message;
    chatContainer.appendChild(userMsg);

    // Clear Input
    messageInput.value = '';

    // Simulate AI Response
    setTimeout(() => {
        const aiMsg = document.createElement('div');
        aiMsg.className = 'message ai-message';
        aiMsg.textContent = `Echo: ${message} (This is a demo response.)`;
        chatContainer.appendChild(aiMsg);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 500);

    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// ✅ Initial Chat
chatContainer.innerHTML = '<div class="message ai-message">Hello! This is a ChatGPT clone. Start chatting.</div>';
