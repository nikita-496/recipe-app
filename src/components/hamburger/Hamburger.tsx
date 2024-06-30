import { useState } from 'react';
import { Icon } from '../designSystem/icon/Icon';
import style from './Hamburger.module.css';
import { NavMenu } from '../navMenu/NavMenu';

export function Hamburger() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleHamburger = () => {
    setShowMenu((showMenuPrev) => !showMenuPrev);
  };

  return (
    <>
      <button
        className={`${style['button-hamburger']}`}
        onClick={toggleHamburger}
      >
        <Icon icon="Hamburger" />
      </button>
      {showMenu && (
        <div className="collapse">
          <NavMenu />
        </div>
      )}
    </>
  );
}
