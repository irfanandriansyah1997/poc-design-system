import type { forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

import type { Property } from 'csstype';

import type {
  GenericCompoundComponentType,
  GenericHTMLProps
} from '@/types/react';

/////////////////////////////////////////////////////////////////////////////
// Flex Item Component Interface
/////////////////////////////////////////////////////////////////////////////

export interface FlexItemProps
  extends GenericHTMLProps<HTMLAttributes<HTMLElement>> {
  fullWidth?: boolean;
}

export type FlexItemFnType = GenericCompoundComponentType<
  {
    (props: PropsWithChildren<FlexItemProps>): JSX.Element;
  },
  'flex-item'
>;

/////////////////////////////////////////////////////////////////////////////
// Flex Component Interface
/////////////////////////////////////////////////////////////////////////////

interface BaseFlexProps {
  alignItems: Property.AlignItems;
  flexBasis: Property.FlexBasis<string | number>;
  flexDirection: Property.FlexDirection;
  flexGrow: number;
  flexShrink: number;
  flexWrap: Property.FlexWrap;
  gap: number;
  justifyContent: Property.JustifyContent;
}

export type FlexProps = Omit<
  GenericHTMLProps<HTMLAttributes<HTMLElement>>,
  keyof BaseFlexProps
> &
  Partial<BaseFlexProps>;

export type FlexFnType = ReturnType<
  typeof forwardRef<HTMLElement, PropsWithChildren<FlexProps>>
> & {
  Item: FlexItemFnType;
};
