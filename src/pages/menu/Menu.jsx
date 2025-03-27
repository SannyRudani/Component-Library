import React from "react";
import "./menu.css";
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";

const Menu = () => {
  return (
    <div className="menu-wrapper">
      <div>
        <Card label="All pages" />
      </div>
      <div className="seprator" />
      <div>
        <Card label="Page 1" /> <Card label="Page 2" /> <Card label="Page 3" />{" "}
        <Card label="Page 4" />
      </div>
      <div className="seprator" />
      <div className="footer-sec">
        <Button label="Done" />
      </div>
    </div>
  );
};

export default Menu;
