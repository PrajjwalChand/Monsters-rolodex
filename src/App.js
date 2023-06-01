// import { Component } from 'react';

import CardList from './components/card-list/card_list.component';
import SearchBox from './components/search-bar/search_box.component';
import './App.css';

// class App extends Component {
//   // constructor runs first ,render second then component d idmount runs
//   //jese hi state update hota hai isliye wapis se render hota hai componentdidmount ke baad
//   // constructor
//   // render
//   // componentDidMount
//   // render
//   constructor()
//   {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: '',
      
//     };
//   }
//   componentDidMount()
//   {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then((users) => this.setState(()=>{
    //     return {monsters: users}
//       }))
//   }

//   onSearchChange = (event)=> {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(()=> {
//       return {searchField};
//     });
//   }

//   render(){

//     const filtermonsters = this.state.monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(this.state.searchField); //include is case sensitive 
//     });
    
//     return (
//       <div className="App">
//         {/* <input className='searchbox' type = 'search' placeholder=' search monsters' 
//         onChange={this.onSearchChange }/> */}
//         <h1 className= 'app-title'>Monsters Rolodex</h1>
//         <SearchBox
//           className = 'monster-search-box'
//           onChangeHandler = {this.onSearchChange}
//           placeholder = 'search monsters'
//         />
        
        
//         {/* {filtermonsters.map((monster) => {
//           return (
//             <div key = {monster.id}>
//               <h1>{monster.name}</h1>
//             </div>

//           );
//         })} */}

//         <CardList monsters = {filtermonsters}/>
//       </div>
//     );
  
//   }
//   }

import {useState , useEffect} from 'react';

const App = () => {

  const[searchField,setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredmonsters,setFiltermonsters] = useState(monsters);

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(()=>{
    const newfilteredmonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);});
      setFiltermonsters(newfilteredmonsters);
  },[monsters, searchField]);


  const onSearchChange = (event) => {
    const searchFieldstring = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldstring);
  };

  return(
    <div className= 'App'>
      <h1 className  = 'app-title'>Monsters Rolodex </h1>
      <SearchBox
        className = 'monster-search-box'
        onChangeHandler = {onSearchChange}
        placeholder= 'search-monsters'
      />
      <CardList monsters = {filteredmonsters}/>

    </div>
    // <h1>hello</h1>
  );
  
  

}

export default App;
