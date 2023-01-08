import styled from 'styled-components'
import stem_small from '../images/stem_small_svg.svg'
import stem_small_base from '../images/stem_small_base.svg'
import stem_small_branch from '../images/stem_small_1.svg'
import stem_small_u from '../images/stem_small_u.svg'

const Section = styled.div`
    position: absolute;
`
const Stem = styled.img`
    position: relative;
`
const StemBase = styled.img`
    position: relative;
    top: -84px;
    left: 40px;
`
const StemBranch = styled.img`
    position: relative;
    top: -225px;
    left: 10px;
`
const StemU = styled.img`
    position: relative;
    top: -257px;
    left: 17px;
`

const StemSmall = () => {
    return (
        <Section>
            <Stem src={stem_small}/>
            <StemBase src={stem_small_base}/>
            <StemBranch src={stem_small_branch}/>
            <StemU src={stem_small_u}/>
        </Section>
    )
}

export default StemSmall