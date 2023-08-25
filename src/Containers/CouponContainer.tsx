import { useState, useEffect } from "react";
import axios from "axios";
import "./CouponContainer.css";
import Coupon from "../components/coupons/coupons";
import { ICoupons } from "../models/ICoupon";
function CouponContainer() {
  const [coupons, setCoupons] = useState<ICoupons[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      debugger
      try {
        const response = await axios.get(
          "http://localhost:8080/coupons"
        );
        setCoupons(response.data);
      } catch (error: any) {
        alert("Failed to retrieve coupons");
      //  console.error(error.response.data.errorMessage);
      }
    };
    fetchData();
  }, []);

  function formatDate(inputDate: string | number | Date) {
    const date = new Date(inputDate);
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
  return (
    <div className="CouponContainer">
      {coupons.map((coupon) => (
        <Coupon
          key={coupon.id} // This is the missing key prop
          id={coupon.id}
          companyId={coupon.companyId}
          name={coupon.name}
          categoryId={coupon.categoryId}
          description={coupon.description}
          startDate={formatDate(coupon.startDate)}
          endDate={formatDate(coupon.endDate)}
          amount={coupon.amount}
          price={coupon.price}
        />
      ))}
    </div>
  );
}

export default CouponContainer;