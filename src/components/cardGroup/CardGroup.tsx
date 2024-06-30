import { PropsWithChildren } from 'react';

type CardGroupProps = {
  name?: string;
  titleStyle?: string;
} & PropsWithChildren;

export function CardGroup({ name, titleStyle, children }: CardGroupProps) {
  return (
    <section className="section">
      {name && <h5 className={` ${titleStyle} section-title`}>{name}</h5>}
      <div className="card-row-gutter row">{children}</div>
    </section>
  );
}
