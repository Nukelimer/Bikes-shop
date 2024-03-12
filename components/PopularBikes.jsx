import { client } from "@/app/lib/sanity";

import Link from "next/link";
import React from "react";
import PopularBikeCarousel from "./PopularBikeCarousel";

const getData = async () => {
  const query = `*[_type == 'product'&& references(*[_type== 'category' && name =='popular']._id, categories)]{
        _id,
          name,
          description,
          images,
          price,
          price_id,
          'slug': slug.current,
          'categories':categories[]->{
        name
        
        }
        
        
        
        
        }`;
  const fetchData = await client.fetch(query);
  return fetchData;
};

async function PopularBikes() {
  const productsData = await getData();
  console.log(productsData);

  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h2 className="text-center">Most Popular Bikes</h2>
        <p className="text-center mb-8">
          The world's premium brands in one destination.
        </p>

        <PopularBikeCarousel productsData={productsData} />

        <Link href={"/our-bikes"}>
          <button className="btn btn-accent mx-auto">See all Bikes</button>
        </Link>
      </div>
    </section>
  );
}

export default PopularBikes;
