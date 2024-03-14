"use client";

import React from "react";
import { useState, useEffect } from "react";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Bike from "./Bike";

function BikeCategories({ bikes }) {
  const [category, setCategory] = useState("all");
  const [filteredBikes, setFilteredBikes] = useState([]);
  const [price, setPrice] = useState(50000);

  useEffect(() => {
    const filtered = bikes.filter((bike) => {
      const categoryMatch =
        category === "all"
          ? bikes
          : bike.categories.some((Category) => Category.name === category);
      const priceMatch = bike.price <= price;
      return categoryMatch && priceMatch;
    });
    setFilteredBikes(filtered);


  }, [category, price, bikes]);

  return (
    <section className="min-h-[1200px] py-10">
      <div className="container mx-auto">
        <div className="flex flex-col">
          <aside className="  w-full p-4 mb-8 xl:w-[300px] xl:h-[84vh] xl:fixed">
            <RadioGroup
              defaultValue="all"
              className="flex flex-col gap-7 mb-12">
              <div
                className="flex items-center space-x-2"
                onClick={() => {
                  setCategory("all");
                }}>
                <RadioGroupItem value="all" id="all" />
                <label htmlFor="all"> All</label>
              </div>

              <div
                className="flex items-center space-x-2"
                onClick={() => {
                  setCategory("extreme");
                }}>
                <RadioGroupItem value="extreme" id="extreme" />
                <label htmlFor="extreme"> Extreme</label>
              </div>

              <div
                className="flex items-center space-x-2"
                onClick={() => {
                  setCategory("professional");
                }}>
                <RadioGroupItem value="professional" id="professional" />
                <label htmlFor="professional"> Professional</label>
              </div>

              <div
                className="flex items-center space-x-2"
                onClick={() => {
                  setCategory("road");
                }}>
                <RadioGroupItem value="road" id="road" />
                <label htmlFor="road"> Road</label>
              </div>
            </RadioGroup>

            <div className="max-w-56">
              <div className="text-lg mb-4 font-medium flex">
                Max Price:{" "}
                <span className="text-accent font-semibold ml-2 ">
                  ₦{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>{" "}
                <span className="ml-2 ">
                  {filteredBikes.length > 1
                    ? `${filteredBikes.length} items`
                    : filteredBikes === 0
                    ? `${filteredBikes.length} items`
                    : `${filteredBikes.length} item`}
                </span>
              </div>
              <Slider
                defaultValue={[50000]}
                step={10}
                max={600000}
                onValueChange={(val) => setPrice(val[0])}
              />
            </div>
          </aside>
          <div className=" w-full xl:w-[1050px] ml-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[40px]">
              {filteredBikes.map((bike) => {
                return <Bike bikesData={bike} key={bike._id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BikeCategories;
