type Props = {
    title: string;
  };
  
  export const ListItem = ({ title }: Props) => {
    return <li>{title}</li>;
  };