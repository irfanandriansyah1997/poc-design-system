import type { ChangeEventHandler, MouseEventHandler } from 'react';
import {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react';

import type { FormGroupItemKind } from '@/components/FormGroup/types';
import Icon from '@/components/Icon';
import Input from '@/components/shared/Input';
import useDebounce from '@/hooks/useDebounce';

import { noop } from '@/utils/noop';

import { styTextfield } from './style';
import TextfieldAddOn from './TextfieldAddOn';
import type { TextfieldProps } from './types';

interface PrivateTextfieldProps extends TextfieldProps {
  formGroupKind?: FormGroupItemKind;
}

const _Textfield = forwardRef<HTMLInputElement, PrivateTextfieldProps>(
  (props, ref) => {
    const {
      addOnPreffixColor,
      addOnPreffixIcon,
      addOnPreffixIconSize = 16,
      addOnPreffixText,
      addOnSuffixColor,
      addOnSuffixIcon,
      addOnSuffixIconSize = 16,
      addOnSuffixText,
      disabled = false,
      disabledDebounce = false,
      enableClear,
      error = false,
      formGroupKind,
      helper,
      label,
      maxLength,
      onChange = noop,
      onClickAddOnPreffix,
      onClickAddOnSuffix,
      onClickPreffix,
      onClickSuffix,
      optional,
      preffixColor,
      preffixIcon,
      preffixIconSize = 16,
      preffixText,
      required = false,
      showCounter,
      sizes = 'lg',
      suffixColor,
      suffixIcon,
      suffixIconSize = 16,
      suffixText,
      value: propsValue = '',
      ...res
    } = props;
    const [value = '', setValue] = useDebounce<string>(
      propsValue,
      onChange,
      disabledDebounce ? 0 : 500
    );
    const containerRef = useRef<HTMLElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => {
      return inputRef.current as HTMLInputElement;
    });

    const handleOnChange: ChangeEventHandler<HTMLInputElement> = useCallback(
      (e) => {
        e.preventDefault();
        setValue(e.target.value);
      },
      [setValue]
    );

    const handleOnClickContainer: MouseEventHandler<HTMLElement> =
      useCallback(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, []);

    const handleOnClickClearBtn: MouseEventHandler<HTMLSpanElement> =
      useCallback(
        (e) => {
          e.preventDefault();
          setValue('');
        },
        [setValue]
      );

    useEffect(() => {
      const handleOnFocus = () => {
        if (containerRef.current) {
          containerRef.current.setAttribute('data-focus', 'true');
        }
      };

      const handleOnBlur = () => {
        if (containerRef.current) {
          containerRef.current.removeAttribute('data-focus');
        }
      };

      const handleOnMouseOver = () => {
        if (containerRef.current) {
          containerRef.current.setAttribute('data-hover', 'true');
        }
      };

      const handleOnMouseOut = () => {
        if (containerRef.current) {
          containerRef.current.removeAttribute('data-hover');
        }
      };

      if (!disabled) {
        if (inputRef.current) {
          // INFO: Handle Focus State
          inputRef.current.addEventListener('focus', handleOnFocus);
          inputRef.current.addEventListener('blur', handleOnBlur);

          // INFO: Handle Hover State
          inputRef.current.addEventListener('mouseover', handleOnMouseOver);
          inputRef.current.addEventListener('mouseout', handleOnMouseOut);
        }

        if (containerRef.current) {
          // INFO: Handle Hover State
          containerRef.current.addEventListener('mouseover', handleOnMouseOver);
          containerRef.current.addEventListener('mouseout', handleOnMouseOut);
        }

        return () => {
          if (inputRef.current) {
            // INFO: Handle Focus State
            inputRef.current.removeEventListener('focus', handleOnFocus);
            inputRef.current.removeEventListener('blur', handleOnBlur);

            // INFO: Handle Hover State
            inputRef.current.removeEventListener(
              'mouseover',
              handleOnMouseOver
            );
            // INFO: disable eslint since inputRef is not mutating
            // eslint-disable-next-line react-hooks/exhaustive-deps
            inputRef.current.removeEventListener('mouseout', handleOnMouseOut);
          }

          if (containerRef.current) {
            // INFO: Handle Hover State
            containerRef.current.addEventListener(
              'mouseover',
              handleOnMouseOver
            );
            // INFO: disable eslint since containerRef is not mutating
            // eslint-disable-next-line react-hooks/exhaustive-deps
            containerRef.current.addEventListener('mouseout', handleOnMouseOut);
          }
        };
      }

      if (containerRef.current && disabled) {
        containerRef.current.removeAttribute('data-hover');
        containerRef.current.removeAttribute('data-focus');
      }
    }, [disabled]);

    return (
      <Input
        css={styTextfield}
        role="button"
        tabIndex={0}
        onKeyDown={noop}
        onClick={handleOnClickContainer}
      >
        {/* INFO: Textfield Label Section */}

        {label && (
          <Input.Label label={label} optional={optional} required={required} />
        )}

        {/* INFO: Textfield Content Section */}

        <Input.Content
          className="textfield__container"
          data-size={sizes}
          data-form-group-kind={formGroupKind}
        >
          {(addOnPreffixText || addOnPreffixIcon) && (
            <TextfieldAddOn
              className="textfield__addon textfield__item"
              position="preffix"
              sizes={sizes}
              icon={addOnPreffixIcon}
              iconSize={addOnPreffixIconSize}
              text={addOnPreffixText}
              color={addOnPreffixColor}
              onClick={onClickAddOnPreffix}
            />
          )}

          <section
            ref={containerRef}
            className="textfield__input textfield__item"
            data-error={error && !disabled}
            data-disabled={disabled}
          >
            {(preffixText || preffixIcon) && (
              <TextfieldAddOn
                className="textfield__preffix"
                position="preffix"
                sizes={sizes}
                icon={preffixIcon}
                iconSize={preffixIconSize}
                text={preffixText}
                color={preffixColor}
                onClick={onClickPreffix}
              />
            )}

            <input
              {...res}
              ref={inputRef}
              disabled={disabled}
              maxLength={maxLength}
              onChange={handleOnChange}
              required={required}
              value={value}
            />

            {enableClear && value.length > 0 && (
              <Icon
                className="textfield__clear-btn"
                icon="close-circle"
                size={16}
                tabIndex={0}
                role="button"
                onKeyDown={noop}
                onClick={handleOnClickClearBtn}
              />
            )}

            {showCounter && (
              <Input.Counter
                className="textfield__counter"
                currentCounter={value.length}
                maxLength={maxLength}
              />
            )}

            {(suffixText || suffixIcon) && (
              <TextfieldAddOn
                className="textfield__suffix"
                position="suffix"
                sizes={sizes}
                icon={suffixIcon}
                iconSize={suffixIconSize}
                text={suffixText}
                color={suffixColor}
                onClick={onClickSuffix}
              />
            )}
          </section>

          {(addOnSuffixText || addOnSuffixIcon) && (
            <TextfieldAddOn
              className="textfield__addon textfield__item"
              position="suffix"
              sizes={sizes}
              icon={addOnSuffixIcon}
              iconSize={addOnSuffixIconSize}
              text={addOnSuffixText}
              color={addOnSuffixColor}
              onClick={onClickAddOnSuffix}
            />
          )}
        </Input.Content>

        {/* INFO: Textfield Helper Section */}

        {helper && (
          <Input.Helper disabled={disabled} error={error} helper={helper} />
        )}
      </Input>
    );
  }
);

const Textfield = memo(
  _Textfield as ReturnType<typeof forwardRef<HTMLInputElement, TextfieldProps>>
);

Textfield.displayName = 'Textfield';

// @ts-expect-error irfan@fithub.id
Textfield.COMPONENT_NAME = 'textfield';

export default Textfield;
