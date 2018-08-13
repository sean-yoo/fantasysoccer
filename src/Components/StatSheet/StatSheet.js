import React, { Component } from 'react';
import './StatSheet.css';
import ReactTable from 'react-table';

class StatSheet extends Component {
  constructor() {
    super()
    this.state= {
      data: []
    }
  }

  componentDidMount() {
    fetch('https://fantasy.premierleague.com/drf/bootstrap-static')
      .then(response=> response.json())
      .then(data => {this.setState({ data: data })});
  }

  render() {
    
    // const columns = [
    //   {
    //   Header: 'First Name',
    //   accessor: ''
    //   },
    //   Header: 'Last Name',
    //   accessor: 'second_name'
    //   },
    //   Header: 'Team',
    //   accessor: 'team_code'
    //   }
    // ]

    return (
      <div>
        	
      </div>
    );
  }
}

export default StatSheet;
