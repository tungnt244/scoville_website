import React from 'react'

export default class HomePage extends React.Component {
    render(){
        return(
            <div className="home-page">
                <nav className="navbar navbar-inverse navbar-fixed-top" id="my-navbar">
                    <div id="nav-container" className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">	
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="navbar-collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li ><a href="#" id="logo"  className="navbar-left"><img className="img-responsive" src="./images/logo.png"/></a></li>
                                <li ><a className="big-word text-right" href="#HOME">    Ne/  </a></li>
                                <li ><a className="big-word text-right" href="#COMPANY">COMPANY/  </a></li>
                                <li ><a className="big-word text-right" href="#SERVICES">SERVICES/  </a></li>
                                <li ><a className="big-word text-right" href="#RECRUITMENT">RECRUIT/  </a></li>
                                <li ><a className="big-word text-right" href="#NEWS">NEWS/  </a></li>
                                <li ><a className="big-word text-right" href="#ACCESS">ABOUT/  </a></li>
                                <li ><a className="big-word text-right" href="#CONTACT">CONTACT/  </a></li>
                            </ul>
                        </div> 
                        {/* <!-- end of container --> */}
                    </div>
                    {/* <!-- end of navbar --> */}
                </nav>
                <div className="img-container">
                    <img className="img-responsive" id="mainimage" src="/images/mainpic.png" alt="Norway" />
                </div>


                <div className="container-fluid" id="COMPANY-container" >
                <hr id="COMPANY"/>
                    <section>
                        <h2 className="text-center section-heading"><big>{`COMPANY`}</big></h2>
                    </section>
                    <section><br/><br/>
                        <p className="text-center red-text">{`OUR MISSION`}</p>
                        <p className="company-text text-center">
                            世界に通用する人と事業を創り、</p>
                        <p className="company-text text-center">外貨獲得を通じて日本経済を牽引する
                        </p>
                        <br/><br/>
                    </section>
                    <section>
                        <h2 className="text-center red-text">{`OUR VALUE`}</h2>
                        <p className="company-text text-center">
                            連続的事業創造を行い、</p>
<p className="company-text text-center">世界に通ずるプロダクトを創り続ける
                        </p>
                        <br/><br/>
                        <hr id="SERVICES"/>
                    </section>
                </div>
                {/* <!-- end of COMPANY  --> */}


                
                
                <div className="container-fluid text-center grey-background" id="SERVICES-container">
                    <section>
                        <h2 className="section-heading"><big>SERVICES</big></h2><br/>
                    </section>
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
                            <hr id="RECRUITMENT"/>
                        </div>
                    </div>
                </div>
                

                {/* <!-- RECRUITMENT --> */}
                <div className="container-fluid" id="RECRUITMENT-container" >
                    <section>
                        <h2 className="text-center section-heading"><big>{`RECRUIT`}</big></h2>
                    </section><br/><br/><br/><br/><br/>
                <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <img className="img-responsive imgcenter" src="/images/recruit_sale.png"/>
                            <p className="japanese-text text-center">営業</p>
                            <div className="form-group">
                  <div className="text-center">
                    <button type="button" id="apply-button" className="button-grey btn" data-toggle="modal" data-target="#apply-sale">
                        送信
                    </button>
                  </div>
                    <div className="modal fade" id="apply-sale" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                  <h2 className="modal-title text-center" id="exampleModalLabel">RECRUIT</h2>
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div className="modal-body">
                                  <form>
                                    <div className="padding-popup form-group">
                                      <label for="recipient-name" className="form-control-label">メールアドレス:</label>
                                      <input type="text" className="form-control" id="recipient-name"/>
                                    </div>
                                    <div className="padding-popup form-group">
                                      <label for="message-text" className="form-control-label">自己PR:</label>
                                      <textarea className="padding-popup form-control" id="message-text"></textarea>
                                    </div>
                                    <label>履歴書を送ってください</label><span className="text-left"><input type="file"/></span>
                                  </form>
                                </div>
                                <div className="modal-footer">
                                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                  <button type="button" className="btn btn-primary">Send message</button>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <img className="img-responsive imgcenter" src="/images/recruit_engineer.png"/>
                            <p className="japanese-text text-center">エンジニア</p>
                                              <div className="text-center">
                    <button type="button" id="apply-button" className="button-grey btn" data-toggle="modal" data-target="#apply-engineer">
                        送信
                    </button>
                  </div>
                    <div className="modal fade" id="apply-engineer" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                  <h2 className="modal-title text-center" id="exampleModalLabel">RECRUIT</h2>
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div className="modal-body">
                                  <form>
                                    <div className="padding-popup form-group">
                                      <label for="recipient-name" className="form-control-label">メールアドレス:</label>
                                      <input type="text" className="form-control" id="recipient-name"/>
                                    </div>
                                    <div className="padding-popup form-group">
                                      <label for="recipient-name" className="form-control-label">Github account:</label>
                                      <input type="text" className="form-control" id="github"/>
                                    </div>
                                    <div className="padding-popup form-group">
                                      <label for="message-text" className="form-control-label">自己PR:</label>
                                      <textarea className="padding-popup form-control" id="message-text"></textarea>
                                    </div>
                                    <label>履歴書を送ってください</label><span className="text-left"><input type="file"/></span>
                                  </form>
                                </div>
                                <div className="modal-footer">
                                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                  <button type="button" className="btn btn-primary">Send message</button>
                                </div>
                            </div> 
                        </div>
                    </div>
                        </div>
                </div>
                </div>


                 {/* <!-- NEWS --> */}
                <hr id="NEWS"/>
                <div className="container bottom-padding" id="news-container">
                <div className="text-center">
                    <section>
                        <h2 className="section-heading" ><big>NEWS</big></h2>
                        <br/><br/>
                    </section>
                </div>
                <div className="row row1">
                <div className="japanese-text text-right col-md-4">2017.07.21</div>
                <div className="japanese-text text-left col-md-8">
                {`AIを活用したタクシー配車アプリの実用実
験を今夏に開始`}</div>
                
                </div>
                <div className="row row1" id="grey-row">
                <div className="japanese-text text-right col-md-4">2017.06.21</div>
                <div className="japanese-text text-left col-md-8">
                {`コーポレート・ガバナンス及び内部統制の
強化に関するお知らせ`}</div>
                
                </div>
                <div className="row row1 ">
                <div className="japanese-text text-right col-md-4">2017.04.15</div>
                <div id="third" className="japanese-text text-left col-md-8">
                {`横浜市が「無人運転サービス・AIを用いた
地域交通課題解決プロジェクト」を開始`}</div>
                </div>
                <hr id="ACCESS"/>
                </div>
                



                {/* <!-- ACCESS --> */}
                <div className="container-fluid" id="ACCESS-container">    
                <div className="text-center">
                    <section>
                        <h2 className="section-heading" id="ACCESS-heading" ><big>ABOUT</big></h2>
                    </section>
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
                    <hr id="CONTACT"/>
                    </div>
                </div>
            </div>







                {/* <!-- CONTACT --> */}
                <div className="container" id="CONTACT-container" >
                    <section>
                        <h2 className="text-center section-heading"><big>{`CONTACT`}</big></h2>
                    </section><br/><br/>
                <div className="form-group">
                  <div className="text-center">
                    <button type="button" id="contact-button" className="button-grey btn" data-toggle="modal" data-target="#contact-form">
                        <p id="word-contact">contact</p>
                    </button>
                  </div>
                    <div className="modal fade" id="contact-form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                  <h2 className="text-center modal-title" id="exampleModalLabel">CONTACT FORM</h2>
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div className="modal-body">
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
                        </form>
                                </div>
                                <div className="modal-footer">
                                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                  <button type="button" className="btn btn-primary">Send message</button>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}