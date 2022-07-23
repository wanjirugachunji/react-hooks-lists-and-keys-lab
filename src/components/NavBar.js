import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
    const links = ["home", "about", "projects"];

  return <nav>{/* display an <a> tag for each link here */}</nav>;
    const anchors = links.map((link) => (
        <a key={link} href={"#" + link}>
            {link}
        </a>
    ));
    return <nav>{anchors}</nav>;
}

export default NavBar;