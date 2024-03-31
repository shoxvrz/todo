import { useNavigate } from 'react-router-dom'
import image from '../../assets/images/undraw_access_account_re_8spm 1.png'
import './Login.scss'
import ellipse from '../../assets/images/Ellipse 1.png'

function Login() {
const navigate = useNavigate();


  return (
    <div className="login">
      <img className='login__ellipse' src={ellipse} alt="" />
      <img className='login__ellipse2' src={ellipse} alt="" />
      <div className="login__title">
        <h1>Welcome Back!</h1>
        <img src={image} alt="" />
      </div>
      <div className="login__input">
        <div>
          <label htmlFor="">Email</label>
          <input type="email" placeholder='mary.elliot@gmail.com' name='email' />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="password" placeholder='Enter the password' name='password' />
        </div>
      </div>
      <div className="login__bottom">
        <button onClick={(() => navigate('/home'))}>Login</button>
        <p>Do not have an account? <span onClick={(() => navigate('/register'))}>Sign Up</span></p>
      </div>
    </div>
  )
}

export default Login