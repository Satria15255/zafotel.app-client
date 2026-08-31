
import { FaCity, FaDumbbell, FaSnowflake, FaCouch, FaConciergeBell } from "react-icons/fa";
import { MdTv, MdDesk, MdBalcony, MdBathtub, MdHotTub } from "react-icons/md";
import { LuBedDouble, LuUtensils } from "react-icons/lu";
import { TiWiFi } from "react-icons/ti";
import { PiBusLight, PiCoffeeLight, PiFlowerLotusLight, PiPersonSimpleSwimLight, PiCoffeeBold, PiWineFill, PiCrownLight } from "react-icons/pi";

const FacilityIcon = {
    "high-speed wi-fi": <TiWiFi />,
    "smart tv": <MdTv />,
    "smart tv with streaming apps": <MdTv />,
    "smart tv in bedroom & living area": <MdTv />,
    "air conditioner": <FaSnowflake />,
    "private living room": <FaCouch />,
    "coffee machine": <PiCoffeeBold />,
    "tea & coffe maker": <PiCoffeeBold />,
    "luxury mini bar": <PiWineFill />,
    "mini bar": <PiWineFill />,
    "king size premium bed": <LuBedDouble />,
    "king size bed": <LuBedDouble />,
    "work desk": <MdDesk />,
    "city view": <FaCity />,
    "panoramic city view": <FaCity />,
    "restaurant": <LuUtensils />,
    "gym access": <FaDumbbell />,
    "balcony": <MdBalcony />,
    "bathup": <MdBathtub />,
    "bathtub & rain shower": <MdBathtub />,
    "lounge access": <PiCrownLight />,
    "executive lounge access": <PiCrownLight />,
    "personal butler service": <FaConciergeBell />,
    "private jacuzzi": <MdHotTub />,
    "swimming pool": <PiPersonSimpleSwimLight />,
    "complimentary airport shuttle": <PiBusLight />,
}

export default FacilityIcon;