import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="footer">
      <footer>
        <p>
          Dev + Design by Hanna Boorom
          <a href="https://github.com/Hanna-Boorom" target="_blank">
            <FontAwesomeIcon icon={["fab", "github-square"]} />
          </a>
          <a href="https://www.linkedin.com/in/hanna-boorom/" target="_blank">
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
