import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.from(".fade-in", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".fade-in",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".slide-left", {
  opacity: 0,
  x: -100,
  duration: 1,
  scrollTrigger: {
    trigger: ".slide-left",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".slide-right", {
  opacity: 0,
  x: 100,
  duration: 1,
  scrollTrigger: {
    trigger: ".slide-right",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});
