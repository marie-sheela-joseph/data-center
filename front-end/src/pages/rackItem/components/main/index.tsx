import { useAppSelector } from "store/hooks";

const Main=()=>{
const currentRackId=useAppSelector((state)=>state.racks.currentRackId)
const currentRack=useAppSelector((state)=>state.racks.rackItems.find((rack)=>rack._id===currentRackId))
    return (
        <section>
            <div className="container">
            <h2>rack details</h2>            
            <p>Rack Id: {currentRackId}</p>
            <p>Total Number of Devices: {currentRack?.devices.length}</p>
            <table>
                <thead>
                    <tr>                    
                    <th>Device Id</th>
                    <th>Device type</th>
                    <th>Model name</th>
                    <th>Number of ports</th>
                    <th>Vertical size (U)</th>
                    </tr>
                </thead>
                <tbody>
                    {currentRack?.devices.map((device,i)=><tr key={device._id}>                        
                        <td>{device._id}</td>
                        <td>{device.deviceType}</td>
                        <td>{device.modelName}</td>
                        <td>{device.numberOfPorts}</td>
                        <td>{device.verticalSize}</td>
                    </tr>)}
                </tbody>
            </table>            
            </div>
        </section>
    )
}
export default Main