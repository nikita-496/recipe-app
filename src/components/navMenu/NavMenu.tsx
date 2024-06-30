import style from './NavMenu.module.css';

export function NavMenu() {
  return (
    <ul className={`${style['nav-list-primary']} list-row list`}>
      <li className="list-item-unmarker">
        <a href="#" className={`${style['nav-link']} link text-weight-m`}>
          Home
        </a>
      </li>
      <li className="list-item-unmarker">
        <a href="#" className={`${style['nav-link']} link text-weight-m`}>
          Recipes
        </a>
      </li>
      <li className="list-item-unmarker">
        <a href="#" className={`${style['nav-link']} link text-weight-m`}>
          Categories
        </a>
      </li>
      <li className="list-item-unmarker">
        <a href="#" className={`${style['nav-link']} link text-weight-m`}>
          Blogs
        </a>
      </li>
      <li className="list-item-unmarker">
        <a href="#" className={`${style['nav-link']} link text-weight-m`}>
          About
        </a>
      </li>
    </ul>
  );
}
