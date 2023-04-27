import { Fragment,useContext } from "react";
import { Outlet, Link } from "react-router-dom"; 
import { default as logo } from '../../assets/DLD.png'
import './navigation.styles.scss'
import { UserContext } from "../../context/user.context";
import {signOutUser} from '../../utils/firebase/firebase.utils'
import CardIcon from "../../components/card-icon/cardIcon.component";
import CardDropdown from "../../components/card-dropdown/cardDropdown.component";
import { CardContext } from "../../context/card.context";

export default function Navigation() {
    const {currentUser,setCurrentUser} = useContext(UserContext)
    const {isCardOpen} = useContext(CardContext)
    
    const signOutHandler = async()=>{
        await signOutUser()
        setCurrentUser(null)
    }
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={logo} className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span class="nav-link" onClick={signOutHandler}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CardIcon/>
        </div>
        {isCardOpen && <CardDropdown/>}
      </div>
      <Outlet />
    </Fragment>
  );
}
