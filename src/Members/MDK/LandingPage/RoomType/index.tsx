import { db } from "@src/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import { Col, Image, Layout, Row, Typography } from "antd";
import room1 from "@src/Members/MDK/LandingPage/image/room/room1.png";
import room2 from "@src/Members/MDK/LandingPage/image/room/room2.png";
import room4 from "@src/Members/MDK/LandingPage/image/room/room4.png";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const { Title } = Typography;

const RoomType = () => {
  const [roomTypes, setRoomTypes] = useState<any[]>([]);
  const [rooms, setRooms] = useState<any[]>([]);
  const [, setSelectedRoom] = useState<string | null>(null);
  const [displayedRooms, setDisplayedRooms] = useState<any[]>([]);

  useEffect(() => {
    const q = query(collection(db, "roomTypes"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const roomsData: any[] = [];
      querySnapshot.forEach((doc) => {
        roomsData.push({
          id: doc.data().id,
          name: doc.data().name,
        });
      });
      setRoomTypes(roomsData);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  console.log("bill", roomTypes);

  useEffect(() => {
    const q = query(collection(db, "rooms"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const roomsData: any[] = [];
      querySnapshot.forEach((doc) => {
        roomsData.push({
          roomTypeId: doc.data().roomTypeId,
          name: doc.data().name,
          description: doc.data().description,
        });
      });
      setRooms(roomsData);
      setDisplayedRooms(roomsData);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleSelectRoom = (roomTypeId: string) => {
    setSelectedRoom(roomTypeId);
    if (roomTypeId) {
      const filteredRooms = rooms.filter(
        (room) => room.roomTypeId === roomTypeId
      );
      setDisplayedRooms(filteredRooms);
    } else {
      setDisplayedRooms(rooms);
    }
  };

  return (
    <Layout className="room-type max-w-[1200px] my-0 mx-auto md:max-w-[820px]">
      <Title level={2} className="sm:!text-[1.5rem]">
        Room Type
      </Title>
      <Row className="flex items-center justify-between mb-4">
        {roomTypes.map((roomType) => (
          <Col
            key={roomType.id}
            className="flex-16 max-w-16 mb-8 cursor-pointer md:flex-33 md:max-w-33 sm:max-w-fit sm:mb-2"
            onClick={() => handleSelectRoom(roomType.id)}
          >
            <button className="relative top-[10px] sm:!text-[1rem] sm:whitespace-nowrap roomTypeItem">
              {roomType.name}
            </button>
          </Col>
        ))}
      </Row>
      <Row className="md:!gap-[1rem]">
        {displayedRooms.map((room) => (
          <Col
            key={room.roomTypeId}
            className="flex-25 max-w-25 md:flex-33 md:max-w-33 sm:flex-50 sm:max-w-50"
            style={{
              marginBottom: "2rem",
            }}
          >
            <NavLink to={`/room-detail/${room.roomTypeId}`}>
              <Image
                className="w-[280px] h-[155px] rounded-[30px] sm:!w-[180px] sm:!h-[80px]"
                preview={false}
                src={
                  room.roomTypeId === "l02"
                    ? room4
                    : room.roomTypeId === "l01"
                    ? room1
                    : room2
                }
              />
              <div>
                <Title level={4} className="sm:!text-[1rem]">
                  {room.roomTypeId === "l02"
                    ? "Lanai Room"
                    : room.roomTypeId === "l01"
                    ? "Luxury Room"
                    : "Single Room"}
                </Title>
                <Title
                  level={5}
                  className="!m-0 !font-light text-[14px] relative top-[-5px] sm:!text-[1rem]"
                >
                  lorem ipsum dolor sit amet, consectet
                </Title>
              </div>
            </NavLink>
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export default RoomType;
