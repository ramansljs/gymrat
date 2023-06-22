import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="p-8 px-16 flex items-center">
      <h1 className="text-2xl uppercase font-bold hover:text-teal-500">
        <Link to="/">GymRat</Link>
      </h1>
      <nav className="ml-auto">
        <ul className="list-none flex gap-12">
          <li className="hover:text-teal-500">
            <Link to="program">Program</Link>
          </li>
          <li className="hover:text-teal-500">
            <a href="#">About Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
