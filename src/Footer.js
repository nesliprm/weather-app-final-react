import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer container">
      <footer>
        <a
          href="https://github.com/nesliprm/weather-app-final-react"
          target="_blank"
          rel="noreferrer"
          className="link-dark"
        >
          Open Source Code
        </a>{" "}
        by ▼ Nesli Parmaksizoglu
      </footer>
    </div>
  );
}
