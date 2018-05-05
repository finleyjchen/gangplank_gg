import React from 'react'
import { Link } from 'react-router-dom'
import '../css/style.css'

class NavBar extends React.Component {

    render() {
        
        return (
            <header>

                <div className="container-fluid bg-dark text-white">
                    <div className="row no-gutters">
                        <div className="col-md-8 offset-md-2">
                        <Link to="/" className="title-link">
                        <h3 className="">Gangplank.gg</h3>
                        <h6 className="text-muted">by inlorfaze</h6>
                        </Link>

                        <ul className="nav-links">
                            <li><Link to="/guide">Guide</Link></li>
                            <li><Link to="/streams">Streams</Link></li>
                            <li><Link to="/videos">Videos</Link></li>
                            <li><Link to="/posts">Posts</Link></li>

                        </ul>
                        </div>
                    </div>
                </div>

            </header>
        )
    }
}

export default NavBar;