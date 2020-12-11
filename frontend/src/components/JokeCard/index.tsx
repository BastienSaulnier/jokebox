import * as React from "react";
import "./index.scss";

import axios from "axios";
import Skeleton from "react-loading-skeleton";

export interface IJokeCardProps {}

export interface IJokeCardState {
  access_token?: string;
  content?: any;
  isLoadingContent?: boolean;
  isAnswerShown?: boolean;
}

export default class JokeCard extends React.Component<
  IJokeCardProps,
  IJokeCardState
> {
  constructor(props: IJokeCardProps) {
    super(props);

    this.state = {
      access_token:
        "kBcdkPaTD-5icbjsN7j_MaIFfDo_0NABi_k5Efs-N_8u.u_i0RKzA6pOYVP4rnHo",

      isLoadingContent: true,
      isAnswerShown: false,
      content: {},
    };
  }

  async componentDidMount() {
    this.getJoke();
  }

  async getJoke() {
    const { access_token } = this.state;
    await this.setState({ isLoadingContent: true });
    await axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://blague.xyz/api/joke/random",
        {
          headers: {
            Authorization: `${access_token}`,
          },
        }
      )
      .then(async (response) => {
        const res = await response.data.joke;
        await this.setState({ content: res });
        await this.setState({ isLoadingContent: false });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async reloadJoke() {
    await this.setState({ isAnswerShown: false });
    await this.setState({ isLoadingContent: true });
    await this.getJoke();
  }

  async showAnswer() {
    await this.setState({ isAnswerShown: true });
  }

  public render() {
    const { content, isLoadingContent, isAnswerShown } = this.state;
    return (
      <div className="JokeCard">
        <div className="JokeCardContent">
          {isLoadingContent ? (
            <Skeleton height={30}></Skeleton>
          ) : (
            <React.Fragment>
              <div className="quoteWrapper">
                {isLoadingContent ? null : (
                  <React.Fragment>
                    <p className={isAnswerShown ? "quote" : "quote"}>
                      {content.question}
                    </p>
                    <p
                      className={isAnswerShown ? "quote shown" : "quote hidden"}
                    >
                      {content.answer}
                    </p>
                  </React.Fragment>
                )}
              </div>
              <div className="buttonWrapper">
                {isAnswerShown ? (
                  <React.Fragment>
                    <button
                      className={
                        isAnswerShown ? "button shown" : "button hidden"
                      }
                      onClick={() => this.reloadJoke()}
                    >
                      LOL!!!!
                    </button>
                    <button
                      className={
                        isAnswerShown ? "button shown" : "button hidden"
                      }
                      onClick={() => this.reloadJoke()}
                    >
                      C nul..
                    </button>
                  </React.Fragment>
                ) : (
                  <button
                    className={isAnswerShown ? "button hidden" : "button shown"}
                    onClick={() => this.showAnswer()}
                  >
                    ChépAaAAa??
                  </button>
                )}
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}
