import React, { useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import {
  useGetAllBlogsQuery,
  useGetTopTagQuery,
} from "../../app/services/blogsServices";

function BlogList() {
  const navigate = useNavigate();
  const { page } = useParams();
  const { data, isLoading, isError, error } = useGetAllBlogsQuery({
    page: page,
    pageSize: 5,
  });
  const { data: topcate } = useGetTopTagQuery();
  console.log(page);

  if (isLoading) {
    return <h2>Loading ...</h2>;
  }

  if (isError) {
    return <h2>Error : {error}</h2>;
  }
  if (Number(page) === 0) {
    navigate("/");
  }
  return (
    <main className="main">
      <header className="entry-header">
        <h1>
          <span
            style={{
              display: "inline-block",
              transform: "rotateY(180deg)",
            }}
          >
            🐈
          </span>
          Blog app <span>🐈</span>
        </h1>
      </header>
      <ul className="terms-tags top-tags">
        {topcate?.map((c, index) => (
          <li key={c.id}>
            <Link to={`/categories/${c.name}`}>
              {c.name}
              <sup>
                <strong>
                  <sup>{c.used}</sup>
                </strong>
              </sup>
            </Link>
          </li>
        ))}
      </ul>
      {data.content.map((c, index) => (
        <article className="post-entry" key={c.id}>
          <header className="entry-header">
            <h2>{c.title}</h2>
          </header>
          <div className="entry-content">
            <p>{c.description}</p>
          </div>
          <footer className="entry-footer">
            <span>{c.createdAt}</span>
          </footer>
          <Link
            className="entry-link"
            aria-label="post link to Hướng dẫn tạo tài khoản và sử dụng ChatGPT chỉ với 1 cốc trà đá"
            to={`/blogs/${c.id}/${c.slug}`}
          ></Link>
        </article>
      ))}
      <footer className="page-footer">
        <nav className="pagination">
          {!data.first && (
            <Link className="prev" to={`/page/${+page - 1}`}>
              Trang trước
            </Link>
          )}
          {!data.last && (
            <Link className="next" to={`/page/${+page + 1}`}>
              Trang tiếp theo
            </Link>
          )}
        </nav>
      </footer>
    </main>
  );
}

export default BlogList;
