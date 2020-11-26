import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { apiKey } from "../../api";
import axios from "../../axios";

import Spinner from "../Spinner/Spinner";
import PersonImage from "./PersonImage/PersonImage";
import PersonBiography from "./PersonBiography/PersonBiography";
import PersonInfo from "./PersonInfo/PersonInfo";
import PersonActing from "./PersonActing/PersonActing";

const PersonStyled = styled.div`
  width: 75%;
  margin: 50px auto;

  .person__header {
    display: flex;
    margin-bottom: 50px;
  }

  .person__content {
    display: flex;
  }
`;

const Person = (props) => {
  const [personData, setPersonData] = useState(null);
  const [creditsData, setCreditsData] = useState(null);

  useEffect(() => {
    axios
      .get(`/person/${props.match.params.id}?api_key=${apiKey}`)
      .then((res) => {
        setPersonData(res.data);
      });
    axios
      .get(
        `/person/${props.match.params.id}/combined_credits?api_key=${apiKey}`
      )
      .then((res) => {
        setCreditsData(res.data);
      });
  }, [props.match.params.id]);

  let person = <Spinner />;

  if (personData && creditsData) {
    let castSortByYear = {};

    for (let c of creditsData.cast) {
      let date = c.release_date ? c.release_date : c.first_air_date;
      if (date) {
        let year = date.slice(0, 4);
        if (year in castSortByYear) {
          castSortByYear[year].push(c);
        } else {
          castSortByYear[year] = [];
          castSortByYear[year].push(c);
        }
      } else {
        let keyNull = 0;
        if (keyNull in castSortByYear) {
          castSortByYear[keyNull].push(c);
        } else {
          castSortByYear[keyNull] = [];
          castSortByYear[keyNull].push(c);
        }
      }
    }

    person = (
      <PersonStyled className="person">
        <div className="person__header">
          <PersonImage
            profile_path={personData.profile_path}
            name={personData.name}
          />
          <PersonBiography
            name={personData.name}
            biography={personData.biography}
          />
        </div>
        <div className="person__content">
          <PersonInfo
            known_for_department={personData.known_for_department}
            knownCredits={creditsData.cast.length.toString()}
            gender={personData.gender} 
            birthday={personData.birthday}
            place_of_birth={personData.place_of_birth}
          />
          <PersonActing castSortByYear={castSortByYear} />
        </div>
      </PersonStyled>
    );
  }

  return person;
};

export default Person;
