import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';




export function PlayerCard({item, addFavorite, removeFavorite}) {
  
  return (
    <Card style={{ width: 400 }}>
      <Card.Header className="name">{item.name}</Card.Header>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
      
        <ListGroup className="list-group-flush" variant="flush">
          <ListGroup.Item>Number: {item.number}</ListGroup.Item>
          <ListGroup.Item>Nationality: {item.country}</ListGroup.Item>
          <ListGroup.Item>Position: {item.position}</ListGroup.Item>
          <ListGroup.Item>Minutes: {item.minutes}</ListGroup.Item>
        </ListGroup>
        <button className="add-favorite" onClick={() => {addFavorite(item)}}>Add to Favorites</button>
        <button className="remove-favorite" onClick={() => {removeFavorite(item)}}>Remove from Favorites</button>
      </Card.Body>
    </Card>


  );
}

