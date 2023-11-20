import { useEffect, useState } from "react";
import { gql, useQuery } from "urql";

const findMyBooksQuery = gql`
  query findAllMyBook {
    findAllMyBook {
      title
      author
      janCode
      publisherName
      itemUrl
      largeImageUrl
      mediumImageUrl
      myBook
    }
  }
`;

const MyBook = () => {
  let cookieValue = getCookie("obserbookstoken");
  const [myBooksResult, executeFindMyBooksQuery] = useQuery({ query: findMyBooksQuery });
  const { data, fetching, error } = myBooksResult;
  const [books, setBooks] = useState([])
  const [list, setList] = useState([])

  const newContext = {
    fetchOptions: {
      headers: {
        Authorization: `${cookieValue}`,
      },
    },
  };
  useEffect(() => {
    executeFindMyBooksQuery(newContext);
  }, [executeFindMyBooksQuery]);
  useEffect(() => {
    if (data && data.findAllMyBook !== undefined) {
      console.log(data);
      setBooks(data.findAllMyBook);
    }
  }, [data])
  useEffect(() => {
    setList(
      books.map((book, index) => (
        <section className="m-2 w-52">
          <p className="m-1 line-clamp-1" key={index}>{book.title}</p>
          <img className="mx-auto" src={book.mediumImageUrl} />
          <p className="flex flex-row">
            <button className="text-xs">読書メモ</button>
          </p>
        </section>
      ))
    );
  }, [books])

  if (fetching) console.log("Loading...");
  if (error) console.error(error.message);

  return (
    <>
      <h2>MyBook</h2>
      <div className='flex flex-row flex-wrap	max-w-screen-md'>
        {list}
      </div>
    </>
  );
};

const getCookie = (name) => {
  const cookieValue = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
  return cookieValue ? cookieValue[2] : null;
};

export default MyBook;
