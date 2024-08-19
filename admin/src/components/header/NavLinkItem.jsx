import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { DateContext } from '@/context/dateContext';

function NavLinkItem({ path, value }) {
  const { dateInfo } = useContext(DateContext);

  const fullPath = `/${dateInfo}${path}`;

  return (
    <NavLink
      to={fullPath}
      end
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
