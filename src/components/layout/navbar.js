'use client'

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function navbar() {
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/register";
  return (
    <div>
      {/* Header */}
      <nav className="bg-[var(--clr-primary)] text-white px-32 pt-6">
        {/* Top Section - title and buttons*/}
        <div className="flex items-center justify-between mx-6 mb-3.5 text-2xl font-bold">
          {/* Title */}
          <div className="flex items-center gap-4">
            <div className="bg-white rounded-3xl p-2">
              <Image loading="eager" alt="Logo Trilogi" height={80} width={80} src="/Universitas_Trilogi_logo.svg"></Image>
            </div>
            Universitas Trilogi
          </div>

          {/* Button regist and login section */}
          <div className="flex gap-6">
            <button className="px-10 py-2.5 rounded-md hover:bg-[var(--clr-ghost-hover)] hover:cursor-pointer transition-all duration-300 ease-in-out">
              Masuk
            </button>
            <button className="bg-[var(--clr-accent)] px-10 py-2.5 rounded-md hover:bg-[var(--clr-accent-hover)] hover:cursor-pointer transition-all duration-300 ease-in-out">
              Daftar
            </button>
          </div>
        </div>

        {/* Bottom Section - navigation purposes */}
        <div className="flex gap-6 transition-all text-lg">
          <div className="px-4 py-2 rounded-t-md hover:bg-[var(--clr-primary-hover)] hover:cursor-pointer duration-300 ease-in-out">
            Beranda
          </div>
          <div className="px-4 py-2 rounded-t-md hover:bg-[var(--clr-primary-hover)] hover:cursor-pointer duration-300 ease-in-out">
            Informasi Pendaftaran
          </div>
          <div className="px-4 py-2 rounded-t-md hover:bg-[var(--clr-primary-hover)] hover:cursor-pointer duration-300 ease-in-out">
            Dosen
          </div>
        </div>
      </nav>
    </div>
  );
}
