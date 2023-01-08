import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { selectVpd } from '../features/vpdSelector'
import { ReactComponent as VpdIcon } from '../images/vpd.svg';

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 8px;
    padding: 16px;
    background: #639A42;
    border: 4px solid #639A42;
    border-radius: 19px;
`
const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 12px;
`
const Text = styled.span`
    color: #FFFFFF;
    font-family: "Merriweather";
`
const Icon = styled.div`
    width: 24px;
    height: 24px;
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
    padding: 0px;
    gap: 12px;
    font-family: "OpenSans";
`

const Value = styled.div`
    font-weight: 700;
    font-size: 24px;    
    color: #484A43;
`

const Symbol = styled.div`
    font-weight: 700;
    font-size: 24px;
    color: #FFFFFF;
`

const Vpd = () => {

    const vpd = useSelector(selectVpd)

    return (
        <Section>
            <Header>
                <Icon>
                    <VpdIcon />
                </Icon>
                <Text>
                    VPD
                </Text>
            </Header>
            <Content>
                <Value>
                    {vpd.toFixed(1)}
                </Value>
                <Symbol>
                    kPa
                </Symbol>
            </Content>
        </Section>
    )
}

export default Vpd
