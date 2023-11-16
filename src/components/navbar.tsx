import PrimaryButton from "./primary-button";

function Navbar() {
  return (
    <div className="w-full bg-white z-[2] flex flex-row justify-between items-center md:px-20 xl:px-20 gap-6 h-20 sticky top">
      <img src="/images/logo.svg" alt="Easy Bank Logo" className="md:w-40" />
      <div className="flex flex-row gap-6 2xl:gap-12 text-gray">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/blog">Blog</a>
        <a href="/careers">Careers</a>
      </div>
      <div className="">
        <PrimaryButton>Request Invite</PrimaryButton>
      </div>
    </div>
  );
}

export default Navbar;
