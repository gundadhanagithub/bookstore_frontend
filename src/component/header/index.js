import React from "react";
import { Link } from "react-router-dom";

const Header = ({ showCreateButton }) => {
  return (
    <div className="border-gray-200 border-b-2 flex justify-between items-center py-5 mt-5">
      <div className="text-xl font-bold">
        <h1 className="text-gray-800 text-xl">Book Store</h1>
        <h2 className="text-gray-500 text-base">
          Find every book we have at our store
        </h2>
      </div>
      {showCreateButton ? (
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
          <Link to={"/add-book"}>Add new book</Link>
        </button>
      ) : (
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
          <Link to={"/"}>Book List</Link>
        </button>
      )}
    </div>
  );
};

export default Header;
