
import './App.css';
import axios from "axios";
import {useEffect,useState} from "react";
import { makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Draw from './Components/Draw';
const useStyles = makeStyles({

  table:{
      minWidth: 650,
  },
});


const App = ()=>{
const classes = useStyles();
const [product,setProduct]=useState([]);
const [search, setSearch] = useState("");


const getProductData = async() =>{
  try{
    const data = await axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
    console.log(data.data);
    setProduct(data.data)
   }
   catch(e){
     console.log(e)
   }
}
 
useEffect(()=>{
  getProductData ();
},[]);



  return (
    <div className="App">
           <h1>OneCape</h1> 
           <input type="text" placeholder="Search..." onChange={(e)=>{
             setSearch(e.target.value);
           }}/>
  
<TableContainer component={Paper}>  <Draw/>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right"><h3>ProductId</h3></TableCell>
              <TableCell align="center"><h3>ProductName</h3></TableCell>
              <TableCell align="right"><h3>Price</h3></TableCell>
              <TableCell align="right"><h3>Brand</h3></TableCell>
              <TableCell align="right"><h3>Created at</h3></TableCell>            
            </TableRow>
          </TableHead>
          <TableBody>
                      {product.filter(item=>{
            if(search==""){
              return item
            }
            else if (item.name.toLowerCase().includes(search.toLowerCase())){
              return item 
            }
          }).
          map((item)=>{
            return (
              <TableRow key={item.id}>              
              <TableCell component="th" scope="row">{item.id}</TableCell>
              <TableCell align="right">{item.name}</TableCell>
              <TableCell align="right">{item.price}</TableCell>
              <TableCell align="right">{item.brand}</TableCell>
          <TableCell align="right">{item.created_at}</TableCell>

            </TableRow>
            );
          })}         
          </TableBody>
          
        </Table>
        
      </TableContainer>
    
    </div>
  );
}

export default App;