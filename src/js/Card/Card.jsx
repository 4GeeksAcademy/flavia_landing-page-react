import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MyCard = () => {
	return (
		<div className="d-flex flex-row">
			<Card style={{ width: '18rem' }} className="me-3 text-center">
				<Card.Img variant="top" src="https://via.placeholder.com/500x325" />
				<Card.Body>
					<Card.Title className="pt-2">Card Title</Card.Title>
					<Card.Text className="pb-5">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Simimet sed non voluptatum esse commodi sapiente quam obcaecati consequatur.
					</Card.Text>
				</Card.Body>
				<div className="border p-2 bg-secondary-subtle">
					<Button variant="primary">Go somewhere</Button>
				</div>
    		</Card>
			<Card style={{ width: '18rem' }} className="me-3 text-center">
				<Card.Img variant="top" src="https://via.placeholder.com/500x325" />
				<Card.Body>
					<Card.Title className="pt-2">Card Title</Card.Title>
					<Card.Text className="pb-5">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Simimet sed non voluptatum esse commodi sapiente quam obcaecati consequatur.
					</Card.Text>
				</Card.Body>
				<div className="border p-2 bg-secondary-subtle">
					<Button variant="primary">Go somewhere</Button>
				</div>
    		</Card>
			<Card style={{ width: '18rem' }} className="me-3 text-center">
				<Card.Img variant="top" src="https://via.placeholder.com/500x325" />
				<Card.Body>
					<Card.Title className="pt-2">Card Title</Card.Title>
					<Card.Text className="pb-5">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Simimet sed non voluptatum esse commodi sapiente quam obcaecati consequatur.
					</Card.Text>
				</Card.Body>
				<div className="border p-2 bg-secondary-subtle">
					<Button variant="primary">Go somewhere</Button>
				</div>
    		</Card>
			<Card style={{ width: '18rem' }} className="text-center">
				<Card.Img variant="top" src="https://via.placeholder.com/500x325" />
				<Card.Body>
					<Card.Title className="pt-2">Card Title</Card.Title>
					<Card.Text className="pb-5">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Simimet sed non voluptatum esse commodi sapiente quam obcaecati consequatur.
					</Card.Text>
				</Card.Body>
				<div className="border p-2 bg-secondary-subtle">
					<Button variant="primary">Go somewhere</Button>
				</div>
    		</Card>
		</div>
	)
};

export default MyCard;
