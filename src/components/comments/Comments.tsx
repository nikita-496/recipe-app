import { CommentResponse } from '../../api/type/comment';
import { useFetch } from '../../hooks/useFetch';
import { Button } from '../designSystem/button/Button';
import { CommentRow } from './commentRow/CommentRow';
import styles from './Comments.module.css';

export function Comments() {
  const {
    response: comments,
    error: error,
    loading: loading,
  } = useFetch<CommentResponse[]>({
    endpoint: 'comments',
    params: { queryParams: '?post=1' },
  });

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className={`${styles['header']} mb-4 pb-3`}>
            <h2 className="d-inline-block text-accent text-size-2xl">
              Comments
            </h2>
            &nbsp;
            <span>({comments.length})</span>
          </div>
          <ul className="list">
            {comments.map((comment) => (
              <li className="list-item-unmarker" key={comment.id}>
                <CommentRow
                  authorId={comment.author}
                  created={comment.created}
                  likes={comment.likes}
                  text={comment.text}
                />
              </li>
            ))}
          </ul>
          <Button
            className={`${styles['load-more']} w-full text-size-base text-weight-m`}
            variant="outlined"
          >
            Load more comments
          </Button>
        </>
      )}
    </>
  );
}
