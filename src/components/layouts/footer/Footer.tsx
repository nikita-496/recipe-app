import style from './Footer.module.css';
import logo from '../../../assets/svg/logo.svg';
import { Accordion } from '../../accordion/Accordion';
import { Icon } from '../../designSystem/icon/Icon';

const links = [
  {
    name: 'Tastebite',
    items: ['About us', 'Careers', 'Contact us', 'Feedback'],
  },
  {
    name: 'Legal',
    items: ['Terms', 'Conditions', 'Cookies', 'Copyright'],
  },
  {
    name: 'Follow',
    items: ['Facebook', 'Twitter', 'Instagram', 'Youtube'],
  },
];

export function Footer() {
  const generId = () => crypto.randomUUID();

  return (
    <footer className={`${style['footer']} pt-3 pt-md-5 mt-5`}>
      <div className="container">
        <div className="row card-row-gutter pt-4 pb-0 pb-md-5">
          <div className="card-col-gutter col-md-6">
            <div
              className={`${style['footer-content']} pr-0 pr-lg-5 mr-0 mr-md-5`}
            >
              <a href="#">
                <img
                  className={`${style['image-footer-brand']} align-middle`}
                  src={logo}
                  alt="Tastebite"
                />
              </a>
              <p
                className={`${style['footer-content-text']}  text-gray text-size-s my-3 pr-0 pr-lg-5 mr-0 mr-lg-4`}
              >
                "On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment"
              </p>
            </div>
          </div>

          {links.map((link) => (
            <>
              <div className="card-col-gutter col-md-2" key={link.name}>
                <div className={`${style['accordion-wrapper']}`}>
                  <Accordion name={link.name} items={link.items} />
                </div>
                <div className={`${style['links-wrapper']}`}>
                  <h6 className={`text-size-s text-weight-m mb-2`}>
                    {link.name}
                  </h6>
                  <ul className={`${style['links-list']} list`}>
                    {link.items.map((item) => (
                      <li
                        className="list-item list-item-unmarker text-size-s"
                        key={generId()}
                      >
                        <a
                          href="#"
                          className={`${style['links-item']} text-gray`}
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          ))}
        </div>
        <hr
          className={`${style['footer-bottom-divider']} ${style['divider']}`}
        />
        <div
          className={`${style['row-bottom']} row pb-4 pt-2 align-items-center flex-col`}
        >
          <div className={`${style['footer-copyright']} col-md-6`}>
            <ul className="list-row list">
              <li className="list-item-unmarker">
                <a href="#" className="link">
                  <Icon icon="Facebook" color="#7f7f7f" />
                </a>
              </li>
              <li className="list-item-unmarker">
                <a href="#" className="link">
                  <Icon icon="Instagram" color="#7f7f7f" />
                </a>
              </li>
              <li className="list-item-unmarker">
                <a href="#" className="link">
                  <Icon icon="Twitter" color="#7f7f7f" />
                </a>
              </li>
              <li className="list-item-unmarker">
                <a href="#" className="link">
                  <Icon icon="Youtube" color="#7f7f7f" />
                </a>
              </li>
            </ul>
          </div>
          <div className={`${style['footer-social']} col-md-6`}>
            <p className="text-gray text-size-xs">
              © 2020 Tastebite - All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
