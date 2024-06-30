import style from './Header.module.css';
import { Icon } from '../../designSystem/icon/Icon';

import logo from '../../../assets/svg/logo.svg';
import avatar from '../../../assets/avatar.png';
import { NavMenu } from '../../navMenu/NavMenu';
import { Hamburger } from '../../hamburger/Hamburger';
import { Button } from '../../designSystem/button/Button';
import { withDialog } from '../../../hoc/withDialog';
import { WrappedComponentProps } from '../../@types/props/WrappedComponent';
import { Login } from '../../login/Login';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

const LoginWithDialog = withDialog(LoginButton, 'Login', true, Login);

function LoginButton({ toggleDialog, forwardRef }: WrappedComponentProps) {
  return (
    <Button
      variant="outlined"
      className={`${style['nav-item-profile-login']} text-weight-m`}
      onClick={toggleDialog}
    >
      Login
    </Button>
  );
}

export function Header() {
  const matches = useMediaQuery('(min-width: 768px)');
  return (
    <div className="container">
      <header className={`${style['header']}`}>
        <nav className={style['nav']}>
          <a href="/">
            <img
              className={style['image-navbar-brand']}
              src={logo}
              alt="Tastebite"
            />
          </a>
          <div className={style['nav-desktop']}>
            <NavMenu />
          </div>

          <ul className="list-row list">
            <li className="d-flex list-item-unmarker">
              <Icon
                icon="Search"
                color="#000"
                width={matches ? 30.7 : 24}
                height={matches ? 30.7 : 24}
              />
            </li>
            <li className={`${style['nav-item-profile']} list-item-unmarker`}>
              {/*<img src={avatar} alt="Avatar" />*/}
              <LoginWithDialog />
            </li>
            <li
              className={`${style['hamburger-wrapper']} item-vertical-middle`}
            >
              <Hamburger />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
