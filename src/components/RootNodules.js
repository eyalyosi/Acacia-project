import styled, { keyframes } from 'styled-components'
import root_nodule from '../images/root_nodule.png'

const appearAnimation = keyframes`
    0% { opacity: 0 }
    100% { opacity: 1}
`

const Nodule = styled.img`
    position: absolute;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
    width: ${props => props.width}px;
    height:  ${props => props.height}px;
    animation-name: ${appearAnimation};
    animation-duration: 1s;
`

const RootNodules = (props) => {

    return (
        <Nodule src={root_nodule} {...props} title="Root nodule" />
    )
}

export default RootNodules