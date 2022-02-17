import React from "react";
// import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import "./Thankyou.css";

function Thankyou() {
  return (
    <div className="thankyou">
      <h1>THANK YOU !!</h1>
      <h2>Your order has been confirmed.</h2>
      <ThumbUpIcon className="thumbsup" />
    </div>
  );
}

export default Thankyou;
