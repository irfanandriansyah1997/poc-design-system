import type { HTMLAttributes, PropsWithChildren } from 'react';

import type { Property } from 'csstype';

import type { GenericCompoundComponentType } from '@/types/react';

type HTMLSectionProps = Omit<HTMLAttributes<HTMLElement>, 'style'>;

/////////////////////////////////////////////////////////////////////////////
// Flex Item Component Interface
/////////////////////////////////////////////////////////////////////////////

export interface FlexItemProps extends HTMLSectionProps {
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

export type FlexProps = Omit<HTMLSectionProps, keyof BaseFlexProps> &
  Partial<BaseFlexProps>;

export interface FlexFnType {
  (props: PropsWithChildren<FlexProps>): JSX.Element;
  Item: FlexItemFnType;
}
