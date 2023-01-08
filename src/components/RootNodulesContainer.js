import styled from 'styled-components'
import RootNodules from './RootNodules'
import { useSelector } from 'react-redux';
import { selectNitrogen } from '../features/nitrogen/nitrogenSlice'

const Container = styled.div`
`
const positions = [{
    left: 188,
    top: 195,
    width: 11,
    heigth: 13,
},
{
    left: 523,
    top: 106,
    width: 11,
    heigth: 13,
},
{
    left: 151,
    top: 101,
    width: 11,
    heigth: 13,
},
{
    left: 417,
    top: 174,
    width: 11,
    heigth: 13,
},
// 1
{
    left: 287,
    top: 132,
    width: 11,
    heigth: 13,
},
{
    left: 100,
    top: 128,
    width: 11,
    heigth: 13,
},
{
    left: 327,
    top: 198,
    width: 11,
    heigth: 13,
},
{
    left: 614,
    top: 89,
    width: 11,
    heigth: 13,
},
// 2
{
    left: 380,
    top: 174,
    width: 11,
    heigth: 13,
},
{
    left: 554,
    top: 156,
    width: 11,
    heigth: 13,
},
{
    left: 104,
    top: 182,
    width: 11,
    heigth: 13,
},
{
    left: 500,
    top: 189,
    width: 11,
    heigth: 13,
},
// 3
{
    left: 610,
    top: 142,
    width: 11,
    heigth: 13,
},
{
    left: 586,
    top: 88,
    width: 11,
    heigth: 13,
},
{
    left: 220,
    top: 142,
    width: 11,
    heigth: 13,
},
{
    left: 8,
    top: 96,
    width: 11,
    heigth: 13,
},
// 4
{
    left: 284,
    top: 179,
    width: 11,
    heigth: 13,
},
{
    left: 403,
    top: 78,
    width: 11,
    heigth: 13,
},
{
    left: 348,
    top: 140,
    width: 11,
    heigth: 13,
},
{
    left: 552,
    top: 81,
    width: 11,
    heigth: 13,
},
// 5
{
    left: 223,
    top: 167,
    width: 19,
    heigth: 22,
},
{
    left: 473,
    top: 94,
    width: 19,
    heigth: 22,
},
{
    left: 184,
    top: 77,
    width: 19,
    heigth: 22,
},
{
    left: 450,
    top: 176,
    width: 19,
    heigth: 22,
},
// 6
{
    left: 119,
    top: 147,
    width: 19,
    heigth: 22,
},
{
    left: 427,
    top: 124,
    width: 19,
    heigth: 22,
},
{
    left: 262,
    top: 118,
    width: 19,
    heigth: 22,
},
{
    left: 494,
    top: 43,
    width: 19,
    heigth: 22,
},
// 7
{
    left: 86,
    top: 85,
    width: 19,
    heigth: 22,
},
{
    left: 438,
    top: 69,
    width: 19,
    heigth: 22,
},
{
    left: 602,
    top: 55,
    width: 19,
    heigth: 22,
},
{
    left: 130,
    top: 67,
    width: 19,
    heigth: 22,
},
// 8
{
    left: 346,
    top: 178,
    width: 19,
    heigth: 22,
},
{
    left: 165,
    top: 127,
    width: 19,
    heigth: 22,
},
{
    left: 250,
    top: 82,
    width: 19,
    heigth: 22,
},
{
    left: 562,
    top: 127,
    width: 19,
    heigth: 22,
},
// 9
{
    left: 30,
    top: 118,
    width: 19,
    heigth: 22,
},
{
    left: 369,
    top: 108,
    width: 19,
    heigth: 22,
},
{
    left: 631,
    top: 106,
    width: 19,
    heigth: 22,
},
{
    left: 301,
    top: 105,
    width: 19,
    heigth: 22,
},
// 10
]

const RootNodulesContainer = () => {
    // console.log(positions.length);
    const nitrogen = useSelector(selectNitrogen)

    // const numberOfNodules = Math.floor( nitrogen*(-1/2) + 25)
    // const numberOfNodules = nitrogen < 50 ? 40 : 0
    const numberOfNodules = Math.floor((nitrogen * -0.8) + 40)

    return (
        <Container>
            {positions.filter((item, idx) => idx < numberOfNodules).map((pos, idx) => <RootNodules key={idx} left={pos.left} top={pos.top} width={pos.width} heigth={pos.heigth} />)}
        </Container>
    )
}

export default RootNodulesContainer