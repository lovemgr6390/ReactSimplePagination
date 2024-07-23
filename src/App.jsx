import React, { useEffect, useState } from "react";
import "./index.css";

const App = () => {
  const [list, setList] = useState([]);
  const [itemperpage, setItemPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const totalNoPage = Math.ceil(list.length / itemperpage);
  const pages = [...Array(totalNoPage + 1).keys()].slice(1);

  const indexOflast = currentPage * itemperpage;
  const indexoffirst = indexOflast - itemperpage;
  const visibleOne = list.slice(indexoffirst, indexOflast);
  async function getData(url) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (res.ok) {
        setList(data);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData("https://jsonplaceholder.typicode.com/todos");
  }, []);
  return (
    <div>
      <h1>Select the total number of item per page</h1>
      <label htmlFor="ItemPerPage">
        {" "}
        Item per page:
        <select
          style={{ marginLeft: 25 }}
          id="ItemPerPage"
          onChange={(e) => setItemPerPage(e.target.value)}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </label>
      {list.length > 0 &&
        visibleOne.map((item) => (
          <h3
            style={{
              marginTop: 5,
              marginBottom: 5,
              padding: 10,
              border: "1px solid orange",
            }}
            key={item.id}
          >
            {item.id}. {item.title}
          </h3>
        ))}
      <br />
      <button
        disabled={currentPage === 1 ? true : ""}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Prev
      </button>
      {pages.length &&
        pages.map((item) => (
          <button
            style={{
              backgroundColor: `${currentPage === item ? "purple" : ""} `,
            }}
            onClick={() => setCurrentPage(item)}
          >
            {item}
          </button>
        ))}
      <button
        disabled={currentPage === totalNoPage ? true : ""}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
      <br />
      <br />
    </div>
  );
};

export default App;
