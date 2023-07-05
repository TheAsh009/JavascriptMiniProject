const progress = document.querySelector("#progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

console.log(progress, prev, next, circles);

let currentActive = 1;

next.addEventListener("click", function () {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});
prev.addEventListener("click", function () {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

const update = function () {
  circles.forEach((circel, idx) => {
    // console.log(circel, idx);
    if (idx < currentActive) {
      circel.classList.add("active");
    } else {
      circel.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};
