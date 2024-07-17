import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <a key={book.id} href={book.href} className="group">
      <Link to={`/${book.id}`}>
        <div className="w-full h-64 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            alt={book.title}
            src={`/images/${(parseInt(book.id) % 6) + 1}.jpg`}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{book.title}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">$ {book.price}</p>
      </Link>
    </a>
  );
};

export default BookCard;
