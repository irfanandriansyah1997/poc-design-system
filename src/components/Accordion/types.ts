import type { ReactNode } from 'react';

export interface AccordionStylingType {
  gapContent?: string | number;
  iconSize?: number;
  paddingHorizontal?: string | number;
  paddingVertical?: string | number;
}

export interface AccordionProps {
  className?: string;
  defaultExpanded?: boolean;
  disabled?: boolean;
  expanded?: boolean;
  onClick?: (expanded: boolean) => void;
  showExpandIcon?: boolean;
  styling?: AccordionStylingType;
  title: ReactNode;
}
