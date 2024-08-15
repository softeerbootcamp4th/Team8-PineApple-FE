import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function NavLinkItem({ path, value }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `${
          isActive
            ? 'text-body-3-bold text-neutral-black border-b-black border-b-solid border-b-[3px]'
            : 'text-detail-1-regular text-neutral-500 hover:scale-110 transition-transform duration-300'
        }`
      }
    >
      {value}
    </NavLink>
  );
}

NavLinkItem.propTypes = {
  path: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default NavLinkItem;
