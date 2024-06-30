import { type PropsWithChildren, useMemo } from 'react';

import type { TypographyModifier } from '@emotion/react';
import { useTheme } from '@emotion/react';

import Flex from '@/components/Flex';
import Typography from '@/components/Typography';
import type { TypographyProps } from '@/components/Typography/types';

import { GRAY400, GRAY500, GRAY700 } from '@/constants/theme';

interface TypographyTemplateProps extends TypographyProps<HTMLElement> {
  notes?: string;
}

const TypographyTemplate = (
  props: PropsWithChildren<TypographyTemplateProps>
) => {
  const {
    children,
    fontWeight = 'regular',
    italic = false,
    modifier = 'text_body_base',
    notes,
    ...res
  } = props;
  const { typography } = useTheme();
  const { fontSize, letterSpacing, lineHeight } = typography[modifier];

  const items = useMemo(() => {
    return [
      { key: 'Modifier', value: modifier },
      { key: 'Font size', value: fontSize },
      { key: 'Font weight', value: fontWeight },
      { key: 'Italic', value: italic },
      { key: 'Line height', value: lineHeight },
      { key: 'Letter spacing', value: letterSpacing }
    ];
  }, [fontSize, fontWeight, italic, letterSpacing, lineHeight, modifier]);

  return (
    <section style={{ margin: '24px 0 0' }}>
      <Typography
        {...res}
        fontWeight={fontWeight}
        italic={italic}
        modifier={modifier}
        color={GRAY700}
      >
        {children}
      </Typography>

      <Flex gap={12}>
        {items.map((item) => {
          return (
            <Flex.Item key={item.key}>
              <Typography modifier="text_body_sm" color={GRAY500}>
                {item.key}: <strong>{item.value}</strong>
              </Typography>
            </Flex.Item>
          );
        })}
      </Flex>
      {notes && (
        <Typography modifier="text_body_xs" color={GRAY400} margin="8px 0 0">
          {notes}
        </Typography>
      )}
    </section>
  );
};

interface TypographySectionExampleProps {
  modifiers: Array<{
    modifier: keyof TypographyModifier;
    notes?: string;
  }>;
  title: string;
}

const TypographySectionExample = (
  props: PropsWithChildren<TypographySectionExampleProps>
) => {
  const { children, modifiers, title } = props;
  return (
    <section>
      <Typography
        modifier="text_heading_sm"
        color={GRAY700}
        fontWeight="strong"
        margin="8px 0 0"
      >
        {title} Modifier
      </Typography>

      {modifiers.map((item) => {
        return (
          <TypographyTemplate
            key={item.modifier}
            modifier={item.modifier}
            fontWeight="strong"
            notes={item.notes}
          >
            {children}
          </TypographyTemplate>
        );
      })}
    </section>
  );
};

export default TypographySectionExample;
