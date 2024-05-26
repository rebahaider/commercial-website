
import estates from '../../../public/fakeData.json';
import { useParams } from 'react-router-dom';


const SingleEstate = () => {

    const { id } = useParams();

    const estateDetails = estates.find((estate) => estate.id === Number(id));

    return (
        <div className="card w-1/2 mx-auto bg-base-200 shadow-xl m-4">
            <figure className="px-10 pt-10">
                <img src={estateDetails.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">ID: {estateDetails.id}</h2>
                <h2 className="card-title"> Title: {estateDetails.estate_title}</h2>
                <h2 className="card-title">Segment-Title: {estateDetails.segment_name}</h2>
                <p><span className='font-bold'>Description: </span> {estateDetails.description}</p>
                <p><span className='font-bold'>Price: </span>{estateDetails.price}</p>
                <p><span className='font-bold'>Status: </span>{estateDetails.status}</p>
                <p><span className='font-bold'>Area: </span>{estateDetails.area}</p>
                <p><span className='font-bold'>Location: </span>{estateDetails.location}</p>
                <p className="font-bold"> Facilities :
                    <ul className="list-disc ml-14">
                        <li>{estateDetails.facilities[0]}</li>
                        <li>{estateDetails.facilities[1]}</li>
                        <li>{estateDetails.facilities[2]}</li>
                    </ul>
                </p>

            </div>
        </div>
    );
};

export default SingleEstate;