import { NavLink } from "react-router";

function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          <NavLink to="/" className="hover:text-gray-200 transition">
            MyWebsite 🚀
          </NavLink>
        </h1>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 text-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition font-medium hover:text-gray-300 ${
                  isActive ? "border-b-2 border-white" : ""
                }`
              }
            >
              Home
            </NavLink>
            {["Login", "About", "Contact", "Linkedin"].map((item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `transition font-medium hover:text-gray-300 ${
                    isActive ? "border-b-2 border-white" : ""
                  }`
                }
              >
                {item}
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
