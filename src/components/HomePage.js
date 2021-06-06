import React, {useEffect} from 'react'
import CityCountryForm from './CityCountryForm'
import CurrentLocationButton from './CurrentLocationButton.js'
import { connect } from 'react-redux'
import WeatherContainer from './WeatherContainer'
import NewsContainer from './NewsContainer';

const HomePage = ({ currentLocation, weatherData }) => {

    useEffect(() =>{
        if(weatherData !== null){
            console.log(weatherData)
        }
    //    var a = getNewsFromLocation().then(({articles}) => {
    //     console.log(articles);
    },[]);

    return (
        <div className="row">
            <div className="col-md-6 title">
            {currentLocation !== null && weatherData !== null && <NewsContainer city={weatherData.name} countryCode={weatherData.sys.country} />}
            </div>
            <div className="col-md-6 form">

                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <CurrentLocationButton />
                    </div>
                    <div className="col-md-4"></div>
                </div>

                <br></br>

                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        {currentLocation !== null && weatherData !== null && <WeatherContainer />}
                    </div>
                    <div className="col-md-1"></div>
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentLocation: state.location,
        weatherData: state.weather
    }
}

export default connect(mapStateToProps)(HomePage)