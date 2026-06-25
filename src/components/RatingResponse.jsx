import React from "react";

import thankYouImg from "../assets/images/illustration-thank-you.svg";

export const RatingResponse = () => {
  return (
    <div>
      <picture>
        <img src={thankYouImg} alt="" srcset="" />
      </picture>
      <p>You selected 3 out of 5</p>
      <p>Thank you!</p>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don&rsquo;t hesitate to get in touch!
      </p>
    </div>
  );
};
