import React, { useState, useEffect } from 'react';
import "./grid.css"
import shop from "../assets/stock-photo.jpeg"

const Grid = () => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      async function fetchData() {
        try {
          fetch('https://dummyjson.com/products/')
          .then((res) => res.json())
          .then((data) => {
            console.log(data.products)
            setData(data)
          })
        } catch (err) {
          setError(err);
        }
      }
  
      fetchData();
    }, []);
    
    return (
        <section className="grid-content">
            <div className="cards">
            {error && <div>Error: {error.message}</div>}
            {data.map((p) => {
                <p key={p.id}>{p.title}</p>
            })

            }
                <div className="card"> 
                    <img src={shop} className="card-img" alt="" />
                    <h1> 88.99</h1>
                </div>
            </div>
        </section>
    )
}

export default Grid;