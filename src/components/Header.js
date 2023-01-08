import styled from 'styled-components'

const Conatainer = styled.div`
    height: 70px;
    display: flex;
    background: #E8E7E3;
    box-shadow: 0px 4px 38px -4px rgba(0, 0, 0, 0.19);
    justify-content: space-between;
    align-items: center;
    padding: 0 72px;
`

const HeaderLeft = styled.div`
    display: flex;
    gap: 72px;
    font-family: "Merriweather";
    font-size: 24px;
    color: #484A43;
`
const HeaderRight = styled.div`
    display: flex;
    gap: 88px;
    font-family: "Merriweather_Sans";
    font-size: 20px;
    color: #4F5C31;
`
const ProjectName = styled.span`
    font-weight: 900;
`

const Name = styled.span`
    font-weight: 400;
`

function Header() {
    return (
        <Conatainer>
            <HeaderLeft><ProjectName>Acacia project</ProjectName><Name>Daphna Uni</Name></HeaderLeft>
            <HeaderRight><span>Publications</span><span>About</span></HeaderRight>
        </Conatainer>
    );
}

export default Header;