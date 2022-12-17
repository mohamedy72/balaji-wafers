import twist from "../assets/tomato.png";

type Props = {};

const NachoProduct = (props: Props) => {
  return (
    <div className="nacho">
      <img src={twist} alt="#" className="nacho-img" />
      <div className="nacho-info">
        <h3 className="nacho-name">Tomato Twist</h3>
        <div className="nacho-rating">
          <span className="nacho-rating">&#9733;</span>
          <span className="nacho-rating">&#9733;</span>
          <span className="nacho-rating">&#9733;</span>
          <span className="nacho-rating">&#9733;</span>
          <span className="nacho-rating">&#9733;</span>
        </div>
        <small className="nacho-price">$10</small>
        <button className="btn-order">order now</button>
      </div>
    </div>
  );
};

export default NachoProduct;
