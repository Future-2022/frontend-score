import React, { useState, useEffect, useHistory } from 'react';
import { FaAlignJustify, FaHome, FaTractor, FaBabyCarriage, FaSteam, FaOutdent,
         FaShareSquare, FaTwitter, FaArrowRight, FaClosedCaptioning, FaTimes, FaQuestion, FaQuestionCircle} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './index.css';
import $ from 'jquery';
import { GoogleSpreadsheet } from "google-spreadsheet";
import {apiGetHomeData} from '../../services/main';

const Web2 = (props) => {
    
    const [player, setPlayer] = useState([]);
    const [color, setColor] = useState([]);
    // const [average, setAverage] = useState([]);
    const [playerResult, setPlayerResult] = useState(Array.from({length: 4},()=> Array.from({length: 4}, () => null)));
    
    // const [title, setTile] = useState('');
    const [category, setCategory] = useState('');
    const [fase, setFase] = useState('');
    const [heat, setHeat] = useState('');
    
    const playerName = [];
    let conPlayerResult = [];
    // let conAverage = [];
    let conColor = [];
    let conCategory = '';
    let conFase = '';
    let conHeat = '';
    
    useEffect(() => {
        // getData();
        const interval = setInterval(() => {
            getData();
          }, 5000);
          return () => clearInterval(interval);
    }, [playerResult]);

    

    const getData = async () => {
        try {
            await apiGetHomeData().then(res => {
                console.log("res-----", res);
                conPlayerResult = res["data"]['msg'][0]['web2Result'];
                // conAverage = res["data"]['msg'][0]['average'];
                conColor = res["data"]['msg'][0]['color'];  
                conCategory = res["data"]['msg'][0]['category'];            
                conFase = res["data"]['msg'][0]['fase'];            
                conHeat = res["data"]['msg'][0]['heat'];            
            })
            .catch(err => {
                console.log("err-----", err);
            })
            await setPlayerResult(conPlayerResult);
            // await setAverage(conAverage);
            await setColor(conColor);    
            await setCategory(conCategory);    
            await setFase(conFase);    
            await setHeat(conHeat);    
        } catch (e) {
            console.error('Error: ', e);
        }
    }
    return (
        <>
            <div className="background-green">
                {/* <h3 className='test-font font-weight-bold'>{title}</h3> <span className='sub-title'>{`Categoria:  ${category}, Fase: ${fase}, Heat: ${heat}`}</span>
                <hr className='text-black' /> */}
                <div className='d-flex flex-wrap main-layout'>
                    <div className='first-layout d-flex'>
                        <div className='align-self-end mr-1'>
                            <div className={color[0]}></div>
                            <div className={color[1]}></div>
                            <div className={color[2]}></div>
                            <div className={color[3]}></div>
                        </div>
                        <div className='background-grey pane-1'>
                            <div className='noti-title p-1'>
                                <p><span>{category}</span></p>
                                <p><span>{fase}</span></p>
                                <p><span>HEAT: {heat}</span></p>
                            </div>
                            <div className='background-dark-grey p-0'>
                                <table className='table table-dark table-bordered mb-0 panel-first'>
                                    <tbody>
                                        <tr>
                                            <td><p>{player[0]}</p></td>
                                            <td><span>{Number(playerResult[0][2]).toFixed(2)}</span></td>
                                        </tr>
                                        <tr>
                                            <td><p>{player[1]}</p></td>
                                            <td><span>{Number(playerResult[1][2]).toFixed(2)}</span></td>
                                        </tr>
                                        <tr>
                                            <td><p>{player[2]}</p></td>
                                            <td><span>{Number(playerResult[2][2]).toFixed(2)}</span></td>
                                        </tr>
                                        <tr>
                                            <td><p>{player[3]}</p></td>
                                            <td><span>{Number(playerResult[3][2]).toFixed(2)}</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                                {/* <div className='d-flex justify-content-between pt-3'>
                                    <p>Rodrigo Lopes</p>
                                    <span>12.56</span>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p>Daniel Fosenca</p>
                                    <span>12.56</span>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p>Ricardo Rosmaninho</p>
                                    <span>12.56</span>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p>Joel Rodrigues</p>
                                    <span>12.56</span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className='d-flex other-layout'>
                        <div className='align-self-end ml-1 mt-3 panel-1'>
                            <div>
                                <table className='table table-dark table-bordered mb-0 panel-second'>
                                    <thead>
                                        <tr className='w-title'>
                                            <td className='text-center font-weight-bold'>W<span>1</span></td>
                                            <td className='text-center font-weight-bold'>W<span>2</span></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><span className='font-weight-bold'>{Number(playerResult[0][0]).toFixed(2)}</span></td>
                                            <td><span className='font-weight-bold'>{Number(playerResult[0][1]).toFixed(2)}</span></td>
                                        </tr>
                                        <tr>
                                            <td><span className='font-weight-bold'>{Number(playerResult[1][0]).toFixed(2)}</span></td>
                                            <td><span className='font-weight-bold'>{Number(playerResult[1][1]).toFixed(2)}</span></td>
                                        </tr>
                                        <tr>
                                            <td><span className='font-weight-bold'>{Number(playerResult[2][0]).toFixed(2)}</span></td>
                                            <td><span className='font-weight-bold'>{Number(playerResult[2][1]).toFixed(2)}</span></td>
                                        </tr>
                                        <tr>
                                            <td><span className='font-weight-bold'>{Number(playerResult[3][0]).toFixed(2)}</span></td>
                                            <td><span className='font-weight-bold'>{Number(playerResult[3][1]).toFixed(2)}</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='align-self-end ml-1 mr-2 mt-3 font-weight-bold'>
                            <table className='table table-dark table-bordered mb-0'>
                                <thead>
                                    <tr className='w-title'>
                                        <td>Need</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><span>{Number(playerResult[0][3]).toFixed(2)}</span></td>
                                    </tr>
                                    <tr>
                                        <td><span className='font-weight-bold'>{Number(playerResult[1][3]).toFixed(2)}</span></td>
                                    </tr>
                                    <tr>
                                        <td><span className='font-weight-bold'>{Number(playerResult[2][3]).toFixed(2)}</span></td>
                                    </tr>
                                    <tr>
                                        <td><span className='font-weight-bold'>{Number(playerResult[3][3]).toFixed(2)}</span></td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* <div className='panel-3 background-dark-grey ml-1'>
                                <div className='w-title'>
                                    <p>Need</p>
                                </div>
                                <div>
                                    <span>0</span>
                                </div>
                                <div>
                                    <span>0.99</span>
                                </div>
                                <div>
                                    <span>0.99</span>
                                </div>
                                <div>
                                    <span>0.99</span>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Web2;
