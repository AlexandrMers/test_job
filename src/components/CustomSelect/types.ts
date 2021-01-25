export interface SuggestInterface {
  title: string;
  code: string;
}

export interface DropdowItemInterface {
  onClick: () => void;
  hoverable?: boolean;
}

export interface DropdownListPropsInterface {
  items: SuggestInterface[];
  onSelect: (item: SuggestInterface) => void;
  bottomPosition: number;
}

export interface CustomSelectComponentPropsInterface {
  onSelect: (item: SuggestInterface) => void;
  items: SuggestInterface[];
  selectedItem: SuggestInterface["code"] | null;
}
