import Modal from "react-bootstrap/Modal";

function HowToModal({ onClose }) {
  return (
    <div
      className="modal show"
      style={{
        display: "block",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        position: "fixed",
        top: "10%",
        left: "20%",
        height: "70%",
        width: "60%",
        backgroundSize: "100%",
      }}
    >
      <Modal.Header closeButton onClick={onClose}>
        <Modal.Title>How to Play</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <h5>Game Mode</h5>
        <p>
          右上の Config
          ボタンをクリックして、ゲームモードを切り替えることができます。
        </p>
        <p>さぁ、Magic The Gathering のカードゲームを楽しもう！</p>
      </Modal.Body>
    </div>
  );
}

export default HowToModal;
