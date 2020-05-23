using System;
using Microsoft.AspNetCore.Mvc;
using Trips.Data;

namespace Trips.Controllers{

    [Route("api/[controller]")] // this controller gets the name Of this class TripController
    public class TripsController:Controller{

        private ITripService _service;
        public TripsController(ITripService service)
        {
            this._service = service;
        }

        [HttpGet("[action]")]
        public IActionResult GetTrips(){
            var alltrips = _service.GetAllTrips();
            return Ok(alltrips);
        }

        [HttpGet("SingleTrip/{id}")]
        public IActionResult GetTripById(int id){
            var trip =_service.GetTripById(id);
            return Ok(trip);
        }

        [HttpPost("AddTrip")]
        public IActionResult AddTrip([FromBody]Trip trip){
            if (trip != null){
                _service.AddTrip(trip);
            }
            return Ok();     
        }

        [HttpPut("UpdateTrip/{id}")]
        public IActionResult UpdateTrip(int id,[FromBody]Trip trip){
            _service.UpdateTrip(id,trip);
            return Ok(trip);
        }

        [HttpDelete("DeleteTrip/{id}")]
        public IActionResult DeleteTrip(int id){
            _service.DeleteTrip(id);
            return Ok();
        }
    }
}