import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const getBookCover = async (title, author) => {
  const res = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}+inauthor:${author}&key=${API_KEY}`,
    {}
  );
  // return img html
  console.log(res.data.items[0].volumeInfo.imageLinks.thumbnail);
  return res.data.items[0].volumeInfo.imageLinks.smallThumbnail;
};

export { getBookCover };
