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
                                <li ><a className="big-word text-right" href="#RECRUITMENT">RECRUITMENT</a></li>
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
                    <img className="img-responsive" id="mainimage" src="/images/scoville_office.jpg" alt="Norway" />
                </div>


                <hr id="COMPANY"/>
	            <div className="container" id="COMPANY-container" >
                    <section>
                        <h2 className="text-center section-heading"><big>{`COMPANY`}</big></h2>
                    </section>
                    <hr className="underlineforheading-COMPANY"/>
                    <section><br/><br/>
                        <p className="text-center red-text">{`OUR MISSION`}</p>
                        <p className="japanese-text text-center">
                            世界に通用する人と事業を創り、</p>
        <p className="japanese-text text-center">外貨獲得を通じて日本経済を牽引する
                        </p>
                        <br/><br/>
                    </section>
                    <section>
                        <h2 className="text-center red-text">{`OUR VALUE`}</h2>
                        <p className="japanese-text text-center">
                            連続的事業創造を行い、</p>
<p className="japanese-text text-center">世界に通ずるプロダクトを創り続ける
                        </p>
                        <br/><br/>
                    </section>
                    <section>
                        <h2 className="text-center red-text">{`OUR CULTURE AND PRINCIPLES`}</h2>
                        <div className="text-left left-padding japanese-text">
                            <p>1. 魅力的で愛のあるファミリー</p>
                            <p id="twoline">2. 大いなる理想の実現まで固く結束し、強く行動できる組織</p>
                            <p>3. 常に革新事業の創造および推進</p>
                            <p>4. Full Flat and Open`}</p>
                        </div>
                    </section>
                </div>
                {/* <!-- end of COMPANY  --> */}


                <hr id="SERVICES"/>
                <hr className="style-eight"/>
                <div className="container-fluid text-center grey-background" id="SERVICES-container">
                    <section>
                        <h2 className="section-heading"><big>SERVICES</big></h2>
                    </section>
                    <hr className="underlineforheading-SERVICES"/>
                    <p className="real">“real”と”tech driven”の融合</p><br/>
                    <div className="japanese-text big-line-space">
                    リアルだけでもない。Webだけでも完結しない。<br/>
                    “人のリアルと融合したproduct”をキーワードに、<br/>
                    <p id="twoline1">事業領域を定めることなく、創業1年半の間に13の事業を創造しています。</p>
                    </div>
                    <p id="small">
                        ※年内ローンチ予定事業含む
                    </p>
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <img className="img-responsive imgcenter" src="/images/mediaicon.png"/>
                            <p className="japanese-text text-center">メディア開発事業</p>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <img className="img-responsive imgcenter" src="/images/HR.png"/>
                            <p className="japanese-text text-center">HR領域</p>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <img className="img-responsive imgcenter" src="/images/webService.png"/>
                            <p className="japanese-text text-center">ウェブサービス</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <img className="img-responsive imgcenter" src="/images/food.png"/>
                            <p className="japanese-text text-center">飲食店事業</p>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <img className="img-responsive imgcenter" src="/images/engineerEducation.png"/>
                            <p className="japanese-text text-center">エンジニア教育事業</p>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <img className="img-responsive imgcenter" src="/images/AI.png"/>
                            <p className="japanese-text text-center">人工知能活用事業</p>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <img className="img-responsive imgcenter" src="/images/app.png"/>
                            <p className="japanese-text text-center">アプリ開発事業</p>
                        </div>
                    </div>
                </div>
                

                {/* <!-- RECRUITMENT --> */}
                <hr id="RECRUITMENT"/>
                <hr className="style-eight"/>
                <div className="container" id="RECRUITMENT-container" >
                    <section>
                        <h2 className="text-center section-heading"><big>{`RECRUITMENT`}</big></h2>
                    </section>
                    <hr className="underlineforheading-RECRUITMENT"/><br/><br/>
                </div>
                <div className="form-group">
                  <div className="text-center">
                    <button type="button" id="apply-button" className="button-grey btn" data-toggle="modal" data-target="#apply">
                        送信
                    </button>
                  </div>
                    <div className="modal fade" id="apply" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                  <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div className="modal-body">
                                  <form>
                                    <div className="padding-popup form-group">
                                      <label for="recipient-name" className="form-control-label">Recipient:</label>
                                      <input type="text" className="form-control" id="recipient-name"/>
                                    </div>
                                    <div className="padding-popup form-group">
                                      <label for="message-text" className="form-control-label">Message:</label>
                                      <textarea className="padding-popup form-control" id="message-text"></textarea>
                                    </div>
                                    <label>upload your CV</label><span className="text-left"><input type="file"/></span>
                                  </form>
                                </div>
                                <div className="modal-footer">
                                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                  <button type="button" className="btn btn-primary">Send message</button>
                                </div>
                            </div> 
                        </div>
                    </div>



                 {/* <!-- NEWS --> */}
                <hr id="NEWS"/>
                <div className="text-center">
                    <hr className="style-eight"/>
                    <br/><br/><br/><br/>
                    <section>
                        <h2 className="section-heading" ><big>NEWS</big></h2>
                    </section>
                    <hr className="underlineforheading-NEWS"/>
                </div>
                <div className="container bottom-padding" id="news-container">
                <div className="row row1">
                <div className="japanese-text text-right col-md-4">2017年06月23日</div>
                <div className="japanese-text text-left col-md-8">
                {`AIを活用したタクシー配車アプリの実用実
