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
    <div>
      {/* Arabic Text */}

      {/* English Translation */}
      <p className="text-blue-500">{ayah.text}</p>
      {/* English Transliteration */}
      <p className="text-blue-300 italic">{ayah.transliteration}</p>
      {/* Surah & Ayah */}
      <p className="text-red-300 italic">
        Surah {props.surah} <span>Ayah {props.ayah}</span>
      </p>
    </div>
  );
}

export default Ayah;
