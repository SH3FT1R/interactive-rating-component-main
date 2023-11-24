const ratingBtn = document.querySelectorAll(".rating-btn");
const ratingContainer = document.querySelector(".wrapper-rating");
const thankYouContainer = document.querySelector(".wrapper");
const submitBtn = document.querySelector(".submit-btn");
const score = document.querySelector(".score");
const resetBtn = document.querySelector(".submit-again-btn");

let rating;

ratingBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    rating = btn.innerHTML;
  });
});

submitBtn.addEventListener("click", () => {
  if (rating) {
    ratingContainer.classList.add("hidden");
    thankYouContainer.classList.remove("hidden");
    score.innerHTML = rating;
  } else {
    ratingContainer.classList.add("hidden");
    thankYouContainer.classList.remove("hidden");
    score.innerHTML = "0";
  }
  if (score.innerHTML === "0") {
    resetBtn.classList.remove("hidden");
  } else {
    resetBtn.classList.add("hidden");
  }
});

resetBtn.addEventListener("click", () => {
  ratingContainer.classList.remove("hidden");
  thankYouContainer.classList.add("hidden");
});
