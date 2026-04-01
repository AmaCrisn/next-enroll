'use client'

import Button from "@/components/ui/button";
import Stepper from "@/components/layout/stepper"
import Account from "@/components/layout/steps/account";
import Academic from "@/components/layout/steps/academic";
import Biodata from "@/components/layout/steps/biodata";
import Files from "@/components/layout/steps/files";
import Finish from "@/components/layout/steps/finish";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Input from "@/components/ui/input";
import Checkbox from "@/components/ui/checkbox";
import Confirmation from "@/components/layout/steps/confirmation";

export default function Home() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [biodataStep, setBiodataStep] = useState("student");
  const contents = [
    <Account />,
    <Biodata biodataStep={biodataStep} setBiodataStep={setBiodataStep} />,
    <Academic />,
    <Files />,
    <Confirmation />,
    <Finish />,
  ];

  const nextStep = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    
    // If step 2 then change sub step
    if (step === 2) {
      if (biodataStep === "student") {
        setBiodataStep("parents");
        return;
      }

      if (biodataStep === "parents") {
        setStep(3);
        return;
      }
    }
    
    setStep((prev) => Math.min(prev + 1, 6));
  };

  const prevStep = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })

    // If step 2 then change sub step
    if (step === 2 && biodataStep === "parents") {
      setBiodataStep("student");
      return;
    }

    setStep((prev) => Math.max(prev - 1, 1)); // min step = 1
  };

  return (
    <div className="flex justify-center items-center text-(-clr-txt-primary) my-10">
      <div className="w-full max-w-5xl py-10 bg-(--clr-bg-card) border-2 border-(--clr-border) rounded-3xl shadow-lg flex flex-col gap-5">
        {/* Progress Stepper */}
        <div className="px-12">
          <Stepper currentStep={step} />
        </div>

        {contents[step - 1]}

        <div className="flex self-end gap-6 mt-6 px-12">
          <Button variant="secondary" className="px-10" onClick={prevStep} hidden={step === 1}>
            Sebelumnya
          </Button>
          <Button variant="primary" className="px-10"
            onClick={step === 6 ? () => router.push("/masuk") : nextStep}>
            {step === 6 ? "Masuk" : step === 5 ? "Selesai" : "Selanjutnya"}
          </Button>
        </div>
      </div>
    </div>
  );
}