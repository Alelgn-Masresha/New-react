import React from "react";

const HotelForm = () => {
  return (
    <div>
      <form action="">
        <div>
          {/* <div className="input-group">
            <input type="text" id="from" placeholder="From" />
            <label htmlFor="from">From</label>
          </div>
          <div className="input-group">
            <input type="text" id="To" placeholder="To" />
            <label htmlFor="To">To</label>
          </div> */}
          <div className="input-group">
            <input type="text" name="destination" id="destination" />
            <label htmlFor="from">Destination</label>
          </div>
        </div>
        <div>
          <div className="input-group">
            <input type="datetime" name="checkIn" id="checkIn" />
            <label htmlFor="from">Check In</label>
          </div>
          <div className="input-group">
            <input type="datetime" id="checkOut" placeholder="checkOut" />
            <label htmlFor="To">Check Out</label>
          </div>

          <div className="input-group">
            <input type="datetime" id="guests" placeholder="Guests & Rooms" />
            <label htmlFor="To">Guest and Rooms</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HotelForm;
