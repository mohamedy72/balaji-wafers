import cart from "../assets/cart.png";

type Props = {};

const Button = (props: Props) => {
  return (
    <button className="input btn-group">
      <span className="btn-icon">
        <img src={cart} alt="Cart icon" />
      </span>
      Add to cart
    </button>
  );
};

export default Button;
