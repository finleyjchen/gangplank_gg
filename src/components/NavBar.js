import React from 'react';



class NavBar extends React.Component {

    render() {
        
        return (
            <header>

                <div className="container-fluid">
                        <h1 className=" text-center">Gangplank.gg</h1>
                        <h3 className=" text-center text-muted">by inlorfaze</h3>

                        <ul className="nav-links">
                            <li><a href="">resources</a></li>
                        </ul>
                    </div>

            </header>
        )
    }
}

export default NavBar;