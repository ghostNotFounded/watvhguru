import Link from "next/link";

interface TitleProps {
  size: string;
  size_sub: string;
}

const Title = ({ size, size_sub }: TitleProps) => {
  return (
    <Link
      href="/home"
      className={`text-white font-bold hover:text-[#ade8f4] duration-300 ease-in select-none ${size}`}
    >
      <span style={{ color: "#0096c7" }}>w</span>
      <span style={{ color: "#00b4d8" }}>a</span>
      <span style={{ color: "#48cae4" }}>t</span>
      <span style={{ color: "#90e0ef" }}>c</span>
      <span style={{ color: "#ade8f4" }}>h</span>
      <span>guru</span>
      <span className={size_sub}>.TS</span>
    </Link>
  );
};

export default Title;
