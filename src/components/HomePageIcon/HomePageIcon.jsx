import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function HomeIcon() {
  return (
    <Link to="/">
      <FontAwesomeIcon icon={faHome} />
    </Link>
  );
}

export default HomeIcon;
