import React, { Component } from 'react'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';

export class AppFilter extends Component {

 useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
          maxWidth: 300,
        },
        chips: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        chip: {
          margin: 2,
        },
        noLabel: {
          marginTop: theme.spacing(3),
        },
      }));
      
     
    constructor(props) {
        super(props)
    
        this.state = {
            selectionVal:[] ,
            selectedVal:[]
        }
    }
    
    componentDidMount(){
        this.setState({
            selectionVal:["Completed", "Math8", "MathCore", "Algebra1", "All"]
        })
    }

    handleChange=(event)=>{
            this.setState({
                selectedVal: [...event.target.value]
              })
    }

    submit=()=>{
       console.log(this.state.selectedVal) 
    }

    render() {
        return (
        <FormControl>
            {/* <FilterListRoundedIcon/> */}
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={this.state.selectedVal}
          onChange={this.handleChange}
         input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div>
              {this.state.selectedVal.map((value) => (
                <Chip key={value} label={value}  />
              ))}
            </div>
          )}
        >
          {this.state.selectionVal.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
        
      </FormControl>
        )
    }
}

export default AppFilter
