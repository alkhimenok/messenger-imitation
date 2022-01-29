import styled from 'styled-components'
import { getDisplayFlex } from '../../utils/styledUtils'
import { LG_SIZE, PRIMARY_COLOR } from '../../constants/constants'

export const HeaderSection = styled.header`
	padding: ${LG_SIZE} 0;
	background-color: ${PRIMARY_COLOR};
`
export const HeaderContent = styled.div`
	${getDisplayFlex('center', 'space-between')};
`
