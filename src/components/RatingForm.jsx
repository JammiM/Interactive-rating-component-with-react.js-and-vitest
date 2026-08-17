import { useState } from "react";
import iconStar from "../assets/images/icon-star.svg";

export const RatingForm = ({ handleRatingClick }) => {
  const [isRated, setIsRated] = useState(false);

  function handleFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    handleRatingClick(formData.get("rating score"));
  }

  function handleRatingChange() {
    setIsRated(true);
  }

  const ratingsTemplate = [1, 2, 3, 4, 5].map((rating) => (
    <label key={rating} htmlFor={rating} className="rating-label">
      <input
        type="radio"
        name="rating score"
        id={rating}
        value={rating}
        onChange={handleRatingChange}
        className="sr-only"
      />
      <span className="rating-circle">{rating}</span>
    </label>
  ));

  return (
    <div className="card-rating-form">
      <picture className="rating-circle">
        <img src={new URL(iconStar, import.meta.url).href} alt="" />
      </picture>
      <h1 className="card-title">How did we do?</h1>

      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <form action="" method="post" id="ratingForm" onSubmit={handleFormSubmit}>
        <fieldset
          style={{ border: "none", padding: 0, margin: 0 }}
          role="radiogroup"
          aria-label="Rate our service from 1 to 5"
        >
          <legend className="sr-only">Select a rating</legend>
          <div className="rating-buttons">{ratingsTemplate}</div>
        </fieldset>

        <button type="submit" disabled={!isRated} form="ratingForm">
          Submit
        </button>
      </form>
    </div>
  );
};
