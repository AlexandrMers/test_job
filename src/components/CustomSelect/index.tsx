import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import "styled-components/macro";

import { color, display, fullWidth, position, selectNone } from "libs/styles";
import { getColor } from "libs/colors";

import Block from "primitives/Block";
import Typography from "primitives/Typography";
import { TypographyTypes } from "primitives/Typography/types";
import ClickOutside from "primitives/ClickOutside";

import {
  CustomSelectComponentPropsInterface,
  DropdownListPropsInterface,
  SuggestInterface
} from "./types";

import { DropdownItem, DropdownListWrapper, SelectTopSign } from "./styled";

const DropdownList = ({
  bottomPosition,
  items,
  onSelect
}: DropdownListPropsInterface) => {
  return (
    <DropdownListWrapper bottomPosition={bottomPosition}>
      {items.map((item) => (
        <DropdownItem key={item.code} onClick={() => onSelect(item)} hoverable>
          {item.title}
        </DropdownItem>
      ))}
    </DropdownListWrapper>
  );
};

const CustomSelect: FC<CustomSelectComponentPropsInterface> = ({
  onSelect: onSelectProp,
  items,
  selectedItem: selectedItemProp
}) => {
  const [isShowLists, setIsShowList] = useState(false);
  const [selectedItem, setSelectedItem] = useState<SuggestInterface | null>(
    selectedItemProp
  );

  const itemElementRef = useRef<HTMLDivElement>(null);
  const clientHeightElement = useRef(0);

  useEffect(() => {
    const element = itemElementRef.current;
    if (!element) {
      return;
    }

    clientHeightElement.current = element.clientHeight;
  }, []);

  const toggleShow = useCallback((isClose?: boolean) => {
    if (isClose) {
      return setIsShowList(false);
    }
    setIsShowList((prevShow) => !prevShow);
  }, []);

  const onSelect = useCallback(
    (item: SuggestInterface) => {
      setSelectedItem((prevState) =>
        prevState?.code !== item.code ? item : prevState
      );
      onSelectProp(item);
      setIsShowList(false);
    },
    [onSelectProp]
  );

  return (
    <ClickOutside handleClickOut={() => toggleShow(true)}>
      <Block styles={[fullWidth, selectNone, position("relative")]}>
        <DropdownItem onClick={() => toggleShow()} ref={itemElementRef}>
          <SelectTopSign css={isShowLists ? color(getColor("green")) : null}>
            Пол
          </SelectTopSign>
          <Typography type={TypographyTypes.REGULAR} styles={display("block")}>
            {selectedItem ? selectedItem.title : "Не выбрано"}
          </Typography>
        </DropdownItem>

        {isShowLists && (
          <DropdownList
            bottomPosition={clientHeightElement.current}
            onSelect={onSelect}
            items={items}
          />
        )}
      </Block>
    </ClickOutside>
  );
};

export default React.memo(CustomSelect);
