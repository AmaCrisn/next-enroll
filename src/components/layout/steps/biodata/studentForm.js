'use client'

import { useState } from "react";
import Input from "@/components/ui/input";
import Checkbox from "@/components/ui/checkbox";
import RadioBtn from "@/components/ui/radiobtn";
import RadioBtns from "../../radiobtns";
import SearchSlct from "@/components/ui/searchSelect";
import Select from "@/components/ui/select";

export default function StudentForm() {
    const [provCrnt, setProvinces] = useState([]);
    const [citizenCrnt, setCitizenship] = useState([]);

    const provinces = [
        { label: "Aceh", value: "aceh" },
        { label: "Sumatera Utara", value: "sumatera-utara" },
        { label: "Sumatera Barat", value: "sumatera-barat" },
        { label: "Riau", value: "riau" },
        { label: "Kepulauan Riau", value: "kepulauan-riau" },
        { label: "Jambi", value: "jambi" },
        { label: "Sumatera Selatan", value: "sumatera-selatan" },
        { label: "Kepulauan Bangka Belitung", value: "kepulauan-bangka-belitung" },
        { label: "Bengkulu", value: "bengkulu" },
        { label: "Lampung", value: "lampung" },

        { label: "DKI Jakarta", value: "dki-jakarta" },
        { label: "Jawa Barat", value: "jawa-barat" },
        { label: "Jawa Tengah", value: "jawa-tengah" },
        { label: "DI Yogyakarta", value: "di-yogyakarta" },
        { label: "Jawa Timur", value: "jawa-timur" },
        { label: "Banten", value: "banten" },

        { label: "Kalimantan Barat", value: "kalimantan-barat" },
        { label: "Kalimantan Tengah", value: "kalimantan-tengah" },
        { label: "Kalimantan Selatan", value: "kalimantan-selatan" },
        { label: "Kalimantan Timur", value: "kalimantan-timur" },
        { label: "Kalimantan Utara", value: "kalimantan-utara" },

        { label: "Sulawesi Utara", value: "sulawesi-utara" },
        { label: "Gorontalo", value: "gorontalo" },
        { label: "Sulawesi Tengah", value: "sulawesi-tengah" },
        { label: "Sulawesi Barat", value: "sulawesi-barat" },
        { label: "Sulawesi Selatan", value: "sulawesi-selatan" },
        { label: "Sulawesi Tenggara", value: "sulawesi-tenggara" },

        { label: "Bali", value: "bali" },
        { label: "Nusa Tenggara Barat", value: "nusa-tenggara-barat" },
        { label: "Nusa Tenggara Timur", value: "nusa-tenggara-timur" },

        { label: "Maluku", value: "maluku" },
        { label: "Maluku Utara", value: "maluku-utara" },

        { label: "Papua", value: "papua" },
        { label: "Papua Barat", value: "papua-barat" },
        { label: "Papua Barat Daya", value: "papua-barat-daya" },
        { label: "Papua Tengah", value: "papua-tengah" },
        { label: "Papua Pegunungan", value: "papua-pegunungan" },
        { label: "Papua Selatan", value: "papua-selatan" },
    ];

    const marriage = [
        { label: "Belum Menikah", value: "belum-menikah" },
        { label: "Menikah", value: "menikah" },
        { label: "Cerai Hidup", value: "cerai-hidup" },
        { label: "Cerai Mati", value: "cerai-mati" },
    ];

    const religion = [
        { label: "Budha", value: "budha" },
        { label: "Hindu", value: "hindu" },
        { label: "Islam", value: "islam" },
        { label: "Katholik", value: "katholik" },
        { label: "Kristen", value: "kristen" },
        { label: "Konghucu", value: "konghucu" },
    ];

    const citizenship = [
        { label: "WNI (Warga Negara Indonesia)", value: "wni" },
        { label: "WNA (Warga Negara Asing)", value: "wna" },
    ];

    return (
        <div className="flex flex-col gap-4 px-32">
            <Input type="text" label="Nama Lengkap" placeholder="Masukkan nama lengkap" />
            <RadioBtns title={"Jenis Kelamin"} options={["Laki-laki", "Perempuan"]} name="gender" />
            <Input type="date" label="Tanggal Lahir" placeholder={"01-01-2001"} />
            <Input type="number" label={"Nomor HP"} placeholder={"+62 1234567890"} onWheel={(e) => e.target.blur()} />
            <Input type="email" label={"Email"} placeholder={"Email"} />
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <Input type="text" label={"Alamat"} placeholder={"Masukkan alamat"} />
                    <SearchSlct
                        label="Provinsi"
                        placeholder="Pilih provinsi"
                        options={provinces}
                    />
                    <SearchSlct
                        label="Kota / Kabupaten"
                        placeholder="Pilih kota/kabupaten"
                        options={provinces}
                    />
                    <Input type="number" label={"Kode Pos"} placeholder={"Masukkan kode pos"} onWheel={(e) => e.target.blur()} icon={false} />
                </div>
                <div>
                    <Select label={"Status Pernikahan"} options={marriage} placeholder="Pilih status" onChange={(val) => { console.log(val) }} />
                    <Select label={"Agama"} options={religion} placeholder="Pilih agama" onChange={(val) => { console.log(val) }} />
                    <Select label={"Kewarganegaraan"} options={citizenship} placeholder="Pilih kewarganegaraan" onChange={(val) => { setCitizenship(val.value)}} />
                    {citizenCrnt === "wni" ? (
                        <Input type="number" label={"NIK"} placeholder={"Masukkan NIK"} onWheel={(e) => e.target.blur()} icon={false} />
                    ) : citizenCrnt === "wna" ? (
                        <Input type="number" label={"Nomor Paspor"} placeholder={"Masukkan nomor paspor"} onWheel={(e) => e.target.blur()} icon={false} />
                    ) : null}
                </div>
            </div>
        </div>
    );
}