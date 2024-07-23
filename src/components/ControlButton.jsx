import { Button } from "react-bootstrap";
import { useGame } from "../GameContext";

const ControlButton = ({ value, variant, handleClick }) => {
  const { gameMode } = useGame();
  const style = {
    Standard: "btn-lg mx-2",
    Commander: "btn-sm mx-1",
  };
  const ButtonStyle =
    gameMode === "Standard" ? style["Standard"] : style["Commander"];

  return (
    <Button variant={variant} className={ButtonStyle} onClick={handleClick}>
      {value}
    </Button>
  );
};

export default ControlButton;
