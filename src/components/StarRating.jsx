import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

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
      stars[i] = <AiFillStar />;
    } else {
      stars[i] = <AiOutlineStar />;
    }
  }

  return (
    <div className="star-rating">
      {stars[0]} {stars[1]} {stars[2]} {stars[3]} {stars[4]}
    </div>
  );
};

export default StarRating;
