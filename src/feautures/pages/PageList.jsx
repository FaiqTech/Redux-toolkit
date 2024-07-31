// src/features/pages/PageList.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBookmark } from "../bookmarks/bookmarksSlice";

const PageList = () => {
  const dispatch = useDispatch();
  const { pages } = useSelector((state) => state.pages);
  const { bookmarks } = useSelector((state) => state.bookmarks);

  const handleAddBookmark = (pageId) => {
    dispatch(addBookmark(pageId));
  };

  return (
    <div>
      <h2>Page List</h2>
      <ul>
        {pages.map((page) => (
          <li key={page.id}>
            {page.title}
            <button onClick={() => handleAddBookmark(page.id)}>
              {bookmarks.includes(page.id) ? "Bookmarked" : "Add Bookmark"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PageList;
