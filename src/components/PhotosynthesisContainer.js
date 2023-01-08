import styled from 'styled-components'
import Photosynthesis from "./Photosynthesis"
import { selectRadiation } from '../features/radiation/radiationSlice'
import { useSelector } from 'react-redux';

const Container = styled.div`
    display: flex; 
    position: relative;
    top: 50px;
    `

const positions = [{
    left: 320,
    top: -100,
    rotate: 275,
},
{
    left: 545,
    top: -80,
    rotate: 280,
},
{
    left: 70,
    top: -95,
    rotate: 265,
},
{
    left: 645,
    top: -50,
    rotate: 295,
},
{
    left: 195,
    top: -100,
    rotate: 273,
},
{
    left: 420,
    top: -94,
    rotate: 277,
},
{
    left: -55,
    top: -70,
    rotate: 260,
},
{
    left: 595,
    top: -66,
    rotate: 285,
},
{
    left: 245,
    top: -96,
    rotate: 275,
},
{
    left: 720,
    top: -20,
    rotate: 305,
},
{
    left: 145,
    top: -95,
    rotate: 270,
},
{
    left: 370,
    top: -99,
    rotate: 275,
},
{
    left: 770,
    top: 0,
    rotate: 310,
},
{
    left: 20,
    top: -90,
    rotate: 265,
},
{
    left: 470,
    top: -90,
    rotate: 280,
},
{
    left: -130,
    top: -33,
    rotate: 245,
},
{
    left: 220,
    top: -98,
    rotate: 275,
},
{
    left: 745,
    top: -12,
    rotate: 308,
},
{
    left: 120,
    top: -95,
    rotate: 270,
},
{
    left: -105,
    top: -50,
    rotate: 250,
},
{
    left: 520,
    top: -87,
    rotate: 280,
},
{
    left: 670,
    top: -40,
    rotate: 295,
},
{
    left: 295,
    top: -100,
    rotate: 275,
},
{
    left: -5,
    top: -87,
    rotate: 260,
},
{
    left: 570,
    top: -72,
    rotate: 285,
},
{
    left: 270,
    top: -98,
    rotate: 275,
},
{
    left: 620,
    top: -60,
    rotate: 290,
},
{
    left: 95,
    top: -95,
    rotate: 270,
},
{
    left: 395,
    top: -95,
    rotate: 275,
},
{
    left: -80,
    top: -60,
    rotate: 255,
},
{
    left: 445,
    top: -95,
    rotate: 277,
},
{
    left: 45,
    top: -90,
    rotate: 265,
},
{
    left: 695,
    top: -30,
    rotate: 300,
},
{
    left: 345,
    top: -99,
    rotate: 275,
},
{
    left: -30,
    top: -80,
    rotate: 260,
},
{
    left: 495,
    top: -85,
    rotate: 280,
},
{
    left: 170,
    top: -95,
    rotate: 270,
},
]

const PhotosynthesisContainer = () => {
    // console.log(positions.length);
    const radiation = useSelector(selectRadiation)
    // const numberOfArrows = Math.min(40, Math.floor(radiation / 50))
    // const numberOfArrows = radiation > 0 ? 70 : 0
    // const numberOfArrows = Math.min(positions.length, Math.floor(0.03 * radiation))
    // const numberOfArrows = Math.min(positions.length, Math.floor((0.03243243 * radiation) - 4.86486486 ))
    // const numberOfArrows = Math.min(positions.length, Math.floor((0.02 * radiation) - 3 ))
    const numberOfArrows = Math.min(positions.length, Math.floor((0.02055556 * radiation) - 4.11111111))


    return (
        <Container>
            {positions.filter((item, idx) => idx <= numberOfArrows).map((pos, idx) => <Photosynthesis key={idx} left={pos.left} top={pos.top} rotate={pos.rotate} />)}
        </Container>
    )
}

export default PhotosynthesisContainer

