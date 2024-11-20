import { Add_new_CV_Empty, Add_new_client_Empty, Add_new_client_Filled, Clients_Empty, Clients_Filled, Contracts_Empty, Contracts_Filled, Drilling_Empty, Drilling_Filled, Industries_Empty, Industries_Filled, Keyword_empty, Keyword_filled, Languages_Empty, Languages_Filled, Mobilities_Empty, Mobilities_Filled, Nationalities_Empty, Nationalities_Filled, Phases_Empty, Phases_Filled, Positions_Empty, Positions_Filled, Residencies_Empty, Residencies_Filled} from './icons';
const clientSidebarData = [
  {
    title:"New Client",
    title2:"Modify Client",
    icon:Add_new_client_Filled,
    iconEmpty:Add_new_client_Empty,
    path:"/",
    size:25
  },
    {
      title:"Contracts",
      icon:Contracts_Filled,
      iconEmpty:Contracts_Empty,
      path:"/",
      size:25
    },
    {
        title:"Clients",
        icon:Clients_Filled,
        iconEmpty:Clients_Empty,
        path:"/",
        size:25
      },
      {
        title:"Location",
        icon:Residencies_Filled,
        iconEmpty:Residencies_Empty,
        path:"/",
        size:25
      },
      {
        title:"Industries",
        icon:Industries_Filled,
        iconEmpty:Industries_Empty,
        path:"/",
        size:25
      },
    {
        title:"Phases",
        icon:Phases_Filled,
        iconEmpty:Phases_Empty,
        path:"/",
        size:30
      },
    {
        title:"Positions",
        icon:Positions_Filled,
        iconEmpty:Positions_Empty,
        path:"/",
        size:25
      },
    {
        title:"Drilling",
        icon:Drilling_Filled,
        iconEmpty:Drilling_Empty,
        path:"/",
        size:25
      },

];

export default clientSidebarData;