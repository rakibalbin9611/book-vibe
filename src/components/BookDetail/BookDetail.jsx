import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();

  const book = data.find((book) => book.bookId === id);
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div className="flex flex-col md:flex-row justify-evenly my-24">
      <div className=" p-4">
        <img
          src={image}
          className="h-[450px] shadow-xl rounded md:mt-12 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-105 cursor-pointer"
        />
      </div>
      <div className="">
        <h1 className="text-5xl playfairfont-bold">{bookName}</h1>
        <h3 className="text-xl font-medium work-sans mt-4">By: {author}</h3>
        <div className="divider"></div>
        <p className="text-xl font-medium">{category}</p>
        <div className="divider"></div>
        <p className="w-[549px]  work-sans">
          <span className="font-bold">Review:</span>
          {review}
        </p>
        <p className="my-6">
          <span className="mr-6 font-bold">Tags </span>
          {tags.map((tag, idx) => (
            <button
              key={idx}
              className="rounded-md work-sans  text-base font-medium px-4 py-2  text-green-500"
            >
              #{tag}
            </button>
          ))}
        </p>
        <div className="divider"></div>
        <div className="flex w-full ">
          <div className="card  grid h-20 flex-grow place-items-start space-y-3">
            <p>Number of Pages:</p>
            <p>Publisher:</p>
            <p>Year of Publishing:</p>
            <p>Rating:</p>
          </div>
          <div className="card  grid h-20 flex-grow place-items-start space-y-3">
            <p>{totalPages}</p>
            <p>{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </div>
        </div>
        <div class="flex gap-4 mt-16">
          <button class="bg-white text-black border border-gray-300 px-6 py-2 rounded-xl shadow-md hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 ease-in-out">
            Read
          </button>

          <button class="bg-blue-100 text-blue-800 px-6 py-2 rounded-xl shadow-md hover:bg-blue-200 hover:scale-105 transform transition-all duration-300 ease-in-out">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
