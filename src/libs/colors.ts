import { identity, memoizeWith } from "ramda";
import { IdentityType } from "../types";

export const colors = {
  greyLight: "#f0f0f0",
  greyLight2: "#cccccc",
  greyDarken1: "#a4a4a4",
  colorWhite: "#ffffff",
  colorBlack: "#000000",
  green: "#5db675",
  blue: "#589cf4",
  red: "red"
};

export const getColor = memoizeWith(
  identity as IdentityType<keyof typeof colors>,
  (color: keyof typeof colors) => colors[color]
);
