"use client";
import { getData } from "@/utils/fetchData";
import clsx from "clsx";
import { useEffect, useState } from "react";
import useCurrentLang from "../hooks/useCurrentLang";
import { dictionary } from "@/dictionaries/clientContent";
type PropertyTypeFilterBar_TP = {
  setPropertyType: React.Dispatch<React.SetStateAction<string[]>>;
  reset: boolean;
};
const PropertyTypeFilterBar = ({
  setPropertyType,
  reset,
}: PropertyTypeFilterBar_TP) => {
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [selectedPropertyType, setSelectedPropertyType] = useState<number[]>(
    []
  );
  const { lang } = useCurrentLang();
  const locale = dictionary[lang!];
  const getCategories = async () => {
    const data = await getData({
      endpoint: "api/type",
    });
    const propertyTypes = data?.data;
    setPropertyTypes(propertyTypes);
  };
  const handlePropertyTypeClick = (propertyType: any, index: number) => {
    setPropertyType((prev) => {
      const isExist = prev?.includes(propertyType.id);
      if (isExist) {
        return prev?.filter((item) => item !== propertyType.id) || [];
      }
      return [...(prev || []), propertyType.id];
    });
    setSelectedPropertyType((prev) => {
      const isExist = prev?.includes(index);
      if (isExist) {
        return prev?.filter((item) => item !== index) || [];
      }
      return [...prev, index];
    });
  };

  useEffect(() => {
    if (!propertyTypes.length) getCategories();
  }, []);
  useEffect(() => {
    setSelectedPropertyType([]);
  }, [reset]);
  if (!propertyTypes) return null;
  return (
    <ul className="flex lg:gap-x-4 gap-y-2 md:w-auto w-full mx-auto col-span-5 overflow-scroll md:overflow-hidden justify-center">
      {propertyTypes?.map((propertyType: any, index) => (
        <li
          className={clsx({
            " hover:bg-mainColor p-2 text-sm duration-200 h-fit whitespace-nowrap":
              true,
            "!bg-mainColor": selectedPropertyType?.includes(index),
          })}
          key={propertyType.id}
        >
          <button
            type="button"
            value={propertyType.id}
            onClick={() => handlePropertyTypeClick(propertyType, index)}
          >
            {locale?.[propertyType?.name]}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PropertyTypeFilterBar;
