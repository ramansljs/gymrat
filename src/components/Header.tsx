export default function Header() {
  return (
    <header className="p-8 flex items-center">
      <h1 className="text-xl uppercase font-bold">
        <a href="#">GymRat</a>
      </h1>
      <nav className="ml-auto">
        <ul className="list-none flex gap-12">
          <li>
            <a href="#">Program</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
