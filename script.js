
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
const chatBox = document.getElementById("chat-box");


sendButton.addEventListener("click", function () {
    const message = messageInput.value.trim();
    if (message) {
        addMessage(message, "user");
        messageInput.value = "";

        
        setTimeout(() => {
            addMessage("Hi How Can I Help You", "bot");
        }, 1000);
    }
});


function addMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message", sender);
    
    const messageText = document.createElement("p");
    messageText.textContent = message;
    
    messageElement.appendChild(messageText);
    chatBox.appendChild(messageElement);
    

    chatBox.scrollTop = chatBox.scrollHeight;
}


messageInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        sendButton.click();
    }
});
