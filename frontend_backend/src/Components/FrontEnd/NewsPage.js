import React from 'react'
import '../../Styles/NewsPageStyle.css'

export default class NewsPage extends React.Component {
    render(){
        return(
                <div className="container-fluid bottom-padding" id="news-container">
                    <div className="text-center">
                        <section>
                            <h2 className="section-heading" ><big>NEWS</big></h2>
                            <br/><br/><br/><br/><br/><br/><br/><br/>
                        </section>
                    </div>
                    <div className="container">
                        <section>
                            <span className="date-text">
                                2017/5/25
                            </span>
                            <p className="news-red-text">
                                AIを活用したタクシー配車アプリの実用実験を今夏に開始、早くも兆し が見えて来たか。
                            </p>
                        </section>
                        <section className="body-text">


                        <p>機械学習を中心とする人工知能（AI）系のテクノロジーを、いかにしてビジネスで活用するか？これを考えるためのノウハウや最新情報を発信することがミッションになります。</p><br/>


                        <p>AI系のテクノロジーによって出来ること、つまり人間の知能では扱いきれないほど大量なデータをもとに自動で学習して、価値の高いアウトプットを導き出す、という施策はあらゆる分野で求められる普遍的な施策だけに、その可能性はとても大きなものとなっています。</p><br/>
                        </section>
                    </div>
                                <button className='change-btn'>
                                    <big className='big-sign'>&#8249;</big> 次のニュースのタイトル
                                </button>
                                <button className='change-btn'>
                                    次のニュースのタイトル <big className='big-sign'>&#8250;</big>
                                </button>

                    <footer className="gray-footer footer-text">
                        Copyright Scoville All Rights Reserved.
                    </footer>
                </div>
        )
    }
}