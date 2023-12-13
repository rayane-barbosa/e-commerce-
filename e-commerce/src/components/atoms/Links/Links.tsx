import Link from "next/link";
import React from "react";

export type LinksProps = {
  to: string;
  text: string;
};

const Links: React.FC<LinksProps> = ({ to, text }) => {
  return <Link href={to}>{text}</Link>;
};

export default Links;
