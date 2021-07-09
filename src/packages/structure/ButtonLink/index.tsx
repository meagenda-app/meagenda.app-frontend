import Link from "next/link";
import React from "react";
import { ButtonLinkProps } from "./types";

const ButtonLink = React.forwardRef<ButtonLinkProps, any>(
  ({ href, as, prefetch, className, children, ...props }, ref) => (
    <Link href={href} prefetch={prefetch} passHref {...props}>
      <a className={className}>{children}</a>
    </Link>
  )
);

export default ButtonLink;
