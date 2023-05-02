import { NavLink } from 'react-router-dom';
import Container from '../UI/Container'

import logo from '../../assets/logo.svg';
import classes from './MainNavigation.module.scss';

function MainNavigation() {
    
  return (
    <header className={classes.mainHeader}>
        <div className={classes.row_top_bar}>
          <img className={classes.logo} src={logo} alt="Logo" />
        </div>
        <Container>
            <div className='row'>
                <div className='col-12'>
                  <div className='d-flex justify-centyer'>
                  <NavLink
                  to="/"
                  className={({ isActive }) =>
                      isActive ? classes.active : undefined
                  }
                  end
                  >
                  <p>photogallery</p>
                  </NavLink>
                  <NavLink
                  to="/favourites"
                  className={({ isActive }) =>
                      isActive ? classes.active : undefined
                  }
                  >
                  <p>favourites</p>
                  </NavLink>
                  </div>
                </div>
              </div>
        </Container>
    </header>
  );
}

export default MainNavigation;
