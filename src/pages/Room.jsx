import React, { useEffect, useState } from "react";
import RoomsCard from "../components/RoomsCard";
import Loader from "../components/GlobalLoader";
import RoomFilter from "../components/RoomFilter";
import { getAllRooms } from "@/Api";
import { useNavigate } from "react-router-dom";

const Room = () => {
    const [rooms, setRoom] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const fetchRoom = async () => {
        try {
            setLoading(true);
            const res = await getAllRooms();
            setRoom(res.data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRoom();
    }, []);
    return (
        <section>
            {loading ? (
                <Loader />
            ) : (
                <div className="w-full flex flex-col items-center bg-[#FFFFF0]">
                    <header className="relative w-full">
                        <div
                            className="w-full h-full bg-center bg-cover z-0"
                            style={{
                                backgroundImage: "url(/assets/herobanner.jpg)",
                            }}
                        >
                            <div className="h-80 flex flex-col justify-center items-center bg-black/40 w-full p-9">
                                <p className="text-4xl md:text-6xl text-white border-b border-yellow-500 pb-2">
                                    Our Rooms
                                </p>
                                <p className="text-lg md:text-xl text-white">
                                    <span onClick={() => navigate("/")}>
                                        Home
                                    </span>{" "}
                                    / Rooms
                                </p>
                            </div>
                        </div>
                    </header>
                    <main className="w-full xl:max-w-7xl flex flex-col space-y-5  py-5">
                        {rooms.map((room, index) => (
                            <RoomsCard rooms={room} index={index % 2 === 0} />
                        ))}
                    </main>
                </div>
            )}
        </section>
    );
};

export default Room;
