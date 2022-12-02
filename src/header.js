import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './header.css';

function Header()
{
    return(
        <>
            <div className='header row'>
                <div className='col-12'>
                    <div className='row'>
                        <div className='logo col-12 d-flex justify-content-center align-items-center'>
                            <img src={require('./assets/logo.png')}></img>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='navbar col-12 d-flex justify-content-center align-items-center'>
                            <ul className='mainmenu d-flex align-items-center' type='none'>
                                <li><a href="#">home</a></li>
                                <li><a href="#">menu</a></li>
                                <li><a href="#">reservation</a></li>
                                <li><a href="#">news</a></li>
                                <li><a href="#">elements</a></li>
                                <li><a href="#">gallery</a></li>
                                <li><a href="#">contact</a></li>
                            </ul>
                            <ul className='menu col-12 d-flex justify-content-center align-items-center d-md-none'>
                                <li className='menu-icon col-12 d-flex justify-content-center align-items-center'><a href='#'><i class="bi bi-list"></i></a>
                                    <ul className='submenu'>
                                        <li className='petamenu'><a href="#">home</a></li>
                                        <li className='petamenu'><a href="#">menu</a></li>
                                        <li className='petamenu'><a href="#">reservation</a></li>
                                        <li className='petamenu'><a href="#">news</a></li>
                                        <li className='petamenu'><a href="#">elements</a></li>
                                        <li className='petamenu'><a href="#">gallery</a></li>
                                        <li className='petamenu'><a href="#">contact</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;