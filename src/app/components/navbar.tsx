import Link from "next/link";
import PrimaryButton from "../components/shared/buttons/primaryButton";

interface NavProps {
  isloggedIn?: boolean;
}

interface NavEl {
  name: string;
  path: string;
}

const Navbar = ({ isloggedIn }: NavProps) => {
  const loggedInEl: NavEl[] = [
    {
      name: "Home",
      path: "home",
    },
    {
      name: "My templates",
      path: "/templates",
    },
  ];
  const loggedoutEl: NavEl[] = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "about",
    },
    {
      name: "FAQ",
      path: "faq",
    },
    {
      name: "Blog",
      path: "blog",
    },
  ];
  const navEl: NavEl[] = isloggedIn ? loggedInEl : loggedoutEl;

  return (
    <>
      <nav className="bg-primary border-gray-200 px-2 sm:px-4 py-2.5 rounded font-poppins">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link href="https://flowbite.com/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-theme-black">
              Resu.<span className="text-theme-purple">me</span>
            </span>
          </Link>
          <div className="flex md:order-2">
            <PrimaryButton title={"Create Resume"} />
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-primary md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-primary">
              {navEl.map((nav, index) => (
                <li key={nav.name + index}>
                  <Link
                    href={nav.path}
                    className="block py-2 pl-3 pr-4 text-theme-black rounded md:bg-transparent md:p-0 md:hover:text-theme-pink"
                  >
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
