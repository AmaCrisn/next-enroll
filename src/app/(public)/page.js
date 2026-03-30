import Footer from "../../components/layout/footer";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center px-56 pt-9">
        {/* Image */}
        <div className="w-full mx-6 flex mb-9 border-2 border-[var(--clr-border)] bg-[var(--clr-bg-card)] rounded-3xl shadow-lg">
          <div className="h-[73vh] w-1/2 relative rounded-l-3xl overflow-hidden group">
            <Image
              src="/GedungTrilogi.jpg"
              alt="kampus"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Gradient fade to blend with right side */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent" />

            {/* Optional text on image */}
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm opacity-80">Universitas Trilogi</p>
              <h2 className="text-2xl font-semibold">Kampus Modern & Inovatif</h2>
            </div>
          </div>
          <div className="flex flex-col justify-between px-28 py-18 h-[73vh] w-1/2">
            <div>
              <h2 className="text-6xl font-bold mb-2">Wujudkan Masa Depan Anda <span className="text-[var(--clr-primary)]">Bersama Kami</span></h2>
              <p className="text-xl font-extralight">Temukan berbagai program studi, kembangkan potensi Anda, dan mulai perjalanan akademik di lingkungan yang inspiratif.</p>
            </div>

            <div className="flex flex-col gap-5">
              <button className="text-2xl text-white font-bold w-full py-3 bg-[var(--clr-primary)] hover:bg-[var(--clr-primary-hover)] rounded-md transition-all duration-300 ease-in-out hover:cursor-pointer">
                Daftar Sekarang
              </button>

              <div className="flex gap-5 text-lg font-semibold transition-all">
                <button className="w-1/2 py-3 border-[var(--clr-primary)] hover:border-[var(--clr-primary-hover)] hover:bg-[var(--clr-primary-hover)] hover:text-white border-2 rounded-md duration-300 ease-in-out hover:cursor-pointer">
                  Informasi Pendaftaran
                </button>

                <button className="w-1/2 py-3 border-[var(--clr-primary)] hover:border-[var(--clr-primary-hover)] hover:bg-[var(--clr-primary-hover)] hover:text-white border-2 rounded-md duration-300 ease-in-out hover:cursor-pointer">
                  Dosen
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}