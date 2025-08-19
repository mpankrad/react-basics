import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../../components/Header.jsx";
import { ProductsGrid } from "./ProductGrid.jsx";
import "./HomePage.css";

export function HomePage({cart}) {
  const [products, setProducts ] = useState([]);  //name, updater function



  useEffect(() => {
    axios.get("/api/products").then((response) => {
      response.data;
      setProducts(response.data);
    }); //dependency array, when useEffect runs, [] -1 
  }, 
  []);
   //to control when the code runs
  //to get data from url (asynchronous code).

  /*.then((response) => {
      return response.json(); //promise
      // console.log(data);
      //console.log(response);
    })
    .then((data) => {
      console.log(data);
    });  //without axios*/

  return (
    <>
      <Header cart = {cart}/>
      <title>Online-Shop</title>
      <link rel="icon" type="image/svg+xml" href="/home-favicon.png" />

      <div className="home-page">
      <ProductsGrid products = {products} />
      </div>
    </>
  );
}
