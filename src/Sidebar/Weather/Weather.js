import { React, useEffect, useState } from "react";
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import classes from './Weather.module.css';
import Card from "../../components/UI/Card/Card";
import Time from '../../components/UI/Time/Time';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons/faCoffee';
import { faSun } from "@fortawesome/free-solid-svg-icons";

import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Weather(props) {
    const url = 'https://api.open-meteo.com/v1/forecast';
    const lat = 'latitude=40.183277';
    const lng = 'longitude=-80.690971';
    const currWeather = 'current_weather=true';
    const hourly = 'hourly=temperature_2m,weathercode';
    const tempUnit = 'temperature_unit=fahrenheit';
    const windUnit = 'windspeed_unit=mph';
    const precipUnit = 'precipitation_unit=inch';
    
    const APIURL = `${url}?${lat}&${lng}&${currWeather}&${hourly}&${tempUnit}&${windUnit}&${precipUnit}`;

    const [data, setData] = useState(null);
    const [obj, setObj] = useState({text: 'Oops!', icon: 'coffee', className: 'hot'});

    const myIcons = {
        coffee: faCoffee,
        sun: faSun,
        up: faChevronUp, 
        down: faChevronDown    
    };

    function getForecast() {
        axios({
            method: "GET",
            url: APIURL
        })
        .then((response) => {
            console.log('1', response);
            setData(response.data.current_weather);
            console.log('2', data);
           })
        .catch((error) => {
            console.log('1e', error);
            setData(error);
        });
    };

    useEffect(() => {
        const identifier = setInterval(getForecast, 100);
        getWeatherInterpretation(data);
        clearInterval(identifier);
    }, []);

    useEffect(() => {
        console.log("useEffect", data);
        const identifier = setTimeout(() => {
            getForecast();
            if(!data === null) {
                console.log('weathercode', data.weathercode)
                getWeatherInterpretation(data.weathercode);
            } else {
                console.log("not getting data");
            }
        }, 60000);

        return () => {
            clearTimeout(identifier);
        }
    }, [data, obj]);

    function getDirection(code) {
        if (code === 0 || code === 360) {
            return 'E';
        } else if (code < 90) {
            return 'NE';
        } else if (code === 90) {
            return 'N';
        } else if (code < 180) {
            return 'NW'; 
        } else if (code === 180) {
            return 'W';
        } else if (code < 270) {
            return 'SW';
        } else if (code === 270) {
            return 'S';
        } else if (code < 360) {
            return 'SE';
        } else {
            return 'NaN';
        };
    };

    function getWeatherInterpretation(code) {
        console.log('getInterpretation', code);

        switch(code) {
            case 1: setObj({text: 'Mainly Clear', icon: 'sun', className: classes.iconHot}); break;
            case 2: setObj({text: 'Partly Cloudy', icon: 'sun', className: classes.iconSlightGrey}); break;
            case 3: setObj({text: 'Overcast', icon: 'sun', className: classes.iconGrey}); break;
            // case 45: return 'Fog';
            // case 48: return 'Depositing Rime Fog';
            // case 51: return 'Light Drizzle';
            // case 53: return 'Moderate Drizzle';
            // case 55: return 'Dense Drizzle';
            // case 56: return 'Light Freezing Drizzle';
            // case 57: return 'Dense Freezing Drizzle';
            // case 61: return 'Slight Rain';
            // case 63: return 'Moderate Rain';
            // case 65: return 'Heavy Rain';
            // case 66: return 'Light Freezing Rain';
            // case 67: return 'Heavy Freezing Rain';
            // case 71: return 'Slight Snow Fall';
            // case 73: return 'Moderate Snow Fall';
            // case 75: return 'Heavy Snow Fall';
            // case 77: return 'Snow Grains';
            // case 80: return 'Slight Rain Showers';
            // case 81: return 'Moderate Rain Showers';
            // case 82: return 'Violent Rain Showers';
            // case 85: return 'Slight Snow Showers';
            // case 86: return 'Heavy Snow Showers';
            // case 95: return 'Slight or Moderate Thunderstorm';
            default: setObj({text: 'Clear Sky', icon: 'sun', className: classes.iconHot});
        }
    }

    function tempColor(temp) {
        if (temp > 72) return 'red';
        if (temp < 72 && temp > 64) return 'orangered';
        if (temp > 50 && temp < 65) return 'goldenrod';
        if (temp < 51) return 'darkblue';
    }

    useEffect(() => {
        getForecast();
    }, []);

    const [arrow, setArrow] = useState('up');
    const [containerStyle, setContainerStyle] = useState('block');

    const rollupHandler = () => {
        if (arrow === 'up') {
            setArrow('down');
            setContainerStyle('none');
            return;
        }
        setArrow('up');
        setContainerStyle('block');
    }

    if (data !== null) return (
    
        <Card showToggle={true}
            header="Weather in Rayland, OH"
        >
            <Container className={classes.container} style={{display: containerStyle}}>
                <Row><Col><Time className={classes.time} /></Col></Row>
                <Row>
                    <Col>
                        <FontAwesomeIcon icon={myIcons[obj.icon]} fontSize="2.50rem" className={`${obj.className} ${classes.nudgeUp15p}`} />
                        <div className={classes.temp} style={{color: tempColor(parseFloat(data.temperature))}}>{data.temperature}&deg;F</div>
                    </Col>
                    <Col className={classes.nudgeDown50}>
                        <div className={classes.interpret}>{obj.text}</div>
                        <div><span>{data.windspeed} mph</span><span>&nbsp;</span><span>{getDirection(data.winddirection)}</span></div>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
}

export default Weather;