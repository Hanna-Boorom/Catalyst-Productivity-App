import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="footer">
      <footer>
        <p>
          Dev + Design by Hanna Boorom
          <a
            href="https://github.com/Hanna-Boorom"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "github-square"]} />
          </a>
          <a
            href="https://www.linkedin.com/in/hanna-boorom/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
        </p>
        <div className="photo-credit">
          <a
            href="https://unsplash.com/photos/DlkF4-dbCOU"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={["fas", "camera"]} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
