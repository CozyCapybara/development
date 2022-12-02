import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ListGroup from 'react-bootstrap/ListGroup';




export function PlayerCard({item, addFavorite, removeFavorite}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{item.name}</ListGroup.Item>
          <ListGroup.Item>Number: {item.number}</ListGroup.Item>
          <ListGroup.Item>Nationality: {item.country}</ListGroup.Item>
          <ListGroup.Item>Position: {item.position}</ListGroup.Item>
          <ListGroup.Item>Minutes: {item.minutes}</ListGroup.Item>
        </ListGroup>
        <button onClick={() => {addFavorite(item)}}>Add to Group</button>
        <button onClick={() => {removeFavorite(item)}}>Remove from Group</button>
      </Card.Body>
    </Card>
  );
}

