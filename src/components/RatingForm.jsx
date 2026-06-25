import React from "react";

export const RatingForm = () => {
  const ratingValues = [1, 2, 3, 4, 5];

  return (
    <div>
      RatingForm
      <form action="" method="post" id="ratingForm">
        <fieldset>
          <legend>group of radio's buttons</legend>

          {ratingValues.map((singleRating) => (
            <label key={singleRating} htmlFor={singleRating}>
              <input type="radio" name="rating score" id={singleRating} />
            </label>
          ))}
        </fieldset>

        <button type="submit" form="ratingForm">
          submit
        </button>
      </form>
    </div>
  );
};
