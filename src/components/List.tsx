import { useEffect, useState } from 'react';
import axios from 'axios';
const ENDPOINT = 'http://localhost:3000';

type Player = {
    id: number;
    name: string;
    team: string;
    score: number;
    createdAt: Date;
    updatedAt: Date;
};

type State = {
    data: Player[] | null;
    name?: string | null;
    team?: string | null;
    score?: number | null;
};

const List = () => {
    const [state, setState] = useState<State>({
        data: null,
        name: null,
        team: null,
        score: null
    });

    const players: Player[] | null = state.data;

    useEffect(() => {
        axios.get(`${ENDPOINT}/players`).then((response) => {
            console.log(response);
            setState((state) => ({ ...state, data: response.data.data }));
        });
    }, []);

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        const element = event.target as HTMLInputElement;
        setState((state) => ({ ...state, [element.name]: element.value }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { name, team, score } = state;
        axios.post(`${ENDPOINT}/players`, { name, team, score }).then(() => {
            axios.get(`${ENDPOINT}/players`).then((response) => {
                setState((state) => ({ ...state, data: response.data.data }));
            });
        });
    };

    const handleDelete = (id: number) => {
        axios.delete(`${ENDPOINT}/players/${id}`).then(() => {
            axios.get(`${ENDPOINT}/players`).then((response) => {
                setState((state) => ({ ...state, data: response.data.data }));
            });
        });
    };
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td>Player</td>
                        <td>Team</td>
                        <td>Score</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {players?.length &&
                        players.map((x) => (
                            <tr key={`${Math.random()}-${x.name}`}>
                                <td>{x.name}</td>
                                <td>{x.team}</td>
                                <td>{x.score}</td>
                                <td>
                                    <button onClick={() => handleDelete(x.id)}>Remove</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <br />
            <form onSubmit={handleSubmit}>
                <h4>Add new players</h4>
                <input name="name" placeholder="player name" onChange={handleChange}></input>
                <input name="team" placeholder="team name" onChange={handleChange}></input>
                <input name="score" placeholder="team score" onChange={handleChange}></input>
                <button>Add</button>
            </form>
        </>
    );
};

export default List;
