import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import { Routes, Route } from "react-router-dom";
import { BsSaveFill,BsFillStarFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import Header from './header';
import './home.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function Home() {

    var arr = [
        {
            'welicon': <BsSaveFill></BsSaveFill>,
            'welhead': 'Find Your Fvourite',
            'welpara': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            'welicon': <BsFillStarFill></BsFillStarFill>,
            'welhead': 'Find Your Fvourite',
            'welpara': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            'welicon': <FaCalendarAlt></FaCalendarAlt>,
            'welhead': 'Find Your Fvourite',
            'welpara': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
    ]
    var arr_fav = [
        {
            'favimg':require('./assets/menu1.jpg'),
            'favhead':'Neque porro quisquam',
            'favpara':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
            'favbtn':'$10'
        },
        {
            'favimg':require('./assets/menu2.jpg'),
            'favhead':'Neque porro quisquam',
            'favpara':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
            'favbtn':'$18'
        },
        {
            'favimg':require('./assets/menu3.jpg'),
            'favhead':'Neque porro quisquam',
            'favpara':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
            'favbtn':'$20'
        },
        {
            'favimg':require('./assets/menu4.jpg'),
            'favhead':'Neque porro quisquam',
            'favpara':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
            'favbtn':'$15'
        }
    ]

    return (
        <>
            <Header />
            <OwlCarousel className='owl-theme' id='main-slider' loop items={1} dots mouseDrag={false}>
                <div className='item'>
                    <img src={require('./assets/slider1.jpg')} alt="" />
                    <div className='slider-txt'>
                        <p className='slider-txt-head'>Special Wine</p>
                        <p className='slider-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button className='slider-btn'>read more</button>
                    </div>
                </div>
                <div className='item'>
                    <img src={require('./assets/slider2.jpg')} alt="" />
                    <div className='slider-txt'>
                        <p className='slider-txt-head'>Cozy Dinner</p>
                        <p className='slider-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <button className='slider-btn'>read more</button>
                    </div>
                </div>
                <div classNameName='item'>
                    <img src={require('./assets/slider3.jpg')} alt="" />
                    <div className='slider-txt'>
                        <p className='slider-txt-head'>Fresh & Delicious</p>
                        <p className='slider-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button className='slider-btn'>read more</button>
                    </div>
                </div>
            </OwlCarousel>
        
                <div className='welcome row'>
                    <p className='head col-12'>welcome!</p>
                    <p className='para col-12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                    <div className='welcome-block col-12'>
                        <div className='row'>


                            {
                                arr.map((item) => {
                                    return (
                                        <div className='col-md-4 wel-block col-sm-12'>
                                            <div className='row'>
                                                <div className='col-3'>
                                                    <div className='w-icon '>{item.welicon}</div>
                                                </div>
                                                <div className='col-9'>
                                                    <div className='w-head '><h3>{item.welhead}</h3></div>
                                                    <div className='w-para '>{item.welpara}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>


                <div className='fav-menu row text-center'>
                    <p className='head col-12'>favorite menu</p>
                    <p className='para col-12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                    <div className='welcome-block col-12'>
                        <div className='row'>
                            {
                                arr_fav.map((fav) => {
                                    return(
                                        <div className='col-md-3 fav-block'>
                                            <div className='fav-img'>
                                                <img src={fav.favimg}></img>
                                            </div>
                                            <div className='fav-txt'>
                                                <h5 className='fav-head'>{fav.favhead}</h5>
                                                <p className='fav-para'>{fav.favpara}</p>
                                                <button className='fav-btn'>{fav.favbtn}</button>
                                            </div>
                                        </div>
                                    )
                                })  
                            }
                        </div>
                    </div>
                </div>
            
                <div className='footer'>
                    <div className='f-parts container'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='part1'>
                                    <p className='p1-heading text-center'>
                                        Latest News
                                    </p>
                                    <p className='p1-para text-center'>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                    </p>
                                    <div className='row'>
                                        <div className='col-2'>
                                            <div className='d-t'>
                                                <span className='date'>
                                                    28
                                                </span>
                                                <span className='day'>
                                                    SEP
                                                </span>
                                            </div>
                                        </div>
                                        <div className='col-10'>
                                            <h4>
                                                Lorem ipsum sit amet
                                            </h4>
                                            <p className='news-para'>
                                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem. <a href='#'>Read more</a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-2'>
                                            <div className='d-t'>
                                                <span className='date'>
                                                    28
                                                </span>
                                                <span className='day'>
                                                    SEP
                                                </span>
                                            </div>
                                        </div>
                                        <div className='col-10'>
                                            <h4>
                                                Lorem ipsum sit amet
                                            </h4>
                                            <p className='news-para'>
                                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem. <a href='#'>Read more</a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-2'>
                                            <div className='d-t'>
                                                <span className='date'>
                                                    28
                                                </span>
                                                <span className='day'>
                                                    SEP
                                                </span>
                                            </div>
                                        </div>
                                        <div className='col-10'>
                                            <h4>
                                                Lorem ipsum sit amet
                                            </h4>
                                            <p className='news-para'>
                                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem. <a href='#'>Read more</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                            <div className='part2'>
                                    <p className='p1-heading text-center'>
                                        New Menu
                                    </p>
                                    <p className='p1-para text-center'>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                    </p>

                                    <div className='row menu'>
                                        <div className='col-4'>
                                            <img src={require('./assets/nmenu1.jpg')} alt="" />
                                        </div>
                                        <div className='col-8 nmenu-txt'>
                                            <h4>Neque porro quisquam</h4>
                                            <p className='news-para'>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='row menu'>
                                        <div className='col-4'>
                                            <img src={require('./assets/nmenu2.jpg')} alt="" />
                                        </div>
                                        <div className='col-8 nmenu-txt'>
                                            <h4>Neque porro quisquam</h4>
                                            <p className='news-para'>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='f-detail'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-6 copyright'>© Copyiright 2013 - Lumina by Liontheme</div>
                            <div className='col-6'>
                                <ul className='fmainmenu'>
                                    <li><a href="#">home</a></li>
                                    <li><a href="#">about</a></li>
                                    <li><a href="#">services</a></li>
                                    <li><a href="#">products</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                
        </>
    );
}
export default Home;