import React from "react";
import { useGetBlogDetailQuery } from "../../app/services/blogsServices";
import { Link, useParams } from "react-router-dom";

function BlogDetail() {
  const { blogId, blogSlug } = useParams();
  const { data } = useGetBlogDetailQuery({ blogId, blogSlug });
  console.log(blogId);
  console.log(blogSlug);
  return (
    <main className="main">
      <article className="post-single">
        <header className="post-header">
          <h1 className="post-title">{data?.title}</h1>
          <div className="post-meta">
            <span>{data?.createdAt}</span>
          </div>
        </header>
        <div className="post-content">
          <p>{data?.description}</p>
        </div>
      </article>
    </main>
  );
}

export default BlogDetail;
