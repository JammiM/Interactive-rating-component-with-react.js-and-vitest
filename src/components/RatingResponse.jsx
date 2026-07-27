import thankYouImg from "../assets/images/illustration-thank-you.svg";

export const RatingResponse = ({ ratingScore }) => {
  return (
    <div className="card-rating-response">
      <picture>
        <img src={thankYouImg} alt="" srcSet="" />
      </picture>
      <p className="card-rating-score">You selected {ratingScore} out of 5</p>
      <h1 className="card-title">Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don&rsquo;t hesitate to get in touch!
      </p>
    </div>
  );
};
