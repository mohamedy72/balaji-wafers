import cart from "../assets/cart.png";

const Button = () => {
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
