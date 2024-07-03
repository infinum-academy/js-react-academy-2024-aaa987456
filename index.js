let reviews = [] || loadReviews();
let currentRating = 0;
const stars = document.querySelectorAll(".star");

createReview = () => {
  const reviewText = document.getElementById("review-text").value;

  if (reviewText && currentRating) {
    const newReview = {
      text: reviewText,
      rating: currentRating,
    };
    reviews.push(newReview);
    renderReviews();
    saveReviews();
    document.getElementById("review-text").value = "";
    starRating(0);
    currentRating = 0;
    updateAverageRating();
  }
};

renderReviews = () => {
  const reviewList = document.getElementById("review-list");
  if (!reviewList) return;
  reviewList.innerHTML = "";

  reviews.forEach((review) => {
    const reviewItem = document.createElement("div");
    reviewItem.classList.add("review-item");

    reviewItem.innerHTML = `
      <p>${review.text}</p>
      <div class="rating"> ${review.rating} /5 </div>
      
      <div class="rating-stars">${"★".repeat(review.rating)}</div>
      <button class="remove-button">Remove</button>
    `;
    reviewList.appendChild(reviewItem);
  });

  const removeButtons = document.querySelectorAll(".remove-button");
  removeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const reviewItem = event.target.parentNode;
      const reviewText = reviewItem.querySelector("p").textContent;
      reviews = reviews.filter((review) => review.text !== reviewText);
      saveReviews();
      renderReviews();
      updateAverageRating();
    });
  });
};
loadReviews = () => {
  const reviewString = localStorage.getItem("reviews");
  if (reviewString) {
    reviews = JSON.parse(reviewString);
    return reviews;
  } else {
    return [];
  }
};

saveReviews = () => {
  localStorage.setItem("reviews", JSON.stringify(reviews));
};

function remove() {
  stars.forEach((star) => {
    star.className = "star";
  });
}

function starRating(n) {
  remove();
  let starsNumb = "";
  for (let i = 0; i < n; i++) {
    if (n == 1) starsNumb = "one";
    else if (n == 2) starsNumb = "two";
    else if (n == 3) starsNumb = "three";
    else if (n == 4) starsNumb = "four";
    else if (n == 5) starsNumb = "five";
    stars[i].className = "star " + starsNumb;
  }
  currentRating = n;
}
updateAverageRating = () => {
  let sum = 0;
  reviews.forEach((review) => {
    sum += review.rating;
  });
  const averageRating = sum / reviews.length;
  document.getElementById(
    "average-rating"
  ).textContent = `Average Rating: ${averageRating.toFixed(1)}/5`;
};

reviews = loadReviews();
renderReviews();
updateAverageRating();
