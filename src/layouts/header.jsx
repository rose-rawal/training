import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes";

const Header = () => {
  return (
    <div
      className="flex justify-between mb-5 w-screen px-20"
    >
      <div className="text-purple-600 font-bold uppercase">React Workshop</div>
      <div
        className="flex divide-x-2 divide-[#861eb2]"
      >
        {routes
          .filter((route) => !!route.name)
          .map((each) => (
            <Link className="text-sm hover:text-purple-800 px-4" key={each.path} to={each.path}>
              {each.name}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Header;
