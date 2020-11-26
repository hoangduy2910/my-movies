import React from "react";
import styled from "styled-components";

const PersonActingStyled = styled.div`
  flex-basis: 70%;
  margin-left: 50px;

  .person__acting-detail {
    border: 1px solid #ccc;
    box-shadow: 1px 3px 3px 2px #ccc;
    border-radius: 10px;

    &-years {
      border-bottom: 1px solid #eee;
    }

    &-years > div {
      display: flex;
      padding: 10px 20px;

      p {
        font-size: 1.2rem;
      }

      p:first-child {
        flex-basis: 15%;
        flex-shrink: 0;
      }

      p:last-child:hover {
        cursor: pointer;
      }
    }
  }

  h2 {
    margin-bottom: 30px;
  }
`;

const PersonActing = (props) => {
  return (
    <PersonActingStyled>
      <h2>Acting</h2>
      <div className="person__acting-detail">
        {Object.keys(props.castSortByYear).map((k, idx) => {
          return (
            <div className="person__acting-detail-years" key={idx}>
              {props.castSortByYear[k].map((cast, idx) => (
                <div key={idx}>
                  <p>{k !== "0" ? k : "------"}</p>
                  <p>
                    <strong>{cast.title ? cast.title : cast.name}</strong>
                    <i> as </i>
                    <span>{cast.character}</span>
                  </p>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </PersonActingStyled>
  );
};

export default PersonActing;
