import Link from "next/link";

const Header = () => {
  return (
    <header
      className="fixed bg-blue-100/70 dark:bg-black/60 dark:text-blue-100 z-10 backdrop-blur-lg top-0
                w-full shadow-lg py-2"
    >
      <nav className="container mx-auto xl:max-w-screen-xl px-4 transition-all flex justify-between">
        <ul className="flex items-center gap-x-7 px-7 py-6 text-xl">
          <li className="hover:-translate-y-2 hover:text-green-900 hover:scale-150 transition-all duration-600">
            <Link href="/">
              <a className="py-2 block">خانه</a>
            </Link>
          </li>
          <li className="hover:-translate-y-2 hover:text-green-900 hover:scale-150 transition-all duration-600">
            <Link href="/blogs">
              <a className="py-2 block">بلاگ ها</a>
            </Link>
          </li>
          <li className="hover:-translate-y-2 hover:text-green-900 hover:scale-150 transition-all duration-600">
            <Link href="/services">
              <a className="py-2 block">خدمات</a>
            </Link>
          </li>
          <li className="hover:-translate-y-2 hover:text-green-900 hover:scale-150 transition-all duration-600">
            <Link href="/about">
              <a className="py-2 block">درباره ما</a>
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-x-4"></div>

        <img src="/images/emam.jpg" className="rounded-full w-20 h-20" />
      </nav>
    </header>
  );
};

export default Header;
