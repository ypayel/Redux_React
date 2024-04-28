import { createContext, useState } from "react"
import { defaultSongs } from "./songs";

type Songs = {
  id: number;
  title: string;
  artist: string;
  duration: string;
  album: string;
};

type SongContextType = {
    addFavList: (song: Songs) => void,
    remove: (id: number) => void,
    song: Songs[],
    favSongs: Songs[],
}

export const SongContext = createContext<SongContextType>(
    {} as SongContextType
);

type Props = {
    children: JSX.Element | JSX.Element[];
}

export const SongContextProvider = ({children } : Props) => {
const [song, setSong] = useState<Songs[]>(defaultSongs);
const [favSongs, setFavSongs] = useState<Songs[]>([]);

const addFavList = (song: Songs) => {
  setFavSongs((prev) => [...prev, song])
}

const remove = (id: number) => {
  setFavSongs((prev) => prev.filter((song) => song.id !== id));
}


  return (
    <SongContext.Provider value ={{
        song,
        favSongs,
        addFavList,
        remove,
    }}>
       {children} 
    </SongContext.Provider>
  )
}