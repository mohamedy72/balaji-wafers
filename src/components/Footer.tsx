import React from "react";
import NachoProduct from "./NachoProduct";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="footer">
      <NachoProduct />
      <NachoProduct />
      <NachoProduct />
    </footer>
  );
};

export default Footer;
