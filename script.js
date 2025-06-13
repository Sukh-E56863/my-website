const introSound = document.getElementById("introSound");
const hoverSound = document.getElementById("hoverSound");
const clickSound = document.getElementById("clickSound");

const box = document.getElementById("soundBox");
const spider = document.getElementById("spider");
const footstepContainer = document.getElementById("footsteps-container");
const spiderSound = document.getElementById("spiderSound");
const video = document.getElementById("laapataaVideo");
const downloadBtn = document.getElementById("downloadBtn");


// Click event on resizable box
box.addEventListener("click", () => {
  spider.style.left = "0px";
  spider.style.top = "100px";
  spider.style.display = "block";
  spiderSound.currentTime = 0;
  spiderSound.play();
  
  let x = 0;
  const moveSpeed = 5;
  const stepInterval = 100; // in ms
  const interval = setInterval(() => {
    x += moveSpeed;
    spider.style.left = `${x}px`;

    // Create a footstep
    const step = document.createElement("div");
    step.className = "footstep";
    step.style.right = `${x + 20}px`;
    step.style.top = `140px`;
    footstepContainer.appendChild(step);

    // Remove step after animation
    setTimeout(() => step.remove(), 3000);

    // Stop condition
    if (x >= window.innerWidth - 100) {
      clearInterval(interval);
      spider.style.display = "none";
      spiderSound.pause();
    }
  }, stepInterval);
});

// Box sound logic
box.addEventListener("mouseover", () => {
  introSound.currentTime = 0;
  introSound.play();
});
box.addEventListener("mouseout", () => {
  introSound.pause();
  introSound.currentTime = 0;
});
box.addEventListener("click", () => {
  introSound.pause();
  introSound.currentTime = 0;
  spiderCrawlToVideo();
});

// Download button hover and click
downloadBtn.addEventListener("mouseover", () => {
  hoverSound.currentTime = 0;
  hoverSound.play();
});
downloadBtn.addEventListener("mouseout", () => {
  hoverSound.pause();
  hoverSound.currentTime = 0;
});
downloadBtn.addEventListener("click", () => {
  clickSound.currentTime = 0;
  clickSound.play();
});

// Spider animation config
document.getElementById("soundBox").addEventListener("click", () => {
  const spider = document.getElementById("spider");
  const spiderSound = document.getElementById("spiderSound");
  const iframe = document.getElementById("movieFrame");

  spider.style.left = "0px";
  spider.style.top = "100px";
  spider.style.display = "block";
  spiderSound.currentTime = 0;
  spiderSound.play();

  let pos = 0;
  const moveInterval = setInterval(() => {
    pos += 2;
    spider.style.left = pos + "px";

    if (pos >= 500) {
      clearInterval(moveInterval);
      spiderSound.pause();

      // 🔁 Trick to reload iframe (simulate autoplay)
      const src = iframe.src;
      iframe.src = ""; // Reset
      setTimeout(() => {
        iframe.src = src + "&autoplay=1";
      }, 300);
    }
  }, 30);
});

