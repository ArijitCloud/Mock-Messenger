import "./HamburgerButton.css";
interface HamburgerButtonProps {
  readonly onButtonClick: () => void;
}

//TODO: localize this
const hamburgerButtonText="Open friend list panel";

export default function HamburgerButton({
    
  onButtonClick,
}: HamburgerButtonProps) {
  return (
    <div
      className="hamburger-icon"
      title={hamburgerButtonText}
      aria-label={hamburgerButtonText}
      onClick={onButtonClick}
    >
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
}
