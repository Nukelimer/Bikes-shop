import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import AddToCartBtn from "./AddToCartBtn";
import Link from "next/link";
import { CgEye, CgShoppingBag } from "react-icons/cg";
function Bike({ bikesData }) {
  const popularBike = bikesData.categories.find(
    (bike) => bike.name === "popular"
  );



  return (
    <div className="group">
      <div className="h-[300px] w-full mb-8 overflow-hidden relative  flex flex-col items-center rounded-md border border-slate-400 p-2">
        <div className="flex justify-center w-[100%] border bg-slate-700  items-center  h-full  shadow-md rounded-md group-hover:bg-slate-400 transition-all duration-300">
          {popularBike && (
            <div className="absolute top-4 left-6 bg-accent px-3 text-white uppercase py-2 rounded-md font-medium text-center">
              {" "}
              Popular Bikes
            </div>
          )}

          <div >
            <Image
              priority
              src={urlFor(bikesData.images[0]).url()}
              width={300}
              height={300}
              alt="product"
              style={{ width: 'auto', height: 'auto' }}

              
            />
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center gap-11 opacity-0 group-hover:opacity-100 transition-all h-[400px">
          <AddToCartBtn
            id={bikesData._id}
            icon={<CgShoppingBag />}
            name={bikesData.name}
            currency="NGN"
            price={bikesData.price}
            images={bikesData.images}
            description={bikesData.description}
            btnStyles={
              "btn btn-accent btn-icon btn-primary hover:bg-slate-300 hover:scale-100 rounded-md hover:transition-all"
            }
          />
          <Link href={`/product/${bikesData.slug}`}>
            <button className="btn-icon btn-primary hover:bg-slate-300 hover:scale-100 rounded-md hover:transition-all">
              <CgEye />
            </button>
          </Link>
        </div>
      </div>
      <div>
        <h5 className="capitalize">{bikesData.name}</h5>
        <h5 className="capitalize mb-1">{`${bikesData.categories[0].name} Bike.`}</h5>
        <div className="text-lg font-bold text-accent">{`₦${bikesData.price}`}</div>
      </div>
    </div>
  );
}

export default Bike;
