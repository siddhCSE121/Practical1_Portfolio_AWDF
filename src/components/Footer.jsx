import { profile } from "../data";

function Footer() {
  return (
    <footer className="footer">
      <div className="container center">
        <p>
          &copy; 2026 {profile.name}. All rights reserved.
        </p>
        <p className="small">Made using React.</p>
      </div>
    </footer>
  );
}

export default Footer;
