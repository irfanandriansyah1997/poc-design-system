import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const styTypography = (props: Theme) => {
  const {
    fontFamily: { primary, secondary },
    fontWeight,
    typography: {
      bodyBase,
      bodySM,
      bodyXS,
      headingLG,
      headingMD,
      headingSM,
      headingXL,
      headingXXL
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

    &[data-modifier='bodyBase'] {
      font-size: ${bodyBase.fontSize};
      line-height: ${bodyBase.lineHeight};
      letter-spacing: ${bodyBase.letterSpacing};
    }

    &[data-modifier='bodySM'] {
      font-size: ${bodySM.fontSize};
      line-height: ${bodySM.lineHeight};
      letter-spacing: ${bodySM.letterSpacing};
    }

    &[data-modifier='bodyXS'] {
      font-size: ${bodyXS.fontSize};
      line-height: ${bodyXS.lineHeight};
      letter-spacing: ${bodyXS.letterSpacing};
    }

    &[data-modifier='headingLG'] {
      font-size: ${headingLG.fontSize};
      line-height: ${headingLG.lineHeight};
      letter-spacing: ${headingLG.letterSpacing};
    }

    &[data-modifier='headingMD'] {
      font-size: ${headingMD.fontSize};
      line-height: ${headingMD.lineHeight};
      letter-spacing: ${headingMD.letterSpacing};
    }

    &[data-modifier='headingSM'] {
      font-size: ${headingSM.fontSize};
      line-height: ${headingSM.lineHeight};
      letter-spacing: ${headingSM.letterSpacing};
    }

    &[data-modifier='headingXL'] {
      font-size: ${headingXL.fontSize};
      line-height: ${headingXL.lineHeight};
      letter-spacing: ${headingXL.letterSpacing};
    }

    &[data-modifier='headingXXL'] {
      font-size: ${headingXXL.fontSize};
      line-height: ${headingXXL.lineHeight};
      letter-spacing: ${headingXXL.letterSpacing};
    }
  `;
};
