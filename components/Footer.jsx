import { Input } from "./ui/input";

function Footer() {
  return (
    <footer className="pt-12 lg:pt-24 bg-primary text-white text-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8">
          <div className="">
            <h3 className="capitalize leading-tight mb-4">
              subscriber to our newsletters.
            </h3>
            <p></p>
          </div>
          <form className="flex flex-col lg:flex-row w-full max-w-[720px] mx-auto gap-5  mb-4">
            <Input placeholder={"your email"} />
            <button className=" btn w-full lg:max-w-[150px] h-[60px] btn-accent">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="py-6 border-t border-slate-300 text-white/75 ">
        Copyright &copy; 2024. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
