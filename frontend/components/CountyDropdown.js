export default function CountyDropdown(props){
    const countyList = Object.entries(props.data.countyList.counties);

    return (
        <select name="county-dropdown">
            {countyList.map((county) => {
                return (
                    <option key={county[0]} value={county[0]}>{county[1]}</option>
                )
            })}
        </select>
    )
}