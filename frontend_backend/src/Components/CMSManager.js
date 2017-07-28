import React, {Component} from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../Styles/react-table-bootstrap.css'
import axios from 'axios'
import {url} from '../config'
import {browserHistory} from 'react-router'

export default class CMSManager extends Component {

    constructor(props){
        super(props)
        this.state = {
            articles : []
        }
    }

    priceFormatter(cell, row){
        return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
    }

    editButton = () => {
        return (
        <button
            onClick={ () => console.log('edit') }
        >Edit</button>
        );
    }

    deleteButton = () => {
        return(
            <button
                onClick={()=>console.log('delete')}
            >Delete</button>
        )
    }

    componentDidMount(){
        axios.get(url +'/news/brief').then(response => {
            console.log('response data', responsed)
            this.setState({
                articles: response.data
            })
        }).catch(error => {
            console.log('error: ', error)
        })
    }

    render(){
        var articles = [{
            id: 1,
            title: "Title 1",
            description: "This is the description"
        },{
            id: 2,
            title: "Title 2",
            description: "This is the description 2"
        }];
        return(
            <div>
                <button onClick={()=>console.log('create button')}>Create</button>
                <BootstrapTable data={products} >
                    <TableHeaderColumn dataField="id" isKey={true} >Article ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="title" >Title</TableHeaderColumn>
                    <TableHeaderColumn dataField="description">Description</TableHeaderColumn>
                    <TableHeaderColumn dataFormat={this.editButton}>Edit</TableHeaderColumn>
                    <TableHeaderColumn dataFormat={this.deleteButton}>Delete</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}