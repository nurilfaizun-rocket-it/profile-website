/** ═══════════════════════════════════════════════════════════
  STUDENT HOMEWORK — Implement the JavaScript features below
  Do NOT change the HTML above. Only write code in this section.
  Use your textbook/notes as a reference when needed.
════════════════════════════════════════════════════════════  */

/*
  ╔══════════════════════════════════════════════════════════╗
  ║  TASK 1 — Dynamic Greeting.                              ║
  ║  Show a greeting based on the current time of day.       ║
  ║  Element to update: id="greeting"                        ║
  ╠══════════════════════════════════════════════════════════╣
  ║  HINTS:                                                  ║
  ║  • Get current hour → new Date().getHours()              ║
  ║  • Use if / else if / else to check the hour range       ║
  ║  ·  5–11  → "// Good morning"                            ║
  ║  · 12–16  → "// Good afternoon    "                      ║
  ║  · 17–20  → "// Good evening   "                         ║
  ║  · else   → "// Good night   "                           ║
  ║  • Update the element with .textContent                  ║
  ╚══════════════════════════════════════════════════════════╝
*/

// YOUR CODE FOR TASK 1 HERE:
const greetingElement = document.getElementById('greeting');
const currentHour = new Date().getHours();
let greetingText = '';

if (currentHour >= 5 && currentHour <= 11) {
  greetingText = '// Good morning 👋';
} else if (currentHour >= 12 && currentHour <= 16) {
  greetingText = '// Good afternoon 👋';
} else if (currentHour >= 17 && currentHour <= 20) {
  greetingText = '// Good evening 👋';
} else {
  greetingText = '// Good night 🌙';
}

greetingElement.textContent = greetingText;

/*
  ╔══════════════════════════════════════════════════════════╗
  ║  TASK 2 — Typing Animation                               ║
  ║  Animate a list of job roles, one character at a time.   ║
  ║  Element to update: id="typing-text"                     ║
  ╠══════════════════════════════════════════════════════════╣
  ║  HINTS:                                                  ║
  ║  • Store your roles in an array                          ║
  ║  • Use two variables: roleIndex and charIndex            ║
  ║  • Use a boolean: isDeleting (true/false)                ║
  ║  • Use .slice(0, charIndex) to get part of a string      ║
  ║  • Use setTimeout() to create a delay between characters ║
  ║  • Add <span class="cursor"></span> at the end of text   ║
  ║  • When fully typed → wait 1800ms → start deleting       ║
  ║  • When fully deleted → move to next role                ║
  ╚══════════════════════════════════════════════════════════╝
*/

// YOUR CODE FOR TASK 2 HERE:
const typingElement = document.getElementById('typing-text');
const roles = ['Web Developer', 'UI/UX Designer', 'Student', 'Problem Solver'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimeout = null;

function typeEffect() {
  const currentRole = roles[roleIndex];
  
  if (isDeleting) {
    charIndex--;
    typingElement.innerHTML = currentRole.slice(0, charIndex) + '<span class="cursor"></span>';
    
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingTimeout = setTimeout(typeEffect, 300);
    } else {
      typingTimeout = setTimeout(typeEffect, 50);
    }
  } else {
    charIndex++;
    typingElement.innerHTML = currentRole.slice(0, charIndex) + '<span class="cursor"></span>';
    
    if (charIndex === currentRole.length) {
      isDeleting = true;
      typingTimeout = setTimeout(typeEffect, 1800);
    } else {
      typingTimeout = setTimeout(typeEffect, 80);
    }
  }
}

typeEffect();

/*
  ╔══════════════════════════════════════════════════════════╗
  ║  TASK 3 — Age Calculator.                                ║
  ║  Calculate and display your age from your birthdate.     ║
  ║  Element to update: id="age-display"                     ║
  ╠══════════════════════════════════════════════════════════╣
  ║  HINTS:                                                  ║
  ║  • Set a variable: const birthdate = "2007-08-15"        ║
  ║  • Get current year → new Date().getFullYear()           ║
  ║  • Get birth year → new Date(birthdate).getFullYear()    ║
  ║  • Subtract to get age                                   ║
  ╚══════════════════════════════════════════════════════════╝
*/

// YOUR CODE FOR TASK 3 HERE:
const birthdate = "2006-02-24";
const currentYear = new Date().getFullYear();
const birthYear = new Date(birthdate).getFullYear();
const age = currentYear - birthYear;
document.getElementById('age-display').textContent = age;

