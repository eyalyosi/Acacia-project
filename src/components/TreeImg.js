import styled from 'styled-components'
import Roots from '../images/tree_roots.png'
import Tree from '../images/tree_small.png'
import RootNodulesContainer from '../components/RootNodulesContainer'
import PhotosynthesisContainer from '../components/PhotosynthesisContainer'
import H2oContainer from './H2oContainer'
import Stem from './Stem'


const treeTop = 184
const rootTop = 523
const rootWidth = 660
const rootLeft = 59

const Container = styled.div`
    position: fixed;
    left: 30%; 
    top: ${treeTop}px;
`

const TreeContainer = styled.img`
    position: absolute;
`

const RootsContainer = styled.div`
    position: absolute;
    top: ${rootTop}px;
    left: ${rootLeft}px;
`

const RootsImg = styled.img`
    position: absolute;
    width: ${rootWidth}px;
`

const CanopyContainer = styled.div`
    position: absolute;
    top: 0;
    left:0;
`



function TreeImg() {

    return (
        <Container>
            <RootsContainer >
                <RootsImg src={Roots} />
                <RootNodulesContainer />
            </RootsContainer>
            <CanopyContainer>
                <TreeContainer src={Tree} />
                <PhotosynthesisContainer/>
                <H2oContainer/>
                <Stem/>
            </CanopyContainer>
        </Container>
    );
}

export default TreeImg;
