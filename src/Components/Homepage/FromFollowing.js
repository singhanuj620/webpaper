import React from "react";
import { v4 as uuid } from "uuid";
import faker from "faker";
import { Button } from "reactstrap";

import "../../Css/Homepage/FromFollowing.css";

const FromFollowing = () => {
  const getPersonData = () => {
    var face = `https://avatars.dicebear.com/4.5/api/male/${uuid()}.svg?mood[]=happy`;
    //var face = faker.image.people();
    var name = faker.name.findName();
    return [face, name];
  };

  return (
    <div className="FromFollowing">
      <div className="latestFollowing">
        <div className="latest_title">
          LATEST FROM FOLLOWING <hr></hr>
        </div>
        <div className="peoples">
          <div className="person_data">
            <div className="person_face_div">
              <img
                className="person_face"
                src={getPersonData()[0]}
                alt={getPersonData()[1]}
              />
            </div>
            <div className="person_name">{getPersonData()[1]}</div>
          </div>

          <div className="person_data">
            <div className="person_face_div">
              <img
                className="person_face"
                src={getPersonData()[0]}
                alt={getPersonData()[1]}
              />
            </div>
            <div className="person_name">{getPersonData()[1]}</div>
          </div>

          <div className="person_data">
            <div className="person_face_div">
              <img
                className="person_face"
                src={getPersonData()[0]}
                alt={getPersonData()[1]}
              />
            </div>
            <div className="person_name">{getPersonData()[1]}</div>
          </div>

          <div className="person_data">
            <div className="person_face_div">
              <img
                className="person_face"
                src={getPersonData()[0]}
                alt={getPersonData()[1]}
              />
            </div>
            <div className="person_name">{getPersonData()[1]}</div>
          </div>

          <div className="person_data">
            <div className="person_face_div">
              <img
                className="person_face"
                src={getPersonData()[0]}
                alt={getPersonData()[1]}
              />
            </div>
            <div className="person_name">{getPersonData()[1]}</div>
          </div>
        </div>
      </div>

      <div className="following_hashtags">
        <div className="hashtag_title">
          UPDATES FROM #TOPICS <hr></hr>
        </div>
        <div className="hashtag_list_group">
          <li>
            <div className="following_hashtag_group">
              <div className="following_hashtag_name">
                # {faker.random.word()}
              </div>
              <div className="following_hashtag_button">
                <Button outline color="info">
                  OPEN
                </Button>
              </div>
            </div>
          </li>

          <li>
            <div className="following_hashtag_group">
              <div className="following_hashtag_name">
                # {faker.random.word()}
              </div>
              <div following_hashtag_button>
                <Button outline color="info">
                  OPEN
                </Button>
              </div>
            </div>
          </li>
          <li>
            <div className="following_hashtag_group">
              <div className="following_hashtag_name">
                # {faker.random.word()}
              </div>
              <div following_hashtag_button>
                <Button outline color="info">
                  OPEN
                </Button>
              </div>
            </div>
          </li>
          <li>
            <div className="following_hashtag_group">
              <div className="following_hashtag_name">
                # {faker.random.word()}
              </div>
              <div following_hashtag_button>
                <Button outline color="info">
                  OPEN
                </Button>
              </div>
            </div>
          </li>

          <li>
            <div className="following_hashtag_group">
              <div className="following_hashtag_name">
                # {faker.random.word()}
              </div>
              <div following_hashtag_button>
                <Button outline color="info">
                  OPEN
                </Button>
              </div>
            </div>
          </li>

          <li>
            <div className="following_hashtag_group">
              <div className="following_hashtag_name">
                # {faker.random.word()}
              </div>
              <div following_hashtag_button>
                <Button outline color="info">
                  OPEN
                </Button>
              </div>
            </div>
          </li>
        </div>
      </div>
    </div>
  );
};

export default FromFollowing;
