import Button from "@/components/ui/button";
import Footer from "../../components/layout/footer";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center px-56 pt-9">
        {/* Image */}
        <div className="w-full mx-6 flex mb-9 border-2 border-(--clr-border) bg-(--clr-bg-card) rounded-3xl shadow-lg">
          <div className="h-[73vh] w-1/2 relative rounded-l-3xl overflow-hidden group">
            <Image
              src="/GedungTrilogi.jpg"
              alt="kampus"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Gradient fade to blend with right side */}
            <div className="absolute inset-0 bg-linear-to-l from-black/40 via-transparent to-transparent" />

            {/* Optional text on image */}
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm opacity-80">Universitas Trilogi</p>
              <h2 className="text-2xl font-semibold">Kampus Modern & Inovatif</h2>
            </div>
          </div>
          <div className="flex flex-col justify-between px-28 py-18 h-[73vh] w-1/2">
            <div>
              <h2 className="text-6xl font-bold mb-2">Wujudkan Masa Depan Anda <span className="text-(--clr-primary)">Bersama Kami</span></h2>
              <p className="text-xl font-extralight">Temukan berbagai program studi, kembangkan potensi Anda, dan mulai perjalanan akademik di lingkungan yang inspiratif.</p>
            </div>

            <div className="flex flex-col gap-5">
              <Button variant="primary" className="w-full text-xl">
                Daftar Sekarang
              </Button>

              <div className="flex gap-5 text-lg font-semibold transition-all">
                <Button variant="secondary" className="w-1/2">
                  Informasi Pendaftaran
                </Button>

                <Button variant="secondary" className="w-1/2">
                  Dosen
                </Button>
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