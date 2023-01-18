import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const Navbar = () =>{
    return(

        <nav style={{display: "flex", justifyContent: "space-around"}}>
            <h1>Katys Beuaty</h1>
        <div>
        <Link to='/category/Ofertas' style={{margin:10}}>Ofertas</Link>
        <Link to='/category/Hogar'>Hogar</Link>
        </div>
        <CartWidget/>
        </nav>
    )
}

export default Navbar