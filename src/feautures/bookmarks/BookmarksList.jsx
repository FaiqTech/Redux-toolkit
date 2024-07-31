// src/features/bookmarks/BookmarksList.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeBookmark } from "./bookmarksSlice";

const BookmarksList = () => {
  const dispatch = useDispatch();
  const { bookmarks } = useSelector((state) => state.bookmarks);
  const { pages } = useSelector((state) => state.pages); // Pages slice-dan səhifə məlumatlarını alırıq

  const handleRemoveBookmark = (pageId) => {
    dispatch(removeBookmark(pageId));
  };

  const bookmarkedPages = pages.filter((page) => bookmarks.includes(page.id));

  return (
    <div>
      <h2>Bookmarks List</h2>
      <ul>
        {bookmarkedPages.length > 0 ? (
          bookmarkedPages.map((page) => (
            <li key={page.id}>
              {page.title}
              <button onClick={() => handleRemoveBookmark(page.id)}>
                Remove Bookmark
              </button>
            </li>
          ))
        ) : (
          <p>No bookmarks yet</p>
        )}
      </ul>
    </div>
  );
};

export default BookmarksList;
