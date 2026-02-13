import { getImagePrefix } from "@/utils/util";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src={`${getImagePrefix()}images/logo/logo.jpeg`}
        alt="Afriikanet - ISP Billing Solutions"
        width={140}
        height={45}
        className="h-10 w-auto object-contain"
        priority
        unoptimized
      />
    </Link>
  );
};

export default Logo;
