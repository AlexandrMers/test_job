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
