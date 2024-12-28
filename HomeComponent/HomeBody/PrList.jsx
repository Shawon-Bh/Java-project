// test purpose

import React from 'react'
import AdSection from './AdSection'

const PrList = () => {
  const product=[
    {
      id: 1,
      name: "one",
      img1: "./img1/H82bc5135088647e1bf828eb5724d1c0aq.png_720x720q50.avif",
      img2: "./img1/H217b108322a64fcdb67489b2b2b5b4ddS.png_720x720q50.avif",
      img3: "./img1/H890476f494dd4a249164498f4601181aN.png_720x720q50.avif",
      price:200
    },
    {
      id: 2,
      name: "one",
      img1: "./img1/H82bc5135088647e1bf828eb5724d1c0aq.png_720x720q50.avif",
      img2: "./img1/H217b108322a64fcdb67489b2b2b5b4ddS.png_720x720q50.avif",
      img3: "./img1/H890476f494dd4a249164498f4601181aN.png_720x720q50.avif",
      price:200
    },
    {
      id: 3,
      name: "one",
      img1: "./img1/H82bc5135088647e1bf828eb5724d1c0aq.png_720x720q50.avif",
      img2: "./img1/H217b108322a64fcdb67489b2b2b5b4ddS.png_720x720q50.avif",
      img3: "./img1/H890476f494dd4a249164498f4601181aN.png_720x720q50.avif",
      price:200
    },
    {
      id: 4,
      name: "one",
      img1: "./img1/H82bc5135088647e1bf828eb5724d1c0aq.png_720x720q50.avif",
      img2: "./img1/H217b108322a64fcdb67489b2b2b5b4ddS.png_720x720q50.avif",
      img3: "./img1/H890476f494dd4a249164498f4601181aN.png_720x720q50.avif",
      price:200
    },
    {
      id: 5,
      name: "one",
      img1: "./img1/H82bc5135088647e1bf828eb5724d1c0aq.png_720x720q50.avif",
      img2: "./img1/H217b108322a64fcdb67489b2b2b5b4ddS.png_720x720q50.avif",
      img3: "./img1/H890476f494dd4a249164498f4601181aN.png_720x720q50.avif",
      price:200
    },
    {
      id: 6,
      name: "one",
      img1: "./img1/H82bc5135088647e1bf828eb5724d1c0aq.png_720x720q50.avif",
      img2: "./img1/H217b108322a64fcdb67489b2b2b5b4ddS.png_720x720q50.avif",
      img3: "./img1/H890476f494dd4a249164498f4601181aN.png_720x720q50.avif",
      price:200
    },
    {
      id: 7,
      name: "one",
      img1: "./img1/H82bc5135088647e1bf828eb5724d1c0aq.png_720x720q50.avif",
      img2: "./img1/H217b108322a64fcdb67489b2b2b5b4ddS.png_720x720q50.avif",
      img3: "./img1/H890476f494dd4a249164498f4601181aN.png_720x720q50.avif",
      price:200
    },
    {
      id: 8,
      name: "one",
      img1: "./img1/H82bc5135088647e1bf828eb5724d1c0aq.png_720x720q50.avif",
      img2: "./img1/H217b108322a64fcdb67489b2b2b5b4ddS.png_720x720q50.avif",
      img3: "./img1/H890476f494dd4a249164498f4601181aN.png_720x720q50.avif",
      price:200
    },
    {
      id: 9,
      name: "one",
      img1: "./img1/H82bc5135088647e1bf828eb5724d1c0aq.png_720x720q50.avif",
      img2: "./img1/H217b108322a64fcdb67489b2b2b5b4ddS.png_720x720q50.avif",
      img3: "./img1/H890476f494dd4a249164498f4601181aN.png_720x720q50.avif",
      price:200
    },
  ]
  const handle = () => {
    var x = 1;
    if(x%5){
      "</br>"
    }
    <AdSection  name={product.name} src={product.img1}/>
  }
  // const pList=product.map(product=> 
  //   product.id==0? <AdSection  name={product.name} src={product.img1}/>+<br> :<AdSection  name={product.name} src={product.img1}/>
  // )

  return (
    <>{pList}</>
  )
}

export default PrList

