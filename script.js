gsap.to(".box", {
  duration: 2,
  x: 1000,
  delay: 1,
  backgroundColor: "blue",
  borderRadius: "50rem",
  scale: 0.5,
});
gsap.to(".box2", {
  duration: 2,
  x: 1000,
  delay: 1,
  backgroundColor: "blue",
  borderRadius: "50rem",
  scale: 0.5,
  repeat: -1,
  yoyo: true,
});

gsap.from("h1", {
  duration: 2,
  y: 50,
  opacity: 0,
  delay: 1,
  stagger: 0.3,
});
