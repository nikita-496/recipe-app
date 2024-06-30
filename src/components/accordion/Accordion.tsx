import { useState } from 'react';
import { Icon } from '../designSystem/icon/Icon';

import styles from './Accordion.module.css';

type AccordionProps = {
  name: string;
  items: string[];
};

export function Accordion({ name, items }: AccordionProps) {
  const [isActiveAccordion, setActiveAccordion] = useState(false);
  const toggleAccordion = () =>
    setActiveAccordion((prevIsActiveAccordion) => !prevIsActiveAccordion);
  return (
    <>
      <div className="d-flex align-items-center">
        <h6
          className={`${styles['caption']} d-inline-block text-size-s text-weight-m mb-2`}
        >
          {name}
        </h6>
        <button
          onClick={toggleAccordion}
          className={`${styles['button-icon']} d-inline-block pa-0 ml-auto`}
        >
          <Icon icon="Arrow" className={`${styles['icon-arrow']}`} />
        </button>
      </div>
      <ul
        className={`${styles['accordion-list']} ${
          isActiveAccordion ? 'list' : styles['list-none']
        } mb-3`}
      >
        {items.map((item) => (
          <li className="list-item list-item-unmarker text-size-s" key={item}>
            <a href="#" className={`${styles['accordion-item']} text-gray`}>
              {item}
            </a>
          </li>
        ))}
      </ul>
      <hr className={`${styles['accordion-divider']} ${styles['divider']}`} />
    </>
  );
}
