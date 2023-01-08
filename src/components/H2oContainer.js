import styled from 'styled-components'
import H2o from "./H2o"
import { useSelector } from 'react-redux';
import { selectVpd } from '../features/vpdSelector'
import { selectWaterContent } from '../features/waterContent/waterContentSlice'

const Container = styled.div`
    display: flex; 
    position: relative;
    top: 64px;
`

const positions = [{
    left: 360,
    top: -25,
    rotate: 0,
},
{
    left: 555,
    top: -17,
    rotate: 0,
},
{
    left: 165,
    top: -10,
    rotate: -3,
},
{
    left: 660,
    top: 15,
    rotate: 10,
},
{
    left: 75,
    top: -10,
    rotate: -5,
},
{
    left: 450,
    top: -15,
    rotate: 0,
},
{
    left: 255,
    top: -26,
    rotate: 0,
},
{
    left: 750,
    top: 48,
    rotate: 35,
},
{
    left: 0,
    top: 30,
    rotate: -30,
},
{
    left: 600,
    top: 0,
    rotate: 7,
},
{
    left: 120,
    top: 0,
    rotate: -3,
},
{
    left: 510,
    top: -20,
    rotate: 0,
},
{
    left: 35,
    top: 10,
    rotate: -10,
},
{
    left: 705,
    top: 35,
    rotate: 19,
},
{
    left: 315,
    top: -25,
    rotate: 0,
},
{
    left: 405,
    top: -20,
    rotate: 0,
},
{
    left: 210,
    top: -19,
    rotate: 0,
},
{
    left: 630,
    top: 10,
    rotate: 9,
},
{
    left: 285,
    top: -10,
    rotate: 0,
},
{
    left: 480,
    top: -26,
    rotate: 0,
},
{
    left: 150,
    top: -18,
    rotate: -3,
},
{
    left: 570,
    top: -15,
    rotate: 5,
},
{
    left: 50,
    top: 15,
    rotate: -5,
},
{
    left: 390,
    top: -15,
    rotate: 0,
},
{
    left: 10,
    top: 20,
    rotate: -23,
},
{
    left: 690,
    top: 30,
    rotate: 14,
},
{
    left: 225,
    top: -8,
    rotate: 0,
},
{
    left: 525,
    top: -15,
    rotate: 0,
},
{
    left: 105,
    top: -8,
    rotate: -5,
},
{
    left: 735,
    top: 40,
    rotate: 30,
},
{
    left: 195,
    top: -13,
    rotate: 0,
},
{
    left: 345,
    top: -20,
    rotate: 0,
},
{
    left: 435,
    top: -30,
    rotate: 0,
},
{
    left: 135,
    top: -12,
    rotate: -3,
},
{
    left: 615,
    top: -5,
    rotate: 7,
},
{
    left: 63,
    top: 5,
    rotate: -5,
},
{
    left: 540,
    top: -10,
    rotate: 0,
},
{
    left: 20,
    top: 10,
    rotate: -18,
},
{
    left: 675,
    top: 25,
    rotate: 12,
},
{
    left: 240,
    top: -20,
    rotate: 0,
},
{
    left: 330,
    top: -25,
    rotate: 0,
},
{
    left: 645,
    top: 15,
    rotate: 10,
},
{
    left: 420,
    top: -25,
    rotate: 0,
},
{
    left: 375,
    top: -20,
    rotate: 0,
},
{
    left: 495,
    top: -25,
    rotate: 0,
},
{
    left: 270,
    top: -20,
    rotate: 0,
},
{
    left: 720,
    top: 40,
    rotate: 25,
},
{
    left: 180,
    top: -5,
    rotate: 0,
},
{
    left: 585,
    top: -10,
    rotate: 5,
},
{
    left: 300,
    top: -20,
    rotate: 0,
},
{
    left: 465,
    top: -10,
    rotate: 0,
},
{
    left: 90,
    top: 0,
    rotate: -5,
},
]


