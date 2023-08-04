/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Card from "../../Card";
import { styled } from "styled-components";
import colors from "../../../utils/style/colors";

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`;

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`;

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`;

const Freelances = () => {
  const [profileList, setProfileList] = useState([]);
  const [isDataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setDataLoading(isDataLoading);
    async function fetchProfiles() {
      try {
        const response = await fetch("http://localhost:8000/freelances");
        const { freelancersList } = await response.json();
        setProfileList(freelancersList);
      } catch (e) {
        console.log(error);
        setError(true);
      } finally {
        setDataLoading(true);
      }
    }
    fetchProfiles();
  }, []);
  return (
    <div>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      <CardsContainer>
        {profileList.map((profile) => (
          <Card
            key={profile.id}
            name={profile.name}
            job={profile.job}
            picture={profile.picture}
          />
        ))}
      </CardsContainer>
    </div>
  );
};

export default Freelances;
