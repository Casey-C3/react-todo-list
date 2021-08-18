
const Header = ({setFilterState}) => {
  return (
    <header>
      <h1>Todo List</h1>  
      <select onChange={(e) => setFilterState(e.target.value)}>
        <option value="all" defaultValue >All</option>
        <option value="complete">Complete</option>
        <option value="incomplete">Incomplete</option>
      
     </select>
    </header>
    
    
   
  )
}

export default Header;
