import React from 'react';
import './index.css';

const Channel = () => {
    
    const data = [
        {
            channelName: "daniel craig",
            movies: [
                {
                    title: "casino royale",
                    startTime: 9,
                    endTime: 11
                },
                {
                    title: "quantum of solace",
                    startTime: 9,
                    endTime: 11
                },
                {
                    title: "skyfall",
                    startTime: 9,
                    endTime: 11
                },
                {
                    title: "spectre",
                    startTime: 9,
                    endTime: 11
                },
                {
                    title: "no time to die",
                    startTime: 9,
                    endTime: 11
                }
            ]
        },
        {
            channelName: "pierce brosnan",
            movies: [
                {
                    title: "goldeneye",
                    startTime: 9,
                    endTime: 11
                },
                {
                    title: "tomorrow never dies",
                    startTime: 9,
                    endTime: 11
                },
                {
                    title: "the world is not enough",
                    startTime: 9,
                    endTime: 11
                },
                {
                    title: "die another day",
                    startTime: 9,
                    endTime: 11
                }
            ]
        },
        {
            channelName: "timothy dalton",
            movies: [
                {
                    title: "the living daylights",
                    startTime: 9,
                    endTime: 11
                },
                {
                    title: "licence to kill",
                    startTime: 9,
                    endTime: 11
                }
            ]
        },
        {
            channelName: "roger moore",
            movies: [
                {
                    title: "live and let die",
                    startTime: 9,
                    endTime: 11
                },
                {
                    title: "the man with the golden gun",
                    startTime: 9,
                    endTime: 11
                },
                {
                    title: "the spy who loved me",
                    startTime: 9,
                    endTime: 11
                },
                {
                    title: "moonraker",
                    startTime: 9,
                    endTime: 11
                },
                {
                    title: "for your eyes only",
                    startTime: 9,
                    endTime: 11
                },
                {
                    title: "octopussy",
                    startTime: 9,
                    endTime: 11
                },
                {
                    title: "a view to a kill",
                    startTime: 9,
                    endTime: 11
                },
            ]
        },
        {
            channelName: "george lazenby",
            movies: [
                {
                    title: "on her majesty's secret service",
                    startTime: 9,
                    endTime: 11
                }
            ]
        },
        {
            channelName: "david niven",
            movies: [
                {
                    title: "casino royale",
                    startTime: 9,
                    endTime: 11
                }
            ]
        },
        {
            channelName: "sean connery",
            movies: [
                {
                    title: "dr. no",
                    startTime: 9,
                    endTime: 11
                },
                {
                    title: "from russia with love",
                    startTime: 9,
                    endTime: 11
                },
                {
                    title: "goldfinger",
                    startTime: 9,
                    endTime: 11
                },
                {
                    title: "thunderball",
                    startTime: 9,
                    endTime: 11
                },,
                {
                    title: "you only live twice",
                    startTime: 9,
                    endTime: 11
                },
                {
                    title: "diamonds are forever",
                    startTime: 9,
                    endTime: 11
                },
                {
                    title: "never say never again",
                    startTime: 9,
                    endTime: 11
                }
            ]
        }
    ]
    
    return (
        <div className="channels">
            {(data || []).map((channel) => {
                return (
                    <div className="channels__channel">
                        <h3>{channel.channelName}</h3>
                        <div className="channels__channel-movie-list">
                            {(channel.movies || []).map((movie) => {
                                return (
                                    <div className="channels__channel-movie">
                                        <p>{movie.title}</p>
                                        
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Channel;