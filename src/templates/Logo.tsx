import Image from 'next/image';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (_props: ILogoProps) => {
  // const size = props.xl ? '44' : '32';
  // const fontStyle = props.xl
  //   ? 'font-semibold text-3xl'
  //   : 'font-semibold text-xl';

  return (
    <Image
      src="/assets/images/logo-large.png"
      alt="For the Artists logo"
      width={300}
      height={110}
    />
  );
};

export { Logo };
