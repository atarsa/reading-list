const API_KEY = process.env.REACT_APP_API_KEY;

async function getBookCover(title, author) {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}+inauthor:${author}&key=${API_KEY}`,
    {}
  );
  const data = await res.json();
  // return img html
  if (data.items) {
    return data.items[0].volumeInfo.imageLinks.smallThumbnail;
  }
}

export { getBookCover };
