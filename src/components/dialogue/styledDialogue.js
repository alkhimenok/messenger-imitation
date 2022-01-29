import styled from 'styled-components'
import { getDisplayFlex } from '../../utils/styledUtils'
import { XS_SIZE, SM_SIZE, MD_SIZE, XXL_SIZE, THIRD_DARK_COLOR } from '../../constants/constants'

export const DialogueSection = styled.section`
	${getDisplayFlex('center', 'flex-start')}
	cursor: pointer;
`
export const DialoguePicture = styled.img`
	width: ${XXL_SIZE};
	height: ${XXL_SIZE};
	margin: 0 ${SM_SIZE} 0 0;
	border-radius: 50%;
	user-select: none;
`
export const DialogueInfo = styled.div`
	max-width: calc(100% - (${XXL_SIZE} + ${SM_SIZE}));
	height: ${XXL_SIZE};
	padding: ${XS_SIZE} 0;
	${getDisplayFlex('flex-start', 'space-between', 'column')}
`
export const DialogueTitle = styled.h2`
	font-size: ${MD_SIZE};
	color: ${THIRD_DARK_COLOR};
`
export const DialogueMessage = styled.p`
	max-width: 100%;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
`
