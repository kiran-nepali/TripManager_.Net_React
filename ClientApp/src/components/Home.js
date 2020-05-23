import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Welcome to  Trip Manager</h1>
        <p>Check your trip history and manage here:</p>
        <ul>
          <li>Add a new trip</li>
          <li>Update the trip</li>
          <li>Delete the trip</li>
          <li>Display the trip</li>
        </ul>
        </div>
    );
  }
}
