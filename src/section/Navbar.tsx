function Navbar() {
  return (
    <div className="h-[10vh] bg-white flex items-center justify-between px-8">
      <div>LOGO</div>

      <div className="flex gap-4 items-center text-xs md:text-sm">
        <p className="cursor-default hover:text-black/60">About us</p>
        <p className="cursor-default hover:text-black/60">Competition Stages</p>
        <p className="cursor-default hover:text-black/60">Partners</p>
        <button className="cursor-pointer text-white bg-blue-500 hover:bg-blue-400 px-2 py-1.5 rounded-md">
          Register
        </button>
      </div>
    </div>
  );
}

export default Navbar;
