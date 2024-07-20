import { Button } from "react-bootstrap";

export default function PrimaryButton({ value, variant, handleClick }) {
  return (
    <Button variant={variant} className="btn-lg mx-2" onClick={handleClick}>
      {value}
    </Button>
  );
}
