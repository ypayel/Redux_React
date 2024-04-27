// 2. Utwórz komponent funkcyjny Button który przyjmuje jako props -
// children tekst wpisany w miejscu renderu komponentu oraz powinien obsługiwać zdarzenie onClick,
// po wcisnięciu przycisku powinno wyswietlic alert, że button został wcisnięty

type Props = {
    children: string;
  };
  
  export const Button = ({ children }: Props) => {
    // sposób I - dodanie handlera dla alertu, nowa funkcja strzałkowa
    const handleAlert = () => alert("kliknieto przycisk!");
  
    // sposób II - dodanie bezposrednio funkcji anonimowej dla eventu onClick
    return (
      <button onClick={() => alert("kliknieto przycisk z funkcji anonimowej!")}>
        {children}
      </button>
    );
  };