import SearchBar from '../Searchbar/SearchBar';
import style from './Nav.module.css'
import Logout from '../../assets/log-out.png'
import Logo from '../../assets/Logo-no-bg.png'
import { Link, useLocation } from 'react-router-dom';


const Nav = ({ onSearch, logOut }) => {

  const { pathname } = useLocation();

  return (
    <div className={style.NavMainContainer} style={{padding: pathname === "/favorites" ? "4px 20px" : "15px 20px", gap: pathname === "/favorites" ? "0" : "15px"}}>
      <div className={style.NavButtonsContainer}>
        <div className={style.LogoContainer}>
          <Link to="/">
            <img className={style.Logo} src={Logo} alt="logo" />
          </Link>
        </div>
        

        <div className={style.NavSectionsContainer}>
          <div className={style.LinksContainer}>
            <Link to='/home'>
              <button className={style.NavAllButton}>All</button>
            </Link>
    
            <Link to='/favorites'>
              <button className={style.NavFavoritesButton}>Favorites</button>
            </Link>

            <Link to='/about'>
              <button className={style.NavAboutButton}>About</button>
            </Link>

            <Link to="/">
              <img onClick={logOut} src={Logout} alt="logout" className={style.NavLogoutImg} />
            </Link>
          </div>
          
          <div className={style.RandomAndSearchContainer}>
          {pathname !== '/favorites' || pathname !== '/detail' && <SearchBar onSearch={onSearch}/>}
          </div>

        </div>

      </div>
    </div>
  );
}

export default Nav;
