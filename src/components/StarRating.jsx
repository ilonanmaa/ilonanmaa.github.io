import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const StarRating = ({ count }) => {
  const stars = new Array([
    <AiOutlineStar />,
    <AiOutlineStar />,
    <AiOutlineStar />,
    <AiOutlineStar />,
    <AiOutlineStar />,
  ]);

  for (let i = 0; i < 5; i++) {
    if (i < count) {
      stars[i] = <AiFillStar className="mx-1" />;
    } else {
      stars[i] = <AiOutlineStar className="mx-1" />;
    }
  }

  return (
    <p className="star-rating">
      {stars[0]} {stars[1]} {stars[2]} {stars[3]} {stars[4]}
    </p>
  );
};

export default StarRating;
