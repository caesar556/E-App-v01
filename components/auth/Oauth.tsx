import Image from "next/image";

export default function Oauth() {
  return (
    <div className="mt-3 mb-6 ">
      <button className="flex justify-center items-center mx-auto w-80   text-blue-600 bg-white py-2 rounded-full border border-solid border-zinc-200 ">
        <div className="flex gap-2.5">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a73199f1bb1d3ea89b40297fa0cb3c5a5d23d64a09d3c0065afa4619abb32ce?apiKey=597363a3080546f9b072bf59bebbfd17&"
            className="shrink-0 w-6 aspect-square"
            alt="Google Logo"
            width={24}
            height={24}
          />
          <div className="flex-auto my-auto">Continue with Google</div>
        </div>
      </button>
      <button className="flex justify-center items-center mx-auto w-80  mt-6 py-2 text-blue-600 bg-white rounded-full border border-solid border-zinc-200">
        <div className="flex gap-2.5">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3feb9724a7eb37edc68e698d2bf9cfdafff2e78a2d0733da73a89c1beed3d397?apiKey=597363a3080546f9b072bf59bebbfd17&"
            className="shrink-0 w-6 aspect-square"
            alt="Facebook Logo"
            width={24}
            height={24}
          />
          <div className="flex-auto my-auto">Continue with Facebook</div>
        </div>
      </button>
    </div>
  );
}
