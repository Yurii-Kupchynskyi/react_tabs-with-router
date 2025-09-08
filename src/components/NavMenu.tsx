import classNames from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';

export const NavMenu = () => {
  const { pathname } = useLocation();

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className={classNames('navbar-item', {
                'is-active': pathname === '/',
              })}
            >
              Home
            </NavLink>
            {/* And here test say 'should have Tabs link without `is-active` class' */}
            <NavLink
              to="/tabs"
              className={classNames('navbar-item', {
                'is-active': pathname.startsWith('/tabs'),
              })}
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};
