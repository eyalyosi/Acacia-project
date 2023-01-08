import styled, { keyframes } from 'styled-components'
import wave from '../images/h2o_wave.svg'
import h2o_drop from '../images/h2o_molecule.svg'

const appearAnimation = keyframes`
    0% { top: 150px }
    100% { top: 0}
`

const Drop = styled.img`
    position: relative;
`

const Wave = styled.img`
    position: relative;
`

const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 8px;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
    transform: rotate(${props => props.rotate}deg);
    overflow:hidden;
`

const Wrapper = styled.div`
    position: relative;
    animation-name: ${appearAnimation};
    animation-duration: 3s;
`

const H2o = (props) => {

    return (
        <Container  {...props}>
            <Wrapper>
                <Drop src={h2o_drop} />
                <Wave src={wave} />
            </Wrapper>
        </Container>
    )
}

export default H2o

