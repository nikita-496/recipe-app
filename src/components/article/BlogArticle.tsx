import { CardAuthor } from '../designSystem/card/cardAuthor/CardAuthor';
import { ArticleHeader } from './articleHeader/ArticleHeader';
import { ArticlePreview } from './articlePreview/ArticlePreview';
import { BlogArticleBody } from './blogArticleBody/BlogArticleBody';

import avatar from '../../assets/avatar.png';
import { useFetch } from '../../hooks/useFetch';
import { BlogResponse } from '../../api/type/blog';

export function BlogArticle() {
  const {
    response: blog,
    error,
    loading,
  } = useFetch<BlogResponse>({ endpoint: 'blogs', params: { id: 3 } });
  return loading ? (
    <p>Loading...</p>
  ) : (
    <>
      <ArticleHeader
        title={blog.title}
        metaData={{ articleCreated: blog.created }}
      />
      <ArticlePreview description={blog.description} source={blog.src.images} />
      <BlogArticleBody body={blog.body} />
      <CardAuthor
        fullName="Julie Gomez"
        rank="Editor in chief"
        supportingText="There are many variations of passages of Lorem Ipsum available, but the majority have suffered 
    alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
    If you are from repetition, injected humour, or non-characteristic words etc."
        image={avatar}
        meta={[
          { icon: 'Facebook' },
          { icon: 'Twitter' },
          { icon: 'Instagram' },
        ]}
      />
    </>
  );
}
