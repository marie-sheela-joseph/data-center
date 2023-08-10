import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import { useAppDispatch } from 'store/hooks';
import {device, setCurrentRack} from 'store/slices/racksSlice';
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

function Items({ currentItems }: { currentItems: any[] }) {
  const dispatch = useAppDispatch();

  return (
    <TableContainer>
      <Table variant='striped' colorScheme='blue'>
        <TableCaption>List of racks in Datacentral Paris</TableCaption>
        <Thead>
          <Tr>
            <Th>rack id</Th>
            <Th>total vertical units (U)</Th>
            <Th>used vertical units (U)</Th>
            <Th>number of devices</Th>
            <Th>details</Th>
          </Tr>
        </Thead>
        <Tbody>
          {currentItems &&
            currentItems.map((rack, i) => {
              let usedVerticalUnits = 0;
              rack.devices.forEach((device: device) => {
                usedVerticalUnits += device.verticalSize;
              });

              return (
                <Tr key={rack._id}>
                  <Td>{rack._id}</Td>
                  <Td>42</Td>
                  <Td>{usedVerticalUnits}</Td>
                  <Td>{rack.devices.length}</Td>
                  <Td>
                    <Link
                      to={`/rack/${rack._id}`}
                      onClick={() => dispatch(setCurrentRack(rack._id))}
                    >
                      view details
                    </Link>
                  </Td>
                </Tr>
              );
            })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

function PaginatedItems({ itemsPerPage, items }: { itemsPerPage: number, items: any[] }) {
  const [currentItems, setCurrentItems] = useState<number[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <div>
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
}

export default PaginatedItems;