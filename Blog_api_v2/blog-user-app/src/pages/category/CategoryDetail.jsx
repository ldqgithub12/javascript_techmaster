import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetAllBlogOfCategoryQuery } from "../../app/services/categoryServices";

function CategoryDetail() {
  const { name } = useParams();
  const { data } = useGetAllBlogOfCategoryQuery(name);
  console.log(name);
  return (
    <main className="main">
      <header className="entry-header">
        <h1 style={{ marginBottom: "1rem" }}>Tag : {name}</h1>
      </header>
      {data?.map((c, index) => (
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
    </main>
  );
}

export default CategoryDetail;
