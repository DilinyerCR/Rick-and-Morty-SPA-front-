import style from "./Login.module.css";
import Logo from "../../assets/Logo-no-bg.png";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import validator from "./validation";


const Login = ({ login, noRegistered }) => {

  const [ loginInput, setLoginInput ] = useState({
    email: "dilinyer@gmail.com",
    password: "Dilinyer123"
  });

  const [ errors, setErrors ] = useState({});

  const handleChange = (event) => {
    setErrors(validator({
      ...loginInput,
      [event.target.name] : event.target.value
    }))

    setLoginInput({
      ...loginInput,
      [event.target.name] : event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    login(loginInput);
  }


  return (
    <div>
      <div className={style.HomeNavContainer}>
        <div className={style.ImgContainer}>
          <img className={style.Logo} src={Logo} alt="" />
        </div>
        <div className={style.ButtonsContainer}>
          <Link to="/about">
            <button className={style.AboutButton}>About</button>
          </Link>
          
          <Link to="/">
            <button className={style.LoginButton}>Back</button>
          </Link>
        </div>
      </div>


      <div className={style.LoginSection}>
        <form 
          className={style.LoginForm} 
          onSubmit={handleSubmit}
        >
          <div className={style.EmailContainer}>
            <label htmlFor="email">Email:</label>
            <input 
              type="text" 
              name="email" 
              id="email" 
              value={loginInput.email}
              onChange={handleChange}
              className={style.LoginInput}
            />

            {
              errors.e1 && (<p className={style.ErrorOne}>{errors.e1}</p>)
            }
            
          </div>

          <div className={style.PasswordContainer}>
            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              value={loginInput.password}
              onChange={handleChange}
              className={style.LoginInput}
            />

            {
              errors.e2 && (<p className={style.ErrorTwo}>{errors.e2}</p>)
            }
          </div>

          {noRegistered !== "" && <p className={style.ErrorThree}>{noRegistered}</p>}
          
          <button type="submit" className={style.LoginButton}>Login</button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
