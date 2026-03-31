import Button from "@/components/ui/button";
import Checkbox from "@/components/ui/checkbox";
import Input from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-178px)]">
      <div className="p-10 bg-[var(--clr-bg-card)] border-2 border-[var(--clr-border)] rounded-3xl shadow-lg">
        <h2 className="text-2xl font-bold mb-2.5 text-center">Masuk</h2>

        <form className="flex flex-col gap-4 mb-10">
          {/* Email */}
          <Input type="email" label="Email" placeholder="contoh@gmail.com"/>
          {/* Password */}
          <Input type="password" label="Password" placeholder="Masukkan password"/>
          {/* Remember me */}
          <div className="flex items-center justify-between gap-3 px-2 text-sm">
            <Checkbox label="Ingat saya" />
            <Link href="#" className="hover:underline hover:text-[var(--clr-primary)] active:text-[var(--clr-primary-active)]">Lupa password?</Link>
          </div>
        </form>

        <Button variant="primary" className="w-full text-xl mb-2">Masuk</Button>
        <div className="flex justify-between items-center text-sm">
          Belum punya akun?
          <Link href="/daftar" className="px-2 py-1 hover:underline hover:cursor-pointer hover:text-[var(--clr-primary)] active:text-[var(--clr-primary-active)]">Daftar</Link>
        </div>
      </div>
    </div>
  );
}