import React from 'react';

import {useQuery} from "@apollo/client";
import { media } from "../gql/Query"

import Fade from "react-reveal/Fade";
import {GridItem} from "../components/GridItem";

export const Mixes = () => {
    const { data } = useQuery(media);
    const mixes = data?.mixes;

    return (
        <Fade>
            <div className="mixes grid content-container">
                {mixes?.map((mix: any, index: number) => (
                    <GridItem
                        key={index}
                        title={mix.title}
                        url={`/mixes/${mix.slug}`}
                        videoUrl={mix.video && mix.video.url ? mix.video.url : ""}
                    />
                ))}
            </div>
        </Fade>
    );
};

export default Mixes;