験を今夏に開始`}</div>
                
                </div>
                <div className="row row1">
                <div className="japanese-text text-right col-md-4">2017年06月19日</div>
                <div className="japanese-text text-left col-md-8">
                {`コーポレート・ガバナンス及び内部統制の
強化に関するお知らせ`}</div>
                
                </div>
                <div className="row row1 ">
                <div className="japanese-text text-right col-md-4">2017年05月02日</div>
                <div id="third" className="japanese-text text-left col-md-8">
                {`横浜市が「無人運転サービス・AIを用いた
地域交通課題解決プロジェクト」を開始`}</div>
                </div>
                </div>
                



                {/* <!-- ACCESS --> */}
                <hr id="ACCESS"/>
                <hr className="style-eight"/>
                <div className="container-fluid" id="ACCESS-container">    
                <div className="text-center">
                    <section>
                        <h2 className="section-heading" ><big>ACCESS</big></h2>
                    </section>
                    <hr className="underlineforheading-ACCESS"/>
                    <br/>
                </div>
                <div className="modal-body row">
                    <div className="col-md-5 col-sm-5 no-padding">
                        <div className="row padding-top">
                            <div className="access-1 text-right col-md-4 col-sm-4 col-xs-4">
                               <p>社名</p>
                            </div>
                            <div className="access-2 text-left col-md-8 col-sm-8 col-xs-8">
                                <p>株式会社Scoville</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="access-1 text-right col-md-4 col-sm-4 col-xs-4">
                                <p>所在地</p>
                            </div>
                            <div className="access-2 text-left col-md-8 col-sm-8 col-xs-8">
                                <div>〒153-0051<br/>
                                東京都目黒区上目黒<br/>
                                1-1-5第二育良ビル3階</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="access-1 text-right col-md-4 col-sm-4 col-xs-4">
                                <p>設立</p>
                            </div>
                            <div className="access-2 text-left col-md-8 col-sm-8 col-xs-8">
                                <p>2014年8月6日</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-7 no-padding">
                    <img className="img-responsive imgcenter" src="/images/map.png"/>
                    </div>
                </div>
            </div>







                {/* <!-- CONTACT --> */}
                <hr id="CONTACT" className="style-eight"/>
                <div className="container" id="CONTACT-container">
                    <section>
                        <div className="page-header">
                            <h2 className="text-center section-heading"><big>CONTACT</big></h2>
                            <hr className="underlineforheading"/>
                        </div> 
                        {/* <!-- end of page hearder --> */}
                        <form action="" className="form-horizontal">
                            <div className="form-group">
                                <label for="user-name" className="contact-text">御社名</label>
                                <input type="text" id="user-name" className="form-control grey-form" placeholder="会社名を記入してください"/>
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
                            <div className="form-group">
                                <button type="submit" className="button-grey btn">
                                    送信
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
        )
    }
}