import "./grid.css"
import shop from "../assets/shop1.jpg"



const Grid = () => {
    return (
        <section className="grid-content">
            <div className="cards">
                <div className="card"> 
                    <img src={shop} className="card-img" alt="" />
                    <h1> 99.99</h1>
                </div>
                <div className="card"> Two</div>
                <div className="card"> Three</div>
                <div className="card"> Four</div>
                <div className="card"> Five</div>
                <div className="card"> Six</div>
            </div>
        </section>
    )
}

export default Grid;