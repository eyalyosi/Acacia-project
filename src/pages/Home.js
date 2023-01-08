
import TemperatureNumberField from '../components/TemperatureNumberField'
import RadiationNumberField from '../components/RadiationNumberField'
import HumidityNumberField from '../components/HumidityNumberField'
import VpdNumberField from '../components/VpdNumberField'
import NitrogenNumberField from '../components/NitrogenNumberField'
import WaterContentNumberField from '../components/WaterContentNumberField'
import styled from 'styled-components'
import H2oContainer from '../components/H2oContainer'
import PhotosynthesisContainer from '../components/PhotosynthesisContainer'
import Vpd from '../components/Vpd'

import RH from '../components/RH'
import Stem from '../components/Stem'
import bg from '../images/savannah_background.png'
// import acasiaTree from '../images/acasiaTree.svg'
import acasia from '../images/acasia.svg'
import TreeImg from '../components/TreeImg'
import Reset from '../components/Reset'


const HomeContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-grow:1;
    flex-direction: row;
    
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: 100% 100%;      
    background-position: center;
`
const HomeActionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left:47px;
`

const HomeActionContainerTop = styled.div`
    display: flex;
    flex-direction: column;
    gap:19px;
    margin-bottom:100px;
`
const HomeActionContainerCenter = styled.div`
    display: flex;
    padding:24px;
    gap:24px;
    background: rgba(243, 245, 247, 0.5);
    backdrop-filter: blur(3.5px);
    border-radius: 12px;
    margin-bottom: 34px;
`

const HomeActionContainerBottom = styled.div`
    display: flex;
    padding:24px;
    gap:24px;
    background: rgba(243, 245, 247, 0.5);
    backdrop-filter: blur(3.5px);
    border-radius: 12px;
`



const Home = () => {
    return (
        <HomeContainer>
            <TreeImg />
            <HomeActionContainer>
                <HomeActionContainerTop>
                    <Vpd />
                    <Reset/>
                </HomeActionContainerTop>
                <HomeActionContainerCenter>
                    <TemperatureNumberField />
                    <HumidityNumberField />
                    <RadiationNumberField />
                </HomeActionContainerCenter>
                <HomeActionContainerBottom>
                    <NitrogenNumberField />
                    <WaterContentNumberField />
                </HomeActionContainerBottom>
            </HomeActionContainer>
        </HomeContainer>
    )
}

export default Home