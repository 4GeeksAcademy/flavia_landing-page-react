import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const MyCard = () => {
	return (
		<Row xs={1} md={4} className="g-4">
		  {Array.from({ length: 4 }).map((_, idx) => (
			<Col key={idx}>
			  <Card>
				<Card.Img variant="top" src="https://via.placeholder.com/500x325" />
				<Card.Body className="text-center">
				  <Card.Title>Card title</Card.Title>
				  <Card.Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, corporis iusto illum cupiditate architecto similique odit omnis deserunt? Harum fugiat accusamus quisquam velit eum dolorum amet, repellendus quod hic culpa?
				  </Card.Text>
				</Card.Body>
				<div className="border p-3 text-center bg-light-subtle">
				<Button variant="primary">Go somewhere</Button>
				</div>
			  </Card>
			</Col>
		  ))}
		</Row>
	  );
};

export default MyCard;
