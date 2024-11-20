import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import opportunitySidebarData from '../../data/sidebarOpportunities'
import Planning from '../../components/opportunitiesPageComponents/planning/Planning'

const Opportunities = () => {
  return (
    <div style={{marginLeft:100}}>
        <Sidebar pageName={"opportunities"} sidebarData={opportunitySidebarData} />
    </div>
  )
}

export default Opportunities