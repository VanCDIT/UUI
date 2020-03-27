import React, { useMemo } from 'react';
import { StylishProps, initStylished } from '../../utils/stylish';
import { omit } from 'lodash';
import { UUI } from '../../utils/uui';

export enum TextFieldNodeName {
  TextField = "textfield",
  Root = "root",
  Input = "input",
  LeftElement = "leftelement",
  RightElement = "rightelement",
}

type InputHTMLAttributes = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'onChange'>
export interface TextFieldProps extends InputHTMLAttributes, StylishProps<TextFieldNodeName> {
  type?: 'text' | 'tel' | 'url' | 'email' | 'password'
  value: string | null | undefined
  onChange: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextField = UUI.FunctionComponent({
  name: 'TextField',
  nodes: {
    Root: 'input'
  }
}, (props: TextFieldProps, nodes) => {
  const { Root } = nodes
  return (
    <Root
      {...omit(props, 'leftNode', 'rightNode', 'value', 'onChange')}
      className={"u-w-full u-p-2 u-border u-border-black"}
      value={props.value || ''}
      onChange={(event) => {
        props.onChange(event.target.value, event)
      }}
    />
  )
})