import type { AnimationEventHandler, MouseEventHandler } from 'react';
import {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react';

import { useTheme } from '@emotion/react';

import Flex from '@/components/Flex';
import Icon from '@/components/Icon';
import Typography from '@/components/Typography';

import { styToaster } from './style';
import type { ToasterProps, ToasterRefType } from './types';

const Toaster = forwardRef<ToasterRefType, ToasterProps>((props, ref) => {
  const {
    autoClose,
    ctaLabel,
    icon,
    iconColor = 'GRAY500',
    message,
    onClose,
    onCtaClick,
    theme = 'light'
  } = props;
  const { color } = useTheme();
  const node = useRef<HTMLElement>(null);

  useImperativeHandle(
    ref,
    () => ({
      close: () => {
        if (node.current) node.current.setAttribute('data-animate', 'hide');
      }
    }),
    []
  );

  const handleHideToaster = useCallback(() => {
    if (node.current) node.current.setAttribute('data-animate', 'hide');
  }, []);

  const handleOnClickCTA: MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      e.preventDefault();

      if (onCtaClick) onCtaClick(e);
      handleHideToaster();
    },
    [handleHideToaster, onCtaClick]
  );

  const handleOnAnimationEnd: AnimationEventHandler<HTMLElement> = (e) => {
    const { currentTarget } = e;

    if (currentTarget.getAttribute('data-animate') === 'show') {
      currentTarget.removeAttribute('data-n-animate');
    } else if (onClose) {
      onClose(false);
    }
  };

  useEffect(() => {
    if (autoClose) {
      const timeout = setTimeout(() => {
        handleHideToaster();
      }, autoClose);
      return () => {
        clearTimeout(timeout);
      };
    }
    return;
  }, [autoClose, message, handleHideToaster]);

  useEffect(() => {
    if (node.current) node.current.setAttribute('data-animate', 'show');
  }, []);

  return (
    <section
      ref={node}
      className="animate"
      css={styToaster}
      onAnimationEnd={handleOnAnimationEnd}
    >
      <Flex
        className="toaster__container"
        gap={8}
        data-theme={theme}
        alignItems="center"
      >
        {icon && (
          <Flex.Item>
            <Icon icon={icon} color={color[iconColor]} size={20} />
          </Flex.Item>
        )}
        <Flex.Item>
          <Typography tag="p" modifier="text_body_base">
            {message}
          </Typography>
        </Flex.Item>
        {ctaLabel && (
          <Flex.Item>
            <button className="toaster__button" onClick={handleOnClickCTA}>
              <Typography
                tag="span"
                fontWeight="strong"
                modifier="text_body_base"
                color={color.BLUE500}
              >
                {ctaLabel}
              </Typography>
            </button>
          </Flex.Item>
        )}
      </Flex>
    </section>
  );
});

export default memo(Toaster);
