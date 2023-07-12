import React from "react";
import MyOrderCard from "./myOrderCard";
import MyOrderdata from "./MyOrderdata";
import "./myOrder.css";
import Search from "../../common/header/Search";
import Navbar from "../../common/header/Navbar";

const myOrder = ({ CartItem }) => {
  const cards = MyOrderdata.orderItem.map((item) => {
    return <MyOrderCard key={item.id} {...item} />;
  });

  return (
    <>
      <Search CartItem={CartItem} />
      <Navbar />
      <section className="myOrder background">
        <div className="container d_flex">
          <div className="contentWidth">
            <div className="heading d_flex">
              <div className="heading-left row  f_flex">
                <h2>My Orders</h2>
              </div>
              {/* <div className="heading-right row ">
                <span>View all</span>
                <i className="fa-solid fa-caret-right"></i>
              </div> */}
            </div>
            <div className="order-content">{cards}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default myOrder;
