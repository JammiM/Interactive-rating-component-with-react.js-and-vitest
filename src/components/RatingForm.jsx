import React, { useState } from "react";
import iconStar from "../assets/images/icon-star.svg";

export const RatingForm = ({ handleRatingClick }) => {
  function handleFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    handleRatingClick(formData.get("rating score"));
  }

  const ratingsTemplate = [1, 2, 3, 4, 5].map((rating) => (
    <label key={rating} htmlFor={rating}>
      {rating}
      <input type="radio" name="rating score" id={rating} value={rating} />
    </label>
  ));

  return (
    <div>
      <picture>
        <img src={iconStar} alt="" srcSet="" />
      </picture>
      <h1>How did we do?</h1>

      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <form action="" method="post" id="ratingForm" onSubmit={handleFormSubmit}>
        <fieldset>
          <legend>group of radio's buttons</legend>
          {ratingsTemplate}
        </fieldset>

        <button type="submit" form="ratingForm">
          Submit
        </button>
      </form>
    </div>
  );
};
