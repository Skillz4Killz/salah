interface HadithProps {
    text: string;
    number: number;
    book: string;
}

export function Hadith(props: HadithProps) {
  return (
    <div className="flex items-center justify-center px-5 py-5">
      <div className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800 max-w-lg">
        <div className="w-full mb-10">
          <div className="text-3xl text-cyan-500 text-left leading-tight h-3">
            “
          </div>
          <p className="text-sm text-gray-600 text-center px-5">{props.text}</p>
          <div className="text-3xl text-cyan-500 text-right leading-tight h-3 -mt-3">
            ”
          </div>
        </div>
        {/* TODO: arabic - add arabic text */}

        <div className="w-full">
          <p className="text-md text-cyan-500 font-bold text-center">
            {props.book} Hadith #{props.number.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hadith;
