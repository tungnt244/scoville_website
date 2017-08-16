import React from 'react'
import '../Styles/index.css'

export default class HomePage extends React.Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-inverse fixed" id="my-navbar">
                    <div id="nav-container" className="container-fluid">
                        <div>
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">  
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <a id="logo-container" className="navbar-brand scroll" >
                            <img className="img-responsive" id="logo" src="./images/logo2.png" title="" />
                        </a>
                        <div className="collapse navbar-collapse" id="navbar-collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li ><a className="big-word text-right" href="">HOME/  </a></li>
                                <li ><a className="big-word text-right" href="#COMPANY">COMPANY/  </a></li>
                                <li ><a className="big-word text-right" href="#SERVICES">SERVICES/  </a></li>
                                <li ><a className="big-word text-right" href="#RECRUITMENT">RECRUITMENT/   </a></li>
                                <li ><a className="big-word text-right" href="#NEWS">NEWS/  </a></li>
                                <li ><a id="right-nav" className="big-word text-right" href="#ACCESS">ABOUT  </a></li>
                            </ul>
                        </div>
                    </div>
                </nav>


                <div className="container bottom-padding" id="news-container">
                    <div className="text-center">
                        <section>
                            <h2 className="section-heading" ><big>NEWS</big></h2>
                            <br/><br/>
                        </section>
                    </div>
                    <div>
                        <p className="date-text text-left ">2017.07.21</p>
                        <a href="" className="text-left blue-text">
                        {`AIを活用したタクシー配車アプリの実用実験を今夏に開始、早くも兆…`}</a>
                    </div>
                    <div>
                        <p className="date-text text-left">2017.06.21</p>
                        <a href="" className="text-left blue-text">
                        {`タローがコーポレートサイトのリニューアルを開始`}</a>
                    </div>
                    <div>
                        <p className="date-text text-left">2017.04.15</p>
                        <a href="" className="text-left blue-text">
                        {`AIを活用したタクシー配車アプリの実用実験を今夏に開始`}</a>
                    </div>
                    <div>
                        <p className="date-text text-left">2017.04.15</p>
                        <a href="" className="text-left blue-text">
                        {`AIを活用したタクシー配車アプリの実用実験を今夏に開始`}</a>
                    </div>
                    <div>
                        <p className="date-text text-left">2017.04.15</p>
                        <a href="" className="text-left blue-text">
                        {`AIを活用したタクシー配車アプリの実用実験を今夏に開始`}</a>
                    </div>
                    <tr>
                        <th>
                            <button className="btn num-btn blue-number">
                                1
                            </button>
                        </th>
                        <th>
                            <button className="btn num-btn blue-number">
                                2
                            </button>
                        </th>
                        <th>
                            <button className="btn num-btn blue-number">
                                3
                            </button>
                        </th>
                        <th>
                            <button className="btn num-btn blue-number">
                                4
                            </button>
                        </th>
                        <th>
                            <button className="btn num-btn blue-number">
                                5
                            </button>
                        </th>
                    </tr>
                </div>


                <footer className="gray-footer footer-text">
                    Copyright Scoville All Rights Reserved.
                </footer>




            </div>
        )
    }
}