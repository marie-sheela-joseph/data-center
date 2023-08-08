import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

function Items({ currentItems }:{currentItems:any[]}) {
  return (
    <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>id</th>
                        <th>total vertical units</th>
                        <th>used vertical units</th>
                        <th>number of devices</th>
                        <th>details</th>
                    </tr>
                </thead>
                <tbody>
      {currentItems &&
        currentItems.map((rack,i) => (
            <tr>
            <td>{i+1}</td>
            <td>{rack._id}</td>
            <td>5</td>
            <td>{5-rack.availableVerticalUnits}</td>
            <td>{rack.devices.length}</td>
            <td><Link to={`/rack/${rack._id}`}>view details</Link></td>
        </tr>
        ))
      }
    </tbody>
    </table>
  );
}

function PaginatedItems({ itemsPerPage,items }:{itemsPerPage:number,items:any[]}) {  
  const [currentItems, setCurrentItems] = useState<number[]>([]);
  const [pageCount, setPageCount] = useState(0);  
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;    
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage,items]);
  
  const handlePageClick = (event:any) => {
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