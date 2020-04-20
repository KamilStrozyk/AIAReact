import React, { Component } from 'react'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableContainer from '@material-ui/core/TableContainer'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import RemoveIcon from '@material-ui/icons/Remove';
import data from '../data.json'

class MovieTable extends Component {

    imageStyle = {
        "height": "100px",
        "width": "100px"
    }

    render() {
        return (
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><Button>Name</Button></TableCell>
                            <TableCell align="right"><Button>Description</Button></TableCell>
                            <TableCell align="right"><Button>Image</Button></TableCell>
                            <TableCell align="right"><Button>Rating</Button></TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.description}</TableCell>
                                <TableCell align="right"><img src={row.image} style={this.imageStyle} /></TableCell>
                                <TableCell align="right">{row.rating}</TableCell>
                                <TableCell align="right"> <Button color='alert'><RemoveIcon /></Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Button color='primary'>Add Element</Button>
            </TableContainer>
        )
    }
}
export default MovieTable;


