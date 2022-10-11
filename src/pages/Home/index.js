import React, { useState, useEffect, useHistory } from 'react';
import { FaAlignJustify, FaHome, FaTractor, FaBabyCarriage, FaSteam, FaOutdent,
         FaShareSquare, FaTwitter, FaArrowRight, FaClosedCaptioning, FaTimes, FaQuestion, FaQuestionCircle} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './index.css';
import $ from 'jquery';
import {apiGetHomeData} from '../../services/main';

const Home = (props) => {
    const [player, setPlayer] = useState([]);
    const [average, setAverage] = useState([]);
    const [playerResult, setPlayerResult] = useState(Array.from({length: 4},()=> Array.from({length: 15}, () => null)));    
    const [color, setColor] = useState([]);
    const [lineColor, setLineColor] = useState([]);
    const [title, setTile] = useState('');
    const [category, setCategory] = useState('');
    const [fase, setFase] = useState('');
    const [heat, setHeat] = useState('');
    const [need, setNeed] = useState([]);

    let conOrder = [];
    let conPlayerResult = [];
    let playerName = [];
    let conAverage = [];
    let conColor = [];
    let conLineColor = [];
    let conNeed = [];
    let conTitle = '';
    let conCategory = '';
    let conHeat = '';
    let conFase = '';
    useEffect(() => {
        const interval = setInterval(() => {
            getData();
          }, 5000);
          return () => clearInterval(interval);
    }, [playerResult]);

    const getData = async () => {
        try {
            await apiGetHomeData().then(res => {
                console.log("res-----", res);
                conOrder = res["data"]['msg'][0]['order'];
                conPlayerResult = res["data"]['msg'][0]['playerResult'];
                playerName = res["data"]['msg'][0]['playerName'];
                conAverage = res["data"]['msg'][0]['average'];
                conColor = res["data"]['msg'][0]['color'];
                conLineColor = res["data"]['msg'][0]['lineColor'];
                conNeed = res["data"]['msg'][0]['need'];
                conTitle = res["data"]['msg'][0]['title'];
                conCategory = res["data"]['msg'][0]['category'];
                conHeat = res["data"]['msg'][0]['heat'];
                conFase = res["data"]['msg'][0]['fase'];
                
            })
            .catch(err => {
                console.log("err-----", err);
            })
            await setPlayer(playerName);
            await setColor(conColor);
            await setLineColor(conLineColor);
            await setNeed(conNeed);
            await setAverage(conAverage);
            await setPlayerResult(conPlayerResult);
            await setTile(conTitle);
            await setCategory(conCategory);
            await setHeat(conHeat);
            await setFase(conFase);
        } catch (e) {
            console.error('Error: ', e);
        }
    }

    return (
        <div className="background">
            <h3 className='font-weight-bold'>{title}</h3> <span className='sub-title'>{`Categoria:  ${category}, Fase: ${fase}, Heat: ${heat}`}</span>
            <hr className='text-grey' />
            <div>
                <div>
                    <div className="d-flex justify-content-between w-100">
                        <div className="d-flex">
                            <div className={color[0]}></div><h5 className="align-self-center pl-3">{player[0]}</h5>
                        </div>
                        <div className="align-self-center"><h6 className='d-flex'>{Number(average[0]).toFixed(2)} <div className='pl-5 w-150'></div></h6></div>
                        {/* <div className="align-self-center"><h6></h6></div> */}
                    </div>
                    <div className="d-flex justify-content-between w-100">
                        <div className="d-flex">
                            <div className={color[1]}></div><h5 className="align-self-center pl-3">{player[1]}</h5>
                        </div>
                        <div className="align-self-center"><h6 className='d-flex'>{Number(average[1]).toFixed(2)} <div className='pl-5 w-150 text-center text-red'><span>{Number(need[0]).toFixed(2)}</span></div></h6></div>
                        {/* <div className="align-self-center"><h6>{need[0]}</h6></div> */}
                    </div>
                    <div className="d-flex justify-content-between w-100">
                        <div className="d-flex">
                            <div className={color[2]}></div><h5 className="align-self-center pl-3">{player[2]}</h5>
                        </div>
                        <div className="align-self-center"><h6 className='d-flex'>{Number(average[2]).toFixed(2)} <div className='pl-5 w-150 text-center text-red'><span>{Number(need[1]).toFixed(2)}</span></div></h6></div>
                        {/* <div className="align-self-center"><h6>{need[1]}</h6></div> */}
                    </div>
                    <div className="d-flex justify-content-between w-100">
                        <div className="d-flex">
                            <div className={color[3]}></div><h5 className="align-self-center pl-3">{player[3]}</h5>
                        </div>
                        <div className="align-self-center"><h6 className='d-flex'>{Number(average[3]).toFixed(2)} <div className='pl-5 w-150 text-center text-red'><span>{Number(need[2]).toFixed(2)}</span></div></h6></div>
                        {/* <div className="align-self-center"><h6>{need[2]}</h6></div> */}
                    </div>
                </div>
            </div>
            <div className="d-flex pt-3">
                <div className='w-25'>
                    <div className={lineColor[0]}></div>
                    {playerResult[0].map((result, item) => {
                        return (<h6 className='text-center'>{result && Number(result).toFixed(2)}</h6>)
                    })}
                </div>
                <div className='w-25'>
                    <div className={lineColor[1]}></div>
                    {playerResult[1].map((result, item) => {
                        return (<h6 className='text-center'>{result && Number(result).toFixed(2)}</h6>)
                    })}
                </div>
                <div className='w-25'>
                    <div className={lineColor[2]}></div>
                    {playerResult[2].map((result) => {
                        return <h6 className='text-center'>{result && Number(result).toFixed(2)}</h6>
                    })}
                </div>
                <div className='w-25'>
                    <div className={lineColor[3]}></div>
                    {playerResult[3].map((result) => {
                        return <h6 className='text-center'>{result && Number(result).toFixed(2)}</h6>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home;
