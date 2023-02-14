import React, { useState, useEffect } from 'react';
import "./grid.css"
import shop from "../assets/stock-photo.jpeg"

const Grid = () => {

    const [datas, setDatas] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      async function fetchData() {
        try {
            const response = await fetch('https://dummyjson.com/products/');
            const json = await response.json();
            setDatas(json.products)
            console.log(json)
        } catch (err) {
          setError(err);
        }
      }
  
      fetchData();
    }, []);
    
    return (
        <section className="grid-content">
            <div className="cards">
                    {datas.map(element => {
                        return (
                            <div className="card">
                                <img src={element.images[0]} className="card-img"/>
                                <h3 className='card-title'> {element.title}</h3>
                                <h1> ${element.price}</h1>
                            </div>
                        )
                    })}
            </div>
        </section>
    )
}

export default Grid;