import { BlogArticle } from '../../article/BlogArticle';
import { CommentForm } from '../../comments/CommentForm/CommentForm';
import { Comments } from '../../comments/Comments';
import { SimilarCollection } from '../../similarCollection/SimilarCollection';

export function Blog() {
  return (
    <div className="container">
      <BlogArticle />
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
