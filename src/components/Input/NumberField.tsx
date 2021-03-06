import React from 'react';
import { UUI } from '../../core/uui';
import { limitPrecision, limitRange } from '../../utils/numberHelper';
import { LoadingSpinner } from '../Loading/LoadingSpinner';
import classNames from 'classnames';

export interface NumberFieldFeatureProps {
  /**
   * Form control name
   */
  name?: string;
  /**
   * The minimum value of the input.
   * @default none
   */
  min?: number;
  /**
   * The maximum value of the input.
   * @default none
   */
  max?: number;
  /**
   * Limit number value precision.
   * @default none
   */
  precision?: number;
  /**
   * The step sets the stepping interval when clicking up and down spinner buttons.
   * @default none
   */
  step?: string | number;
  /**
   * Placeholder text when there is no value.
   * @default none
   */
  placeholder?: string;
  /**
   * Whether the control is loading.
   * @default false
   */
  loading?: boolean;
  /**
   * Whether the control is non-interactive.
   * @default false
   */
  disabled?: boolean;
  /**
   * The value to display in the input field.
   */
  value?: number | null | undefined;
  /**
   * Event handler invoked when input value is changed.
   */
  onChange?: (value: number | null, event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Deprecated.
   * FIXME: remove it when uui component customize props support IntrinsicAttriobutes
   */
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const NumberField = UUI.FunctionComponent({
  name: 'NumberField',
  nodes: {
    Root: 'div',
    Input: 'input',
    LoadingSpinner: LoadingSpinner,
  }
}, (props: NumberFieldFeatureProps, nodes) => {
  const { Root, Input, LoadingSpinner } = nodes

  return (
    <Root
      className={classNames({
        'STATE_loading': props.loading,
        'STATE_disabled': props.disabled,
      })}
    >
      <Input
        onKeyDown={props.onKeyDown}
        placeholder={props.placeholder}
        type='number'
        max={props.max}
        min={props.min}
        step={props.step}
        disabled={props.disabled}
        value={props.value === undefined ? undefined : (
          props.value == null ? '' : parseFloat(props.value.toPrecision(10))
        )}
        onChange={props.onChange === undefined ? undefined : (
          (event) => {
            let value = event.target.value
            value = limitPrecision(value, props.precision)
            let finalValue = parseFloat(value)
            if (isNaN(finalValue)) {
              props.onChange && props.onChange(null, event)
            } else {
              finalValue = limitRange(finalValue, props.min, props.max)
              props.onChange && props.onChange(finalValue, event)
            }
          }
        )}
      />
      {props.loading && (
        <LoadingSpinner width={16} height={16} />
      )}
    </Root>

  )
})

export type NumberFieldProps = Parameters<typeof NumberField>[0]
