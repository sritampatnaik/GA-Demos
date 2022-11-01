import React, { useState, useEffect } from 'react';

import Gif from './Components/Gif';
import Form from './Components/Form';

export default function App() {
  const [gifSrc, setGifSrc] = useState("");
  const key = "OaQu5FLTFt2sikmS3ePt5SUcRDYznZVT"

  // B. Make the call
  const makeRandomAPICall = async () => {
    const gifSrc = `https://api.giphy.com/v1/gifs/random?api_key=${key}`;
    const res = await fetch(gifSrc);
    const json = await res.json(); 
    console.log('makeApiCall', json.data);

    // C. Set the image src to state
    setGifSrc(json.data.images.downsized_large.url);
  };

  //3. API 
  const makeSearchableAPICall = async (val) => {
    const giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${val}&limit=1`
    const result = await fetch(giphyUrl)
    const json = await result.json();
    console.log(json.data[0].images.downsized_large.url)

    // 4. SET STATE
    setGifSrc(json.data[0].images.downsized_large.url)
  }

  // A. Onload call makeRandomAPICall()
  useEffect(() => {
    makeRandomAPICall();
  }, []);
  
  // 1. FN_PROPS. This function is being passed as props 
  const handleSubmitFromChild = (val) => {
    console.log("Loggin in parent")
    console.log(val)
    makeSearchableAPICall(val) // API
  };

  return (
    <div className="App">
      <h1>Giphy</h1>
      <Form onChildSubmit={handleSubmitFromChild} />
      <Gif imgSrc={gifSrc} />
    </div>
  );
}
