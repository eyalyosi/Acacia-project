import styled, { keyframes } from 'styled-components'
import wave from '../images/wave.png'

const appearAnimation = keyframes`
    0% { left: 150px }
    100% { left: 0}
`

const Wave = styled.img`
    position: relative;
    animation-name: ${appearAnimation};
    animation-duration: 3s;
`

const Wrapper = styled.div`
    position: absolute;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
    transform: rotate(${props => props.rotate}deg);
    overflow: hidden;
`

const Photosynthesis = (props) => {

    return (
        <Wrapper {...props}>
            <Wave src={wave} />
        </Wrapper>
    )
}

export default Photosynthesis
