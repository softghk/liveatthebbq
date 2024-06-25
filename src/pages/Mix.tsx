import React from 'react';
import {useParams} from "react-router-dom";

import {useQuery} from "@apollo/client";
import {media} from "../gql/Query";

import Fade from "react-reveal/Fade";
import {SingleItem} from "../components/SingleItem";

export const Mix = () => {
    const { data } = useQuery(media);
    const {slug} = useParams();
    const mixes = data?.mixes;

    const mix = mixes?.find(
        (mix: any) => mix?.slug === slug
    )
    return (
        <Fade>
            <SingleItem
                title={mix?.title}
                description={mix?.description}
                backUrl={'/mixes'}
                soundcloud={mix?.soundcloud}
                subtitle={`Presented by ${mix?.residentName}`}
                videoUrl={mix?.video && mix?.video?.url ? mix.video.url : ""}
                audioUrl={mix?.audio && mix?.audio.url ? mix.audio.url : ""}
            />
        </Fade>
    )
};

export default Mix;