import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList, getStoredWishList } from "../addToDB";
import ShowListedBooks from "./ShowListedBooks/ShowListedBooks";
import ShowWIshListedBooks from "./ShowWIshListedBooks/ShowWIshListedBooks";
const ListedBooks = () => {
  const allBooks = useLoaderData();
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    // console.log(storedReadList, readList, allBooks);

    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadList(readBookList);

    // Wish list
    const storedWishList = getStoredWishList();
    const storedWishListInt = storedWishList.map((id) => parseInt(id));

    const wishList = allBooks.filter((book) =>
      storedWishListInt.includes(book.bookId)
    );
    setWishList(wishList);
  }, []);
  return (
    <div>
      <h2 className="text-2xl my-8">Listed Books:</h2>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>
        <TabPanel>
          {readList.map((book, index) => (
            <ShowListedBooks key={index} book={book}></ShowListedBooks>
          ))}
        </TabPanel>
        <TabPanel>
          {wishList.map((book) => (
            <ShowWIshListedBooks
              book={book}
              key={book.bookId}
            ></ShowWIshListedBooks>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
