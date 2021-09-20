import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { setUser } from "../../actions/actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const NavBar = ({ user, setUser }) => {
  const history = useHistory();

  //*Funciones
  const redirec = () => {
    history.push("/");
  };
  const setLogout = () => {
    setUser({});
    redirec();
  };

  return (
    <>
      <nav className={styles.Navbar}>
        <Link to="/" className={styles.homeBtn}>
          Home
        </Link>
        <div className="contFlex">
          {user.email ? (
            <>
              <Link to='perfil'>
                <div className="contFlex margRgth20" container>
                  <img
                    src={user.imageUrl}
                    alt=""
                    className="imgSize10 margRgth10"
                  />
                  <p className="txColorWht txSize15">{user.givenName}</p>
                </div>
              </Link>
              <a className="logoutBtn pointer" onClick={setLogout}>
                Logout
              </a>
            </>
          ) : (
            <Link to="/login" className={styles.loginBtn}>
              <a>Login</a>
            </Link>
          )}
        </div>

        {/* {login?<Link to="/" className={styles.loginBtn}>Salir</Link>:<Link to="/login" className={styles.loginBtn}>Login</Link>} */}
      </nav>
    </>
  );
};

//____________________________________________________________________
const container = `
background: papayawhip;
`;

//_____________________________________________________________________
function mapStateToProps(state) {
  return {
    switchSide: state.sideBarSwitch,
    user: state.userState,
  };
}

export default connect(mapStateToProps, { setUser })(NavBar);
