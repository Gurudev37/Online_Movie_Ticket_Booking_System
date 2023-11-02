import React from 'react';
import { Link, Element } from 'react-scroll';
import './Menu.css';
import Home from './components/Home/Home';
import Upcomingmovies from './components/Upcmingmovies/Upcomingmovies';
import Available from './components/Available/Available';
import Contact from './components/Contact/Contact';
import Account from './components/profile/profile';

function Menu(props) {
  const { email } = props;
  const menuItems = [
    {
      id: 1,
      title: 'Home',
      component: <Home />,
    },
    {
      id: 2,
      title: 'Upcoming Movies',
      component: <Upcomingmovies />,
    },
    {
      id: 3,
      title: 'Available',
      component: <Available email={email} />,
    },
    {
      id: 4,
      title: 'Contact',
      component: <Contact />,
    },
    {
      id: 5,
      title: 'Account',
      component: <Account email={email} />,
    },
  ];

  return (
    <div className='filedcontenthome'>
    <div className="App">
      <header>
        <nav>
          <ul>
            {menuItems.map((menu) => (
              <li key={menu.id}>
                <Link to={menu.title} smooth={true} duration={700}>
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        {menuItems.map((menu) => (
          <div className="content" key={menu.id}>
            <Element name={menu.title} className="content-section">
              {menu.component}
            </Element>
          </div>
        ))}
      </main>
    </div>
    </div>
  );
}

export default Menu;

