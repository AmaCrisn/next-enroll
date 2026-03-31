'use client'

import Input from "@/components/ui/input";
import Checkbox from "@/components/ui/checkbox";
import StudentForm from "./biodata/studentForm";
import ParentsForm from "./biodata/parentsForm";
import Button from "@/components/ui/button";

export default function Biodata({ biodataStep, setBiodataStep }) {

    return (
        <div className="flex flex-col gap-5">
            <h2 className="font-bold text-center py-2.5 bg-(--clr-bg-secondary)">BIODATA</h2>

            <div className="grid grid-cols-2 gap-6 px-32">
                <Button variant={biodataStep === "student" ? "primary" : "ghost"} onClick={()=> setBiodataStep("student")}>Student</Button>
                <Button variant={biodataStep === "parents" ? "primary" : "ghost"} onClick={()=> setBiodataStep("parents")}>Orang Tua</Button>
            </div>

            {biodataStep === "student" && <StudentForm />}
            {biodataStep === "parents" && <ParentsForm />}
        </div>
    );
}