import React from 'react';

const person = (data) => {
	return <p> Name : {data.name} {data.children} Age: {data.age}</p>
};

export default person;