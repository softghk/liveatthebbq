import React from 'react';
import {useParams} from "react-router-dom";

import {useQuery} from "@apollo/client";
import {media} from "../gql/Query";

import Fade from "react-reveal/Fade";
import {SingleItem} from "../components/SingleItem";

export const Resident = () => {
    const { data } = useQuery(media);
    const {name} = useParams();
    const residents = data?.residents;

    const resident = residents?.find(
        (resident: any) => resident?.residentName?.toLowerCase() === name?.toLowerCase()
    )

    return (
        <Fade>
            <SingleItem
                title={resident?.residentName}
                description={resident?.residentBio}
                backUrl={'/residents'}
                soundcloud={resident?.soundcloud}
                instagram={resident?.instagram}
                imageUrl={resident?.residentImage.url}
                />
        </Fade>
    )
};

export default Resident;
