import React from 'react'
import '../../Styles/NewsListStyle.css'

export default class NewsList extends React.Component {
    render(){
        return(
            <div>
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