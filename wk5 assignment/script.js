
document.getElementById("clickBtn").addEventListener("click", () => {
    alert("Button was clicked!");
  });
  
  document.getElementById("hoverBtn").addEventListener("mouseover", () => {
    alert("You hovered over the button!");
  });
  
  document.getElementById("keyInput").addEventListener("keypress", (e) => {
    console.log("Key pressed:", e.key);
  });
  
  document.getElementById("dblClickBtn").addEventListener("dblclick", () => {
    alert("Double-click detected! Secret unlocked 🗝️");
  });
  

  document.getElementById("changeTextBtn").addEventListener("click", () => {
    const textPara = document.getElementById("textParagraph");
    textPara.innerText = "The text has been changed! 🎉";
    textPara.style.color = "crimson";
  });
  

  const images = [
    "https://images.pexels.com/photos/161853/eiffel-tower-paris-france-tower-161853.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1796725/pexels-photo-1796725.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/342113/pexels-photo-342113.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];
  let currentImg = 0;
  document.getElementById("nextBtn").addEventListener("click", () => {
    currentImg = (currentImg + 1) % images.length;
    document.getElementById("slideImg").src = images[currentImg];
  });
  
 
  document.getElementById("accordionBtn").addEventListener("click", () => {
    const content = document.getElementById("accordionContent");
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
  
 
  document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const feedback = document.getElementById("formFeedback");
  
    if (!name || !email || !password) {
      feedback.innerText = "All fields are required.";
      feedback.style.color = "red";
      return;
    }
  
    const emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(email)) {
      feedback.innerText = "Invalid email format.";
      feedback.style.color = "red";
      return;
    }
  
    if (password.length < 8) {
      feedback.innerText = "Password must be at least 8 characters.";
      feedback.style.color = "red";
      return;
    }
  
    feedback.innerText = "Form submitted successfully! ✅";
    feedback.style.color = "green";
  });
  
 
  document.getElementById("password").addEventListener("input", (e) => {
    const feedback = document.getElementById("formFeedback");
    if (e.target.value.length < 8) {
      feedback.innerText = "Password too short.";
      feedback.style.color = "orange";
    } else {
      feedback.innerText = "Strong password 💪";
      feedback.style.color = "green";
    }
  });
  