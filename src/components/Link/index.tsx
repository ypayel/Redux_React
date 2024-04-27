// 3. Utwórz komponent Link który wyświetla link <a> wystylowany jak button
// - przyjmuje za props link oraz tekst jako children.

type Props = {
    href: string;
    children: string;
  };
  
  export const Link = ({ href, children }: Props) => {
    return (
      // eslint-disable-next-line react/jsx-no-target-blank
      <a href={href} target="_blank">
        {children}
      </a>
    );
  };