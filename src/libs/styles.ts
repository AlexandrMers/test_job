import { identity, memoizeWith } from "ramda";
import { css } from "styled-components/macro";
import { IdentityType } from "../types";

type cssValuesBlock = "none" | "inline" | "block" | "inline-block";

export const display = memoizeWith(
  identity as IdentityType<cssValuesBlock>,
  (value: cssValuesBlock) =>
    css`
      display: ${value};
    `
);
