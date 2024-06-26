import full_star from "../assets/full_star.svg";
import half_star from "../assets/half_star.svg";
import empty_star from "../assets/empty_star.svg";

const getStars = (rating) => {
  const stars = [];

  const fullStars = Math.floor(rating);
  for (let i = 0; i < fullStars; i++) {
    stars.push(<img src={full_star} alt="full star" />);
  }

  const halfStar = rating % 1 !== 0;
  if (halfStar) {
    stars.push(<img src={half_star} alt="half star" />);
  }

  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<img src={empty_star} alt="empty star" />);
  }

  return stars
}

export default getStars;