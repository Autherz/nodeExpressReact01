import React, { Component } from 'react';

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
      // some doing before clear DOM 
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
          <input type='text'></input><button>ADD</button>
          <div className="container"> 
              <div className="panel panel-default p50 uth-panel">
                <table > 
                  <thead>
                    <tr>
                      <th>Mem. id</th>
                      <th>Mem. name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.users.map(member =>
                      <tr key={member.id}>
                        <td>{member.id}</td>
                        <td>{member.username}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
          </div>
          <p>-------------------------------------------</p>
        </React.Fragment>
      )
    }
  }

  export default Content ;