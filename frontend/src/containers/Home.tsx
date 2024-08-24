import { useEffect } from "react";
import { useAppDispatch } from "../app/Hooks";
import { fetchNews } from "../features/News/NewsThunks";
import NewsList from "../features/News/NewsList";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
  return (
    <div>
      <NewsList />
    </div>
  );
};

export default Home;
