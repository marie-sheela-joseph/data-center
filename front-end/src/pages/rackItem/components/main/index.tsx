import { useAppSelector } from 'store/hooks';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

const Main = () => {
  const currentRackId = useAppSelector(state => state.racks.currentRackId);
  const currentRack = useAppSelector(state =>
    state.racks.rackItems.find(rack => rack._id === currentRackId)
  );

  return (
    <section>
      <div className="container">
        <h2>Rack Details</h2>
        <p>Rack Id: {currentRackId}</p>
        <p>Total Number of Devices: {currentRack?.devices.length}</p>
        <TableContainer>
          <Table variant='striped' colorScheme='blue'>
            <TableCaption>List of Devices in Rack {currentRackId}</TableCaption>
            <Thead>
              <Tr>
                <Th>device id</Th>
                <Th>device type</Th>
                <Th>model name</Th>
                <Th>number of ports</Th>
                <Th>vertical size (U)</Th>
              </Tr>
            </Thead>
            <Tbody>
              {currentRack?.devices.map((device, i) => (
                <Tr key={device._id}>
                  <Td>{device._id}</Td>
                  <Td>{device.deviceType}</Td>
                  <Td>{device.modelName}</Td>
                  <Td>{device.numberOfPorts}</Td>
                  <Td>{device.verticalSize}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </section>
  );
};

export default Main;
