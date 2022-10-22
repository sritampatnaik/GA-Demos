import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import "./Currency.css";

const coindeskURL = "https://api.coindesk.com/v1/bpi/currentprice/";

function Currency(props) {
  const [currData, setCurrData] = useState("asdadas")
  const params = useParams()
  props.setPrice(params.currency)
  const currency = params.currency
  
  const makeApiCall = async () => {
    const res = await fetch(`${coindeskURL}${currency}`)
    const json = await res.json()
    setCurrData(json.bpi[currency].rate)
  };

  useEffect(() => {
    makeApiCall();
  }, []);

  return (
    <div>
      <h1>Bitcoin price in { currency } </h1>
      <div className="price">{ currData } price goes here</div>
    </div>
  )
}

export default Currency;
