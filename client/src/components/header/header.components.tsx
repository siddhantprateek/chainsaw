import React from 'react'
import { Link } from 'react-router-dom';
import './header.styles.css';

interface INAV {
  option: string,
  route: string
};


const NAV_OPTION = [
  {
    option: "Solution",
    route: "/solution"
  },
  {
    option: "Resource",
    route: "/route"
  },
  {
    option: "Product",
    route: "/product"
  }
];


const Header = () => {
  return (
    <header>
      <div className="left">
        <div className='logo'>
          <Link to="/">
            <h2>Chain<span className='logo-green'>saw</span></h2>
          </Link>
        </div>
      </div>
      <div className="mid">
        <ul>
          { 
            NAV_OPTION.map((item: INAV) =>(
            <li>
              <Link to={item.route}>
                {item.option}
              </Link>
            </li>
            )) 
          }
        </ul>
      </div>
      <div className="right">
        <div className="connect-btn">
          Connect
        </div>
      </div>
    </header>
  )
}

export default Header;