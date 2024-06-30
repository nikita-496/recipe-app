import { ArticleToolbar } from '../articleToolbar/ArticleToolbar';

import avatar from '../../../assets/avatar2.png';
import { Icon } from '../../designSystem/icon/Icon';
import { ReactNode } from 'react';
import { useFetch } from '../../../hooks/useFetch';
import { UserResponse } from '../../../api/type/user';

type MetaData = {
  articleCreated: string;
  articleRating?: number;
};

type ArticleHeaderProps = {
  subhead?: ReactNode;
  // starRatings?: ReactNode;
  title: string;
  metaData: MetaData;
};

export function ArticleHeader({
  title,
  metaData,
  subhead,
}: ArticleHeaderProps) {
  const {
    response: author,
    error,
    loading,
  } = useFetch<UserResponse>({ endpoint: 'users', params: { id: 1 } });

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <header>
          <div className="d-flex">
            {/*subhead*/}
            <ArticleToolbar className="ml-auto" />
          </div>
          <h5 className="text-accent text-size-xl py-3">{title}</h5>
          <div className="d-flex flex-wrap">
            <div className="my-2 mr-4">
              <img src={avatar} alt="Author" className="align-middle" />
              &nbsp;
              <small className="text-size-xs pl-1">{author.name}</small>
            </div>
            <div className="my-2 mr-4">
              <Icon icon="Calendar" className="align-middle" />
              &nbsp;
              <small className="text-size-xs">{metaData.articleCreated}</small>
            </div>
            <div className="my-2 mr-4">
              <Icon icon="Dialog" className="align-middle" />
              &nbsp;
              <small className="text-size-xs">22</small>
            </div>
            {}
          </div>
          <hr />
        </header>
      )}
    </>
  );
}
