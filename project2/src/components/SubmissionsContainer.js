import React from 'react';
import SubmissionCard from './SubmissionCard';
import styled from 'styled-components';

const SubContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  margin: 2.5rem;
`;

const Head = styled.h2`
text-align: center;
vertical-align: middle;
`

const SubmissionsContainer = ({ filteredSubmissions, updateVotes }) => {
  return (
    <>
    <Head>Vote for your favorite submission</Head>
    <SubContainerGrid>
      {filteredSubmissions.map((submission) => (
        <SubmissionCard
          key={submission.id}
          submission={submission}
          updateVotes={updateVotes}
        />
      ))}
    </SubContainerGrid>
   </>
  );
};

export default SubmissionsContainer;