import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import Header from "../../component/header";
import axiosInstance from "../../utils/axios";

const BookDetails = () => {
  const [searchParams] = useSearchParams();
  const { bookId } = useParams();
  const [bookDetails, setBookDetails] = useState([]);

  const fetchBookDetails = async () => {
    try {
      const response = await axiosInstance.get(`/books/${bookId}`);
      console.log("response", response.data);
      setBookDetails(response?.data ?? {});
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBookDetails();
  }, []);

  function capitalFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:pb-8">
      <Header showCreateButton={true} />
      <div className="grid grid-cols-2 pt-6">
        <div className="col-span-1">
          <img
            alt={bookDetails?.title}
            src={`/images/${(parseInt(bookDetails.id) % 6) + 1}.jpg`}
            className="object-cover object-center group-hover:opacity-75 w-96 mx-auto my-auto"
          />
        </div>
        <div className="right-side col-span-1">
          <div className="flex">
            <h1 className="text-3xl font-bold text-gray-900 mb-5 mr-5">
              {capitalFirstLetter(bookDetails.title ?? "")}
            </h1>
            {bookDetails?.stock > 0 ? (
              <p className="text-sm font-medium text-gray-900 mb-5 bg-green-500 inline py-2 px-3 rounded-full">
                In Stock
              </p>
            ) : (
              <p className="text-sm font-medium text-gray-900 mb-5 bg-yellow-500 inline py-2 px-3 rounded-full">
                Out of Stock
              </p>
            )}
          </div>
          <div>
            <p className="text-lg font-medium text-gray-900 mb-5">
              $ {bookDetails?.price ?? 0}
            </p>
          </div>
          <p className="text-gray-900 mb-10">{bookDetails.description ?? ""}</p>

          <table class="border-separate border-spacing-4 border border-slate-500 border-0 border-collapse">
            <tbody>
              {bookDetails?.author && (
                <tr className="p-5">
                  <td className="border-0">Author</td>
                  <td className="border-0">
                    {capitalFirstLetter(bookDetails.author)}
                  </td>
                </tr>
              )}
              {bookDetails?.isbn && (
                <tr>
                  <td style={{ border: "none" }}>ISBN</td>
                  <td style={{ border: "none" }}>
                    {capitalFirstLetter(bookDetails.isbn)}
                  </td>
                </tr>
              )}
              {bookDetails?.publication_year && (
                <tr>
                  <td style={{ border: "none" }}>Publication Year</td>
                  <td style={{ border: "none" }}>
                    {bookDetails.publication_year}
                  </td>
                </tr>
              )}
              {bookDetails?.publisher && (
                <tr>
                  <td style={{ border: "none" }}>Publisher</td>
                  <td style={{ border: "none" }}>
                    {capitalFirstLetter(bookDetails.publisher)}
                  </td>
                </tr>
              )}
              {bookDetails?.genre && (
                <tr>
                  <td style={{ border: "none" }}>Genre:</td>
                  <td style={{ border: "none" }}>
                    {capitalFirstLetter(bookDetails.genre)}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="mt-10">
            <Link className="bg-blue-400 text-white p-2 rounded" to={`/`}>
              Go back to list
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
