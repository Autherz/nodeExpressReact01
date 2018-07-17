import React, { Component } from 'react';
import './../App.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';


class Content extends React.Component {
    constructor(props){
      super(props)
  
      this.state = {
        counter : 0 ,
        users : []
      }
      
      this.handleClick = this.handleClick.bind(this)
    }
  
    componentDidMount() {
      let self = this ;
      fetch('api/v1/users', {
        method : 'GET'
      }).then (function(response) {
          if (response.status >=400){
            throw new Error("Bad response server");
          }
          return response.json();
      }).then(function(data){
        console.log(data)
        self.setState({users: data});
      }).catch(err => {
        console.log('caught it ! ', err) ; 
      })
    }

    componentWillUnmount() {
      console.log("Clear DOM")
    }
  
    handleClick() {
      this.setState(prevState => ({
        counter : prevState.counter + 1
      }))
    }
  
    render() {
      return (
        <React.Fragment>
          <h2>todoList</h2>
          <p>{this.props.message}</p>
          <button onClick={this.handleClick}>Click me!</button>
          <p>Total click : {this.state.counter}</p>
          <div> 
              <div >
                <table data-toggle ="table" > 
                  <thead>
                    <tr>
                      <th>Mem. id</th>
                      <th>Mem. name</th>
                      <th>Mem. Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.users.map(member =>
                      <tr key={member.id}>
                        <td>{member.id}</td>
                        <td>{member.username}</td>
                        <td>{member.email}</td>
                      </tr>
                    )}
                  </tbody>
                </table>

                <BootstrapTable data={this.state.users} version='4'>
                    <TableHeaderColumn isKey dataField='id'>Member. ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='username'>Member. Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='email'>Member. Email</TableHeaderColumn>
                </BootstrapTable>
                
              </div>
          </div>
          <p>-------------------------------------------</p>
        </React.Fragment>
      )
    }
  }

  export default Content ;