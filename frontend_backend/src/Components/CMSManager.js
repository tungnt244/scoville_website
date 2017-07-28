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
            onClick={ () => {
                
            } }
        >Edit</button>
        );
    }

    deleteButton(cell, row) {
        return(
            <button
                onClick={()=>{
                    axios.delete(url +'/cms/news/'+row.ID).then(response => {
                        {/* console.log('response', response) */}
                        axios.get(url +'/cms/news/brief').then(response => {
                            this.setState({
                                articles: response.data
                            })
                        }).catch(error => {
                            console.log('error: ', error)
                        })  
                    }).catch(error => {
                        console.log('error: ', error)
                    })
                }}
            >Delete</button>
        )
    }

    componentDidMount(){
        axios.get(url +'/cms/news/brief').then(response => {
            this.setState({
                articles: response.data
            })
        }).catch(error => {
            console.log('error: ', error)
        })
    }

    render(){
        // console.log('state', this.state.articles)
        let articles = this.state.articles
        return(
            <div>
                <button onClick={()=>{
                    browserHistory.push('/admin/cms/editor')
                    }}>Create</button>
                <BootstrapTable data={articles} >
                    <TableHeaderColumn dataField="ID" isKey={true} >Article ID</TableHeaderColumn> 
                    <TableHeaderColumn dataField="title" >Title</TableHeaderColumn>
                    <TableHeaderColumn dataField="description">Description</TableHeaderColumn>
                    <TableHeaderColumn dataFormat={this.editButton}>Edit</TableHeaderColumn>
                    <TableHeaderColumn dataFormat={(cell,row) => this.deleteButton(cell, row)}>Delete</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}