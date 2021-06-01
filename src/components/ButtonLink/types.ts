import { ButtonProps } from "@material-ui/core/Button";
import { LinkProps } from "next/link";

export type ButtonLinkProps = Omit<ButtonProps, "href" | "classes"> &
  Pick<LinkProps, "href" | "as" | "prefetch">;
