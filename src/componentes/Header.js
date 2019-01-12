import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  return (
    <nav>
      <div className='nav-wrapper light-blue darken-3'>
        <a href='false' className='brand-logo center'>
          {props.titulo} - Creado por Lorgiam Arce Castaño
        </a>
      </div>
    </nav>
  );
};

Header.propTypes = {
  titulo: PropTypes.string.isRequired
};

export default Header;
