
import keyboardNumbersSound from "../../sounds/keyboard-numbers.mp3";
import keyboardSymbolsSound from "../../sounds/keyboard-simbols.mp3";

function Button(props) {
  // Función para reproducir el sonido de números
  const playKeyboardNumbersSound = () => {
    const audio = new Audio(keyboardNumbersSound);
    audio.play();
  };

  // Función para reproducir el sonido de símbolos
  const playKeyboardSymbolsSound = () => {
    const audio = new Audio(keyboardSymbolsSound);
    audio.play();
  };

  // Función para manejar el clic del botón
  const handleButtonClick = () => {
    // Lógica para determinar si el botón es un número o un símbolo
    if (/[0-9]/.test(props.label)) {
      playKeyboardNumbersSound(); // Reproduce el sonido de números
    } else {
      playKeyboardSymbolsSound(); // Reproduce el sonido de símbolos
    }

    // Llama a la función onClick proporcionada por el padre (por ejemplo, Calculator)
    props.onClick(props.label);
  };

  return (
    <button onClick={handleButtonClick} className={props.className}>
      {props.label}
    </button>
  );
}

export default Button;

