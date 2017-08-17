import React from  'react'

export default class Map extends React.Component{
    render(){
        return(
        <div>
            <h3>My Google Maps Demo</h3>
            <div id="map">
            </div>
            <script async defer
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAFy-TNiruUIbJn1LZEpkuJBzilGc_s5po&callback=initMap">
            </script>
        </div>
        )
    }
}