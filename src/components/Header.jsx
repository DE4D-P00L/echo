import Link from "next/link";

const Header = () => {
  return (
    <header className="flex bg-slate-500 py-3 text-white">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <Link href="" className="font-bold text-2xl">
          <h1>Echo</h1>
        </Link>
        <nav className="flex gap-5 font-semibold text-lg">
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          {/* Signin */}
        </nav>
      </div>
    </header>
  );
};
export default Header;
