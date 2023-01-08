import styled from 'styled-components'
import stem_big from '../images/oie_transparent.png'
import stem_big_base from '../images/stem_big_base.svg'
import stem_big_branch from '../images/stem_big_1.svg'
import stem_big_u from '../images/stem_big_u.svg'

const Section = styled.div`
    position: absolute;
`

const Stem = styled.img`
    position: relative;
`

const StemBase = styled.img`
    position: relative;
    top: -95px;
    left: 46px;
`

const StemBranch = styled.img`
    position: relative;
    top: -231px;
    left: 17px;
`

const StemU = styled.img`
    position: relative;
    top: -245px;
    left: -33px;
`

const StemBig = () => {
    return (
        <Section>
            <Stem src={stem_big}/>
            <StemBase src={stem_big_base}/>
            <StemBranch src={stem_big_branch}/>
            <StemU src={stem_big_u}/>
        </Section>
    )
}

export default StemBig