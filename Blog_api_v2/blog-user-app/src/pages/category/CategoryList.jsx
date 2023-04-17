import React from "react";
import { Link } from "react-router-dom";
import { useGetAllCategoriesQuery } from "../../app/services/categoryServices";

function CategoryList() {
  const { data } = useGetAllCategoriesQuery();
  return (
    <main className="main">
      <header className="page-header">
        <h1>Tags</h1>
      </header>
      <ul className="terms-tags">
        {data?.map((c, index) => (
          <li key={c.id}>
            <Link to={`/categories/${c.name}`}>
              <sup>
                {c.name}
                <strong>
                  <sup>{c.used}</sup>
                </strong>
              </sup>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default CategoryList;
