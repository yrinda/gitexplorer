import React from 'react';
import PropTypes from 'prop-types';
import Toggle from './toggle';

const Nav = ({ normalType, mode, onToggle }) => (
  <nav className="nav">
    <Toggle
      checked={normalType}
      leftLabel="Slow type speed"
      name="normalType"
      onChange={onToggle}
      rightLabel="Normal type speed"
    />
    <Toggle
      checked={mode}
      leftLabel="Light Mode"
      name="dark"
      onChange={onToggle}
      rightLabel="Dark Mode"
    />
  </nav>
);

Nav.propTypes = {
  normalType: PropTypes.bool,
  mode: PropTypes.bool,
  onToggle: PropTypes.func,
};

export { Nav };
