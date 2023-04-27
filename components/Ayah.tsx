import { AYAHS } from "@/constants/ayahs";

interface AyahProps {
  surah: number;
  ayah: number;
}

export function Ayah(props: AyahProps) {
  const ayah = AYAHS.find(
    (a) => a.surah === props.surah && a.number === props.ayah
  );
  if (!ayah) return null;

  return (
    <div className="flex items-center justify-center px-5 py-5">
      <div className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800 max-w-lg">
        <div className="w-full mb-10">
          <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
            “
          </div>
          <p className="text-sm text-gray-600 text-center px-5">{ayah.text}</p>
          <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
            ”
          </div>
        </div>
        {/* TODO: arabic - add arabic text */}
        <p className="text-xs text-gray-500 text-center">
          {ayah.transliteration}
        </p>

        <div className="w-full">
          <p className="text-md text-indigo-500 font-bold text-center">
            Surah {props.surah} Ayah {props.ayah}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Ayah;
