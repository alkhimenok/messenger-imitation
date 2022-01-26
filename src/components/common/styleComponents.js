import styled from 'styled-components'
import { MAX_WIDTH, BASE_SIZE } from '../../constants/constants'

export const Container = styled.div`
	max-width: ${MAX_WIDTH};
	margin: 0 auto;
	background-color: red;
`

export const Body = styled.div`
	padding: 0 ${BASE_SIZE};
`
