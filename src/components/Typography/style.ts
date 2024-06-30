import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const styTypography = (props: Theme) => {
  const {
    fontFamily: { primary, secondary },
    fontWeight,
    typography: {
      text_body_base,
      text_body_sm,
      text_body_xs,
      text_heading_lg,
      text_heading_md,
      text_heading_sm,
      text_heading_xl,
      text_heading_xxl
    }
  } = props;

  return css`
    display: block;
    width: 100%;

    // Font Weight
    &[data-font-weight='strong'] {
      font-weight: ${fontWeight.strong};
    }

    &[data-font-weight='normal'] {
      font-weight: ${fontWeight.regular};
    }

    // Italic
    &[data-italic='true'] {
      font-style: italic;
    }

    &[data-font-weight='normal'] {
      font-weight: ${fontWeight.regular};
    }

    // Font Family

    &[data-font-family='primary'] {
      font-family: ${primary};
    }

    &[data-font-family='secondary'] {
      font-family: ${secondary || primary};
    }

    // Modifier Typography

    &[data-modifier='text_body_base'] {
      font-size: ${text_body_base.fontSize};
      line-height: ${text_body_base.lineHeight};
      letter-spacing: ${text_body_base.letterSpacing};
    }

    &[data-modifier='text_body_sm'] {
      font-size: ${text_body_sm.fontSize};
      line-height: ${text_body_sm.lineHeight};
      letter-spacing: ${text_body_sm.letterSpacing};
    }

    &[data-modifier='text_body_xs'] {
      font-size: ${text_body_xs.fontSize};
      line-height: ${text_body_xs.lineHeight};
      letter-spacing: ${text_body_xs.letterSpacing};
    }

    &[data-modifier='text_heading_lg'] {
      font-size: ${text_heading_lg.fontSize};
      line-height: ${text_heading_lg.lineHeight};
      letter-spacing: ${text_heading_lg.letterSpacing};
    }

    &[data-modifier='text_heading_md'] {
      font-size: ${text_heading_md.fontSize};
      line-height: ${text_heading_md.lineHeight};
      letter-spacing: ${text_heading_md.letterSpacing};
    }

    &[data-modifier='text_heading_sm'] {
      font-size: ${text_heading_sm.fontSize};
      line-height: ${text_heading_sm.lineHeight};
      letter-spacing: ${text_heading_sm.letterSpacing};
    }

    &[data-modifier='text_heading_xl'] {
      font-size: ${text_heading_xl.fontSize};
      line-height: ${text_heading_xl.lineHeight};
      letter-spacing: ${text_heading_xl.letterSpacing};
    }

    &[data-modifier='text_heading_xxl'] {
      font-size: ${text_heading_xxl.fontSize};
      line-height: ${text_heading_xxl.lineHeight};
      letter-spacing: ${text_heading_xxl.letterSpacing};
    }
  `;
};
