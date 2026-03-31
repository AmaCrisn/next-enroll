'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "../../components/ui/button"
import Image from "next/image";

export default function navbar() {
  const router = useRouter();
  return (
    <div>
      {/* Header */}
      <nav className="bg-[var(--clr-primary)] text-white px-32 pt-6">
        {/* Top Section - title and buttons*/}
        <div className="flex items-center justify-between mx-6 mb-3.5 font-semibold">
          {/* Title */}
          <div className="flex items-center gap-4">
            <div className="bg-white rounded-3xl p-2">
              <Image loading="eager" alt="Logo Trilogi" height={80} width={80} src="/Universitas_Trilogi_logo.svg"></Image>
            </div>
            
            <div>
              <p className="text-sm font-light">Penerimaan Mahasiswa Baru</p>
              <h1 className="text-3xl">Universitas Trilogi</h1>
            </div>
          </div>

          {/* Button regist and login section */}
          <div className="flex gap-6 text-2xl">
            <Button onClick={() => {router.push("/masuk")}} variant="ghost" className="px-10">
              Masuk
            </Button>
            <Button onClick={() => {router.push("/daftar")}} variant="accent" className="px-10">
              Daftar
            </Button>
          </div>
        </div>

        {/* Bottom Section - navigation purposes */}
        <div className="flex gap-6 transition-all text-lg">
          <Link href="/" className="px-4 py-2 rounded-t-md hover:bg-[var(--clr-primary-hover)] hover:cursor-pointer duration-300 ease-in-out">
            Beranda
          </Link>
          <Link href="/informasi" className="px-4 py-2 rounded-t-md hover:bg-[var(--clr-primary-hover)] hover:cursor-pointer duration-300 ease-in-out">
            Informasi Pendaftaran
          </Link>
          <Link href="/dosen" className="px-4 py-2 rounded-t-md hover:bg-[var(--clr-primary-hover)] hover:cursor-pointer duration-300 ease-in-out">
            Dosen
          </Link>
        </div>
      </nav>
    </div>
  );
}
