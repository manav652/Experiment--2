// Get DOM elements
const messageInput = document.getElementById('messageInput');
const charCount = document.getElementById('charCount');
const messagePreview = document.getElementById('messagePreview');
const boldBtn = document.getElementById('boldBtn');
const italicBtn = document.getElementById('italicBtn');
const emojiBtn = document.getElementById('emojiBtn');
const submitBtn = document.getElementById('submitBtn');
const notification = document.getElementById('notification');

// State variables
let isBold = false;
let isItalic = false;

// Update character counter
messageInput.addEventListener('input', updateCounter);

function updateCounter() {
    const length = messageInput.value.length;
    charCount.textContent = length;
    
    // Update counter color
    const counter = charCount.parentElement;
    counter.classList.remove('warning', 'error');
    
    if (length > 120) {
        counter.classList.add('warning');
    }
    if (length > 150) {
        counter.classList.add('error');
    }
    
    // Update preview
    updatePreview();
    
    // Enable/disable submit button
    submitBtn.disabled = length === 0 || length > 150;
}

// Update message preview
function updatePreview() {
    let text = messageInput.value || 'Your message will appear here...';
    
    // Apply formatting
    messagePreview.textContent = text;
    messagePreview.className = 'preview-content';
    
    if (isBold && messageInput.value) {
        messagePreview.classList.add('bold');
    }
    if (isItalic && messageInput.value) {
        messagePreview.classList.add('italic');
    }
}

// Bold button click
boldBtn.addEventListener('click', function() {
    isBold = !isBold;
    this.classList.toggle('active');
    updatePreview();
});

// Italic button click
italicBtn.addEventListener('click', function() {
    isItalic = !isItalic;
    this.classList.toggle('active');
    updatePreview();
});

// Emoji button click
emojiBtn.addEventListener('click', function() {
    const emojis = ['😊', '👍', '❤️', '🎉', '👏', '🔥'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    
    if (messageInput.value.length < 150) {
        messageInput.value += randomEmoji;
        messageInput.dispatchEvent(new Event('input'));
    }
});

// Submit button click
submitBtn.addEventListener('click', function() {
    if (messageInput.value.trim() === '' || messageInput.value.length > 150) return;
    
    // Show notification
    notification.classList.add('show');
    
    // Reset after 2 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
    
    // Reset formatting
    isBold = false;
    isItalic = false;
    boldBtn.classList.remove('active');
    italicBtn.classList.remove('active');
    
    // Clear input and reset
    messageInput.value = '';
    updateCounter();
    updatePreview();
});

// Initialize with example text
window.addEventListener('load', function() {
    messageInput.value = "Hello! Try typing your message here...";
    updateCounter();
});