import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

class Videos extends React.Component {
    render() {
        
        const Video = ({ match }) => (
            <div>
              <h3>{match.params.videoId}</h3>
            </div>
          )
          
          const Videos = ({ match }) => (
            <div>
              <h2>Videos</h2>
              <ul>
                <li>
                  <Link to={`${match.url}/gooblinbeingshit`}>
                    Gooblin being shit
                  </Link>
                </li>
                <li>
                  <Link to={`${match.url}/components`}>
                    Components
                  </Link>
                </li>
                <li>
                  <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                  </Link>
                </li>
              </ul>
          
              <Route path={`${match.path}/:videoId`} component={Video}/>
              <Route exact path={match.path} render={() => (
                <h3>Please select a topic.</h3>
              )}/>
            </div>
          )

        return(
            <div className="container-fluid">

                <div className="row bg-dark text-center text-white">
                    <div className="col-md-6 offset-md-3">
                        <h4>Videos</h4>
                        <h6 className="text-muted"><i>Clips, montages, and more from Gangplank mains</i></h6>
                    </div>

                </div>

            </div>

            

        )

    }
}

export default Videos;