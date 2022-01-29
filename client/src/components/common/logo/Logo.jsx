import React from 'react'
import { LogoText } from './styledLogo'

const Logo = ({ parentBlockClass }) => {
	return (
		<LogoText className={[parentBlockClass, 'logo'].join(' ')} href="#">
			logo
		</LogoText>
	)
}

export default Logo
