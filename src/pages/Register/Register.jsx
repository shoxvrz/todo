import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Register.scss";
import ellipse from '../../assets/images/Ellipse 1.png'


function Register() {
  const navigate = useNavigate();
  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordsValid] = useState(true);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "name") {
        const nameRegex = /^[A-Z][a-zA-Z]{1,11}$/; // Regex for name validation
        if (nameRegex.test(value)) {
          setNameValid(true);
        } else {
          setNameValid(false);
        }
      }
    
    if(name === "email"){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(emailRegex.test(value)){
            setEmailValid(true)
        }else{
            setEmailValid(false)
        }
    }

    if(name === "password"){
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if(passwordRegex.test(value)){
            setPasswordsValid(true)
        }else{
            setPasswordsValid(false)
        }
    }

    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    const newUser = {
      ...data,
      id: `${Date.now()}`,
    };

    e.preventDefault();
    if (data.password === data.confirmPassword) {
      setPasswordsMatch(true);

      console.log("Passwords match!");
    } else {
      setPasswordsMatch(false);
    }

    const { status } = await axios.post("http://localhost:3000/user", newUser);
    if ((status === 201, data.password === data.confirmPassword)) {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="register">
      <img className='register__ellipse' src={ellipse} alt="" />
      <img className='register__ellipse2' src={ellipse} alt="" />
        <div className="register__title">
          <h1>Welcome Onboard!</h1>
          <h2>Lets help you in completing your tasks</h2>
        </div>
        <div className="register__input">
          <div className="register__input-fullName">
            <label htmlFor="">Full Name</label>
            <input
              name="name"
              onChange={inputHandler}
              type="text"
              placeholder="Hary Eliot"
            />
            {!nameValid && (
              <p style={{ color: "red" }}>Name must start with a capital letter and have 2 to 12 characters!</p>
            )}
          </div>
          <div className="register__input-email">
            <label htmlFor="">Email</label>
            <input
              name="email"
              onChange={inputHandler}
              type="text"
              placeholder="Hary.elliot@gmail.com"
            />
            {!emailValid && (
              <p style={{ color: "red" }}>Email should contains at least one character!</p>
            )}
          </div>
          <div className="register__input-password">
            <label htmlFor="">Password</label>
            <input
              name="password"
              onChange={inputHandler}
              type="password"
              placeholder="Enter the Password"
            />
            {!passwordValid && (
              <p style={{ color: "red" }}>Password should be at least 8 letters!</p>
            )}
          </div>
          <div className="register__input-confirmPassword">
            <label htmlFor="">Confirm Password</label>
            <input
              name="confirmPassword"
              onChange={inputHandler}
              type="password"
              placeholder="Confirm Password"
            />
            {!passwordsMatch && (
              <p style={{ color: "red" }}>Passwords do not match!</p>
            )}
          </div>
          <div className="register__bottom">
            <button onClick={handleSubmit}>Register</button>
            <p>
              Already have an account? <NavLink to={'/login'}>
              <span>Sign in</span>
                </NavLink> 
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
