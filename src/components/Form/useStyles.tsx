import React, { useMemo } from "react";
import { marginBottom, marginLeft, width } from "../../libs/styles";

export const useStyles = ({
  marginBottomValue,
  marginLeftValue,
  widthCalcValue
}: {
  marginBottomValue: number;
  marginLeftValue: number;
  widthCalcValue: string;
}): {
  marginBottom: any;
  width: any;
  marginLeft: any;
} => {
  const marginBottomStyles = useMemo(() => {
    return marginBottom(marginBottomValue);
  }, [marginBottomValue]);

  const widthStyles = useMemo(() => {
    return width(widthCalcValue);
  }, [widthCalcValue]);

  const marginLeftStyles = useMemo(() => {
    return marginLeft(marginLeftValue);
  }, [marginLeftValue]);

  return {
    marginBottom: marginBottomStyles,
    width: widthStyles,
    marginLeft: marginLeftStyles
  };
};
