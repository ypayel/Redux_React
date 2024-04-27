// 1. Utwórz komponent funkcyjny Banner który wyświetla tekst przekazany przez propsy

type Props = {
    text: string;
  };
  
  export const Banner = ({ text }: Props) => {
    return <div>{text}</div>;
  };