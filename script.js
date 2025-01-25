// Predefined chatbot responses
const botResponses = {
    "hello": "Hi there! How can I assist you today?",
    "how are you": "I'm just a bot, but I'm here to help!",
    "what is your name": "I'm SimpleBot, your virtual assistant!",
    "what is btech": "BTech is a Bachelor of Technology degree!",
    "bye": "Goodbye! Have a great day!",
    "default": "I'm sorry, I don't understand that. Can you rephrase?"
  };  
  
  // Function to handle user input
  function handleUserInput() {
    const userInput = document.getElementById("user-input").value.toLowerCase().trim();
    const messagesDiv = document.getElementById("messages");
  
    // Display user message
    if (userInput) {
      const userMessage = document.createElement("div");
      userMessage.className = "message user-message";
      userMessage.textContent = userInput;
      messagesDiv.appendChild(userMessage);
  
      // Get bot response
      const botResponse = botResponses[userInput] || botResponses["default"];
  
      // Display bot response
      const botMessage = document.createElement("div");
      botMessage.className = "message bot-message";
      botMessage.textContent = botResponse;
      messagesDiv.appendChild(botMessage);
  
      // Clear input field
      document.getElementById("user-input").value = "";
  
      // Auto-scroll to the latest message
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
  }
  
  // Event listener for the send button
  document.getElementById("send-btn").addEventListener("click", handleUserInput);
  
  // Allow "Enter" key to send messages
  document.getElementById("user-input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      handleUserInput();
    }
  });
  