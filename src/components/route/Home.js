import { useState, useEffect } from "react";
import Build from "./Build";
import Navbar from "./Navbar";
import axios from "axios";
import Card from "./Card";
import { Button } from 'react-bootstrap';
import Footer from "./Footer";


export default function Home() {
    const style = {
        display: "flex",
        marginBottom: "10px",
        flexWrap: "wrap",
        justifyContent: "center",
        width:"500px",
        height:"500px",
        paddingleft:"50%"
    };
    const [myData, setMyData] = useState([]);


    function APICalling(){
        axios.get("https://fakestoreapi.com/products")
        .then((res) => setMyData([...res.data]))
        .catch((err) => err);
    }

    return (
      <>
      <Navbar/>
      <Build cName="build"/>
      <Button onClick={APICalling}>SHOP HERE</Button>
      <div style={style}>
      {myData.map((x) => (
          <Card
            title={x.title}
            price={x.price}
            description={x.description}
            image={x.image}
            rating={x.rating.rate}
          />
     ))}
     </div>
     <Footer/>
      </>
    );
  }
  