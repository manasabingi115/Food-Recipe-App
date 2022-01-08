import "./styles.css";
import React from "react";
import Product from "./Product";

export default function App() {
  const [search, setSearch] = React.useState([]);
  const [data, setData] = React.useState([]);

  const YOUR_APP_ID = "c3d81771";
  const YOUR_APP_KEY = "7573709ea3dd998f6a97e54c9345f678";

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(search);

    fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=20&calories=591-722&health=alcohol-free`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data.hits);
      });
  };

  return (
    <div className="App">
      <center>
        <h1 style={{ color: "black" }}>Food Recipe App</h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <br />
          <br />
          <input
            type="submit"
            className="btn btn-primary"
            value="Search"
          ></input>
          <br /> <br />
        </form>
        {data.length >= 1 ? <Product data={data} key={data.id} /> : null}
      </center>
    </div>
  );
}
