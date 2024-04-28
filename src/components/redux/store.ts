import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slice";

// krok 1 - utwworzenie store
export const store = configureStore({
  reducer: { appReducer },
});

// krok 2 - dodanie store do aplikacji w pliku index.tsx

// krok 3 utworzenie redux state slice - plik redux/slice.tsx

// krok 4 utworzenie typów dla state i dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// krok 5 useSelector - pobieranie elementów z naszego konrenera

// jak czytac pliki redux
// 1. store.ts
// 2. slice.ts
// 3. hooks.ts
// 4. index.tsx - > udostepnienie redux dla aplikacji
// 5. App.tsx - użycie useDispatch i useSelector



//Jak tworzyc redux
//1.Najpierw tworzymy w folderze redux swoj komponent(folder, folder w moim przypadku ma nazwe Counter)
//2.Tworzymy try pliki o nazwach hook.ts, slice.ts, store.ts
//3.// krok 1 - utwworzenie store
// export const storeCount = configureStore({
//   reducer: { appReducer },
// });
//3.1 exportujemy nasze hooki w store
// export type RootState = ReturnType<typeof storeCount.getState>;  // tutaj mam inna nazwe storeCount, a nie jak u Szymona store
// export type AppDispatch = typeof storeCount.dispatch;            // Niema roznicy tak poprostu chcialem
//4. Robi wrap w index.ts
// <Provider store={storeCount}>  // to w mojrm przypadku jest taka nazwa
// <App />
// </Provider>
//5.Wchodzimy w plik slice.ts
//5.1 Zdefiniuj typ stanu
// type AppStateType = {
//   count: number,
// };
//5.2 Zdefiniuj początkowy stan
// const appInitState: AppStateType = {
//   count: 0,
// };
//5.3 Tworzymy appSlice
// export const appSlice = createSlice({
//   name: "app",     // nazwa aplikacji
//   initialState: appInitState,    // pobieramy stan
//   reducers: {      // tutaj tworzymy nasze funkcji
                      // reducers to objekt i zawsze musi BYC PRZECINEK PO MIEDZY FUKCJAMI `,`
// increment: (state) => {
//   // Zwiekszamy liczbe o 1
//   return {
//       ...state,
//       count: state.count + 1
//   }
// },

// decrement: (state) => {
//   //Zmniejszamy liczbe o 1
//   return {
//       ...state,
//       count: state.count  - 1
//   }
// }
// }
// })
//5.4 Exportujemy nasze dwe fukncji ( w tym przypadku )
// export const { increment, decrement } = appSlice.actions;
// export default appSlice.reducer // To wszystko sie robi w pliku slice.ts
//6 Otwieramy plik hook.ts
//6.1 Tutaj tworzymy hooki zeby pozniej wyswietlic dzialanie naszej malej aplikacji
// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
//7 Otwieramy plik App.tsx
//const dispatch = useAppDispatch();
//7.1 Defeniejemy nasz callback
// const { count } = useAppSelector((state) => state.appReducer)
//7.2 Tworzymy handler dla naszych funkcji
// const handleIncrement = () => dispatch(increment())  
// const handleDecrement = () => dispatch(decrement())
//7.3 W return chcemy wszystko wyswietlic 
// return (
//   <div className="App">
//     <p>Number: {count}</p>
//     <button onClick={handleIncrement}>+</button>
//     <button onClick={handleDecrement}>-</button>
//</div>
// );




