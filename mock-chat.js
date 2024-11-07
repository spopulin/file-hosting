// Create and style the chat bubble
const chatBubble = document.createElement('div');
chatBubble.id = 'chat-bubble';
chatBubble.innerText = '💬';
chatBubble.style.position = 'fixed';
chatBubble.style.bottom = '20px';
chatBubble.style.right = '20px';
chatBubble.style.backgroundColor = '#0078ff';
chatBubble.style.color = 'white';
chatBubble.style.width = '60px';
chatBubble.style.height = '60px';
chatBubble.style.borderRadius = '50%';
chatBubble.style.display = 'flex';
chatBubble.style.alignItems = 'center';
chatBubble.style.justifyContent = 'center';
chatBubble.style.fontSize = '30px';
chatBubble.style.cursor = 'pointer';
chatBubble.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
document.body.appendChild(chatBubble);

// Create the chat window (initially hidden)
const chatWindow = document.createElement('div');
chatWindow.id = 'chat-window';
chatWindow.style.position = 'fixed';
chatWindow.style.bottom = '90px';
chatWindow.style.right = '20px';
chatWindow.style.width = '300px';
chatWindow.style.height = '400px';
chatWindow.style.backgroundColor = 'white';
chatWindow.style.borderRadius = '10px';
chatWindow.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
chatWindow.style.display = 'none';
chatWindow.style.flexDirection = 'column';
chatWindow.style.overflow = 'hidden';
document.body.appendChild(chatWindow);

// Toggle chat window display
chatBubble.onclick = () => {
  chatWindow.style.display = chatWindow.style.display === 'none' ? 'flex' : 'none';
};

// Add chat header
const chatHeader = document.createElement('div');
chatHeader.style.backgroundColor = '#0078ff';
chatHeader.style.color = '#fff';
chatHeader.style.padding = '10px';
chatHeader.style.textAlign = 'center';
chatHeader.style.fontSize = '16px';
chatHeader.innerText = 'Chat with Us';
chatWindow.appendChild(chatHeader);

// Add messages container
const messages = document.createElement('div');
messages.id = 'messages';
messages.style.flexGrow = '1';
messages.style.padding = '10px';
messages.style.overflowY = 'auto';
chatWindow.appendChild(messages);

// Add input and send button
const chatInput = document.createElement('div');
chatInput.style.display = 'flex';
chatInput.style.borderTop = '1px solid #ddd';
const userInput = document.createElement('input');
userInput.type = 'text';
userInput.id = 'user-input';
userInput.placeholder = 'Type a message...';
userInput.style.flexGrow = '1';
userInput.style.border = 'none';
userInput.style.padding = '10px';
userInput.style.fontSize = '14px';
chatInput.appendChild(userInput);
const sendButton = document.createElement('button');
sendButton.innerText = 'Send';
sendButton.style.backgroundColor = '#0078ff';
sendButton.style.color = 'white';
sendButton.style.border = 'none';
sendButton.style.padding = '10px';
sendButton.style.cursor = 'pointer';
chatInput.appendChild(sendButton);
chatWindow.appendChild(chatInput);

// Handle sending messages (mock function)
sendButton.onclick = async function() {
  const message = userInput.value.trim();
  if (!message) return;

  // Display user message
  const userMessage = document.createElement('div');
  userMessage.textContent = message;
  userMessage.style.textAlign = 'right';
  userMessage.style.color = '#0078ff';
  messages.appendChild(userMessage);

  // Clear input
  userInput.value = '';

  // Mock response (replace with actual fetch call if needed)
  const botResponse = 'Thank you for reaching out!';
  const botMessage = document.createElement('div');
  botMessage.textContent = botResponse;
  botMessage.style.textAlign = 'left';
  botMessage.style.color = '#333';
  messages.appendChild(botMessage);
};
