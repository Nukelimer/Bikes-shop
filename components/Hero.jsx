import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <section className="py-48 md:py-0 md:h-[720px] relative overflow-hidden bg-slate-300">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="w-full lg:max-w-[550px] md:h-[720px] flex flex-col justify-center  lg:items-start items-center">
            <h2 className="text-center lg:text-left text-transition pt-8 ">
              Wanna Burn Some Calories?
              <span className=" block text-[30px]">Check In!!</span>{" "}
            </h2>
            <p className="text-slate-500 mb-6 text-lg max-w-[500px] mx-auto text-center lg:text-left lg:mx-0 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia ut
              saepe distinctio modi aspernatur fugit blanditiis quos et quasi
              tenetur.
            </p>
            <div className="flex gap-6    lg:justify-start mx-auto lg:mx-0 mt-4">
              <Link href={"/our-bikes"} className="btn btn-accent">
                <button>Shop Now</button>
              </Link>
              <Link href={"/our-bikes"} className="btn btn-primary">
                <button>Shop Now</button>
              </Link>
            </div>
          </div>
          <div className=" hidden lg:flex">
            <Image
              src={"/hero/bike.png"}
              width={764}
              height={490}
              quality={100}
              alt="hero"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
