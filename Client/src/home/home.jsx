import "./home.css"
import img from "../assets/stock-photo.jpeg"
import Grid from '../grid/grid'

const Home = () => {
    return(
        <div className="main-content">
            <div className="content">
            <section className="content-child">
                <img src={img} alt="" />
            </section>
        </div>
            <Grid/>
        </div>
    )
}


export default Home;