const menu = document.querySelector("#menu");
const hamburger = document.querySelector("#hamburger");
const hLinks = document.querySelectorAll("#hLink");
const moon = document.querySelector("#moon");
const mobileMoon = document.querySelector("#mobileMoon");
const body = document.querySelector("body");

// Toggle hamburger menu saat tombol hamburger diklik
hamburger.addEventListener("click", (event) => {
  event.stopPropagation();
  menu.classList.toggle("hidden");
});

// Tutup hamburger menu saat link di dalamnya diklik
hLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.add("hidden");
  });
});

// Menutup menu saat mengklik di area menu itu sendiri
menu.addEventListener("click", () => {
  menu.classList.add("hidden");
});

// Toggle dark mode (desktop)
moon.addEventListener("click", (event) => {
  event.stopPropagation();
  body.classList.toggle("dark");
  localStorage.setItem("darkMode", body.classList.contains("dark"));
});

// Toggle dark mode (mobile)
mobileMoon.addEventListener("click", (event) => {
  event.stopPropagation();
  body.classList.toggle("dark");
  localStorage.setItem("darkMode", body.classList.contains("dark"));
});

// Cek preferensi tema saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("darkMode") === "true") {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
});
