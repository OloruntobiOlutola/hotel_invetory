import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent {
  hotelName = 'Baywood Hotel';
  numberOfRooms = 10;
  hiderooms = false;

  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 15,
  };

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Fan and light lol',
      price: 1000,
      photos:
        'https://www.baywoodhotel.com/wp-content/uploads/2018/04/Deluxe-Room-1.jpg',
      available: true,
      checkinTime: new Date('2018-04-01T00:00:00.000Z'),
      checkoutTime: new Date('2018-04-02T00:00:00.000Z'),
    },
    {
      roomNumber: 2,
      roomType: 'Private suit',
      amenities: 'Fan and light lol',
      price: 2000,
      photos:
        'https://www.baywoodhotel.com/wp-content/uploads/2018/04/Deluxe-Room-1.jpg',
      available: false,
      checkinTime: new Date('2018-04-01T00:00:00.000Z'),
      checkoutTime: new Date('2018-04-02T00:00:00.000Z'),
    },
    {
      roomNumber: 3,
      roomType: 'Deluxe Room',
      amenities: 'Fan and light lol',
      price: 3000,
      photos:
        'https://www.baywoodhotel.com/wp-content/uploads/2018/04/Deluxe-Room-1.jpg',
      available: true,
      checkinTime: new Date('2018-04-01T00:00:00.000Z'),
      checkoutTime: new Date('2018-04-02T00:00:00.000Z'),
    },
  ];

  toogle() {
    this.hiderooms = !this.hiderooms;
  }
}
