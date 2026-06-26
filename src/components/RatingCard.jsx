import React, { useState } from "react";
import { RatingForm } from "./RatingForm";
import { RatingResponse } from "./RatingResponse";

export const RatingCard = () => {
  const [ratingScore, setRatingScore] = useState(0);

  function handleRatingClick(e) {
    setRatingScore(e);
  }

  return (
    <main>
      <RatingForm
        ratingScore={ratingScore}
        handleRatingClick={handleRatingClick}
      />
      <RatingResponse
        ratingScore={ratingScore}
        handleRatingClick={handleRatingClick}
      />
    </main>
  );
};
