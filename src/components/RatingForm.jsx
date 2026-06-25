import React from "react";

export const RatingForm = () => {
  const ratingsTemplate = [1, 2, 3, 4, 5].map((rating) => (
    <label key={rating} htmlFor={rating}>
      <input type="radio" name="rating score" id={rating} />
    </label>
  ));

  return (
    <div>
      RatingForm
      <form action="" method="post" id="ratingForm">
        <fieldset>
          <legend>group of radio's buttons</legend>
          {ratingsTemplate}
        </fieldset>

        <button type="submit" form="ratingForm">
          submit
        </button>
      </form>
    </div>
  );
};
