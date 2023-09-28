import keyboardNumbersSound from "../../sounds/keyboard-numbers.mp3";
import keyboardSymbolsSound from "../../sounds/keyboard-simbols.mp3";

function Button(props) {
  const playKeyboardNumbersSound = () => {
    const audio = new Audio(keyboardNumbersSound);
    audio.play();
  };

  const playKeyboardSymbolsSound = () => {
    const audio = new Audio(keyboardSymbolsSound);
    audio.play();
  };

  const handleButtonClick = () => {
    if (/[0-9]/.test(props.label)) {
      playKeyboardNumbersSound(); 
    } else {
      playKeyboardSymbolsSound(); 
    }

    props.onClick(props.label);
  };

  return (
    <button onClick={handleButtonClick} className={props.className}>
      {props.label}
    </button>
  );
}

export default Button;

