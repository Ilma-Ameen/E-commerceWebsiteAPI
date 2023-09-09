import './FooterStyle.css';

const Footer = () => {
  return (
    <div className="bottom">
      <div>
        <h4>ABOUT</h4>
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Our Work</a>
        <a href="#">Review</a>
      </div>
      <div>
        <h4>COLLABORATION</h4>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
      </div>
      <div>
        <h4>HELP</h4>
        <a href="#">Return</a>
        <a href="#">Exchange</a>
        <a href="#">Complain</a>
      </div>
      <div>
        <h4>LEGAL</h4>
        <a href="#">Disclaimer</a>
        <a href="#">Terms & Condition</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Refund Policy</a>
      </div>
      <div>
        <h4>CONTACT US</h4>
        <p>
          Call: +214-715-4708
        </p>
        <p>
          Email: ilma@gmail.com
        </p>
        <p>Address: 1218 Abc Street</p>
      </div>
    </div>
  );
};

export default Footer;