import { useSelector, useDispatch } from 'react-redux';
import { selectVpd, increaseVpd, decreaseVpd, setVpd } from '../features/vpd/vpdSlice'

import NumberField from './NumberField'

const VpdNumberField = () => {
    const dispatch = useDispatch();
    const vpd = useSelector(selectVpd).toFixed(1)
    const incVpd = () => {
        dispatch(increaseVpd())
    }

    const decVpd = () => {
        dispatch(decreaseVpd())
    }

    const changeVpd = (value) => {
        dispatch(setVpd(value))
    }
    return (
        <NumberField name="VPD kPa" value={vpd} onPlus={incVpd} onMinus={decVpd} onChange={changeVpd} min={0} max={9}/>
    )
}

// export default VpdNumberField

// import { useState } from "react";
// import "./styles.css";

// export default function App() {
//   const allCities = [
//     "New York",
//     "Paris",
//     "Tel aviv",
//     "London",
//     "Berlin",
//     "San francisco"
//   ];
//   const [selectedCities, setSelectedCities] = useState([]);
//   const [dropdownValue, setDropdwonValue] = useState(allCities[0]);
//   const onAddCity = () => {
//     const newSelectedCities = [...selectedCities, dropdownValue];
//     setSelectedCities(newSelectedCities);
//     setDropdwonValue(
//       allCities.find((city) => !newSelectedCities.includes(city))
//     );
//   };

//   return (
//     <div className="App">
//       <h1>Cities Dashboard</h1>
//       {selectedCities.length === allCities.length ? (
//         "All cities selected"
//       ) : (
//         <>
//           <select
//             value={dropdownValue}
//             onChange={(event) => {
//               setDropdwonValue(event.target.value);
//             }}
//           >
//             {allCities
//               .filter((city) => !selectedCities.includes(city))
//               .map((city) => (
//                 <option key={city} value={city}>
//                   {city}
//                 </option>
//               ))}
//           </select>
//           <button onClick={onAddCity}>Add city</button>
//         </>
//       )}
//       <div>{selectedCities}</div>
//     </div>
//   );
// }
