import React from 'react'
import { Col } from 'src/components/HTML';
import { InputText, InputDropdown, InputNumberText } from './components';

const ColWrap = ({ cols, colClass, children }) => (
	<Col
		cols={cols || '12'}
		{...colClass ? { className: colClass } : {}}
	>
		{children}
	</Col>
);

const InputCol = {
	Dropdown: (props) => (
		<ColWrap {...props}>
			<InputDropdown {...props} />
		</ColWrap>
	),
	Text: (props) => (
		<ColWrap {...props}>
			<InputText
				maxLength={props?.maxLength || '150'}
				{ ...props }
			/>
		</ColWrap>
	),
	NumberText: (props) => (
		<ColWrap {...props}>
			<InputNumberText {...props} />
		</ColWrap>
	)
}

export default InputCol
