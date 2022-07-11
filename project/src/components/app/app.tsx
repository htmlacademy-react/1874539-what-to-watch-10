import MainScreen from '../../pages/main-screen/main-screen';

type AppProps = {
  filmPromo: {
    title: string;
    genre: string;
    releaseDate: Date;
  };
};

function App({ filmPromo }: AppProps): JSX.Element {
  return <MainScreen filmPromo={filmPromo} />;
}

export default App;
