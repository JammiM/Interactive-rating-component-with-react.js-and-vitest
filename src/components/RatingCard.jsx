import { useState } from "react";
import { RatingForm } from "./RatingForm";
import { RatingResponse } from "./RatingResponse";

export const RatingCard = () => {
  const [ratingScore, setRatingScore] = useState(0);

  const ratingAsNumber = Number(ratingScore);

  function handleRatingClick(e) {
    setRatingScore(e);
  }

  return (
    <main>
      {ratingAsNumber > 0 ? (
        <RatingResponse
          ratingScore={ratingScore}
          handleRatingClick={handleRatingClick}
        />
      ) : (
        <RatingForm
          ratingScore={ratingScore}
          handleRatingClick={handleRatingClick}
        />
      )}
    </main>
  );
};
