export interface ItemProp {
  item: {
    id: string;
    name: string;
    price: string;
  };
}

export interface SectionDataProps {
  item: {
    name: string;
    price: string;
  };
}

export interface SectionListProps {
  title: string;
  data: string[];
}
export interface TitleProps {
  title: string;
}