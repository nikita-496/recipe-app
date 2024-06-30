import { Fragment, PropsWithChildren, createElement, useState } from 'react';
import { Button } from '../designSystem/button/Button';

export function AdjustableFields({ children }: PropsWithChildren) {
  const generId = () => crypto.randomUUID();

  const [elements, setElements] = useState([
    {
      id: generId(),
      item: children,
    },
  ]);

  const add = () =>
    setElements([...elements, { id: generId(), item: children }]);

  const remove = (id: string) =>
    setElements((prevElements) =>
      prevElements.filter((prevElement) => prevElement.id !== id),
    );

  return (
    <>
      {elements.map((element, index) => (
        <div key={element.id}>
          {createElement(Fragment, {}, element.item)}
          {elements.length > 1 && (
            <Button type="button" onClick={() => remove(element.id)}>
              Remove
            </Button>
          )}
        </div>
      ))}
      <Button type="button" onClick={add}>
        Add
      </Button>
    </>
  );
}
