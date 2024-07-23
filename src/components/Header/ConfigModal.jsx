import Modal from "react-bootstrap/Modal";
import { useGame } from "../../GameContext";
import modalBackgroundImage from "../../images/modal-background.png";
import "./ConfigModal.css";

function ConfigModal({ onClose }) {
  const { gameMode, setGameMode } = useGame();

  return (
    <div
      className="modal show"
      style={{
        display: "block",
        position: "fixed",
        top: "0",
        left: "0",
        background: `url(${modalBackgroundImage})`,
        backgroundSize: "100%",
      }}
    >
      <Modal.Dialog className="custom-modal">
        <Modal.Header closeButton onClick={onClose}>
          <Modal.Title>Config</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Game Mode: </p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
              <input
                type="radio"
                id="standardMode"
                name="gameMode"
                value="Standard"
                checked={gameMode === "Standard"}
                onChange={() => setGameMode("Standard")}
              />
              <label htmlFor="normalMode">Standard</label>
            </div>
            <div>
              <input
                type="radio"
                id="commanderMode"
                name="gameMode"
                value="Commander"
                checked={gameMode === "Commander"}
                onChange={() => setGameMode("Commander")}
              />
              <label htmlFor="commanderMode">Commander</label>
            </div>
          </div>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
}

export default ConfigModal;
