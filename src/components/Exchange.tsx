import React from "react";
import { type ReactNode} from "react";
import { Link } from "react-router-dom";

interface ExchangeProps {
    exchange: Record<string, ReactNode>;
}

const Exchange = ({ exchange }: ExchangeProps) => {

  return (
    // <Link to={`/exchanges/${exchange.id}`} className="text-decoration-none my-1 coin">
    //   <li className="coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark">
    <li>
        {/* <img className="coinlist-image" src={exchange.image} alt="" /> */}
        <span>{exchange.id}</span>

        <span
        //   className={
        //     exchange.price_change_percentage_24h < 0
        //       ? "text-danger mr-2"
        //       : "text-success mr-2"
        //   }
        >
          {/* {" "}
          {exchange.price_change_percentage_24h < 0 ? (
            <i className="fas fa-sort-down align-middle mr-1"></i>
          ) : (
            <i className="fas fa-sort-up align-middle mr-1"></i>
          )} */}
          {exchange.country}
        </span>
      </li>
    // </Link>
  );
};

export default Exchange;