/*
  ╔══════════════════════════════════════════════════════════╗
  ║  TASK 4 — Dark / Light Mode Toggle.                      ║
  ║  Click the button to switch between dark and light.   ║
  ║  Button element: id="theme-btn"                          ║
  ╠══════════════════════════════════════════════════════════╣
  ║  HINTS:                                                  ║
  ║  • Select the button with getElementById                 ║
  ║  • Add a "click" event listener to the button            ║
  ║  • Read the current theme from:                          ║
  ║      document.documentElement.getAttribute("data-theme") ║
  ║  • Set the new theme with:                               ║
  ║      document.documentElement.setAttribute(...)          ║
  ║  • Toggle button text: "dark" ↔ "light"                  ║
  ╚══════════════════════════════════════════════════════════╝
*/

// YOUR CODE FOR TASK 4 HERE:
const themeBtn = document.getElementById('theme-btn');

themeBtn.addEventListener('click', function() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeBtn.textContent = '🌙';
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeBtn.textContent = '☀️';
  }
});

/*
  ╔══════════════════════════════════════════════════════════╗
  ║  TASK 5 — Tab Navigation                                 ║
  ║  Click the About section tabs to switch content.         ║
  ╠══════════════════════════════════════════════════════════╣
  ║  HINTS:                                                  ║
  ║  • Select all tab buttons → querySelectorAll(".tab-btn") ║
  ║  • Select all panels → querySelectorAll(".tab-panel")    ║
  ║  • Loop with forEach() and add "click" event to each btn ║
  ║  • On click:                                             ║
  ║    1. Remove "active" class from ALL buttons and panels  ║
  ║    2. Add "active" class to the clicked button           ║
  ║    3. Get the target from btn.getAttribute("data-tab")   ║
  ║    4. Add "active" to the panel with id="tab-" + target  ║
  ╚══════════════════════════════════════════════════════════╝
*/

// YOUR CODE FOR TASK 5 HERE:
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    tabButtons.forEach(b => b.classList.remove('active'));
    tabPanels.forEach(p => p.classList.remove('active'));
    
    this.classList.add('active');
    const target = this.getAttribute('data-tab');
    document.getElementById('tab-' + target).classList.add('active');
  });
});

/*
  ╔══════════════════════════════════════════════════════════╗
  ║  TASK 6 — Skill Bars Animation                           ║
  ║  Animate the skill bars when the Skills section appears. ║
  ╠══════════════════════════════════════════════════════════╣
  ║  HINTS:                                                  ║
  ║  • Get all skill items → querySelectorAll(".skill-item") ║
  ║  • Each item has data-level="90" (use .getAttribute)     ║
  ║  • Inside each item find the bar → .querySelector(...)   ║
  ║    with class ".skill-fill"                              ║
  ║  • Set bar width → fill.style.width = level + "%"        ║
  ║  • Use setTimeout + forEach index for stagger effect     ║
  ║  • (Bonus) Use IntersectionObserver to trigger on scroll ║
  ╚══════════════════════════════════════════════════════════╝
*/

// YOUR CODE FOR TASK 6 HERE:
const skillItems = document.querySelectorAll('.skill-item');

function animateSkillBars() {
  skillItems.forEach((item, index) => {
    const level = parseInt(item.getAttribute('data-level'));
    const fill = item.querySelector('.skill-fill');
    
    setTimeout(() => {
      fill.style.width = level + '%';
    }, 200 * (index + 1));
  });
}

const skillsSection = document.getElementById('skills');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateSkillBars();
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

observer.observe(skillsSection);

/*
  ╔══════════════════════════════════════════════════════════╗
  ║  TASK 7 — Project Filter                                 ║
  ║  Click the filter buttons to show/hide project cards.    ║
  ╠══════════════════════════════════════════════════════════╣
  ║  HINTS:                                                  ║
  ║  • Select filter buttons → querySelectorAll(".filter-btn")║
  ║  • Select project cards → querySelectorAll(".project-card")║
  ║  • On each button click:                                 ║
  ║    1. Get the filter value from data-filter attribute    ║
  ║    2. Remove "active" from all filter buttons            ║
  ║    3. Add "active" to the clicked button                 ║
  ║    4. Loop through cards with forEach                    ║
  ║    5. If filter is "all" OR matches data-category →      ║
  ║         remove "hidden" class from card                  ║
  ║       else → add "hidden" class                          ║
  ╚══════════════════════════════════════════════════════════╝
*/

// YOUR CODE FOR TASK 7 HERE:
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    filterButtons.forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    
    const filter = this.getAttribute('data-filter');
    
    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (filter === 'all' || filter === category) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

/*
  ╔══════════════════════════════════════════════════════════╗
  ║  TASK 8 — Form Validation                                ║
  ║  Validate the contact form before "sending" a message.   ║
  ╠══════════════════════════════════════════════════════════╣
  ║  HINTS:                                                  ║
  ║  • Listen for "submit" event on id="contact-form"        ║
  ║  • Call e.preventDefault() to stop page from reloading  ║
  ║  • Get field values with .value.trim()                   ║
  ║  • Validate:                                             ║
  ║    - Name: must be at least 2 characters                 ║
  ║    - Email: must contain "@" and "."                     ║
  ║    - Message: must be at least 10 characters             ║
  ║  • Show error text in the span with id="err-name" etc.   ║
  ║  • Add .error class to invalid input fields              ║
  ║  • If all valid → show id="form-success" element         ║
  ║  • (Bonus) Hide success message after 4 seconds          ║
  ╚══════════════════════════════════════════════════════════╝
*/

