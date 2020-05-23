using System.Collections.Generic;

namespace Trips.Data{
    public interface ITripService
    {
        List<Trip> GetAllTrips();//Response method that gets all trips

        Trip GetTripById(int tripId);//Response method that gets trip by Id
        void UpdateTrip(int tripId,Trip trip);
        void DeleteTrip(int tripId);
        void AddTrip(Trip trip);
    }
}