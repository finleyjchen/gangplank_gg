import React from 'react'
import Link from 'react-router-dom'

class Guide extends React.Component {
    render() {

        return(
            <div className="container-fluid">

                <div className="row bg-dark text-center text-white">
                    <div className="col-md-6 offset-md-3">
                        <h4>Guide</h4>
                        <h6 className="text-muted"><i>Last updated: Patch 8.12</i></h6>
                    </div>

                </div>

            </div>
        )

    }
}

export default Guide;