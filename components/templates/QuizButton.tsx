"use client";
import { dictionary } from "@/dictionaries/clientContent";
import { useState } from "react";
import useCurrentLang from "../hooks/useCurrentLang";
import { Modal } from "../ui/Modal";
import QuizWrapper from "./QuizWrapper";

const QuizButton = () => {
  const [openModal, setOpenModal] = useState(false);
  const { lang } = useCurrentLang();
  const locale = dictionary[lang!];
  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="fixed bottom-10 right-10 p-4 bg-black border border-mainColor text-mainColor z-40">
        {locale?.speak_experts}
      </button>
      <Modal open={openModal} setOpen={setOpenModal}>
        <QuizWrapper />
      </Modal>
    </>
  );
};

export default QuizButton;