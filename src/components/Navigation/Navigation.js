import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink
        exact
        to={routes.home}
        className={s.home}
        activeClassName={s.item_active}
      >
        Home
      </NavLink>
      <NavLink
        exact
        to={routes.movies}
        className={s.movies}
        activeClassName={s.item_active}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
