let reviews = [];
let currentRating = 0;
const stars = document.querySelectorAll(".star");
let nextId = 1;

generateId = () => {
  if (reviews.length === 0) {
    nextId = 1;
  }
  return nextId++;
};

createReview = () => {
  const reviewText = document.getElementById("review-text").value;

  if (reviewText && currentRating) {
    const newReview = {
      id: generateId(),
      text: reviewText,
      rating: currentRating,
    };
    reviews.push(newReview);
    renderReviews();
    saveReviews();
    document.getElementById("review-text").value = "";
    starRating(0);
    starHover(0);
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
      <button class="remove-button" data-id ="${review.id}" >Remove</button>
    `;
    reviewList.appendChild(reviewItem);
  });

  const removeButtons = document.querySelectorAll(".remove-button");
  removeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const reviewId = parseInt(event.target.getAttribute("data-id"));

      reviews = reviews.filter((review) => review.id !== reviewId);
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

function removeStarColor() {
  stars.forEach((star) => {
    star.className = "star";
  });
}

function starRating(n) {
  removeStarColor();
  stars.forEach((star, i) => {
    star.className = `star ${i < n ? "selected" : ""}`;
  });
  currentRating = n;
}

function starHover() {
  stars.forEach((star, index) => {
    star.addEventListener("mouseover", () => {
      stars.forEach((s, i) => {
        s.classList.toggle("hovered", i <= index);
      });
    });
  });
}

updateAverageRating = () => {
  if (reviews.length === 0) {
    document.getElementById("average-rating").textContent = "No ratings yet";
  } else {
    let sum = 0;
    reviews.forEach((review) => {
      sum += review.rating;
    });
    const averageRating = sum / reviews.length;
    document.getElementById(
      "average-rating"
    ).textContent = ` ${averageRating.toFixed(1)}/5`;
  }
};

reviews = loadReviews();
renderReviews();
updateAverageRating();
