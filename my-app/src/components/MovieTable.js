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
import AddElement from './AddElement';

class MovieTable extends Component {
    constructor() {
        super();
        this.state = {
            tableData: data,
            sortOrder: 1,
            sortOderText: "Sort Desc",
            searchText: "",
        };

        this.sortData = this.sortData.bind(this)
        this.setSortOrder = this.setSortOrder.bind(this)
        this.removeElement = this.removeElement.bind(this)
        this.addElement = this.addElement.bind(this)
    }

    imageStyle = {
        "height": "100px",
        "width": "100px"
    }

    setSortOrder() {
        let newSortOrder = this.state.sortOrder;
        let newSortOrderText = this.state.sortOderText;
        if (newSortOrder === 1) {
            newSortOrder = -1;
            newSortOrderText = "Sort Asc"
        } else {
            newSortOrder = 1
            newSortOrderText = "Sort Desc"
        }
        this.setState({
            sortOrder: newSortOrder,
            sortOderText: newSortOrderText
        })
    }

    sortData(compFunc) {
        let sortedData = this.state.tableData.sort(compFunc);
        this.setState({
            tableData: sortedData
        })
    }

    sortByRating = (a, b) => {
        let sortOrder = this.state.sortOrder;
        return (a.rating - b.rating) * sortOrder;
    }

    sortByName = (a, b) => {
        let sortOrder = this.state.sortOrder;
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA > nameB) return sortOrder;
        else return -1 * sortOrder;
    }

    sortByDescription = (a, b) => {
        let sortOrder = this.state.sortOrder;
        const descriptionA = a.description.toUpperCase();
        const descriptionB = b.description.toUpperCase();
        if (descriptionA > descriptionB) return sortOrder;
        else return -1 * sortOrder;
    }

    removeElement(id) {
        let tableData = this.state.tableData.filter(x => x.id !== id);
        this.setState({
            tableData: tableData,
        });
    }

    filterData(data) {
        let value = this.state.searchText;
        if (value !== "") {
            return data.filter(x => x.description.includes(value) || x.name.includes(value) || x.rating.toString().includes(value))
        } else {
            return data;
        }
    }

    changeRating(id, value) {
        let tableData = this.state.tableData;
        let elementToChangeIndex = tableData.findIndex((x) => { return x.id === id });
        tableData[elementToChangeIndex].rating = value;
        this.setState({
            tableData: tableData,
        });
    }

    addElement(name, description, image, rating) {

        let tableData = this.state.tableData;

        let id = Math.max.apply(null, tableData.map(x => x.id)) + 1;
        let element = {
            name:name,
            id: id,
            description: description,
            image: image,
            rating: rating
        };
        tableData.push(element);

        this.setState({
            tableData: tableData,
        });
    }

    render() {
        let that = this;
        return (
            <TableContainer component={Paper}>
                <TextField
                    label="Search"
                    variant="standard"
                    spellCheck="false"
                    value={this.state.searchText}
                    onChange={(text) => {
                        let value = text.target.value;
                        that.setState({ searchText: value })
                    }}

                />
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><Button onClick={() => that.sortData(that.sortByName)}>Name</Button></TableCell>
                            <TableCell align="right"><Button onClick={() => that.sortData(that.sortByDescription)}>Description</Button></TableCell>
                            <TableCell align="right"><Button>Image</Button></TableCell>
                            <TableCell align="right"><Button onClick={() => that.sortData(that.sortByRating)}>Rating</Button></TableCell>
                            <TableCell align="right"><Button onClick={this.setSortOrder}>{this.state.sortOderText}</Button></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.filterData(this.state.tableData).map((row) => (
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.description}</TableCell>
                                <TableCell align="right"><img src={row.image} style={this.imageStyle} /></TableCell>
                                <TableCell align="right">
                                    <TextField
                                        select
                                        value={row.rating}
                                        onChange={(input) => { that.changeRating(row.id, input.target.value) }}
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
                                <TableCell align="right"> <Button onClick={() => that.removeElement(row.id)}><RemoveIcon /></Button></TableCell>
                            </TableRow>
                        ))}
                        <AddElement addFunc={this.addElement} />
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}
export default MovieTable;


