import { client } from "@/app/lib/sanity";
import { data } from "autoprefixer";
import React from "react";

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
}; data

async function PopularBikes() {
    const data = await getData();
    console.log(data);
  return <div>PopularBikes</div>;
}

export default PopularBikes;