const positions1 = [{
    left: -125,
    top: -33,
    rotate: 252,
},
{
    left: -110,
    top: -40,
    rotate: 253,
},
{
    left: -95,
    top: -50,
    rotate: 255,
},
{
    left: -80,
    top: -59,
    rotate: 256,
},
{
    left: -65,
    top: -60,
    rotate: 256,
},
{
    left: -50,
    top: -63,
    rotate: 257,
},
{
    left: -35,
    top: -70,
    rotate: 258,
},
{
    left: -20,
    top: -75,
    rotate: 258,
},
{
    left: -5,
    top: -85,
    rotate: 259,
},
{
    left: 10,
    top: -89,
    rotate: 260,
},
{
    left: 25,
    top: -87,
    rotate: 261,
},
{
    left: 40,
    top: -86,
    rotate: 262,
},
{
    left: 55,
    top: -90,
    rotate: 262,
},
{
    left: 70,
    top: -90,
    rotate: 263,
},
{
    left: 85,
    top: -90,
    rotate: 263,
},
{
    left: 100,
    top: -95,
    rotate: 264,
},
{
    left: 115,
    top: -100,
    rotate: 264,
},
{
    left: 130,
    top: -100,
    rotate: 265,
},
{
    left: 145,
    top: -100,
    rotate: 265,
},
{
    left: 160,
    top: -100,
    rotate: 266,
},
{
    left: 175,
    top: -100,
    rotate: 267,
},
{
    left: 190,
    top: -101,
    rotate: 267,
},
{
    left: 205,
    top: -95,
    rotate: 268,
},
{
    left: 220,
    top: -97,
    rotate: 269,
},
{
    left: 235,
    top: -94,
    rotate: 270,
},
{
    left: 250,
    top: -99,
    rotate: 270,
},
{
    left: 265,
    top: -99,
    rotate: 271,
},
{
    left: 280,
    top: -93,
    rotate: 271,
},
{
    left: 295,
    top: -98,
    rotate: 272,
},
{
    left: 310,
    top: -96,
    rotate: 272,
},
{
    left: 325,
    top: -96,
    rotate: 273,
},
{
    left: 340,
    top: -92,
    rotate: 273,
},
{
    left: 355,
    top: -96,
    rotate: 273,
},
{
    left: 370,
    top: -100,
    rotate: 274,
},
{
    left: 385,
    top: -100,
    rotate: 274,
},
{
    left: 400,
    top: -95,
    rotate: 275,
},
{
    left: 415,
    top: -100,
    rotate: 275,
},
{
    left: 430,
    top: -97,
    rotate: 275,
},
{
    left: 445,
    top: -99,
    rotate: 276,
},
{
    left: 460,
    top: -98,
    rotate: 276,
},
{
    left: 475,
    top: -95,
    rotate: 277,
},
{
    left: 490,
    top: -90,
    rotate: 278,
},
{
    left: 505,
    top: -90,
    rotate: 278,
},
{
    left: 520,
    top: -91,
    rotate: 279,
},
{
    left: 535,
    top: -87,
    rotate: 280,
},
{
    left: 550,
    top: -86,
    rotate: 280,
},
{
    left: 565,
    top: -82,
    rotate: 281,
},
{
    left: 580,
    top: -79,
    rotate: 282,
},
{
    left: 595,
    top: -75,
    rotate: 283,
},
{
    left: 610,
    top: -69,
    rotate: 284,
},
{
    left: 625,
    top: -63,
    rotate: 285,
},
{
    left: 640,
    top: -60,
    rotate: 286,
},
{
    left: 655,
    top: -54,
    rotate: 287,
},
{
    left: 670,
    top: -48,
    rotate: 288,
},
{
    left: 685,
    top: -42,
    rotate: 289,
},
{
    left: 700,
    top: -35,
    rotate: 290,
},
{
    left: 715,
    top: -30,
    rotate: 291,
},
{
    left: 730,
    top: -25,
    rotate: 292,
},
{
    left: 745,
    top: -20,
    rotate: 293,
},
{
    left: 760,
    top: -10,
    rotate: 296,
},
]