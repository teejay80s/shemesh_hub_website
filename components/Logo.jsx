import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="">
      <Image src="/assets/shemesh_big.png" alt="logo" width={230} height={70} />
    </Link>
  );
};

export default Logo;
