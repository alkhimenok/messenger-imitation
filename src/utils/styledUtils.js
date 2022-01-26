export const getDisplayFlex = (alignItems = 'center', justifyContent = 'center', flexDirection = 'row', flexWrap = 'nowrap') => {
	return `
    display: flex;
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    flex-direction: ${flexDirection};
    flex-wrap: ${flexWrap};
  `
}

export const getCenterPosition = () => {
	return `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `
}
