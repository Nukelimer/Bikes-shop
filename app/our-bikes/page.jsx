import { client } from "@/app/lib/sanity";
import BikeCategories from "@/components/BikeCategories";


const getData = async () => {
  const query = `
    *[_type == 'product']{
        _id,
          name,
          description,
          images,
          price,
          price_id,
          'slug': slug.current,
          'categories':categories[]->{name}}`;

  const data = await client.fetch(query);
  return data;
};

async function OurBikes() {
  const bikeData = await getData();

  return (
    <div>
      <BikeCategories bikes={bikeData} />
    </div>
  );
}

export default OurBikes;
