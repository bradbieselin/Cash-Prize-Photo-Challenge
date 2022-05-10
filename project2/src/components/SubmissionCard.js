import React from 'react';
import styled from "styled-components";

const SubImage = styled.img`
    width: 100%;
    height: 78%;
    object-fit: cover;
    overflow: hidden;
`

const SubmissionCard = ({ submission }) => {
    return (
        <div className="blockCard">
            <p><strong>Photographer:</strong> {submission.photographer}</p>
            <button>Votes: {submission.votes}</button>
            <SubImage src={submission.image} />
        </div>
    );
};

export default SubmissionCard;