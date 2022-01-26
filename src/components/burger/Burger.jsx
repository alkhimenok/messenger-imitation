import React, { useState } from 'react'
import { BurgerIcon, BurgerLine } from './styledBurger'

const Burger = ({ parentBlockClass, handleClick }) => {
	const [icon, setIcon] = useState('burger')
	const toggleIcon = () => (icon === 'burger' ? 'close' : 'burger')

	return (
		<BurgerIcon
			className={[parentBlockClass, icon].join(' ')}
			onClick={e => {
				handleClick(e)
				setIcon(toggleIcon())
			}}>
			<BurgerLine className="burger__line" />
		</BurgerIcon>
	)
}

export default Burger
