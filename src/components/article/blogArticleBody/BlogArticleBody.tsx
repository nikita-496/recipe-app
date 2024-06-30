type BlogArticleBodyProps = {
  body: string;
};

export function BlogArticleBody({ body }: BlogArticleBodyProps) {
  return (
    <article>
      <p>{body}</p>
    </article>
  );
}
