document.getElementById("year").textContent = new Date().getFullYear();

// Nav shadow on scroll
const nav = document.querySelector(".nav");
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 8), { passive: true });

// Gentle fade-in as content scrolls into view
const targets = document.querySelectorAll(".project, .card, .sub-title, .earlier li");
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
  }),
  { threshold: 0.1 }
);
targets.forEach((el) => { el.classList.add("reveal"); io.observe(el); });
