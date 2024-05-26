import { useEffect, useState } from "react";


const Estates = () => {

    const [estates, setEstates] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setEstates(data))
    }, [])
    return (
        <div className="mb-10">
            <h2>{estates.length}</h2>
            <div className="grid grid-cols-3 gap-6 ">
                {
                    estates.map(estate => <div key={estate.id} className="card bg-base-100 shadow-xl rounded-2xl">
                        <figure><img className="w-80 h-80 pt-4" src={estate.image} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{estate.estate_title}</h2>
                            <h2 className="card-title">Category: {estate.segment_name}</h2>
                            <p><span className="font-bold">Description : </span>{estate.description}</p>
                            <p><span className="font-bold">Price : </span>{estate.price}</p>
                            <p><span className="font-bold">Status : </span>{estate.status}</p>
                            <p><span className="font-bold">Area : </span>{estate.area}</p>
                            <p><span className="font-bold">Location : </span>{estate.location}</p>
                            <p className="font-bold"> Facilities :
                                <ul className="list-disc ml-14">
                                    <li>{estate.facilities[0]}</li>
                                    <li>{estate.facilities[1]}</li>
                                    <li>{estate.facilities[2]}</li>
                                </ul>
                            </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">View Property</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Estates;