import { useSelector } from 'react-redux';
import { selectTemp } from '../features/temp/tempSlice'
import styled from 'styled-components'
import base from '../images/new_stem.png'
import tree_base from '../images/vector_tree_base.png'

const Section = styled.div`
    position: relative;
    top: 388px;
    left: ${props => props.left}px;
    transition: left 1s ease-in-out;
`

const Base = styled.img`
    height:159px;
    width: ${props => props.width}px;
    transition: width 1s ease-in-out;
`

// const TreeBase = styled.img`
//     position: absolute;
//     top: 75px;
//     left: 25px;
// `

const getLeft = (width) => {
    return 393 - (width / 2)
}

const getWidth = (temp) => {
    return Math.max(7, Math.min(78, (temp * 3.55) - 56.9))
}

const Stem = () => {

    const temp = useSelector(selectTemp)
    const width = getWidth(temp)

    return (
        <Section left={getLeft(width)}>
            <Base src={base} width={width} />
            {/* <TreeBase src={tree_base}/> */}
        </Section>
    )
}

export default Stem