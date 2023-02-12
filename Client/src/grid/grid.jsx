import "./grid.css"
import shop from "../assets/stock-photo.jpeg"



const Grid = () => {
    return (
        <section className="grid-content">
            <div className="cards">
                <div className="card"> 
                    <img src={shop} className="card-img" alt="" />
                    <h1> 88.99</h1>
                </div>
                <div className="card"> 
                    <img src={shop} className="card-img" alt="" />
                    <h1> 99.99</h1>
                </div>
                <div className="card"> 
                    <img src={shop} className="card-img" alt="" />
                    <h1> 99.99</h1>
                </div>
                <div className="card"> 
                    <img src={shop} className="card-img" alt="" />
                    <h1> 99.99</h1>
                </div>
            </div>
        </section>
    )
}

export default Grid;