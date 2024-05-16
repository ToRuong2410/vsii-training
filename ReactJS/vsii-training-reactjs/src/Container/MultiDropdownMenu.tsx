import React from 'react';
import { DropdownButton, DropdownMenu } from 'react-bootstrap';
import categories, { Category } from '../Components/data';
import DropdownListMenu from '../Components/DropdownMenu';

function MultiDropdownMenu() {
  return (
    <>
      <h2>---Drop Down Menu---</h2>
      <DropdownButton
        variant="secondary"
        id="dropdown-basic"
        title="Dropdown Menu"
      >
        <DropdownListMenu data={categories} />
      </DropdownButton>
    </>
  );
}

export default MultiDropdownMenu;
