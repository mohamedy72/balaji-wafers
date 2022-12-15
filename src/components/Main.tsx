import Button from "./Button";
import Counter from "./Counter";

import product from "../assets/flamin.png";
import chilli from "../assets/chilli.png";
import corn from "../assets/corn.png";
import spices from "../assets/spices.png";

type Props = {};

const Main = (props: Props) => {
  return (
    <main className="main">
      <div className="left">
        <h1>FLAMIN HOT NACHOS</h1>
        <p>
          Presenting the Classic Nachos with a Flaming Hot Twist. It will Rock
          your taste buds with Chilli & Lime.
        </p>
        <div className="btns-group">
          <Button />
          <Counter />
        </div>
      </div>
      <div className="right">
        <div className="main-img">
          <img src={product} alt="Nachos Product Image" />
        </div>
        <div className="ingredients">
          <div className="ingredient">
            <div className="icon">
              <img src={chilli} alt="" />
            </div>
            <h3>Chilli</h3>
          </div>
          <div className="ingredient">
            <div className="icon">
              <img src={corn} alt="" />
            </div>
            <h3>Corn</h3>
          </div>
          <div className="ingredient">
            <div className="icon">
              <img src={spices} alt="" />
            </div>
            <h3>Spices</h3>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
