gsap.registerPlugin(ScrollTrigger);

// Animación de imágenes
gsap.from(".category img", {
  scrollTrigger: {
    trigger: ".category",
    start: "top 85%",
  },
  opacity: 0,
  y: 80,
  duration: 1.2,
  stagger: 0.3,
  ease: "power2.out"
});

// Animación de títulos
gsap.from(".category h3", {
  scrollTrigger: {
    trigger: ".category",
    start: "top 90%",
  },
  opacity: 0,
  y: 40,
  duration: 1
});