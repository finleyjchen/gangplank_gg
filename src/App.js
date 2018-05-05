import React from 'react'
import NavBar from './components/NavBar'
import Streams from './components/Streams'
import Guide from './components/Guide'
import Videos from './components/Videos'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './css/style.css'

const Home = () => (
  <div>
      <div className="container">
        <div className="row">

          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Gangplank Players</h6>
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#one">one</a>
                    <a className="dropdown-item" href="#two">two</a>
                    <div role="separator" className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#three">three</a>
                  </div>

              </div>
              <div className="card-body">
                
                  <ul className="list-group list-group-flush">
                  <li className="list-group-item">inlorfaze</li>
                  <li className="list-group-item">Gangplank Main</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                </ul>
              {/* riot api to find best gangplank players  */}

              </div>

              <div className="card-footer">
              {/* last updated  */}


              </div>

            </div>
          </div>

                    <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Recent Reddit Posts</h6>
              
              </div>
              <div className="card-body">
                
                <ul className="list-group list-group-flush">
                  
                </ul>
              {/* riot api to find best gangplank players  */}

              </div>

              <div className="card-footer">
              {/* last updated  */}


              </div>

            </div>
          </div>
        </div>
      </div>  
  </div>
)





const Main = () => (
  <Router>
    <div>
      <NavBar />




      <Route exact path="/" component={Home}/>
      <Route path="/guide" component={Guide}/>
      <Route path="/streams" component={Streams}/>
      <Route path="/videos" component={Videos}/>
      <Route path="/posts" component={Videos}/>


    </div>
  </Router>
)
export default Main