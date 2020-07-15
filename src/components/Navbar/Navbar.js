import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
    useParams
} from "react-router-dom";
// import styles from '../Navbar/Navbar.css';
import AppSlider from '../Slider/AppSlider';

import shoesW from '../../shoesW.json';
import shoesM from '../../shoesM.json';
// import AllProducts from './AllProducts';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';




export default function Navbar() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/women">  Women</Link>
                <Link to="/men">  Men</Link>
                {/* <Link to="/kids">  Kids</Link> */}

            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="women" element={<Launcha />}>
                    <Route path="/" element={<LaunchIndexa />} />
                    <Route path=":slug" element={<LaunchShoea />} />
                </Route>
                <Route path="men" element={<Launchb />}>
                    <Route path="/" element={<LaunchIndexb />} />
                    <Route path=":slug" element={<LaunchShoeb />} />
                </Route>
                {/* <Route path="kids" element={<Launchc />}>
                    <Route path="/" element={<LaunchIndexc />} />
                    <Route path=":slug" element={<LaunchShoec />} />
                </Route> */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

function NotFound() {
    return (
        <div>
            <h1>Not found!</h1>
            <p>Sorry your page was not found!</p>
        </div>
    );
}

function Home() {
    return (
        <AppSlider />
    );
}

function Launcha() {
    const useStyle = makeStyles(theme => ({
        title: {
            backgroundColor: '#569496',
            padding: '70px 0px 20px 20px',

        },
    }))

    const classes = useStyle();

    return (
        <Container maxWidth='lg'>
            <div className={classes.title}>
                <h1><u>Products</u></h1>
                <h3>WOMEN FOOTWEAR</h3>
            </div>
            <hr />
            <br />
            <Outlet />
        </Container>
    );
}

function LaunchIndexa() {
    return (
        <div className="productContainer">
            {Object.keys(shoesW).map(keyName => {
                const shoe = shoesW[keyName]
                return (
                    <Link key={keyName}
                        className="link" to={`/women/${keyName}`}>
                        <img src={shoe.img} height={250} alt={shoe.name} />
                        <h4>{shoe.name}</h4>
                        <h4>Price: {shoe.price}</h4>
                    </Link>)
            })}
        </div>
        
    );
}

function LaunchShoea() {
    const { slug } = useParams();
    const shoe = shoesW[slug];

    if (!shoe) {
        return <h2>Product Not Found!</h2>;
    }

    const { name, img } = shoe;

    return (
        <div>
            <h1>Women Collection </h1>
            <div className="productContainer">
                <h2>{shoe.name}</h2>
                <br/>
                <div><h2>{shoe.price}</h2></div>
                <img src={shoe.img} alt={name} />
            </div>
        </div>
    );
}

function Launchb() {
    const useStyle = makeStyles(theme => ({
        title: {
            backgroundColor: '#569496',
            padding: '70px 0px 20px 20px',

        },
    }))

    const classes = useStyle();

    return (
        <Container maxWidth='lg'>
            <div className={classes.title}>
                <h1><u>Products</u></h1>
                <h3>MEN FOOTWEAR</h3>
            </div>
            <hr />
            <br />
            <Outlet />
        </Container>
    );
}

function LaunchIndexb() {
    return (
        <div className="productContainer">
            {Object.keys(shoesM).map(keyName => {
                const shoe = shoesM[keyName]
                return (
                    <Link key={keyName}
                        className="link" to={`/men/${keyName}`}>
                        <img src={shoe.img} height={270} alt={shoe.name} />
                        <h4>{shoe.name}</h4>
                        <h4>Price: {shoe.price}</h4>
                    </Link>)
            })}
        </div>
    );
}

function LaunchShoeb() {
    const { slug } = useParams();
    const shoe = shoesM[slug];

    if (!shoe) {
        return <h2>Product Not Found!</h2>;
    }

    const { name, img } = shoe;

    return (
        <div>
            <h1>Men Collection </h1>
            <div className="productContainer">
                <h2>{shoe.name}</h2>
                <img src={shoe.img} alt={name} />
            </div>
        </div>
    );
}

// function Launchc() {
//     return (
//         <div>
//             <h1>Kids Collection</h1>
//             <Outlet />
//         </div>
//     );
// }

// function LaunchIndexc() {
//     return (
//         <ul>
//             {Object.entries(shoesK).map(([slug, { name, img }]) => (
//                 <li key={slug}>
//                     <Link to={`/launch/${slug}`}>
//                         <h2>{name}</h2>
//                         <img src={img} alt={name} />
//                     </Link>
//                 </li>
//             ))}
//         </ul>
//     );
// }

// function LaunchShoec() {
//     const { slug } = useParams();
//     const shoe = shoesK[slug];

//     if (!shoe) {
//         return <h2>Not Found!</h2>;
//     }

//     const { name, img } = shoe;

//     return (
//         <div>
//             <h2>{name}</h2>
//             <img src={img} alt={name} />
//         </div>
//     );
// }




