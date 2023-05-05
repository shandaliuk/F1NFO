import { useState } from 'react';
import { useTheme } from 'styled-components';
import { useGetLastRaceResultsQuery } from 'services/formulaOneApi/formulaOneApi';
import { getImageLink } from 'services/images/getImageLink';
import {
  PageMain,
  MainSectionWrapper,
  CurrentRaceWrapper,
  CurrentRaceImage,
  CurrentRaceTitle,
  HighestWrapper,
  InnerTitleWrapper,
  MobileInnerTitle,
  MobileInnerTitleInvert,
  HighestInnerWrapper,
  HomeBoxTop,
  HomeBoxBottom,
  ImagesWrapper,
  HomeDriverImage,
  TopScorerBoxWrapper,
  TopScorerBox,
  MainPoints,
  BottomDriver,
  LoserDriverImage,
  NameWrapper,
  Subname,
  Subheader,
  RecentPoints,
  BottomContructor,
  ConstructorInner,
  NameInner,
  NameVertical,
  HomeConstructorWrapper,
  HomeConstructorImage,
  ConstructorName,
} from './Home.styled';

export const Home = () => {
  const [lastRaceResults, setLastRaceResults] = useState(null);

  const theme = useTheme();

  const {
    data: lastRaceResultsObj,
    isLoading,
    isError,
  } = useGetLastRaceResultsQuery();

  if (!isLoading && !isError && !lastRaceResults) {
    setLastRaceResults(lastRaceResultsObj.MRData.RaceTable.Races[0]);
  }

  return (
    !isLoading &&
    !isError &&
    lastRaceResults && (
      <PageMain>
        <MainSectionWrapper>
          <section>
            {/* Component */}
            <CurrentRaceWrapper>
              <CurrentRaceImage
                style={{
                  backgroundImage: `url(${getImageLink({
                    type: 'country',
                    query: lastRaceResults.Circuit.Location.country,
                  })})`,
                }}
              >
                <CurrentRaceTitle>
                  {lastRaceResults.Circuit.Location.country} results
                </CurrentRaceTitle>
              </CurrentRaceImage>
            </CurrentRaceWrapper>
            {/* Component */}
            {/* Component */}
            <HighestWrapper>
              <InnerTitleWrapper>
                <p>Top Scorers</p>
                <MobileInnerTitle>Bottom Scorers</MobileInnerTitle>
              </InnerTitleWrapper>
              <HighestInnerWrapper>
                <HomeBoxTop>
                  <ImagesWrapper>
                    <HomeDriverImage
                      src={getImageLink({
                        type: 'driver',
                        query: lastRaceResults.Results[1].Driver.driverId,
                      })}
                      alt={lastRaceResults.Results[1].Driver.familyName}
                      style={{ position: 'absolute', left: 0 }}
                    />
                    <HomeDriverImage
                      src={getImageLink({
                        type: 'driver',
                        query: lastRaceResults.Results[0].Driver.driverId,
                      })}
                      alt={lastRaceResults.Results[0].Driver.familyName}
                      style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        zIndex: 5,
                        height: '80%',
                        margin: 'auto',
                      }}
                    />
                    <HomeDriverImage
                      src={getImageLink({
                        type: 'driver',
                        query: lastRaceResults.Results[2].Driver.driverId,
                      })}
                      alt={lastRaceResults.Results[2].Driver.familyName}
                      style={{ position: 'absolute', right: 0 }}
                    />
                    <TopScorerBoxWrapper>
                      <TopScorerBox
                        style={{
                          border: `2px solid ${
                            theme.colors.teams[
                              lastRaceResults.Results[1].Constructor
                                .constructorId
                            ]
                          }`,
                        }}
                      >
                        <MainPoints>
                          {lastRaceResults.Results[1].points}
                        </MainPoints>
                      </TopScorerBox>
                      <TopScorerBox
                        className="winner"
                        style={{
                          border: `2px solid ${
                            theme.colors.teams[
                              lastRaceResults.Results[0].Constructor
                                .constructorId
                            ]
                          }`,
                        }}
                      >
                        <MainPoints>
                          {lastRaceResults.Results[0].points}
                        </MainPoints>
                      </TopScorerBox>
                      <TopScorerBox
                        style={{
                          border: `2px solid ${
                            theme.colors.teams[
                              lastRaceResults.Results[2].Constructor
                                .constructorId
                            ]
                          }`,
                        }}
                      >
                        <MainPoints>
                          {lastRaceResults.Results[2].points}
                        </MainPoints>
                      </TopScorerBox>
                    </TopScorerBoxWrapper>
                  </ImagesWrapper>
                </HomeBoxTop>
                <InnerTitleWrapper>
                  <MobileInnerTitleInvert>
                    Bottom Scorers
                  </MobileInnerTitleInvert>
                </InnerTitleWrapper>
                <HomeBoxBottom>
                  <BottomDriver
                    style={{
                      borderLeft: `2px solid ${
                        theme.colors.teams[
                          lastRaceResults.Results[19].Constructor.constructorId
                        ]
                      }`,
                    }}
                  >
                    <div>
                      <LoserDriverImage
                        src={getImageLink({
                          type: 'driver',
                          query: lastRaceResults.Results[19].Driver.driverId,
                        })}
                        alt={lastRaceResults.Results[19].Driver.familyName}
                        style={{
                          border: `2px solid ${
                            theme.colors.teams[
                              lastRaceResults.Results[19].Constructor
                                .constructorId
                            ]
                          }`,
                        }}
                      />
                    </div>
                    <NameWrapper>
                      <Subname>
                        {lastRaceResults.Results[19].Driver.givenName +
                          ' ' +
                          lastRaceResults.Results[19].Driver.familyName}
                      </Subname>
                      <Subheader>
                        {lastRaceResults.Results[19].position + 'th'}
                      </Subheader>
                    </NameWrapper>
                    <RecentPoints>
                      <MainPoints>
                        {lastRaceResults.Results[19].points}
                      </MainPoints>
                    </RecentPoints>
                  </BottomDriver>
                  <BottomDriver
                    style={{
                      borderLeft: `2px solid ${
                        theme.colors.teams[
                          lastRaceResults.Results[18].Constructor.constructorId
                        ]
                      }`,
                    }}
                  >
                    <div>
                      <LoserDriverImage
                        src={getImageLink({
                          type: 'driver',
                          query: lastRaceResults.Results[18].Driver.driverId,
                        })}
                        alt={lastRaceResults.Results[18].Driver.familyName}
                        style={{
                          border: `2px solid ${
                            theme.colors.teams[
                              lastRaceResults.Results[18].Constructor
                                .constructorId
                            ]
                          }`,
                        }}
                      />
                    </div>
                    <NameWrapper>
                      <Subname>
                        {lastRaceResults.Results[18].Driver.givenName +
                          ' ' +
                          lastRaceResults.Results[18].Driver.familyName}
                      </Subname>
                      <Subheader>
                        {lastRaceResults.Results[18].position + 'th'}
                      </Subheader>
                    </NameWrapper>
                    <RecentPoints>
                      <MainPoints>
                        {lastRaceResults.Results[18].points}
                      </MainPoints>
                    </RecentPoints>
                  </BottomDriver>
                  <BottomDriver
                    style={{
                      borderLeft: `2px solid ${
                        theme.colors.teams[
                          lastRaceResults.Results[17].Constructor.constructorId
                        ]
                      }`,
                    }}
                  >
                    <div>
                      <LoserDriverImage
                        src={getImageLink({
                          type: 'driver',
                          query: lastRaceResults.Results[17].Driver.driverId,
                        })}
                        alt={lastRaceResults.Results[17].Driver.familyName}
                        style={{
                          border: `2px solid ${
                            theme.colors.teams[
                              lastRaceResults.Results[17].Constructor
                                .constructorId
                            ]
                          }`,
                        }}
                      />
                    </div>
                    <NameWrapper>
                      <Subname>
                        {lastRaceResults.Results[17].Driver.givenName +
                          ' ' +
                          lastRaceResults.Results[17].Driver.familyName}
                      </Subname>
                      <Subheader>
                        {lastRaceResults.Results[17].position + 'th'}
                      </Subheader>
                    </NameWrapper>
                    <RecentPoints>
                      <MainPoints>
                        {lastRaceResults.Results[17].points}
                      </MainPoints>
                    </RecentPoints>
                  </BottomDriver>
                  <BottomContructor>
                    <ConstructorInner
                      style={{
                        borderBottom: `2px solid ${
                          theme.colors.teams[
                            lastRaceResults.Results[0].Constructor.constructorId
                          ]
                        }`,
                      }}
                    >
                      <NameInner>
                        <NameVertical>First</NameVertical>
                      </NameInner>
                      <HomeConstructorWrapper>
                        <RecentPoints className="constructor">
                          <MainPoints>
                            {lastRaceResults.Results[0].points}
                          </MainPoints>
                        </RecentPoints>
                        <HomeConstructorImage
                          width="90px"
                          height="27px"
                          src={getImageLink({
                            type: 'car',
                            query:
                              lastRaceResults.Results[0].Constructor
                                .constructorId,
                          })}
                          alt={lastRaceResults.Results[0].Constructor.name}
                        />
                        <ConstructorName>
                          {lastRaceResults.Results[0].Constructor.name}
                        </ConstructorName>
                      </HomeConstructorWrapper>
                    </ConstructorInner>
                    <ConstructorInner
                      style={{
                        borderBottom: `2px solid ${
                          theme.colors.teams[
                            lastRaceResults.Results[19].Constructor
                              .constructorId
                          ]
                        }`,
                      }}
                    >
                      <NameInner>
                        <NameVertical>Last</NameVertical>
                      </NameInner>
                      <HomeConstructorWrapper>
                        <RecentPoints className="constructor">
                          <MainPoints>
                            {lastRaceResults.Results[19].points}
                          </MainPoints>
                        </RecentPoints>
                        <HomeConstructorImage
                          width="90px"
                          height="27px"
                          src={getImageLink({
                            type: 'car',
                            query:
                              lastRaceResults.Results[19].Constructor
                                .constructorId,
                          })}
                          alt={lastRaceResults.Results[19].Constructor.name}
                        />
                        <ConstructorName>
                          {lastRaceResults.Results[19].Constructor.name}
                        </ConstructorName>
                      </HomeConstructorWrapper>
                    </ConstructorInner>
                  </BottomContructor>
                </HomeBoxBottom>
                <div>
                  <p></p>
                </div>
                <div></div>
              </HighestInnerWrapper>
            </HighestWrapper>
            {/* Component */}
            {/* Component */}
          </section>
        </MainSectionWrapper>
      </PageMain>
    )
  );
};
