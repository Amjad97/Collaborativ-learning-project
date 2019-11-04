/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function Footer({ color }) {
  return (
    <footer className="footer" data-background-color={color}>
      <Container>
        <nav>
          <ul>
            <li>
              <a href="/">Share with me</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed and coded by{" "}
          <a href="https://www.facebook.com/mesto.husein" target="_blank">
            MESTO & Amjad
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
