'use client'

import Input from "@/components/ui/input";
import Checkbox from "@/components/ui/checkbox";
import Select from "@/components/ui/select";
import RadioBtns from "../radiobtns";

export default function Academic() {

    const programs = [];

    const education = ["D1", "D2", "D3", "D4", "S1", "S2"];

    const registration = ["Reguler", "Prestasi", "Akademik", "Beasiswa", "KIP-K"];

    return (
        <div className="flex flex-col gap-5">
            <h2 className="font-bold text-center py-2.5 bg-(--clr-bg-secondary)">PILIHAN AKADEMIK</h2>

            <div className="flex flex-col gap-4 px-32">
                <RadioBtns title="Jenjang Pendidikan" name="education" options={education} />
                <div className="grid grid-cols-2 gap-6">
                    <Select label={"Program Studi Pilihan 1"} options={programs} placeholder="Pilih program studi" onChange={(val) => { console.log(val) }} />
                    <Select label={"Program Studi Pilihan 2"} options={programs} placeholder="Pilih program studi" onChange={(val) => { console.log(val) }} />
                </div>
                <RadioBtns title="Jalur Pendaftaran" name="regist" options={registration} />
            </div>
        </div>
    );
}