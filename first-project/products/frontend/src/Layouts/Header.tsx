import { useState, useEffect } from 'react';
import 'Assets/Scss/Header/Header.scss';
import { Link, useLocation } from 'react-router-dom';
import { DataHeader } from 'Constants/DataHeader';

function Header() {
  const active = 'active';
  const noActive = 'no-active';
  const location = useLocation();
  const [headers, setHeaders] = useState(DataHeader);

  useEffect(() => {
    setIsActive(location.pathname)
  }, []);

  function setIsActive(pathName: string) {
    setHeaders(
      headers.map((header, index) => {
        if (header.path === pathName) {
          headers[index].isActive = active;
          return header;

        } else {
          headers[index].isActive = noActive;
          return header;
        }
      })
    );
  }

  function createTitleOtherPages(el: any) {
    return <li>
      <Link
        to={el.path}
        className={`asdsad ${el.isActive}`}
        onClick={() => setIsActive(el.path)}
      >
      {el.title}
      </Link>
    </li>
  }

  return (
    <nav className='Header'>
      <div className='home-page'>
        1
      </div>
      <div className='other-pages'>
        <ul>
          {
            headers.map((el) =>
              createTitleOtherPages(el)
            )
          }
        </ul>
      </div>
      <div className='informations'>
          2
      </div>
    </nav>
  );
}

export default Header;
