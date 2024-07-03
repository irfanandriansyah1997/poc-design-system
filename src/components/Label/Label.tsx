import type { HTMLAttributes, ReactNode } from 'react';
import { isValidElement, useMemo } from 'react';

import { useTheme } from '@emotion/react';

import Icon from '@/components/Icon';
import Typography from '@/components/Typography';

import type { FithubIconType } from '@/types/icon';
import type { GenericHTMLProps } from '@/types/react';

import { styLabel } from './style';

type LabelSizeType = 'default' | 'small';

/////////////////////////////////////////////////////////////////////////////
// Label Additional Element
/////////////////////////////////////////////////////////////////////////////

interface LabelAdditionalElementProps {
  color: string;
  element?: ReactNode;
  icon?: FithubIconType;
}

const LabelAdditionalElement = (props: LabelAdditionalElementProps) => {
  const { color, element, icon } = props;

  if (isValidElement(element)) return element;

  if (icon) return <Icon icon={icon} color={color} size={16} />;

  return null;
};

/////////////////////////////////////////////////////////////////////////////
// Label Container
/////////////////////////////////////////////////////////////////////////////

interface LabelProps extends GenericHTMLProps<HTMLAttributes<HTMLElement>> {
  /**
   * The background color of the label
   */
  labelColor: string;
  /**
   * The custom element to render as a prefix
   */
  preffixElement?: ReactNode;
  /**
   * The icon to render as a prefix
   */
  preffixIcon?: FithubIconType;
  /**
   * The size of the label, default or small
   */
  size?: LabelSizeType;
  /**
   * The custom element to render as a suffix
   */
  suffixElement?: ReactNode;
  /**
   * The icon to render as a suffix
   */
  suffixIcon?: FithubIconType;
  /**
   * The text to display within the label
   */
  text?: string;
  /**
   * The color of the text
   */
  textColor: string;
}

const Label = (props: LabelProps) => {
  const {
    labelColor,
    preffixElement,
    preffixIcon,
    size = 'default',
    suffixElement,
    suffixIcon,
    text,
    textColor,
    ...res
  } = props;
  const {
    components: {
      'label-text-md-modifier': mdModifier = 'text_body_base',
      'label-text-sm-modifier': smModifier = 'text_body_sm'
    }
  } = useTheme();

  const cssStyle = useMemo(() => {
    const isSuffixAvailable = Boolean(suffixElement || suffixIcon);
    const isPreffixAvailable = Boolean(preffixElement || preffixIcon);

    const MARGIN_PRESETS: Record<LabelSizeType, string> = {
      default: '8px',
      small: '4px'
    };

    if (isPreffixAvailable && isSuffixAvailable) {
      return { margin: `0 ${MARGIN_PRESETS[size]} 0` };
    }

    if (isPreffixAvailable) {
      return { margin: `0 0 0 ${MARGIN_PRESETS[size]}` };
    }

    if (isSuffixAvailable) {
      return { margin: `0 ${MARGIN_PRESETS[size]} 0 0` };
    }

    return {
      margin: '0'
    };
  }, [preffixElement, preffixIcon, size, suffixElement, suffixIcon]);

  return (
    <section
      css={styLabel}
      {...res}
      data-size={size}
      data-preffix={Boolean(preffixElement || preffixIcon)}
      data-suffix={Boolean(suffixElement || suffixIcon)}
      style={{ backgroundColor: labelColor }}
    >
      <LabelAdditionalElement
        element={preffixElement}
        icon={preffixIcon}
        color={textColor}
      />

      <Typography
        className="label__text"
        modifier={size === 'default' ? mdModifier : smModifier}
        css={cssStyle}
        color={textColor}
        fontWeight="strong"
      >
        {text}
      </Typography>

      <LabelAdditionalElement
        element={suffixElement}
        icon={suffixIcon}
        color={textColor}
      />
    </section>
  );
};

export default Label;
