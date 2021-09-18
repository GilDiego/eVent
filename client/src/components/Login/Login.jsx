import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
// import { withRouter } from 'react-router-dom';//?PARA QUE ES ESTO ????????????Gerardo
import { GoogleLogin } from "react-google-login";

const Login = () => {
  //*Google
  const responseGoogle = (response) => {
    console.log(response);
    console.log("usuario---------------", response.profileObj);
  };

  //*Expresiones
  const emailValidate =
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  const passValidate =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
  // Minimo 8 caracteres
  // Maximo 15
  // Al menos una letra mayúscula
  // Al menos una letra minucula
  // Al menos un dígito
  // No espacios en blanco
  // Al menos 1 caracter especial

  //*Estados
  const [FormState, setFormState] = useState({
    nick: "",
    email: " ",
    pass: "",
  });
  // const [MessageNick, setMessageNick] = useState('Escribe tu Alias')
  const [MessageMail, setMessageMail] = useState(" ");
  const [SwitchMail, setSwitchMail] = useState(null);
  const [MessagePass, setMessagePass] = useState(" ");
  const [SwitchPass, setSwitchPass] = useState(null);

  //*Funciones onChange
  const upgradeEmail = (e) => {
    if (e.target.value === "") {
      setMessageMail("x");
      setSwitchMail(false);
    } else {
      setMessageMail(" ");
    }
    if (e.target.value.match(emailValidate)) {
      setMessageMail("*");
      setSwitchMail(true);
    }
    setFormState({ ...FormState, [e.target.name]: e.target.value });
  };
  const upgradePass = (e) => {
    if (e.target.value === "") {
      setMessagePass("x");
      setSwitchPass(false);
    } else {
      setMessagePass(" ");
    }
    if (e.target.value.match(passValidate)) {
      setMessagePass("*");
      setSwitchPass(true);
    }
    setFormState({ ...FormState, [e.target.name]: e.target.value });
  };

  //*Funcion on submit
  const setLog = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} submit={setLog}>
        <h4 className={styles.title}>Login</h4>
        <div className={styles.subContainer}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
            onChange={upgradeEmail}
            value={FormState.email}
            name="email"
          />
          <span className={SwitchMail ? styles.true : styles.false}>
            {MessageMail}
          </span>
        </div>
        <div className={styles.subContainer}>
          <label className={styles.label}>Password</label>
          <input
            type="password"
            onChange={upgradePass}
            value={FormState.pass}
            name="pass"
          />
          <span className={SwitchPass ? styles.true : styles.false}>
            {MessagePass}
          </span>
        </div>
        {SwitchMail && SwitchPass ? (
          <button className={styles.btn} type="Submit">
            Log
          </button>
        ) : (
          <button className={styles.null}>Log</button>
        )}
        <p className={styles.titleTwo}>o</p>
        <h4 className={styles.titleTwo}>Crea un cuenta</h4>
        <div className={styles.subContainerTwo}>
          <Link to="/formUser" className={styles.loginBtn}>
            <button className={styles.btnTwo}>Usuario</button>
          </Link>
          <Link to="/FormPromoter" className={styles.loginBtn}>
            <button className={styles.btnTwo}>Promotor</button>
          </Link>
          <br />
          <br />
          <GoogleLogin
            clientId="376627127490-bk5ds8a9vkmkv2ar8te87qteg0gpivuk.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
