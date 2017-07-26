import React from 'react'

export default class HomePage extends React.Component {
    render(){
        return(
            <div className="home-page">
                <nav className="navbar navbar-inverse navbar-fixed-top" id="my-navbar">
                    <div className="navbar-header" >
                        <a href="#" className="navbar-left"><img className="img-responsive" id="logo" src="./images/logo.jpg"/></a>
                    </div>
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">	
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="navbar-collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li ><a className="big-word text-right" href="#HOME">HOME</a></li>
                                <li ><a className="big-word text-right" href="#COMPANY">COMPANY</a></li>
                                <li ><a className="big-word text-right" href="#SERVICES">SERVICES</a></li>
                                <li ><a className="big-word text-right" href="#RECRUITMENTS">RECRUITMENT</a></li>
                                <li ><a className="big-word text-right" href="#NEWS">NEWS</a></li>
                                <li ><a className="big-word text-right" href="#ACCESS">ACCESS</a></li>
                                <li ><a className="big-word text-right" href="#CONTACT">CONTACT</a></li>
                            </ul>
                        </div> 
                        {/* <!-- end of container --> */}
                    </div>
                    {/* <!-- end of navbar --> */}
                </nav>
                <div className="img-container">
                    <img className="img-responsive" id="mainimage" src="/images/scoville_office.jpg" alt="Norway" width="1000" height="300"/>
                </div>
                <hr id="COMPANY"/>
	            <br/><br/>
                <div align="center" className="container" >
                    <section>
                        <h2 className="section-heading" ><big>{`COMPANY`}</big></h2>
                    </section>
                    <hr className="underlineforheading-COMPANY"/>
                    <section><br/><br/>
                        <p className="red-text">{`OUR MISSION!!!!!`}</p>
                        <p className="japanese-text">
                            {`
                            世界に通用する人と事業を創り、
                            外貨獲得を通じて日本経済を牽引する
                            `}
                        </p>
                        <br/><br/>
                    </section>
                    <section>
                        <h2 className="red-text">{`OUR VALUE`}</h2>
                        <p className="japanese-text">
                            {`
                            連続的事業創造を行い、
                            世界に通ずるプロダクトを創り続ける`}
                        </p>
                        <br/><br/>
                    </section>
                    <section>
                        <h2 className="red-text">{`OUR CULTURE AND PRINCIPLES`}</h2>
                        <p align="left" id="culture" className="japanese-text">
                            {`
                            1. 魅力的で愛のあるファミリー
                            2. 大いなる理想の実現まで固く結束し、強く行動できる組織
                            3. 常に革新事業の創造および推進
                            4. Full Flat and Open`}
                        </p>
                        <br/><br/>
                    </section>
                </div> 
                {/* <!-- end of ABOUT  --> */}
                <hr id="SERVICES"/>
                <hr className="style-eight"/>
                <div align="center" class="grey-background container">
                    <br/><br/>
                    <section>
                        <h2 class="section-heading" ><big>SERVICES</big></h2>
                    </section>
                    <hr class="underlineforheading-SERVICES"/>
                    <p class="real">“real”と”tech driven”の融合</p><br/>
                    <p class="japanese-text big-line-space">
                    リアルだけでもない。Webだけでも完結しない。<br/>
                    “人のリアルと融合したproduct”をキーワードに、<br/>
                    事業領域を定めることなく、創業1年半の間に13の事業を創造しています。
                    </p>
                    <p id="small">
                        ※年内ローンチ予定事業含む
                    </p>
                </div>
                {/* <!-- NEWS --> */}
                <hr id="NEWS"/>
                <div align="center">
                    <hr className="style-eight"/>
                    <br/><br/>
                    <section>
                        <h2 className="section-heading" ><big>NEWS</big></h2>
                    </section>
                    <hr className="underlineforheading-NEWS"/>
                </div>
                {/* <!-- CONTACT --> */}
                <hr id="CONTACT" className="style-eight"/>
                <br/><br/>
                <div className="container" id="contact-container">
                    <section>
                        <div align="center" className="page-header">
                            <h2 className="text-center section-heading"><big>CONTACT</big></h2>
                            <hr className="underlineforheading"/>
                        </div> 
                        {/* <!-- end of page hearder --> */}
                        <form align="left" action="" className="form-horizontal">
                            <div className="form-group">
                                <label for="user-name" className="contact-text">御社名</label>
                                <input type="text" id="user-name" className="grey-form form-control" placeholder="会社名を記入してください"/>
                            </div>
                            <div className="form-group">
                                <label for="user-email" className="contact-text">ご担当者名</label>
                                <input type="text" id="user-email" className="grey-form form-control" placeholder="ご担当者名を記入してください"/>
                            </div>
                            <div className="form-group">
                                <label for="user-phone-number" className="contact-text">メールアドレス</label>
                                <input type="text" id="user-phone-number" className="grey-form form-control" placeholder="mailアドレスを記入してください"/>
                            </div>
                            <div className="form-group">
                                <label for="user-phone-number" className="contact-text">電話番号</label>
                                <input type="text" id="user-phone-number" className="grey-form form-control" placeholder="電話番号を記入してください"/>
                            </div>
                            <div className="form-group">
                                <label for="user-message" className="contact-text">お問い合わせ内容</label>
                                <textarea name="user-message" id="user-message" className="grey-form form-control" cols="20" rows="10" placeholder="内容を記入してください"></textarea>
                            </div>
                            <div align="center" className="form-group">
                                <button type="submit" className="button-grey">
                                    送信
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        )
    }
}