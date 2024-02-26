"use client";

import { Hotel, Room } from "@prisma/client";

interface AddHotelProps {
  hotel: HotelWithRooms | null;
}
export type HotelWithRooms = Hotel & {
  rooms: Room[];
};
const AddHotelForm = ({ hotel }: AddHotelProps) => {
  return <div>Add</div>;
};

export default AddHotelForm;
