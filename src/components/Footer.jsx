import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="footer">
      <footer>
        <p>
          Dev + Design by Hanna Boorom
          <a>
            <FontAwesomeIcon icon={["fab", "github-square"]} />
          </a>
          <a>
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
