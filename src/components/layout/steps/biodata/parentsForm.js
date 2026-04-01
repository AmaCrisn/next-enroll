'use client'

import Input from "@/components/ui/input";
import Checkbox from "@/components/ui/checkbox";
import Select from "@/components/ui/select";

export default function ParentsForm() {
    const alive = [
        { label: "Hidup", value: "hidup" },
        { label: "Meninggal", value: "meninggal"}
    ];

    const kinship = [
        {label: "Kandung", value: "kandung"},
        {label: "Tiri", value: "tiri"},
    ];

    const education = [
        {label: "S3", value: "s3"},
        {label: "S2", value: "s2"},
        {label: "S1", value: "s1"},
        {label: "D4", value: "d4"},
        {label: "D3", value: "d3"},
        {label: "D2", value: "d2"},
        {label: "D1", value: "d1"},
    ];

    return (
        <div className="flex flex-col gap-4 px-32">
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <h3 className="mb-4 pb-1.5 text-xl font-semibold border-b-4 border-(--clr-border)">Biodata Ayah</h3>

                    <Input type="text" label="Nama Lengkap" placeholder="Masukkan nama lengkap" />
                    <Select label={"Status Hidup"} options={alive} placeholder="Pilih status" />
                    <Input type="date" label="Tanggal Lahir" placeholder={"01-01-2001"} required={false} />
                    <Input type="number" label={"Nomor HP"} placeholder={"+62 1234567890"} onWheel={(e) => e.target.blur()} required={false} />
                    <Input type="email" label={"Email"} placeholder={"Email"} required={false} />
                    <Select label={"Status Kekerabatan"} options={kinship} placeholder="Pilih kekerabatan" required={false} />
                    <Select label={"Pendidikan Terakhir"} options={education} placeholder="Pilih pendidikan" required={false} />
                    <Input type="text" label={"Alamat"} placeholder={"Masukkan alamat"} required={false} />
                    <Input type="number" label={"Penghasilan"} placeholder={"Masukkan penghasilan"} onWheel={(e) => e.target.blur()} icon={false} required={false} />
                </div>
                <div>
                    <h3 className="mb-4 pb-1.5 text-xl font-semibold border-b-4 border-(--clr-border)">Biodata Ibu</h3>

                    <Input type="text" label="Nama Lengkap" placeholder="Masukkan nama lengkap" />
                    <Select label={"Status Hidup"} options={alive} placeholder="Pilih status" />
                    <Input type="date" label="Tanggal Lahir" placeholder={"01-01-2001"} required={false} />
                    <Input type="number" label={"Nomor HP"} placeholder={"+62 1234567890"} onWheel={(e) => e.target.blur()} required={false} />
                    <Input type="email" label={"Email"} placeholder={"Email"} required={false} />
                    <Select label={"Status Kekerabatan"} options={kinship} placeholder="Pilih kekerabatan" required={false} />
                    <Select label={"Pendidikan Terakhir"} options={education} placeholder="Pilih pendidikan" required={false} />
                    <Input type="text" label={"Alamat"} placeholder={"Masukkan alamat"} required={false} />
                    <Input type="number" label={"Penghasilan"} placeholder={"Masukkan penghasilan"} onWheel={(e) => e.target.blur()} icon={false} required={false} />
                </div>
            </div>
        </div>
    );
}