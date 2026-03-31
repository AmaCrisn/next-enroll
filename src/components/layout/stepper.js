"use client";

export default function stepper({ currentStep = 1 }) {
  const steps = [
    "Pembuatan Akun",
    "Biodata",
    "Pilihan Akademik",
    "Pengumpulan Berkas",
    "Selesai",
  ];

  return (
    <div className="relative grid grid-cols-5 gap-4">

      <div className="absolute top-6 left-18 right-18 -translate-y-1/2">

        {/* Base line */}
        <div className="w-full h-3 bg-gray-300 rounded-full" />

        {/* Progress line */}
        <div
          className="h-3 bg-(--clr-bg-secondary) rounded-full transition-all duration-500 absolute top-0 left-0"
          style={{
            width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
          }}
        />
      </div>

      {/* Steps */}
      {steps.map((label, index) => {
        const step = index + 1;
        const isActive = step <= currentStep;

        return (
          <div key={step} className="flex flex-col items-center z-10">
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full font-bold
          ${isActive ? "bg-(--clr-bg-secondary) text-white" : "bg-gray-300 text-black"}`}
            >
              {step}
            </div>

            {/* Label */}
            <p className={`mt-2 text-md text-center text-(--clr-txt-primary) ${isActive ? "font-bold" : "font-light"}`}>
              {label}
            </p>
          </div>
        );
      })}
    </div>
  );
}