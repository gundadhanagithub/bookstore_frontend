import React, { useEffect, useState } from "react";
import Header from "../../component/header";
import axiosIntance from "../../utils/axios";
import BookCard from "./bookCard";
import FiltersComponent from "./filters";

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const [queryParams, setQueryParams] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axiosIntance.get(`/books/?${queryParams}`);
      const books = response?.data ?? [];
      console.log(books);
      const sortedBooks = books.sort((a, b) => a.id - b.id);
      setBooks(sortedBooks);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [queryParams]);

  return (
    <div className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:pb-8">
      <Header showCreateButton={true} />
      <div className="grid grid-cols-5">
        <div className="col-span-1 py-3">
          <FiltersComponent setQueryParams={setQueryParams} />
        </div>
        <div className="col-span-4">
          <div className="">
            <div className="mx-auto px-4 py-6 max-w-7xl">
              <h2 className="sr-only">Products</h2>

              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {books.map((book) => (
                  <BookCard book={book} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksList;
