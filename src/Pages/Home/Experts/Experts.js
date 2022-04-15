import React from 'react';
import expert1 from '../../../../src/experts/expert-1.jpg';
import expert2 from '../../../../src/experts/expert-2.jpg';
import expert3 from '../../../../src/experts/expert-3.jpg';
import expert4 from '../../../../src/experts/expert-4.jpg';
import expert5 from '../../../../src/experts/expert-5.jpg';
import expert6 from '../../../../src/experts/expert-6.png';
import Expert from '../Expert/Expert';

const experts = [
    {id: 1, name: 'will smith', img: expert1},
    {id: 2, name: 'chris rock', img: expert2},
    {id: 3, name: 'Dowyn rock', img: expert3},
    {id: 4, name: 'messi ', img: expert4},
    {id: 5, name: 'smith', img: expert5},
    {id: 6, name: 'cool smith', img: expert6},
]

const Experts = () => {
    
    return (
        <div className='container'>
            <h1 className='text-center'>Our Experts</h1>
            <div className='row'>
                {
                    experts.map(expert => <Expert
                    key={expert.id}
                    expert ={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;