import { client, urlFor } from "@/app/lib/sanity";
import AddToCartBtn from "@/components/AddToCartBtn";
import {
  Bike,
  Clock,
  PackageCheck,
  RefreshCw,
  ChevronLeft,
  InspectIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const getData = async (slug) => {
  const query = `*[_type == 'product' && slug.current == '${slug}'][0]{
    _id,
    images,
    price,
    price_id,
    name,
    description,
      'slug': slug.current,
      'category':categories->{
    name
    
    }}`;

  const data = await client.fetch(query);
  console.log(data);
  return data;
};

async function Page({ params }) {
  const bike = await getData(params.slug);

  return (
    <section className="pt-24 pb-32">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-14">
          <div className="xl:flex-1 h-[460px] bg-slate-200 xl:w-[700px] xl:h-[540px] flex justify-center items-center">
            <Image
              src={urlFor(bike.images[0]).url()}
              width={473}
              height={290}
              priority
              alt="bike"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>

          <div className=" flex-1 flex flex-col justify-center items-start gap-10 py-6 md:py-0">
            <Link href={"/"} className="flex items-center gap-4 font-bold">
              <ChevronLeft size={20} />
              Back to Homepage.
            </Link>
            <div className="flex flex-col gap-6 items-start">
              <div className="">
                <h3>{bike.name}</h3>
                <p className="text-lg font-semibold">₦{bike.price}</p>
                <p>
                  {bike.description.slice(0, 200).concat("...")}
                  <button className="text-red-500 underline">Read More</button>
                </p>
                <AddToCartBtn
                  id={bike._id}
                  name={bike.name}
                  currency="NGN"
                  price={bike.price}
                  images={bike.images}
                  description={bike.description}
                  text="Add to Cart"
                  btnStyles=" mt-6 btn btn-accent text-[0.5em] hover:bg-slate-300 hover:scale-125 hover:translate-x-[4em] hover:translate-y-[1em]  rounded-md hover:transition-all hover:text-primary "
                />
              </div>
              <div className="flex flex-col gap-3 ">
                <div className="flex gap-3">
                  <PackageCheck size={20} className="text-accent" />
                  <p>Free shipping on orders over ₦130,000</p>
                </div>
                <div className="flex gap-3">
                  <RefreshCw size={20} className="text-accent" />
                  <p>Free shipping on orders over ₦130,000</p>
                </div>{" "}
                <div className="flex gap-3">
                  <Bike size={20} className="text-accent" />
                  <p>
                    The bicycles are partially assembled and benefit from
                    transport insurance.
                  </p>
                </div>{" "}
                <div className="flex gap-3">
                  <Clock size={20} className="text-accent" />
                  <p>Fast delivery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
