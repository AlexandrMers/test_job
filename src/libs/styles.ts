import { identity, memoizeWith } from "ramda";
import { css } from "styled-components/macro";
import { IdentityType } from "../types";
import { getColor } from "./colors";

type cssValuesBlock = "none" | "inline" | "block" | "inline-block";

export const inputDecoratedStyles = css`
  background-color: ${getColor("greyLight")};
  width: 100%;
  display: block;
  padding: 15px;
  border-radius: 3px;
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
  line-height: 16px;
  font-weight: 400;
  color: ${getColor("colorBlack")};
`;

export const display = memoizeWith(
  identity as IdentityType<cssValuesBlock>,
  (value: cssValuesBlock) =>
    css`
      display: ${value};
    `
);

export const fontSize = memoizeWith(
  identity as IdentityType<any>,
  (value: number) =>
    css`
      font-size: ${value}px;
    `
);

export const fontWeight = memoizeWith(
  identity as IdentityType<any>,
  (value: number) =>
    css`
      font-weight: ${value};
    `
);

export const lineHeight = memoizeWith(
  identity as IdentityType<any>,
  (value: number) =>
    css`
      line-height: ${value}px;
    `
);

export const marginBottom = memoizeWith(
  identity as IdentityType<any>,
  (value: number) =>
    css`
      margin-bottom: ${value}px;
    `
);

export const marginTop = memoizeWith(
  identity as IdentityType<any>,
  (value: number) =>
    css`
      margin-top: ${value}px;
    `
);

export const fullWidth = css`
  width: 100%;
`;

export const width = memoizeWith(
  identity as IdentityType<string>,
  (value: string) =>
    css`
      width: ${value};
    `
);

export const maxWidth = memoizeWith(
  identity as IdentityType<string>,
  (value: string) =>
    css`
      max-width: ${value};
    `
);

export const padding = memoizeWith(
  identity as IdentityType<string>,
  (value: string) =>
    css`
      padding: ${value};
    `
);

export const pointer = css`
  cursor: pointer;
`;

export const selectNone = css`
  user-select: none;
`;
