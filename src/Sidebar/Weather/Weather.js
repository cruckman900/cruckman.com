import { React, useEffect, useState } from "react";
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import classes from './Weather.module.css';
import Card from "../../components/UI/Card/Card";
import Time from '../../components/UI/Time/Time';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons/faCoffee';
import { faSun, faMoon, faCloudSun, faCloudMoon, faCloudSunRain, faCloudMoonRain, faSmog, faSnowflake, faCloudBolt } from "@fortawesome/free-solid-svg-icons";

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
        moon: faMoon,
        cloudSun: faCloudSun,
        cloudMoon: faCloudMoon,
        cloudSunRain: faCloudSunRain,
        cloudMoonRain: faCloudMoonRain,
        cloudBolt: faCloudBolt,
        smog: faSmog,
        snowflake: faSnowflake
    };

    const [isDaytime, setIsDaytime] = useState('sun');

    useEffect(() => {
        const identifier = setTimeout(() => {
            const today = new Date();
            const hour = today.getHours();
            if (hour > 6 && hour < 17) {
                setIsDaytime(true);
            } else {
                setIsDaytime(false);
            }
        }, 30000);

        return () => {
            clearTimeout(identifier);
        }
    }, []);

    function getForecast() {
        axios({
            method: "GET",
            url: APIURL
        })
        .then((response) => {
            setData(response.data.current_weather);
           })
        .catch((error) => {
            setData(error);
        });
    };

    useEffect(() => {
        const identifier = setInterval(getForecast, 100);
        getWeatherInterpretation(data);
        clearInterval(identifier);
    }, []);

    useEffect(() => {
        const identifier = setTimeout(() => {
            getForecast();
            if(!data === null) {
                getWeatherInterpretation(data.weathercode);
            } else {
                console.log("weather api", "not getting data");
            }
        }, 30000);

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
        switch(code) {
            case 1: setObj({text: 'Mainly Clear', icon: isDaytime ? 'sun' : 'moon', className: classes.iconHot}); break;
            case 2: setObj({text: 'Partly Cloudy', icon: isDaytime ? 'cloudSun' : 'cloudMoon', className: classes.iconSlightGrey}); break;
            case 3: setObj({text: 'Overcast', icon: 'cloud', className: classes.iconGrey}); break;
            case 45: setObj({text: 'Fog', icon: 'smog', className: classes.iconGrey}); break;
            case 51: setObj({text: 'Light Drizzle', icon: isDaytime ? 'cloudSunRain' : 'cloudMoonRain', className: classes.iconGrey}); break;
            case 53: setObj({text: 'Moderate Drizzle', icon: isDaytime ? 'cloudSunRain' : 'cloudMoonRain', className: classes.iconGrey}); break;
            case 55: setObj({text: 'Dense Drizzle', icon: isDaytime ? 'cloudSunRain' : 'cloudMoonRain', className: classes.iconGrey}); break;
            case 56: setObj({text: 'Light Freezing Drizzle', icon: isDaytime ? 'cloudSunRain' : 'cloudMoonRain', className: classes.iconGrey}); break;
            case 57: setObj({text: 'Dense Freezing Drizzle', icon: isDaytime ? 'cloudSunRain' : 'cloudMoonRain', className: classes.iconGrey}); break;
            case 61: setObj({text: 'Slight Rain', icon: isDaytime ? 'cloudSunRain' : 'cloudMoonRain', className: classes.iconGrey}); break;
            case 63: setObj({text: 'Moderate Rain', icon: isDaytime ? 'cloudSunRain' : 'cloudMoonRain', className: classes.iconGrey}); break;
            case 65: setObj({text: 'Heavy Rain', icon: isDaytime ? 'cloudSunRain' : 'cloudMoonRain', className: classes.iconGrey}); break;
            case 66: setObj({text: 'Light Freezing Rain', icon: isDaytime ? 'cloudSunRain' : 'cloudMoonRain', className: classes.iconGrey}); break;
            case 67: setObj({text: 'Heavy Freezing Rain', icon: isDaytime ? 'cloudSunRain' : 'cloudMoonRain', className: classes.iconGrey}); break;
            case 71: setObj({text: 'Slight Snow Fall', icon: 'snowflake', className: classes.iconBlue}); break;
            case 73: setObj({text: 'Moderate Snow Fall', icon: 'snowflake', className: classes.iconBlue}); break;
            case 75: setObj({text: 'Heavy Snow Fall', icon: 'snowflake', className: classes.iconBlue}); break;
            case 77: setObj({text: 'Snow Grains', icon: 'snowflake', className: classes.iconBlue}); break;
            case 80: setObj({text: 'Slight Rain Showers', icon: isDaytime ? 'cloudSunRain' : 'cloudMoonRain', className: classes.iconGrey}); break;
            case 81: setObj({text: 'Moderate Rain Showers', icon: isDaytime ? 'cloudSunRain' : 'cloudMoonRain', className: classes.iconGrey}); break;
            case 82: setObj({text: 'Violent Rain Showers', icon: isDaytime ? 'cloudSunRain' : 'cloudMoonRain', className: classes.iconGrey}); break;
            case 85: setObj({text: 'Slight Snow Showers', icon: 'snowflake', className: classes.iconBlue}); break;
            case 86: setObj({text: 'Heavy Snow Showers', icon: 'snowflake', className: classes.iconBlue}); break;
            case 95: setObj({text: 'Slight or Moderate Thunderstorm', icon: 'cloudBolt', className: classes.iconGrey}); break;
            default: setObj({text: 'Clear Sky', icon: isDaytime ? 'sun' : 'moon', className: classes.iconHot});
        }
    }

    function tempColor(temp) {
        if (temp >= 72) return 'red';
        if (temp < 72 && temp > 64) return 'orangered';
        if (temp >= 50 && temp <= 64) return 'goldenrod';
        if (temp < 49) return 'darkblue';
    }

    useEffect(() => {
        getForecast();
    }, []);

    if (data !== null) return (
    
        <Card showToggle={true} expanded={true}
            header="Weather in Rayland, OH"
        >
            <Container className={classes.container}>
                <Row><Col><Time className={classes.time} /></Col></Row>
                <Row>
                    <Col>
                        <FontAwesomeIcon icon={myIcons[obj.icon]} fontSize="2.50rem" className={`${obj.className} ${classes.nudgeUp15p}`} />
                        <div className={classes.temp} style={{color: tempColor(parseFloat(data.temperature))}}>{data.temperature}&deg;F</div>
                    </Col>
                    <Col className={classes.nudgeDown50}>
                        <div className={classes.interpret}>{obj.text}</div>
                        <div className={classes.windspeed}><span>{data.windspeed} mph</span><span>&nbsp;</span><span>{getDirection(data.winddirection)}</span></div>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
}

export default Weather;