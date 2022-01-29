import React from 'react'
import { SpinnerIcon, SpinnerBody, SpinnerLine } from './styledSpinner'

const Spinner = ({ parentBlockClass }) => {
	return (
		<SpinnerIcon className={[parentBlockClass, 'spinner'].join(' ')}>
			<SpinnerBody className="spinner__body">
				<SpinnerLine className="spinner__line"></SpinnerLine>
				<SpinnerLine className="spinner__line"></SpinnerLine>
				<SpinnerLine className="spinner__line"></SpinnerLine>
			</SpinnerBody>
		</SpinnerIcon>
	)
}

export default Spinner
