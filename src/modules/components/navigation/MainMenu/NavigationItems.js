import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className="NavigationItems">
    <NavigationItem exact link="/">home</NavigationItem>
    <NavigationItem link="/nice-page">nice page</NavigationItem>
  </ul>
);
export default navigationItems;