import styled from 'styled-components'
import { getDisplayFlex } from '../../../utils/styledUtils'
import {
	MAX_WIDTH,
	BASE_SIZE,
	XS_S1IZE,
	SM_SIZE,
	MD_SIZE,
	LG_SIZE,
	XL_SIZE,
	XXL_SIZE,
	PRIMARY_COLOR,
	SECONDARY_COLOR,
	PRIMARY_TEXT_COLOR,
	SECONDARY_TEXT_COLOR,
	PRIMARY_FONT,
	SECONDARY_FONT
} from '../../../constants/constants'

export const NavSection = styled.nav`
	padding: ${XS_S1IZE} 0;
	background-color: transparent;
`
export const NavList = styled.ul`
	${getDisplayFlex('center', 'space-between')}
`
export const NavItem = styled.li``
export const NavLink = styled.a`
	font-size: ${SM_SIZE};
`
