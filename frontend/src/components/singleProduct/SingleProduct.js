import React, { useEffect } from "react";
import { useState } from "react";
import "./Product.css";

import Search from "../../common/header/Search";
import Navbar from "../../common/header/Navbar";
import Footer from "../../common/footer/Footer";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { publicRequest } from "../../requestMethods";
import { useSelector } from "react-redux";
import NavbarLoged from "../../common/header/NavbarLoged";

function SingleProduct() {
  // const [product] = useState([
  //   {
  //     id: 1,
  //     cover: "shops-2.png",
  //     name: "Test1",
  //     price: "180",
  //     description: "The descritpion will be available here ",
  //     currency: "Rs",

  //     category: "RAM",
  //   },
  // ]);

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});

  // const getreq = publicRequest;

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8070/api/producth/find/${id}`)
  //     .then((response) => {
  //       console.log(response);
  //       setProduct(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [id]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/producth/find/" + id);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     try {
  //       const res = await axios.get(`http://localhost:8070/api/products/${id}`);
  //       setProduct(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchProduct();
  // }, [id]);
  const customer = useSelector((state) => state.customer.currentCustomer);

  const handleAddToCart = async () => {
    try {
      await axios.post("http://localhost:8070/api/cart/addToCart", {
        customerId: customer._id,
        productId: product._id,
        productName: product.name,
        productCover: product.cover,
        price: product.price,
      });
      // alert("Product added to cart");
    } catch (err) {
      console.error(err);
      alert("Error adding product to cart");
    }
  };

  return (
    <>
      <Search />
      {customer ? <NavbarLoged /> : <Navbar />}

      {/* {product.map((item) => ( */}
      <div className="card-wrapper">
        <div className="card-product">
          <div className="product-imgs">
            <div className="img-display">
              <div className="img-showcase">
                <img src={`${product.cover}`} alt="" />
              </div>
            </div>
          </div>

          <div className="product-content">
            <h2 className="product-title">{product.name}</h2>
            <div className="product-rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
              <span className="rating-num">4.7(21)</span>
            </div>

            <div className="product-price">
              <b>
                <p className="new-price">
                  Price : <span>Rs.{product.price}.00</span>
                </p>
              </b>
            </div>

            <div className="product-detail">
              <h2>about this item: </h2>
              <p>{product.description}</p>

              <ul>
                <li>
                  <b>Availablity:</b>{" "}
                  <span className="stock-level">
                    <b>IN STOCK</b>
                  </span>
                </li>
                <li>
                  <b>Category:</b> <span></span>
                </li>
              </ul>
            </div>

            <div className="purchase-info">
              <button type="button" className="btn" onClick={handleAddToCart}>
                Add to Cart <i className="fas fa-shopping-cart"></i>
              </button>
              <button type="button" className="btn">
                Buy Item
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ))} */}
      <Footer />
    </>
  );
}

export default SingleProduct;
