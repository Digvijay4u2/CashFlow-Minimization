import React, { useState, } from 'react'
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TableCell,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Grid,
} from '@material-ui/core'
import { Graph } from 'react-d3-graph'
import Expense from '../classes/expense'
import { splitwise } from '../utils/splitwise'

const AddPerson = () => {

    const [name, setName] = useState('')
    const [allNames, setAllNames] = useState([])
    const [flag, setFlag] = useState(false)
    const [finalValues, setFinalValues] = useState({
        "person1": "",
        "person2": "",
        "amount": ""
    })
    const [items, setItems] = useState([])
    const [outputList, setOutputList] = useState([])

    const { person1, person2, amount } = finalValues;

    // const [inputGraphData, setInputGraphData] = useState({})
    // const [inputGraphConfig, setInputGraphConfig] = useState({})

    // const [outputGraphData, setOutputGraphData] = useState({})

    const handleFinalChange = name => event => {
        setFinalValues({ ...finalValues, [name]: event.target.value })
    }

    const handleChange = (event) => {
        setName(event.target.value)
      }
    
    const addParticipant = event => {
        event.preventDefault();
        setAllNames(previous => [{ name }, ...previous])
        setName('')
    }
    
    const listOfNames = () => {
        return (
          <div className="allnames">
            <h3>Names</h3>
    
            {allNames.map((item, index) => (
              <h4 style={{ color: "#3f3f3f" }} key={index}> { item.name}</h4>
            ))
            }
          </div>
        )
    }

    return (
        <div>
            <div className="name-component">
                <div className="p-name">
                    <h2>Enter names of People in the group</h2>
                    <div className="p-name-field">
                        <TextField id="outlined-basic" label="Name"
                            variant="outlined"
                            value={name}
                            disabled={flag}
                            onChange={handleChange} />
                    </div>
                    <Button variant="contained" color="primary" onClick={addParticipant}>
                        Add
                    </Button>
                </div>
                {allNames && allNames.length ? (
                    <>
                        <div className="list-div">
                            <div className="list-all-names">
                                {listOfNames()}
                            </div>
                        </div>
                        <Button variant="contained" color="secondary" >Submit</Button>
                    </>
                ) : null}

            </div>
        </div>
    )
}

export default AddPerson