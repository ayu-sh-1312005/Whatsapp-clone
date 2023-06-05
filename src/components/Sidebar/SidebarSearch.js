/*jshint esversion: 6 */
import "./SidebarSearch.css";
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";

const filterIconStyle={
    backgroundColor:"white",
    height: "100%",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
    borderColor:"red",
    paddingRight:"5px"
};

function SidebarSearch(){
    return (<div className="sidebar-search">
            <div className="search-icon">
            <IconButton>
                <SearchIcon />
            </IconButton>
            </div>
            <div className="search">
             <input placeholder="Search or start new chat" className="search-input"></input>
             </div>
             <div className="filter-icon">
             <IconButton>
                <FilterListIcon style={filterIconStyle} />
            </IconButton>
             </div>
    </div>)
}
export default SidebarSearch;