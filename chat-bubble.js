// chat-bubble.js
(function() {
    // Create chat bubble HTML
    const chatHTML = `
        <div class="bc-chat-bubble">
            <button class="bc-chat-bubble-button" id="bcChatButton">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
            </button>
            
            <div class="bc-chat-window" id="bcChatWindow">
                <div class="bc-chat-header">
                    <h3>Chat Support</h3>
                    <button class="bc-close-button" id="bcCloseButton">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                
                <div class="bc-messages" id="bcMessages">
                    <div class="bc-message bot">Hello! How can I help you with your shopping today?</div>
                </div>
                
                <div class="bc-input-area">
                    <input type="text" class="bc-message-input" id="bcMessageInput" placeholder="Type a message...">
                    <button class="bc-send-button" id="bcSendButton">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `;

    // Create container and append chat HTML
    const container = document.createElement('div');
    container.innerHTML = chatHTML;
    document.body.appendChild(container);

    // Initialize chat functionality
    function initChat() {
        const chatButton = document.getElementById('bcChatButton');
        const chatWindow = document.getElementById('bcChatWindow');
        const closeButton = document.getElementById('bcCloseButton');
        const messageInput = document.getElementById('bcMessageInput');
        const sendButton = document.getElementById('bcSendButton');
        const messagesContainer = document.getElementById('bcMessages');

        // Toggle chat window
        chatButton.addEventListener('click', () => {
            chatWindow.classList.add('open');
            messageInput.focus();
        });

        closeButton.addEventListener('click', () => {
            chatWindow.classList.remove('open');
        });

        // Send message function
        function sendMessage() {
            const message = messageInput.value.trim();
            if (message) {
                // Add user message
                addMessage(message, 'user');
                messageInput.value = '';

                // Simulate bot response
                setTimeout(() => {
                    const responses = [
                        "I'll help you find what you're looking for!",
                        "Thanks for your message. How else can I assist you?",
                        "Let me check that for you.",
                        "I'm here to help with your shopping experience."
                    ];
                    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                    addMessage(randomResponse, 'bot');
                }, 1000);
            }
        }

        // Add message to chat
        function addMessage(text, sender) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('bc-message', sender);
            messageDiv.textContent = text;
            messagesContainer.appendChild(messageDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        // Send message on button click
        sendButton.addEventListener('click', sendMessage);

        // Send message on Enter key
        messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initChat);
    } else {
        initChat();
    }
})();