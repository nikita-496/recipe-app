import styles from './PreviewSource.module.css';

import { Image } from '../../api/type/common';
import { PropsWithChildren } from 'react';

type PreviewSource = {
  images: Image[];
};

export function PreviewSource({
  images,
  children,
}: PreviewSource & PropsWithChildren) {
  return (
    <div className={`${styles['video-player-preview']} overlay-box`}>
      <img className="align-middle w-full" src={images[0]} alt="Cheesecake" />
      {children}
    </div>
  );
}
