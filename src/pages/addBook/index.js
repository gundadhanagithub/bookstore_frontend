import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../component/header";
import axiosInstance from "../../utils/axios";

const AddBook = () => {
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    const formData = new FormData(e.target);
    let object = {};
    formData.forEach((value, key) => (object[key] = value));
    let json = JSON.stringify(object);
    axiosInstance
      .post("/books/", json)
      .then((response) => {
        alert("Book added successfully");
        navigate("/");
      })
      .catch((error) => {
        alert("Something went wrong");
      });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:pb-8">
      <Header showCreateButton={false} />
      <form
        className="grid grid-cols-2 gap-10 mt-6"
        onSubmit={(e) => {
          handelSubmit(e);
          e.preventDefault();
        }}
      >
        <div className="col-span-1">
          <div className="w-full flex flex-col">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              className="mb-4 p-2 border"
              maxLength={300}
              required
            />
          </div>

          <div className="w-full flex flex-col">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              className="mb-4 p-2 border"
            ></textarea>
          </div>

          <div className="w-full flex flex-col">
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              name="author"
              className="mb-4 p-2 border"
              maxLength={300}
              required
              defaultValue={"Anonymous"}
            />
          </div>

          <div className="w-full flex flex-col">
            <label htmlFor="isbn">ISBN:</label>
            <input
              type="text"
              id="isbn"
              name="isbn"
              className="mb-4 p-2 border"
              maxLength={13}
              required
              defaultValue={"INE0J1Y010175"}
            />
          </div>

          <div className="w-full flex flex-col">
            <label htmlFor="publication_year">Publication Year:</label>
            <input
              type="number"
              id="publication_year"
              name="publication_year"
              className="mb-4 p-2 border"
              defaultValue={new Date().getFullYear()}
              required
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="w-full flex flex-col">
            <label htmlFor="publisher">Publisher:</label>
            <input
              type="text"
              id="publisher"
              name="publisher"
              className="mb-4 p-2 border"
              maxLength={300}
              required
              defaultValue={"Anonymous"}
            />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="genre">Genre:</label>
            <select
              id="genre"
              name="genre"
              className="mb-4 p-2 border"
              required
            >
              <option value="Fiction">Fiction</option>
              <option value="Mystery">Mystery</option>
              <option value="Horror">Horror</option>
              <option value="Romance">Romance</option>
              <option value="Comics">Comics</option>
              <option value="Crime">Crime</option>
              <option value="Novel">Novel</option>
            </select>
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              step="0.01"
              className="mb-4 p-2 border"
              required
            />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="stock">Stock:</label>
            <input
              type="number"
              id="stock"
              name="stock"
              className="mb-4 p-2 border"
              defaultValue={100}
              required
            />
          </div>
        </div>
        <button
          type="reset"
          className="bg-gray-500 text-white font-bold py-2 px-4 rounded-lg"
        >
          Reset
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
