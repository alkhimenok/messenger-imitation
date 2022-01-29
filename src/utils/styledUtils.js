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

export const getScroll = (scrollWidth = '4px', trackColor = 'gray', thumbColor = 'blue', fillets = '10px', isHide = false) => {
	return isHide
		? `
        &::-webkit-scrollbar { 
          width: 0;
          height: 0;
        }
        & { 
          -ms-overflow-style: none;
        }
        & { 
          overflow: -moz-scrollbars-none; 
        }
      `
		: `
        &::-webkit-scrollbar {
          width: ${scrollWidth} !important;
        }
        &::-webkit-scrollbar-track {
          background-color: ${trackColor};
        }
        &::-webkit-scrollbar-thumb {
          background: ${thumbColor};
          border-radius: ${fillets};
        }
      `
}
