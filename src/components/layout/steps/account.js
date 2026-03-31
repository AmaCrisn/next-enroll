'use client'

import Input from "@/components/ui/input";
import Checkbox from "@/components/ui/checkbox";

export default function Account() {

    return (
        <div className="flex flex-col gap-5">
            <h2 className="font-bold text-center py-2.5 bg-(--clr-bg-secondary)">PEMBUATAN AKUN</h2>

            <div className="flex flex-col gap-4 px-32">
                <Input label="Email" type="email" placeholder="contoh@gmail.com" />

                <div className="grid grid-cols-2 gap-6">
                    <Input label="Password" type="password" placeholder="Masukkan password" />
                    <Input label="Konfirmasi Password" type="password" placeholder="Masukkan ulang password" />
                </div>

                <Checkbox label="Saya menyatakan bahwa data yang saya isi adalah benar dan saya menyetujui Syarat & Ketentuan serta Kebijakan Privasi yang berlaku." />
            </div>
        </div>
    );
}