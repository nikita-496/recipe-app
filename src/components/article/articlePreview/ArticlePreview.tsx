import { Icon } from '../../designSystem/icon/Icon';
import { PreviewSource } from '../../previewSource/PreviewSource';

import styles from './ArticlePreview.module.css';

type ArticlePreview = {
  description: string;
  source: string[];
};

export function ArticlePreview({ description, source }: ArticlePreview) {
  return (
    <>
      <p className={`${styles['article-description']} mb-3 text-size-s`}>
        {description}
      </p>
      <br />
      <PreviewSource images={source}>
        <Icon className={`${styles['video-player-action']}`} icon="Play" />
      </PreviewSource>
      <br />
      <br />
    </>
  );
}
