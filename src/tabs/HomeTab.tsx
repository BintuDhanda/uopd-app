import Home from "../screens/Home";


const HomeTab: React.FC = ({onLogout}:any) => {
  return (
    <>
      <Home onLogout={onLogout}/>
    </>
  );
};

export default HomeTab;
