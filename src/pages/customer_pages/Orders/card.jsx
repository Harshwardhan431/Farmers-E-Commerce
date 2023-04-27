import "./order.css";
function Order_card() {
    return (
      <div className="container">
      <div className="first">
        <div className="f1"><p className="order_id">Order Id: 8456987</p></div>
        <div className="f2"><p className="date">12-04-2022</p>
        <p className="time">18:23</p>
        </div>
      </div>
      <div className="second">
      <div><p classname="farmer_name">Krisha Farms</p></div>
      <div><p className="amount" >Rs.282</p></div>
      </div>
      </div>
    );
  }
  export default Order_card;