import { RecipeArticle } from '../../article/RecipeArticle';
import { CommentForm } from '../../comments/CommentForm/CommentForm';
import { Comments } from '../../comments/Comments';

import styles from './Recipe.module.css';

import { SimilarCollection } from '../../similarCollection/SimilarCollection';

export function Recipe() {
  return (
    <div className="container">
      <RecipeArticle />
      <br />
      <br />
      <hr className={`${styles['divider']} bg-primary`} />
      <div className="my-5 pt-0 pt-md-3">
        <Comments />
      </div>
      <CommentForm />
      <section className="my-4 my-md-5">
        <SimilarCollection />
      </section>
    </div>
  );
}
