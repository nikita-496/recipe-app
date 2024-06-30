import styles from './CommentRow.module.css';

import { Icon } from '../../designSystem/icon/Icon';
import { useFetch } from '../../../hooks/useFetch';
import { UserResponse } from '../../../api/type/user';
import { Id } from '../../../api/type/common';

type CommentProps = {
  authorId: Id;
  created: string;
  text: string;
  likes: number;
};

export function CommentRow({ authorId, created, likes, text }: CommentProps) {
  const {
    response: user,
    error: error,
    loading: loading,
  } = useFetch<UserResponse>({ endpoint: 'users', params: { id: authorId } });

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className={`${styles['media']} d-flex`}>
          <a href="" className="mr-3">
            <img src={user?.avatar} alt="Avatar" />
          </a>
          <div>
            <div className="pt-1 pb-3">
              <h6 className="mb-2 text-size-s text-weight-l">{user?.name}</h6>
              <div className="text-gray text-size-s">{created}</div>
            </div>
            <p className="mb-3 text-size-s">{text}</p>
            <ul className="list-row list">
              <li className={`${styles['list-item']} list-item-unmarker`}>
                <button
                  className={`${styles['reply-button']} text-size-xs text-gray`}
                >
                  <Icon
                    icon="Dialog"
                    className={`${styles['button-icon']} align-middle`}
                    color="#7f7f7f"
                  />
                  Reply (2)
                </button>
              </li>
              <li className={`${styles['list-item']} list-item-unmarker`}>
                <button
                  className={`${styles['reply-button']} text-size-xs text-gray`}
                >
                  <Icon
                    icon="Heart"
                    className={`${styles['button-icon']} align-middle`}
                  />
                  {likes}
                </button>
              </li>
              <li className={`${styles['list-item']} list-item-unmarker`}>
                <button
                  className={`${styles['reply-button']} text-size-xs text-gray`}
                >
                  <Icon
                    icon="More"
                    className={`${styles['button-icon']} align-middle`}
                  />
                  More
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
