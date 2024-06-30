import { InstructionsType } from '../../api/type/recipe';
import styles from './Instructions.module.css';

export function Instructions({
  instructions,
}: {
  instructions: InstructionsType;
}) {
  return (
    <>
      <h6 className="mb-2 text-accent text-size-l text-weight-xl">
        Instructions
      </h6>
      <ul className={`${styles['list-instruction']} list`}>
        {instructions.map((instruction, i) => (
          <li
            className={`${styles['list-item']} text-size-s list-item-unmarker`}
            key={instruction}
          >
            <span
              className={`${styles['list-item-step']} text-weight-m d-inline-flex justify-center align-items-center`}
            >
              {i + 1}
            </span>
            {instruction}
          </li>
        ))}
      </ul>
    </>
  );
}
