import styled from 'styled-components'
import stem_med from '../images/stem_med_svg.svg'
import stem_med_base from '../images/stem_med_base.svg'
import stem_med_branch from '../images/stem_med_1.svg'
import stem_med_u from '../images/stem_med_u.svg'

const Section = styled.div`
    position: absolute;
`
const Stem = styled.img`
    position: relative;
`
const StemBase = styled.img`
    position: relative;
    top: -99px;
    left: 27px;
`
const StemBranch = styled.img`
    position: relative;
    top: -234px;
    left: -6px;
`
const StemU = styled.img`
    position: relative;
    top: -272px;
    left: 18px;
`

const StemMed = () => {
    return (
        <Section>
            <Stem src={stem_med}/>
            <StemBase src={stem_med_base}/>
            <StemBranch src={stem_med_branch}/>
            <StemU src={stem_med_u}/>
        </Section>
    )
}

export default StemMed