import { identity, memoizeWith } from "ramda";
import { IdentityType } from "../types";

export const colors = {
  greyLight: "#f0f0f0",
  greyDarken1: "#a4a4a4"
};

export const getColor = memoizeWith(
  identity as IdentityType<keyof typeof colors>,
  (color: keyof typeof colors) => colors[color]
);
