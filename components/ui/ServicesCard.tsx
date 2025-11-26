"use client";
import { dictionary } from "@/dictionaries/clientContent";
import { images } from "@/utils/exportsImages";
import { postData } from "@/utils/fetchData";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Service_TP } from "service";
import useCurrentLang from "../hooks/useCurrentLang";
import SelectPreferLang from "../templates/SelectPreferLang";
import AgentCard from "./AgentCard";
import { Modal } from "./Modal";
import SubButton from "./button/SubButton";
import { Form } from "./form";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { IMAGE_BLUR } from "../constant/image-blure";
import SuccessModule from "./motion-elements/SuccessModule";
import ServiceFallbackImage from "../../public/community.webp";

const ServicesCard = ({ serviceData }: { serviceData: Service_TP }) => {
  const [openModal, setOpenModal] = useState(false);
  const form = useForm();
  const [reset, setReset] = useState(false);
  const { lang } = useCurrentLang();
  const locale = dictionary[lang!];
  const [formSubmit, setFormSubmit] = useState(false);

  const submitHandler = async (values: any) => {
    await postData({
      endpoint: "api/form/service",
      values: { ...values, language: values.language.value, type: "service" },
    }).then(async (res) => {
      if (!res?.errors) {
        setReset((prev) => !prev);
        setFormSubmit(true);
        setTimeout(() => {
          setFormSubmit(false);
        }, 4000);
      }
    });
  };

  return (
    <>
      <div>
        <div
          className={`flex gap-4 items-center ${
            serviceData?.agent ? "group" : ""
          } group/edit border-[1px] border-transparent hover:border-mainGray duration-500 border-opacity-20 relative  overflow-hidden h-[200px] sm:h-[220px] md:h-[240px] lg:h-[280px] xl:h-[320px]`}
        >
          <Image
            className="group-hover:-translate-x-1/2 duration-500 h-full w-full object-cover"
            src={serviceData?.image?.original_url || ServiceFallbackImage}
            alt={serviceData?.image?.file_name}
            width={300}
            height={200}
            quality={75}
            // placeholder="blur"
            // blurDataURL={IMAGE_BLUR}
          />
          <button
            onClick={() => setOpenModal(true)}
            className="absolute group-hover/edit:left-1/2 group-hover:-translate-x-[120%] text-darkMode text-sm xl:text-base -translate-x-1/2 top-1/2 -translate-y-1/2 duration-300 opacity-0 hidden group-hover/edit:opacity-100 group-hover/edit:flex items-center gap-2 border-[1px] backdrop-blur-lg border-white rounded-full px-2 xl:px-6 py-1 xl:py-3"
          >
            <span className="bg-subDark text-white rounded-full flex justify-center items-center w-6 h-6">
              !
            </span>
            Enquire now
          </button>
          <div className="absolute -z-10 group-hover:z-0 right-0 translate-x-full group-hover:translate-x-0 duration-500 top-0 w-1/2 h-full">
            <AgentCard agentData={serviceData?.agent} isAgent={true} />
          </div>
        </div>
        <p className="text-2xl mt-8">{serviceData?.name}</p>
      </div>
      <Modal open={openModal} setOpen={setOpenModal} className="!p-0">
        <div className="flex justify-center items-center w-full h-[700px]">
          <div className="hidden lg:block h-full w-5/12">
            <div className="relative h-full">
              <Image
                className="object-cover object-center h-full w-full"
                src={images.servForm}
                alt={images.servForm}
                width={300}
                height={900}
                placeholder="blur"
                blurDataURL={IMAGE_BLUR}
              />
            </div>
          </div>
          <Form {...form}>
            <form
              className="z-20 relative w-full lg:w-7/12 p-10"
              onSubmit={form.handleSubmit(submitHandler)}
            >
              <p className="text-2xl ">Fill in the required data</p>
              <div className="flex flex-col lg:flex-row gap-2">
                <Input
                  className="text-subGray w-full outline-none bg-transparent placeholder:text-xs lg:placeholder:text-base border-[1px] border-mainGray border-opacity-60 placeholder:text-subGray placeholder:text-opacity-50  !px-3 lg:!px-6 !py-3 lg:!py-4"
                  name="name"
                  required
                  form={form}
                  type="text"
                  placeholder={locale?.full_name}
                  reset={reset}
                />
                <Input
                  className="text-subGray w-full outline-none bg-transparent placeholder:text-xs lg:placeholder:text-base border-[1px] border-mainGray border-opacity-60 placeholder:text-subGray placeholder:text-opacity-50  !px-3 lg:!px-6 !py-3 lg:!py-4"
                  name="email"
                  required
                  form={form}
                  type="email"
                  placeholder={locale?.email}
                  reset={reset}
                />
              </div>
              <div className="flex flex-col lg:flex-row gap-2 pb-2">
                <Input
                  className="text-subGray w-full outline-none bg-transparent placeholder:text-xs lg:placeholder:text-base border-[1px] border-mainGray border-opacity-60 placeholder:text-subGray placeholder:text-opacity-50  !px-3 lg:!px-6 !py-3 lg:!py-4"
                  name="phone"
                  required
                  form={form}
                  type="number"
                  placeholder={locale?.phone}
                  reset={reset}
                />
                <div className="w-full">
                  <SelectPreferLang form={form} reset={reset} />
                </div>
              </div>
              <Textarea
                className="text-subGray w-full outline-none bg-transparent placeholder:text-xs lg:placeholder:text-base border-[1px] border-mainGray border-opacity-60 placeholder:text-subGray placeholder:text-opacity-50  !px-6 !py-4"
                name="message"
                placeholder={locale?.message}
                id="message"
                cols={30}
                rows={6}
                form={form}
                reset={reset}
              ></Textarea>

              <SuccessModule show={formSubmit} />
              {/* <motion.div
                                initial={{ scale: 0, display: "none" }}
                                animate={formSubmit ? { scale: 1, display: "flex" } : { scale: 0, display: "none" }}
                                className="bg-mainColor flex justify-center items-center gap-2 text-textColor text-sm p-4 mt-2"
                            >
                                <Download /> {locale?.formSubmitted}
                            </motion.div> */}
              <div className="text-base mt-1 lg:mt-2 w-full">
                <SubButton
                  className="!py-2 !px-4 text-sm lg:text-base"
                  type="submit"
                >
                  {locale?.send}
                </SubButton>
              </div>
            </form>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default ServicesCard;
