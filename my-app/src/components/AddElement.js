import React, { Component } from 'react'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableContainer from '@material-ui/core/TableContainer'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import RemoveIcon from '@material-ui/icons/Remove';
import data from '../data.json'

class AddElement extends Component {
    constructor(addFunc) {
        super(addFunc);
        this.state = {
            name: "",
            description: "",
            image: "",
            rating: 0,
        }
    }

    render() {
        let that = this;
        return (
            <TableRow>
                <TableCell component="th" scope="row">
                    <TextField
                        label="Name"
                        variant="standard"
                        spellCheck="false"
                        value={this.state.name}
                        onChange={(text) => {
                            let value = text.target.value;
                            that.setState({ name: value })
                        }}
                    />
                </TableCell>
                <TableCell width={1}>
                    <TextField
                        label="Description"
                        variant="standard"
                        spellCheck="false"
                        value={this.state.description}
                        onChange={(text) => {
                            let value = text.target.value;
                            that.setState({ description: value })
                        }}
                    />
                </TableCell>
                <TableCell align="right">
                    <TextField
                        label="Link to photo"
                        variant="standard"
                        spellCheck="false"
                        value={this.state.image}
                        onChange={(text) => {
                            let value = text.target.value;
                            that.setState({ image: value })
                        }}
                    />
                </TableCell>
                <TableCell align="right">
                    <TextField
                        select
                        value={this.state.rating}
                        onChange={(input) => { that.setState({ rating: input.target.value }) }}
                        SelectProps={{
                            native: true,
                        }}
                        variant="standard"
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </TextField></TableCell>
                <TableCell align="right"><Button color='primary' onClick={()=>{that.props.addFunc(that.state.name, that.state.description, that.state.image, that.state.rating)}}>Add</Button></TableCell>
            </TableRow>
        )
    }
}
export default AddElement;

