// Smooth scroll for navigation links (backup for browsers that don't support CSS scroll-behavior)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Contact form: mailto fallback
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const mailtoTo = contactForm.dataset.mailto;

    // Basic validation
    if (!name || !email || !message) {
      showFormError("Please fill out all fields.");
      return;
    }

    // If the form has an action (e.g. Formspree), let the browser submit it
    if (contactForm.action && contactForm.action !== "") {
      contactForm.submit();
      return;
    }

    // Mailto fallback: open email client with prefilled subject and body
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}%0AEmail: ${email}%0A%0A${message}`
    );
    const mailto = `mailto:${mailtoTo}?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    showFormSuccess();
  });
}

function showFormSuccess() {
  const s = document.getElementById("formSuccess");
  const e = document.getElementById("formError");
  if (s) {
    s.hidden = false;
  }
  if (e) {
    e.hidden = true;
  }
}

function showFormError(msg) {
  const s = document.getElementById("formSuccess");
  const e = document.getElementById("formError");
  if (s) s.hidden = true;
  if (e) {
    e.hidden = false;
    e.textContent = msg || "There was an error. Please try again.";
  }
}

// Theme toggle: persist and apply
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const btn = document.getElementById("themeToggle");
  if (btn)
    btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
  // Swap logo image for dark mode if present
  const logo = document.querySelector(".site-logo");
  if (logo) {
    logo.src =
      theme === "dark"
        ? "assets/images/name white.png"
        : "assets/images/name.png";
  }
  // Swap recent work image for dark mode if present
  const sectionTitle = document.querySelector(".section-title");
  if (sectionTitle) {
    sectionTitle.src =
      theme === "dark"
        ? "assets/images/recent work white.png"
        : "assets/images/recent work.png";
  }
  // Swap About section image for dark mode if present
  const sectionAbout = document.querySelector(".section-about");
  if (sectionAbout) {
    sectionAbout.src =
      theme === "dark"
        ? "assets/images/about white.png"
        : "assets/images/about.png";
  }
  // Swap Contact section image for dark mode if present
  const sectionContact = document.querySelector(".section-contact");
  if (sectionContact) {
    sectionContact.src =
      theme === "dark"
        ? "assets/images/contact white.png"
        : "assets/images/contact.png";
  }
}

function initTheme() {
  const stored = localStorage.getItem("theme");
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = stored || (prefersDark ? "dark" : "light");
  applyTheme(theme);

  const toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const current =
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "dark"
          : "light";
      const next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      localStorage.setItem("theme", next);
    });
  }
}

// Initialize theme on load
document.addEventListener("DOMContentLoaded", initTheme);