const H2oContainer = () => {
    console.log(positions.length);
    const vpd = useSelector(selectVpd)
    // const numberOfArrows = vpd > 0 ? 80 : 0
    // const numberOfArrows = Math.max(0, Math.floor(vpd * 5))
    // const numberOfArrows = Math.min(positions.length, Math.floor(3.31210191 * vpd))
    const vwc = useSelector(selectWaterContent)

    const maxVpd = 15.7
    const max_relavent_vwc = 10

    const coefficient = (positions.length / (maxVpd * max_relavent_vwc))

    const numberOfArrows = Math.ceil(coefficient * vpd * Math.min(10, vwc))

    return (
        <Container>
            {positions.filter((item, idx) => idx < numberOfArrows).map((pos, idx) => <H2o key={idx} left={pos.left} top={pos.top} rotate={pos.rotate} />)}
            {/* {Array.from({ length: numberOfArrows }).map((a, idx) => <H2o key={idx} />)} */}
        </Container>
    )
}

export default H2oContainer

const positions1 = [{
    left: 0,
    top: 30,
    rotate: -30,
},
{
    left: 10,
    top: 20,
    rotate: -23,
},
{
    left: 20,
    top: 10,
    rotate: -18,
},
{
    left: 35,
    top: 10,
    rotate: -10,
},
{
    left: 50,
    top: 15,
    rotate: -5,
},
{
    left: 63,
    top: 5,
    rotate: -5,
},
{
    left: 75,
    top: -10,
    rotate: -5,
},
{
    left: 90,
    top: 0,
    rotate: -5,
},
{
    left: 105,
    top: -8,
    rotate: -5,
},
{
    left: 120,
    top: 0,
    rotate: -3,
},
{
    left: 135,
    top: -12,
    rotate: -3,
},
{
    left: 150,
    top: -18,
    rotate: -3,
},
{
    left: 165,
    top: -10,
    rotate: -3,
},
{
    left: 180,
    top: -5,
    rotate: 0,
},
{
    left: 195,
    top: -13,
    rotate: 0,
},
{
    left: 210,
    top: -19,
    rotate: 0,
},
{
    left: 225,
    top: -8,
    rotate: 0,
},
{
    left: 240,
    top: -20,
    rotate: 0,
},
{
    left: 255,
    top: -26,
    rotate: 0,
},
{
    left: 270,
    top: -20,
    rotate: 0,
},
{
    left: 285,
    top: -10,
    rotate: 0,
},
{
    left: 300,
    top: -20,
    rotate: 0,
},
{
    left: 315,
    top: -25,
    rotate: 0,
},
{
    left: 330,
    top: -25,
    rotate: 0,
},
{
    left: 345,
    top: -20,
    rotate: 0,
},
{
    left: 360,
    top: -25,
    rotate: 0,
},
{
    left: 375,
    top: -20,
    rotate: 0,
},
{
    left: 390,
    top: -15,
    rotate: 0,
},
{
    left: 405,
    top: -20,
    rotate: 0,
},
{
    left: 420,
    top: -25,
    rotate: 0,
},
{
    left: 435,
    top: -30,
    rotate: 0,
},
{
    left: 450,
    top: -15,
    rotate: 0,
},
{
    left: 465,
    top: -10,
    rotate: 0,
},
{
    left: 480,
    top: -26,
    rotate: 0,
},
{
    left: 495,
    top: -25,
    rotate: 0,
},
{
    left: 510,
    top: -20,
    rotate: 0,
},
{
    left: 525,
    top: -15,
    rotate: 0,
},
{
    left: 540,
    top: -10,
    rotate: 0,
},
{
    left: 555,
    top: -17,
    rotate: 0,
},
{
    left: 570,
    top: -15,
    rotate: 5,
},
{
    left: 585,
    top: -10,
    rotate: 5,
},
{
    left: 600,
    top: 0,
    rotate: 7,
},
{
    left: 615,
    top: -5,
    rotate: 7,
},
{
    left: 630,
    top: 10,
    rotate: 9,
},
{
    left: 645,
    top: 15,
    rotate: 10,
},
{
    left: 660,
    top: 15,
    rotate: 10,
},
{
    left: 675,
    top: 25,
    rotate: 12,
},
{
    left: 690,
    top: 30,
    rotate: 14,
},
{
    left: 705,
    top: 35,
    rotate: 19,
},
{
    left: 720,
    top: 40,
    rotate: 25,
},
{
    left: 735,
    top: 40,
    rotate: 30,
},
{
    left: 750,
    top: 48,
    rotate: 35,
},
]