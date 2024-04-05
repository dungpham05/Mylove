import { useState } from 'react';
import { Link } from "react-router-dom";

interface LinkHeader {
  title: string;
  isActive: boolean;
  path: string;
}

const RedirectComponent = ({ title, isActive, path }: LinkHeader) => {
  return (
    <Link to={path}>{title}</Link>
  );
};

function Header() {
  const [active, setActive] = useState(false);

  return (
    <nav>
      <RedirectComponent
        title = "Home"
        isActive = {active}
        path = "/"
      />
      <RedirectComponent
        title = "Login"
        isActive = {active}
        path = "/login"
      />
    </nav>
  );
}

export default Header;
