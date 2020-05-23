import React, {Component} from 'react';
import axios from 'axios';

export class Trip extends Component{

    constructor(props){
        super(props);
        this.state ={
            trips: [],
            loading: true
        }

        this.onUpdateClick = this.onUpdateClick.bind(this);
    }

    componentDidMount(){
        this.getTripFromApi();
    }

    getTripFromApi(){
        axios.get("api/Trips/GetTrips").then(result =>{
            const response = result.data;
            this.setState({trips:response,loading:false});
        })
    }

    onUpdateClick(id){
            const {history} = this.props;
            history.push('/update/'+id);
    }

    onDeleteClick(id){
            const{history} = this.props;
            history.push('/delete/'+id);
    }

    renderTableOfTrips(trips){
        return(
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Date Started</th>
                        <th>Date Completed</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        trips.map(trip => (
                            <tr key ={trip.id }>
                                <td>{trip.name}</td>
                                <td>{trip.description}</td>
                                <td>{new Date(trip.dateStarted).toISOString().slice(0,10)}</td>
                                <td>{trip.dateCompleted?new Date(trip.dateCompleted).toISOString().slice(0,10):"-"}</td>
                                <td> <div>
                                        <button onClick={()=>this.onUpdateClick(trip.id)} className="btn btn-primary">Update</button>
                                        <button onClick={()=>this.onDeleteClick(trip.id)} className="btn btn-success">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        );
    }

    render(){
        let content = this.state.loading?(
            <p>
                <em>Loading...</em>
            </p>
        ):this.renderTableOfTrips(this.state.trips);

        return(
            <div>
                <h1>Trips</h1>
                <p>Your trips history is diplayed here</p>
                {content}
            </div>
        );
    }
}