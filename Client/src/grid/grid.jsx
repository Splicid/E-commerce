import React, { useState, useEffect } from 'react';
import "./grid.css"
import axios from 'axios'
import shop from "../assets/stock-photo.jpeg"

const Grid = () => {

    const [datas, setDatas] = useState([]);
    const [isloaded, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      async function fetchData() {
        axios.get('http://localhost:3000/formData').then(res => {
            setDatas(res.data.user);
        }).catch(err => {
            console.log(err)
        })

    //     const response = await fetch('http://localhost:3000/formData', {
    //         method: "GET"
    //     });
    //     setDatas(response)
        }
      fetchData();
    }, []);
    console.log(datas)

    return (
        <section className="grid-content">
            <div className="cards">
                {datas.forEach((data) => {
                    <h1 key={datas._id}> {JSON.stringify(datas.body)} </h1>
                })}
            </div>
        </section>
    )
}

export default Grid;