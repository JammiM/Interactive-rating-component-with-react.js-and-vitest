import React from "react";

import thankYouImg from "../assets/images/illustration-thank-you.svg";

export const RatingResponse = ({ ratingScore }) => {
  return (
    <div>
      <picture>
        <img src={thankYouImg} alt="" srcSet="" />
      </picture>
      <p>You selected {ratingScore} out of 5</p>
      <p>Thank you!</p>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don&rsquo;t hesitate to get in touch!
      </p>
    </div>
  );
};
