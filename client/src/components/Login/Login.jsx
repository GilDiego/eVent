import React, { useState } from "react";
import { connect } from "react-redux";
import { setUser } from "../../actions/actions";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import { useHistory } from "react-router-dom";
import LogResponse from "../LogResponse/LogResponse.jsx";
import { GoogleLogin } from "react-google-login";
// import FacebookLogin from 'react-facebook-login';
// import Loading from "../Loading/Loading";

const Login = ({ setUser, user }) => {
  const history = useHistory();
  
  //*Estados______________________________________________________________________
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
  const [Message, setMessage] = useState("");
  const [Logger, setLogger] = useState("true");
  const [Button, setButton] = useState(false);

  //*Funciones__________________________________________________________________
  const redirec = (dir) => {
    history.push(dir);
  };

  //*Google
  const responseGoogle = async (resG) => {
    let obj = { email: resG.profileObj.email };
   
    try {
      let config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      };
      let res = await fetch("http://localhost:3001/api/user/login", config);
      let json = await res.json();
      setButton(true);
      if (!json.msg) {
        setLogger(false);
      } else {
        setLogger(true); 
        setUser(resG.profileObj);
        setTimeout(function () {
          redirec("/");
        }, 2000);
      }
    } catch (err) {
      console.log("error__________________", err);
    }
  };

  //*Facebook
  // const responseFacebook = (resF) => {
  //   console.log(resF);
  //   console.log("userf---------------", resF.name);
  // }

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

  //*Funcion on click
  const setNotFound = () => {
    setButton(false);
  };

  //*Funcion on submit
  const setLog = (e) => {
    e.preventDefault();
    if (!FormState.mail && !FormState.pass) {
      setMessage("Todos los campos son obligatorios");
      setTimeout(function () {
        setMessage("");
      }, 1000);
    } else redirec();
  };

  return (
    <div className={styles.container}>
      <h5 className={styles.message}> {Message}</h5>

      <form className={styles.form} onSubmit={setLog}>
        {!Button ? (
          //*_______________________________________________________________________________________________________
          <>
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
            {true ? (
              <button className="btnForm margTop20" type="Submit">
                Log
              </button>
            ) : (
              <button className={styles.null}>Log</button>
            )}
            <div className="margTop40 ">
              <GoogleLogin
                clientId="376627127490-bk5ds8a9vkmkv2ar8te87qteg0gpivuk.apps.googleusercontent.com"
                buttonText="Ingresa con Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
                // render={renderProps => (
                //   <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Google</button>
                // )}
              />
              <Link to="/registration">
                <h4 className="txColorWht txAligneCntr margTop40">
                  Crea tu cuenta
                </h4>
              </Link>
            </div>

            {/* 
<div className={styles.subContainerTwo}>
  <FacebookLogin
    appId="226871852734478"
    autoLoad={true}
    fields="name,email,picture"
    onClick={responseFacebook}
    callback={responseFacebook}
  />
</div> */}
          </>
        ) : (
          <>
            {Logger ? (
              <LogResponse
                styles={styles}
                setNotFound={setNotFound}
                icono="fas fa-check-circle"
                message="Bienvenido"
                messageTwo="has ingresado a Event"
                switchBtn={ false }
                switchStyle={ styles.iconTrue }
                name={ user.givenName }
              />
            ) : (
              <LogResponse
                styles={styles}
                setNotFound={setNotFound}
                icono="fas fa-exclamation-circle"
                message="El usuario no se encuentra registrado"
                messageTwo="Intentalo de nuevo"
                switchBtn={ true }
                switchStyle={ styles.iconFalse }
              />
            )}
          </>
        )}
      </form>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    user: state.userState,
  };
}
export default connect(mapStateToProps, { setUser })(Login);
