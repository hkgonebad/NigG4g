import React from "react";
import NavItems from "../NavItems/NavItems";
import FunctionWrap from "../FunctionWrap/FunctionWrap";

const toolbar = props => {
  return (
    <header className="top-nav">
      <div className="nav-wrap">
        <a className="my-logo" href="/">
          9GAG
        </a>
        <nav className="nav-menu">{<NavItems />}</nav>
        <FunctionWrap
          history={props.history}
          handleLogOut={props.handleLogOut}
        />
      </div>
    </header>
  );
};

export default toolbar;
