// import Image from 'next/image';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (_props: ILogoProps) => {
  // const size = props.xl ? '44' : '32';
  // const fontStyle = props.xl
  //   ? 'font-semibold text-3xl'
  //   : 'font-semibold text-xl';

  return (
    <>
      <div className="relative my-10">
        <div
          className="text-primary-500 text-4xl font-serif font-black
          px-5 py-3 border-purple-400 border border-solid
          after:content-['Artist_Advisory'] after:text-base after:font-mono after:font-thin after:tracking-widest
          after:absolute after:inset-x-0 after:-bottom-3 after:m-auto after:text-center after:justify-center
          after:inline-block after:w-3/5 after:bg-gray-50"
        >
          For The Artists
        </div>
      </div>
    </>
  );
};

// <Image
//   src="/assets/images/logo-large.png"
//   alt="For the Artists logo"
//   width={300}
//   height={110}
// />

export { Logo };
