import "./Landing.scss";
import image from "../../assets/images/undraw_mobile_ux_re_59hr 1.svg";
import { useNavigate } from "react-router-dom";
import ellipse from '../../assets/images/Ellipse 1.png'

function Landing() {
  const navigate = useNavigate();


  return (
    <div className="landing">
      <img className="landing__ellipse" src={ellipse} alt="" />
      <img className="landing__ellipse2" src={ellipse} alt="" />
      <div className="landing__top">
        <img className="landing__top-image" src={image} alt="landing" />
      </div>
      <div className="landing__middle">
        <h1 className="landing__middle-title">Get things done with TODO</h1>
        <p className="landing__middle-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
          gravida purus id eu condimentum est diam quam. Condimentum blandit
          diam.
        </p>
      </div>
      <div className="landing__button">

          <button onClick={(() => navigate('/register'))}>Get Started</button>

      </div>
    </div>
  );
}

export default Landing;
