import './header.css';
function Header() {
  return (
    <div className="footer-container">
      <div className="footer-div">
        <h4 className="name">Jamel Ahmed Scott Fadel</h4>
        <h4 style={{ color: 'rgba(255, 255, 255, 0.171)' }}>|</h4>

        <a
          rel="noreferrer"
          className="link"
          target="_blank"
          href="https://www.jamelscott.dev/"
        >
          <h4>Portfolio</h4>
        </a>
        <a
          rel="noreferrer"
          className="link"
          target="_blank"
          href="https://www.linkedin.com/in/jamelfadel/"
        >
          <h4>LinkedIn</h4>
        </a>
        <a
          rel="noreferrer"
          className="link"
          target="_blank"
          href="https://github.com/Jamelscott"
        >
          <h4>Github</h4>
        </a>
        <a
          rel="noreferrer"
          className="link"
          target="_blank"
          href="https://github.com/Jamelscott/Artificial-Intelligence-AMA"
        >
          <h4>Repo</h4>
        </a>
      </div>
      <div className="hr-div">
        <hr className="hr"></hr>
      </div>
    </div>
  );
}

export default Header;
