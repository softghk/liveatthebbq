import React from 'react';

import {useQuery} from "@apollo/client";
import { media } from "../gql/Query"

import Fade from "react-reveal/Fade";
import {GridItem} from "../components/GridItem";

export const Residents = () => {
    const { data } = useQuery(media);
    const residents = data?.residents;

    return (
        <Fade>
            <div className="residents grid content-container">
                {residents?.map((resident: any, index: number) => (
                    <GridItem
                        key={index}
                        title={resident.residentName}
                        url={`/residents/${resident.residentName}`.toLowerCase()}
                        imageUrl={resident.residentImage.url}
                    />
                ))}
            </div>
        </Fade>
    );
};


export default Residents;
