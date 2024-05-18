import React, { PureComponent } from 'react';
import Card from 'react-bootstrap/Card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'ORG',
        r1: 4000,
        r2: 2400,
        r3: -2400,
    },
    {
        name: 'SIG',
        r1: 3000,
        r2: -1398,
        r3: 2210,
    },
    {
        name: 'RQ',
        r1: 2000,
        r2: 5800,
        r3: 2290,
    },
];

export default class ScoreBoard extends PureComponent {
    static demoUrl = 'https://codesandbox.io/p/sandbox/mixed-bar-chart-lv3l68';

    render() {
        return (
            <Card>
                <Card.Header>
                    <h6>
                        Score Board
                    </h6>
                </Card.Header>
                <Card.Body style={{height: '250px'}}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="r1" stackId="a" fill="#8884d8" />
                            <Bar dataKey="r2" stackId="a" fill="#82ca9d" />
                            <Bar dataKey="r3" fill="#ffc658" />
                        </BarChart>
                    </ResponsiveContainer>
                </Card.Body>
            </Card>
        );
    }
}

