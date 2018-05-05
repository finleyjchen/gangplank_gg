import React from 'react'
import Link from 'react-router-dom'

const API_KEY = "RGAPI-f6c95370-4a09-4890-a398-12abbcb38498";

class Streams extends React.Component {

    getStreamer = async () => {
        const api_call = await fetch(`https://cors.io/https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/inlorfaze?api_key=${API_KEY}`);
        const data = await api_call.json();
        console.log(data);
    }

    render() {
        this.getStreamer();
        return(
            <div className="container-fluid">

                <div className="row bg-dark text-center text-white">
                    <div className="col-md-6 offset-md-3">
                        <h4>Streams</h4>
                        <h6 className="text-muted"><i>Watch and learn from your fellow pirates.</i></h6>
                    </div>

                </div>

            </div>
        )

    }
}

export default Streams;