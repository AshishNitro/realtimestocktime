import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";
import UserDropdown from "./UserDropdown";

const Header = () => {
  return (
    <header className="sticky top-0 header">
      <div className=" container  header-wrapper  flex items-center justify-between py-4 ">
        <Link href="/">
          <Image
            src="/icons/logo.svg"
            alt="Signalist logo"
            width={140}
            height={30}
            className="h-10 w-auto cursor-pointer"
          />
        </Link>
        <nav className="hidden sm:block">
          <NavItems />
        </nav>
        <UserDropdown />
      </div>
    </header>
  );
};

export default Header;
