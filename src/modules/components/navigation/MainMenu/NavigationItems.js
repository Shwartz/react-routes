import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className="NavigationItems">
    <NavigationItem exact link="/">Home</NavigationItem>
    <NavigationItem link="/page-one">Page One</NavigationItem>
    <NavigationItem link="/page-two">Page Two</NavigationItem>
  </ul>
);
export default navigationItems;