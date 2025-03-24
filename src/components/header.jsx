import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">
          <Link href="/">Next Auth</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-white hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white hover:text-gray-400">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/login" className="text-white hover:text-gray-400">
                Login
              </Link>
            </li>
            <li>
              <Link href="/register" className="text-white hover:text-gray-400">
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
