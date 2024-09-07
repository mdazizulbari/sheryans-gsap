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

let tl = gsap.timeline();
tl.from("nav p", {
  y: -30,
  stagger: 0.4,
  delay: 1,
  opacity: 0,
  duration: 1,
});
gsap.from(".frontText", {
  y: 20,
  delay: 1,
  opacity: 0,
  duration: 3,
  scale: 0.4,
});

let finalPath = `M 10 100 Q 700 100 1390 100`;
let string = document.querySelector(".string");
string.addEventListener("mousemove", (mouseEvent) => {
  let path = `M 10 100 Q ${mouseEvent.x} ${mouseEvent.y} 1390 100`;
  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.1,
    ease: "power3.easeOut",
  });
});
string.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.5,
    ease: "elastic.out(1,0.2)",
  });
});

let main = document.querySelector("main");
main.addEventListener("mousemove", (mouseEvent) => {
  gsap.to("#cursor", {
    x: mouseEvent.x,
    y: mouseEvent.y,
    ease: "back.out",
  });
});
let cursor = document.querySelector("#cursor");
let img = document.querySelector("#image");
img.addEventListener("mouseenter", () => {
  ((cursor.innerHTML = `<p style="font-size: 0.3rem; line-height:.3rem">View More</p>`),
  (cursor.style.backgroundColor = "#ffffff8a")),
    gsap.to("#cursor", {
      scale: 4,
    });
});
img.addEventListener("mouseleave", () => {
  ((cursor.innerHTML = ""), (cursor.style.backgroundColor = "#fff")),
    gsap.to("#cursor", {
      scale: 1,
    });
});

let showMenu = document.querySelector("#showMenu");
let hideMenu = document.querySelector("#hideMenu");
let tl2 = gsap.timeline();
tl2.to("#sidebar", {
  right: 0,
  duration: 0.2,
});
tl2.from("#sidebar p", {
  x: 150,
  opacity: 0,
  duration: 0.2,
  stagger: 0.1,
});
tl2.from("#sidebar i", {
  opacity: 0,
  scale: 0.8,
});
tl2.pause();
showMenu.addEventListener("click", () => tl2.play());
hideMenu.addEventListener("click", () => tl2.reverse());

let textAnimation = document.querySelector("#textAnimation");
let textAnimationText = document.querySelector("#textAnimation").textContent;
let splitedText = textAnimationText.split("");
let halfTextLength = splitedText.length/2
let clutter = "";
splitedText.forEach((element, index) => {
  if(index<halfTextLength){
  clutter += `<span class="inline-block a">${element}</span>`;
  } else{
  clutter += `<span class="inline-block b">${element}</span>`;
  }
});
console.log(clutter)
textAnimation.innerHTML = clutter;
gsap.from("#textAnimation .a",{
  y:100,
  opacity: 0,
  duration: .5,
  delay: 1,
  stagger: 0.1,
})
gsap.from("#textAnimation .b",{
  y:100,
  opacity: 0,
  duration: .5,
  delay: 1,
  stagger: -0.1,
})