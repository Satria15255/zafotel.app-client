import React, { useEffect, useState } from "react";
import { getAllInformations } from "../Api";
import { useNavigate } from "react-router-dom";
import InformationsCard from "../components/InformationsCard";
import Motion from "@/components/Motion";

const Information = () => {
    const [informations, setInformations] = useState([]);
    const navigate = useNavigate();

    const fetchInformations = async () => {
        try {
            const res = await getAllInformations();
            setInformations(res.data.slice(0, 3));
            console.log(res.data.slice(0, 4));
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchInformations();
    }, []);

    return (
        <section className="relative bg-white h-auto pb-6">
            <Motion>
                <header className="text-center py-8 space-y-3">
                    <p className="text-2xl md:text-4xl font-serif">
                        — Therina Journal —
                    </p>
                    <p className="text-sm lg:text-lg font-serif text-[#c69c6d] font-light mt-2">
                        Insights, updates, and experiences
                    </p>
                </header>
            </Motion>
            <Motion delay={0.4} className="flex justify-center">
                <main className="flex grid md:grid-cols-3 place-items-center md:gap-2 py-4 w-full xl:max-w-7xl">
                    {informations.map((i, index) => (
                        <div key={index}>
                            <InformationsCard informations={i} />
                        </div>
                    ))}
                </main>
            </Motion>
            <footer>
                <p
                    onClick={() => navigate("/informations")}
                    className="text-center py-4 text-xs md:text-sm lg:text-lg font-serif"
                >
                    Explore Other
                </p>
            </footer>
        </section>
    );
};

export default Information;
