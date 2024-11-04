import { Link } from 'react-router-dom';

type NavbarProps = {
  title: string;
  icon: string;
}

const Navbar = ({ icon, title }: NavbarProps) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
