import { useState } from "react";

// The menu links are kept in an array so we don't have to write the same code again and again.
const links = [
  { id: "home", name: "Home" },
  { id: "about", name: "About" },
  { id: "education", name: "Education" },
  { id: "skills", name: "Skills" },
  { id: "projects", name: "Projects" },
  { id: "internship", name: "Internship" },
  { id: "contact", name: "Contact" },
];

function Navbar() {
  // This is used to open and close the menu on mobile screens.
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <a href="#home" className="logo">
          Siddh<span>.</span>
        </a>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>

        <ul className={open ? "nav-links open" : "nav-links"}>
          {links.map((link) => (
            <li key={link.id}>
              <a href={"#" + link.id} onClick={() => setOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
