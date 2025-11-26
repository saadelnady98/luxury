"use client";
import { getData } from "@/utils/fetchData";
import { Amenity_TP } from "amenity";
import clsx from "clsx";
import { useEffect, useState } from "react";
type AllAmenitiesFilterBar_TP = {
  setAmenity: React.Dispatch<React.SetStateAction<string[]>>;
  reset: boolean;
};
const AllAmenitiesFilterBar = ({
  setAmenity,
  reset,
}: AllAmenitiesFilterBar_TP) => {
  const [amenities, setAmenities] = useState([]);
  const [selectedAmenity, setSelectedAmenity] = useState<number[]>([]);

  const getCategories = async () => {
    const data = await getData({
      endpoint: "api/amenities",
    });
    const amenities = data?.data;
    setAmenities(amenities);
  };
  const handleAmenityClick = (amenity: Amenity_TP, index: number) => {
    setAmenity((prev) => {
      const isExist = prev?.includes(amenity.id);
      if (isExist) {
        return prev?.filter((item) => item !== amenity.id) || [];
      }
      return [...(prev || []), amenity.id];
    });
    setSelectedAmenity((prev) => {
      const isExist = prev?.includes(index);
      if (isExist) {
        return prev?.filter((item) => item !== index) || [];
      }
      return [...prev, index];
    });
  };

  useEffect(() => {
    if (!amenities.length) getCategories();
  }, []);
  useEffect(() => {
    setSelectedAmenity([]);
  }, [reset]);
  if (!amenities) return null;
  return (
    <ul className="flex gap-x-4 gap-y-2 flex-wrap">
      {amenities?.map((amenity: Amenity_TP, index) => (
        <li
          className={clsx({
            "bg-mainGray hover:bg-mainColor hover:text-textColor text-white hover:opacity-100 opacity-80 p-2 text-sm duration-200": true,
            "!bg-mainColor !opacity-100": selectedAmenity?.includes(index),

          })}
          key={amenity.slug}>
          <button
            type="button"
            value={amenity.slug}
            onClick={() => handleAmenityClick(amenity, index)}>
            {amenity?.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default AllAmenitiesFilterBar;
