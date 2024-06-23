import type { forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

import type { GenericCompoundComponentType } from '@/types/react';

type HTMLGridProps = Omit<HTMLAttributes<HTMLElement>, 'style'>;

export interface GridProps extends HTMLGridProps {
  gap: number | [number, number];
}

export type GridSizePresetsType =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;

export interface GridItemProps extends HTMLGridProps {
  col: GridSizePresetsType;
  lg?: GridSizePresetsType;
  md?: GridSizePresetsType;
  sm?: GridSizePresetsType;
  xl?: GridSizePresetsType;
  xs?: GridSizePresetsType;
}

export type GridItemFnType = GenericCompoundComponentType<
  {
    (props: PropsWithChildren<GridItemProps>): JSX.Element;
  },
  'grid-item'
>;

export type GridFnType = ReturnType<
  typeof forwardRef<HTMLElement, PropsWithChildren<GridProps>>
> & {
  Item: GridItemFnType;
};
