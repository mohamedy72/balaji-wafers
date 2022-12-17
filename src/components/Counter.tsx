type Props = {};

const Counter = (props: Props) => {
  return (
    <div className="counter-group">
      <button className="counter add-item">+</button>
      <button className="counter item-count">0</button>
      <button className="counter remove-item">-</button>
    </div>
  );
};

export default Counter;
