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

import { stySnackbar } from './style';
import type { SnackbarProps, SnackbarRefType } from './types';

const _Snackbar = forwardRef<SnackbarRefType, SnackbarProps>((props, ref) => {
  const {
    autoClose = 5000,
    ctaLabel,
    icon,
    iconColor = 'GRAY500',
    message,
    onClose,
    onCtaClick,
    theme = 'light'
  } = props;
  const {
    color,
    components: {
      'snackbar-cta-modifier': cta = 'text_body_base',
      'snackbar-text-modifier': text = 'text_body_base'
    }
  } = useTheme();
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

  const handleOnClickClose: MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      e.preventDefault();

      handleHideToaster();
    },
    [handleHideToaster]
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
      css={stySnackbar}
      onAnimationEnd={handleOnAnimationEnd}
    >
      <Flex
        className="snackbar__container"
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
          <Typography
            tag="p"
            modifier={text}
            className="snackbar__text"
            color={theme === 'dark' ? color.WHITE : color.GRAY900}
          >
            {message}
          </Typography>
        </Flex.Item>

        <Flex.Item>
          <Flex gap={4} alignItems="center">
            {ctaLabel && (
              <Flex.Item>
                <button className="snackbar__button" onClick={handleOnClickCTA}>
                  <Typography
                    tag="span"
                    fontWeight="strong"
                    modifier={cta}
                    color={theme === 'dark' ? color.WHITE : color.GRAY500}
                  >
                    {ctaLabel}
                  </Typography>
                </button>
              </Flex.Item>
            )}

            <Flex.Item>
              <button className="snackbar__close" onClick={handleOnClickClose}>
                <Icon
                  icon="close"
                  size={16}
                  color={theme === 'dark' ? color.WHITE : color.GRAY500}
                />
              </button>
            </Flex.Item>
          </Flex>
        </Flex.Item>
      </Flex>
    </section>
  );
});

const Snackbar = memo(_Snackbar);

Snackbar.displayName = 'Snackbar';

export default Snackbar;
