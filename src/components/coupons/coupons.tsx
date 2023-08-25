import { ICoupons } from "../../models/ICoupon";
import "./coupons.css";
function Coupon(props: ICoupons) {

const handlePurchase = () => {
  alert(`Purchased coupon: ${props.name}`);
};
const isAuthenticated = localStorage.getItem('token'); 
  return (
    <div className="card">
      <h2 className="coupon-header">
       Name: {props.name}</h2>
      <br />
      Description: {props.description}
      <br />
      Start Date: {props.startDate}
      <br />
      EndDate: {props.endDate}
      <br />
      Amont: {props.amount}
      <br />
      Price: {props.price}
      <br /><br />
      {isAuthenticated && <button onClick={handlePurchase}>Purchase</button>}
    </div>
  );
}
export default Coupon;