import React, { useState } from 'react'
import CandidatePersonalinformations from '../../components/candidate-info/CandidatePersonalinformations'
import candidates from '../../data/candidates'
import CandidateInfoCard from '../../components/candidate-info/CandidateInfoCard'
import './clientsPage.css'
import ClientFile from '../../components/clientsComponents/clientFile'
import ReactPaginate from 'react-paginate'
import Sidebar from '../../components/sidebar/Sidebar'
import clientSidebarData from '../../data/sidebarClientPage'
const Clients = () => {

  const [clientModification, setclientModification] = useState(false);
  const [countCvs, setCountCvs] = useState(0);
  const [isItemFocused, setIsItemFocused] = useState(0);
  const itemsPerPage = 5; 
  const [currentPage, setCurrentPage] = useState(0); 
  const indexOfFirstItem = currentPage * itemsPerPage;
  const indexOfLastItem = indexOfFirstItem + itemsPerPage;
  const currentCandidates = candidates.slice(indexOfFirstItem, indexOfLastItem);

  const selectedItemIndex = index => {
    setIsItemFocused(index);
  };
  const countSelectionDirect = count => {
    if (count === 1) {
      setCountCvs(countCvs + 1);
    } else {
      setCountCvs(countCvs - 1);
    }
  }
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
  const handleClientModification = () =>{
    setclientModification(!clientModification)
  }
  return (
<>
  <Sidebar clientModification={clientModification} pageName={"clients"} sidebarData={clientSidebarData}/>
  <div className='clients-page'>
      <div className='page-block'>
      <div className="listCandidates">
                {currentCandidates.map((item, index) => (
                  <CandidateInfoCard
                    data={item}
                    index={index+indexOfFirstItem}
                    focused={isItemFocused == index+indexOfFirstItem ? true : false}
                    selectedItem={() => selectedItemIndex(index+indexOfFirstItem)}
                    countSelection={count => countSelectionDirect(count)}
                  />
                ))}
       </div>
       <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={Math.ceil(candidates.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active current"}
      />
      </div>
       <div className='page-block'>
           <CandidatePersonalinformations handleClientModification={handleClientModification} pageName={"clients"} data={candidates} selectedItemInfos={isItemFocused} />
         <ClientFile/>         
       </div>
    </div>
</>
  )
}

export default Clients