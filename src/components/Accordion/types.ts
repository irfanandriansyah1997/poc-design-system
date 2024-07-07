import type { ReactNode } from 'react';

export interface AccordionStylingType {
  /**
   * The gap between the content sections in the accordion.
   * Can be a string or a number.
   */
  gapContent?: string | number;

  /**
   * The size of the icon used in the accordion.
   */
  iconSize?: number;

  /**
   * The horizontal padding of the accordion.
   * Can be a string or a number.
   */
  paddingHorizontal?: string | number;

  /**
   * The vertical padding of the accordion.
   * Can be a string or a number.
   */
  paddingVertical?: string | number;
}

export interface AccordionProps {
  /**
   * Additional CSS class names to apply to the accordion.
   */
  className?: string;

  /**
   * Whether the accordion is expanded by default.
   */
  defaultExpanded?: boolean;

  /**
   * Whether the accordion is disabled.
   */
  disabled?: boolean;

  /**
   * Whether the accordion is currently expanded.
   */
  expanded?: boolean;

  /**
   * Callback function to handle click events.
   */
  onClick?: (expanded: boolean) => void;

  /**
   * Whether to show the expand icon.
   */
  showExpandIcon?: boolean;

  /**
   * Custom styling options for the accordion.
   */
  styling?: AccordionStylingType;

  /**
   * The title of the accordion, which can be a ReactNode.
   */
  title: ReactNode;
}
