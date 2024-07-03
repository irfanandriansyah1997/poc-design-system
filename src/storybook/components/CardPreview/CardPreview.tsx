import { type PropsWithChildren, useCallback } from 'react';

import { useTheme } from '@emotion/react';

import Card from '@/components/Card';
import Flex from '@/components/Flex';
import Icon from '@/components/Icon';
import Snackbar from '@/components/Snackbar';
import Typography from '@/components/Typography';

import { styCardPreview } from './style';

interface CardPreviewProps {
  label: string;
  sourceCode: string;
}

const CardPreview = (props: PropsWithChildren<CardPreviewProps>) => {
  const { children, label, sourceCode } = props;
  const {
    color: { FITSKY500, GRAY500 }
  } = useTheme();
  const { open } = Snackbar.useSnackbar();

  const handleOnClick = useCallback(() => {
    navigator.clipboard
      .writeText(sourceCode)
      .then(() => {
        open({
          autoClose: 1000,
          icon: 'task-check-line',
          iconColor: 'GREEN500',
          message: 'Success copied source code!'
        });
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  }, [open, sourceCode]);

  return (
    <>
      <Card
        css={styCardPreview}
        shadowOnInteract="md"
        padding="0"
        onClick={handleOnClick}
      >
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Flex.Item fullWidth={false} className="card-preview__overview">
            {children}

            <Icon
              size={20}
              icon="copy-content"
              color={FITSKY500}
              className="card-preview__icon-btn"
            />
          </Flex.Item>
          <Flex.Item className="card-preview__description">
            <Typography ellipsis color={GRAY500}>
              {label}
            </Typography>
          </Flex.Item>
        </Flex>
      </Card>
    </>
  );
};

export default CardPreview;
