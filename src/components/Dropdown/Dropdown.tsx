import type { PropsWithChildren } from 'react';
import {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react';

import { useModal } from '@/hooks/useModal';

import { noop } from '@/utils/noop';

import { styDropdown } from './style';

interface DropdownContentProps {
  /**
   * Function to be called when the dropdown content is closed.
   *
   * @param {boolean} isVisible - Indicates whether the dropdown is visible.
   */
  onClose: (isVisible: boolean) => void;
}

interface DropdownContentRefType {
  /**
   * Function to close the dropdown content.
   */
  close: () => void;
}

/**
 * DropdownContent component to render the content of the dropdown.
 *
 * @param {PropsWithChildren<DropdownContentProps>} props - The properties for the component.
 * @param {React.Ref<DropdownContentRefType>} ref - The reference to the component.
 *
 * @returns {JSX.Element} The rendered DropdownContent component.
 */
const DropdownContent = forwardRef<
  DropdownContentRefType,
  PropsWithChildren<DropdownContentProps>
>((props, ref) => {
  const { children } = props;
  const {
    actions: { onAnimationEnd, onClose },
    state: { show }
  } = useModal({
    onClose: props.onClose
  });

  useImperativeHandle(ref, () => {
    return {
      close: onClose
    };
  }, [onClose]);

  return (
    <>
      <section
        className="dropdown__menu animate"
        onAnimationEnd={onAnimationEnd}
        data-show={show}
      >
        {children}
      </section>
    </>
  );
});

interface DropdownToggleArgs {
  close: () => void;
  open: boolean;
}

interface DropdownProps {
  /**
   * The toggle element for the dropdown.
   */
  toggle: ((args: DropdownToggleArgs) => JSX.Element) | JSX.Element;
}

/**
 * Dropdown component to render a dropdown menu with a toggle button.
 *
 * @param {PropsWithChildren<DropdownProps>} props - The properties for the component.
 *
 * @returns {JSX.Element} The rendered Dropdown component.
 */
const Dropdown = (props: PropsWithChildren<DropdownProps>) => {
  const { children, toggle } = props;
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const dropdownContentRef = useRef<DropdownContentRefType>(null);

  const handleToggleDropdown = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleTriggerCloseDropdown = useCallback(() => {
    if (dropdownContentRef.current) dropdownContentRef.current.close();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        handleTriggerCloseDropdown();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleTriggerCloseDropdown, isOpen]);

  return (
    <section ref={ref} css={styDropdown}>
      <section
        role="button"
        tabIndex={0}
        onKeyDown={noop}
        onClick={handleToggleDropdown}
        className="dropdown__toggle"
      >
        {typeof toggle === 'function'
          ? toggle({
              close: handleTriggerCloseDropdown,
              open: isOpen
            })
          : toggle}
      </section>

      {isOpen && (
        <DropdownContent ref={dropdownContentRef} onClose={setIsOpen}>
          {children}
        </DropdownContent>
      )}
    </section>
  );
};

export default memo(Dropdown);
