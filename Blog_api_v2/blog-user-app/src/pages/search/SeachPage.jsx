import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFindBlogByNameQuery } from "../../app/services/blogsServices";

function SeachPage() {
  const [name, setName] = useState("");
  const handleSetName = (event) => {
    setName(event.target.value);
  };
  const { data } = useFindBlogByNameQuery(name);
  console.log(data);
  return (
    <main className="main">
      <header className="page-header">
        <h1>
          Search
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentcolor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </h1>
        <div className="post-description">Tìm kiếm bài viết</div>
        <div className="post-meta"></div>
      </header>
      <div id="searchbox">
        <input
          id="searchInput"
          autoFocus
          placeholder="Tìm kiếm bài viết"
          type="search"
          autoComplete="off"
          value={name}
          onChange={(e) => handleSetName(e)}
        />
        <ul id="searchResults">
          {data?.map((c, index) => (
            <li className="post-entry" key={c.id}>
              <header className="entry-header">{c.title}&nbsp;»</header>
              <Link
                to={`/blogs/${c.id}/${c.slug}`}
                aria-label="Truyền dữ liệu giữa React Components"
              ></Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default SeachPage;
