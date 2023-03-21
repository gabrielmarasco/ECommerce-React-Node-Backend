import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Products(props) {
  const { product } = props;
  return (
    <Card>
      <Link to={`/product/${product.id}`}>
        <img src={product.img} className="card-img-top" alt={product.model} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.id}`}>
          <Card.Title>
            {product.marc} {product.model}
          </Card.Title>
        </Link>
        <p>{product.category}</p>
      </Card.Body>

      <Card.Text>
        <span className="span-price">{product.price}</span>
      </Card.Text>
      <Button>Add to cart</Button>
    </Card>
  );
}
