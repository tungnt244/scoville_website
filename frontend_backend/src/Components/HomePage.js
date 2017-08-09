import React from 'react'
import '../Styles/index.css'

export default class HomePage extends React.Component {
    render(){
        return(
            <div className="home-page">

                <div className="img-container">
                    <img className="img-responsive" id="mainimage" src="/images/mainpic.png" alt="Norway" />
                </div>
                <nav className="navbar navbar-inverse" id="my-navbar">
                    <div id="nav-container" className="container-fluid">
                        <div>
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">  
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <a id="logo-container" className="navbar-brand scroll" >
                            <img className="img-responsive" id="logo" src="./images/logo.png" title="" />
                        </a>
                        <div className="collapse navbar-collapse" id="navbar-collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li ><a className="big-word text-right" href="">HOME/  </a></li>
                                <li ><a className="big-word text-right" href="#COMPANY">COMPANY/  </a></li>
                                <li ><a className="big-word text-right" href="#SERVICES">SERVICES/  </a></li>
                                <li ><a className="big-word text-right" href="#RECRUITMENT">RECRUITMENT/   </a></li>
                                <li ><a className="big-word text-right" href="#NEWS">NEWS/  </a></li>
                                <li ><a id="right-nav" className="big-word text-right" href="#ACCESS">ABOUT  </a></li>
                                <li id="li-button">
                                    <button type="button" id="contact-button" className="btn btn-danger" data-toggle="modal" data-target="#contact-form">
                                        <p id="contact-word">お問い合わせ</p>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- end of container --> */}
                    </div>
                </nav>
                {/* <!-- end of navbar --> */}


                <div className="container-fluid" id="COMPANY-container" >
                <hr id="COMPANY"/>
                    <section>
                        <h2 className="text-center section-heading"><big>{`COMPANY`}</big></h2>
                    </section>
                    <div className="white-background">
                        <p className="text-center red-text">{`OUR MISSION`}</p>
                        <p className="company-text text-center">
                            世界に通用する人と事業を創り、</p>
                        <p className="company-text text-center">外貨獲得を通じて日本経済を牽引する
                        </p><br/>
                    </div>
                    <br/><br/>
                    <div className="white-background">
                        <h2 className="text-center red-text">{`OUR VISION`}</h2>
                        <p className="company-text text-center">
                            連続的事業創造を行い、</p>
<p className="company-text text-center">世界に通ずるプロダクトを創り続ける
                        </p>
                        <br/><br/>
                        <hr id="SERVICES"/>
                    </div>
                </div>
                {/* <!-- end of COMPANY  --> */}



                <div className="container-fluid text-center grey-background" id="SERVICES-container">
                    <section>
                        <h2 className="section-heading"><big>SERVICES</big></h2><br/>
                    </section>
                    <p className="real">“real”と”tech driven”の融合</p><br/>
                    <div id="services-text-container" className="container japanese-text big-line-space">
                    リアルだけでもない。Webだけでも完結しない。<br/>
                    “人のリアルと融合したproduct”をキーワードに、<br/>
                    <p id="twoline1">事業領域を定めることなく、創業1年半の間に13の事業を創造しています。</p>
                    </div>
                    <div className="row small-row">
                        <div className="col-lg-3 col-md-3">
                            <img className="img-responsive imgcenter" src="/images/mediaicon.png"/>
                            <p className="japanese-text text-center">メディア開発事業</p>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <img className="img-responsive imgcenter" src="/images/HR.png"/>
                            <p className="japanese-text text-center">HR領域</p>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <img className="img-responsive imgcenter" src="/images/webService.png"/>
                            <p className="japanese-text text-center">ウェブサービス</p>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <img className="img-responsive imgcenter" src="/images/AI.png"/>
                            <p className="japanese-text text-center">人工知能活用事業</p>
                        </div>
                    </div>
                    <div className="row small-row">
                        <div className="col-lg-3 col-md-3">
                            <img className="img-responsive imgcenter" src="/images/food.png"/>
                            <p className="japanese-text text-center">飲食店事業</p>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <img className="img-responsive imgcenter" src="/images/engineerEducation.png"/>
                            <p className="japanese-text text-center">エンジニア教育事業</p>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <img className="img-responsive imgcenter" src="/images/app.png"/>
                            <p className="japanese-text text-center">アプリ開発事業</p>
                            <hr id="RECRUITMENT"/>
                        </div>
                    </div><br/><br/>
                    <p id="small-text" className="japanese-text text-right">※年内ローンチ予定事業含む </p>
                </div>



                {/* <!-- RECRUITMENT --> */}
                <div className="container-fluid" id="RECRUITMENT-container" >
                    <section>
                        <h2 className="text-center section-heading"><big>{`RECRUIT`}</big></h2>
                    </section><br/><br/><br/><br/><br/>
                <div className="row small-row">
                    <div id="equal-height-1" className="white-col col-lg-5 col-md-5">
                        <img className="img-responsive imgcenter" src="/images/recruit_engineer.png"/>
                        <p className="big-recruit japanese-text text-center">エンジニア</p>
                    <div>
                    <p className="recruit-text">問題発見解決能力に長けていること。</p>
                   <div className="text-center">
                    <button type="button" id="apply-button" className="btn-danger btn big-recruit-1" data-toggle="modal" data-target="#apply-engineer">
                        エントリー
                    </button>
                   </div>
                    <div className="recruit-form modal fade" id="apply-engineer" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                  <h2 className="modal-title text-center" id="exampleModalLabel">Recruitment</h2>
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div className="modal-body">
                                  <form>
                                    <div className="padding-popup form-group"><br/>
                                      <input type="text" placeholder="メールアドレス" className="form-control" id="recipient-name"/>
                                    </div>
                                    <div className="padding-popup form-group"><br/>
                                      <input placeholder="Github account" type="text" className="form-control" id="github"/>
                                    </div>
                                    <div className="padding-popup form-group"><br/>
                                      <textarea cols="20" rows="10" placeholder="自己PR" className="padding-popup form-control" id="message-text"></textarea>
                                    </div>
                                  </form>
                                </div>
                                <div className="modal-footer">
                                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                  <button type="button" className="btn btn-primary">送信</button>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
                        </div>
                        <div className= "col-lg-2 col-md-2">
                        </div>
                    <div id="equal-height" className="white-col col-lg-5 col-md-5">
                        <img className="img-responsive imgcenter" src="/images/recruit_sale.png"/>
                        <p className="big-recruit japanese-text text-center">営業</p>
                        <p className="recruit-text">お客様の課題は何かをしっかり把握することができ、それに対して適切なアドバイスを行なえる者。</p>
                  <div className="text-center">
                    <button type="button" id="apply-button" className="big-recruit-1 btn-danger btn" data-toggle="modal" data-target="#apply-sale">
                        エントリー
                    </button>
                  </div>
                    <div className="recruit-form modal fade " id="apply-sale" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                  <h2 className="modal-title text-center" id="exampleModalLabel">Recruitment</h2>
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div className="modal-body">
                                  <form>
                                    <div className="padding-popup form-group">
                                      <input placeholder="メールアドレス" type="text" className="form-control" id="recipient-name"/>
                                    </div><br/>
                                    <div className="padding-popup form-group">
                                      <textarea cols="20" rows="10" placeholder="自己PR" className="padding-popup form-control" id="message-text"></textarea>
                                    </div>
                                  </form>
                                </div>
                                <div className="modal-footer">
                                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                  <button type="button" className="btn btn-primary">送信</button>
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
                <div className="text-center">
                    <button className="btn btn-danger button-news" href=""> see more</button>
                </div>
                    <br/><br/><br/><br/><hr id="ACCESS"/>
                </div>
                



                {/* <!-- ACCESS --> */}
                <div className="container-fluid" id="ACCESS-container">    
                <div className="text-center">
                    <section>
                        <h2 className="section-heading" id="ACCESS-heading" ><big>ABOUT</big></h2>
                    </section>
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
                        <div className="row">
                            <div className="access-1 text-right col-md-4 col-sm-4 col-xs-4">
                                <p>代表取締役</p>
                            </div>
                            <div className="access-2 text-left col-md-8 col-sm-8 col-xs-8">
                                <p>出谷昌裕</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-7 no-padding">
                    <img className="img-responsive imgcenter" src="/images/map.png"/>
                    </div>
                </div><br/><br/>
                <div className="access-2 text-center">Copyright Scoville All Rights Reserved</div>
            </div>







                {/* <!-- CONTACT form --> */}
                    <div className="modal fade" id="contact-form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                  <h2 className="text-center modal-title" id="exampleModalLabel">Contact</h2>
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
        )
    }
}