import ConfigModal from "./ConfigModal";

function ConfigModalWrapper({ isOpen, onClose }) {
  return isOpen ? (
    <div id="config" className="config-menu">
      <div className="config-menu-content">
        <ConfigModal onClose={onClose} />
      </div>
    </div>
  ) : null;
}

export default ConfigModalWrapper;