// YOUR CODE FOR TASK 8 HERE:
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const errName = document.getElementById('err-name');
const errEmail = document.getElementById('err-email');
const errMessage = document.getElementById('err-message');
const formSuccess = document.getElementById('form-success');

function validateEmail(email) {
  return email.includes('@') && email.includes('.');
}

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  let isValid = true;
  
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();
  
  if (name.length < 2) {
    errName.textContent = 'Name must be at least 2 characters.';
    nameInput.classList.add('error');
    isValid = false;
  } else {
    errName.textContent = '';
    nameInput.classList.remove('error');
  }
  
  if (!validateEmail(email)) {
    errEmail.textContent = 'Please enter a valid email address.';
    emailInput.classList.add('error');
    isValid = false;
  } else {
    errEmail.textContent = '';
    emailInput.classList.remove('error');
  }
  
  if (message.length < 10) {
    errMessage.textContent = 'Message must be at least 10 characters.';
    messageInput.classList.add('error');
    isValid = false;
  } else {
    errMessage.textContent = '';
    messageInput.classList.remove('error');
  }
  
  if (isValid) {

    fetch("http://localhost:3000/contact", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name,
            email,
            message
        })

    })

    .then(response => response.json())

    .then(data => {

        if(data.success){

    formSuccess.textContent = "✅ Message berhasil dikirim!";

    formSuccess.style.display = "block";

    contactForm.reset();

    // Tampilkan notifikasi melalui Service Worker
    navigator.serviceWorker.ready.then((registration) => {

        registration.showNotification("📨 Pesan Terkirim", {

            body: "Terima kasih telah menghubungi saya!",

            icon: "assets/profil home.jpeg",

            badge: "assets/profil home.jpeg",

            vibrate: [200,100,200]

        });

    });

    setTimeout(() => {

        formSuccess.style.display = "none";

    },4000);

}else{

            alert("Gagal menyimpan data.");

        }

    })

    .catch(error=>{

        console.log(error);

        alert("Server tidak dapat dihubungi.");

    });

}
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// =============================================
// 🔹 TAMBAHAN: Koneksi ke Backend (API)
// =============================================

const API_URL = 'https://profile-website-production-0b6d.up.railway.app';

// 🔹 Submit form ke backend
contactForm.addEventListener('submit', async function(e) {
  e.preventDefault();
  
  document.querySelectorAll('.field-error').forEach(el => el.textContent = '');
  document.querySelectorAll('.form-group input, .form-group textarea')
    .forEach(el => el.classList.remove('error'));
  
  let isValid = true;
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();
  
  if (name.length < 2) {
    errName.textContent = 'Name must be at least 2 characters.';
    nameInput.classList.add('error');
    isValid = false;
  }
  
  if (!validateEmail(email)) {
    errEmail.textContent = 'Please enter a valid email address.';
    emailInput.classList.add('error');
    isValid = false;
  }
  
  if (message.length < 10) {
    errMessage.textContent = 'Message must be at least 10 characters.';
    messageInput.classList.add('error');
    isValid = false;
  }
  
  if (!isValid) return;

  try {
    const response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message })
    });

    const data = await response.json();

    if (response.ok) {
  formSuccess.style.display = 'block';
  contactForm.reset();
  document.getElementById('server-error').style.display = 'none';

  // Tampilkan notifikasi melalui Service Worker
  if ("serviceWorker" in navigator) {
    const registration = await navigator.serviceWorker.ready;

    console.log("Registration:", registration);

    try {
      await registration.showNotification("TEST", {
        body: "Ini test dari submit"
      });
      console.log("showNotification berhasil dipanggil");
    } catch (err) {
      console.error("showNotification error:", err);
    }
      }

  setTimeout(() => {
    formSuccess.style.display = 'none';
  }, 4000);
    } else {
      document.getElementById('server-error').textContent = data.error || 'Terjadi kesalahan server';
      document.getElementById('server-error').style.display = 'block';
    }
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('server-error').textContent = 'Gagal terhubung ke server. Pastikan backend berjalan.';
    document.getElementById('server-error').style.display = 'block';
  }
});

// 🔹 Test koneksi ke backend
if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker
            .register("sw.js")
            .then(() => {

                console.log("Service Worker berhasil didaftarkan");

            })
            .catch(err => {

                console.log(err);

            });

    });

}