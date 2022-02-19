import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, NavLink, Route, Routes} from 'react-router-dom'


const Home = () => {
    // console.log("renderuje")
    return (<h1>Strona startowa</h1>)
}
const News = () => {
    return (<h1>Aktualności</h1>)
}
const Contact = () => {
    return (<h1>Dane kontaktowe</h1>)
}

const ErrorPage = () => {
    return (<h1>Strona nie istnieje</h1>)
}


class App extends React.Component {
    render() {

        return (
            <Router>
                <div>
                    <header>
                        <nav>
                            <ul>
                                {/*<li><a href="/">Start</a></li>*/}
                                {/*<li><a href="/news">Aktualności</a></li>*/}
                                {/*<li><a href="/contact">Kontakt</a></li>*/}
                                <li><NavLink to="/">Start</NavLink></li>
                                <li><NavLink to="/news">Aktualności</NavLink></li>
                                <li><NavLink to="/contact">Kontakt</NavLink></li>
                            </ul>
                        </nav>
                    </header>
                    <section>
                        <Routes>

                            <Route path="/" exact element={<Home/>}/>
                            <Route path="/news" element={<News/>}/>
                            <Route path="/contact" element={<Contact/>}/>
                            <Route path="*" element={<ErrorPage/>}/>
                        </Routes>
                    </section>
                    {/*<footer>*/}
                    {/*    <Routes>*/}
                    {/*        <Route path="/" exact={true} element={<Home/>}/>*/}
                    {/*    </Routes>*/}
                    {/*</footer>*/}
                </div>
            </Router>
        );
    }
}

export default App;
