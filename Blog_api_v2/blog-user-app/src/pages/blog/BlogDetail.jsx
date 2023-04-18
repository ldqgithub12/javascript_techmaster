import React from "react";
import {
  useGetBlogCommentQuery,
  useGetBlogDetailQuery,
} from "../../app/services/blogsServices";
import { Link, useParams } from "react-router-dom";

function BlogDetail() {
  const { blogId, blogSlug } = useParams();
  const { data } = useGetBlogDetailQuery({ blogId, blogSlug });
  const { data: commentData } = useGetBlogCommentQuery(blogId);
  console.log(commentData);
  const commentBox = {
    paddingLeft: "20px",
    borderTop: "black solid 1px",
    marginTop: "5px",
    padding: "15px",
  };
  const userNameCss = {
    fontWeight: "bold",
    fontSize: "15px",
  };
  const dateCss = {
    fontWeight: "300",
    fontSize: "10px",
  };
  const commentCss = {
    fontSize: "13px",
  };
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
      {commentData?.map((c, index) => (
        <div style={commentBox}>
          <p style={userNameCss}>{c.username}</p>
          <p style={dateCss}>{c.createdAt}</p>
          <p style={commentCss}>{c.comment}</p>
        </div>
      ))}
    </main>
  );
}

export default BlogDetail;
