import React from "react";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <a href="main.html">Kong.dev</a>
        </div>
        <ul id="menu">
          <li>
            <a href="search.html">
              <span>Search</span>
            </a>
          </li>
          <li>
            <a href="tag.html">
              <span>Tags</span>
            </a>
          </li>
          <li>
            <a href="project.html">
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a href="slide.html">
              <span>Slides</span>
            </a>
          </li>
          <li>
            <a href="about.html">
              <span>About</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
