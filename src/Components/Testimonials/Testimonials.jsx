import React from 'react';
const testimonials = [
    {
        id: 1,
        name: "Rahul",
        review: "Lost 6 kg in 2 months. Trainers are supportive.",
        role: "Member"
    },
    {
        id: 2,
        name: "Ananya",
        review: "The environment keeps me motivated every day.",
        role: "Member"
    },
    {
        id: 3,
        name: "Vikram",
        review: "Good equipment and structured workout plans.",
        role: "Member"
    }
];
const Testimonials = () => {
    return (
        <div className="max-w-6xl mx-auto my-16 px-6">

            <h2 className="text-3xl font-bold text-center mb-10">
                What Our Members Say
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

                {testimonials.map((item) => (
                    <div
                        key={item.id}
                        className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg"
                    >
                        <p className="mb-4 italic">"{item.review}"</p>

                        <div className="mt-4">
                            <h4 className="font-bold">{item.name}</h4>
                            <p className="text-sm opacity-70">{item.role}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Testimonials;