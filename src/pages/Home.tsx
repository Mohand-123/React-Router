import { useLoaderData } from "react-router";

function Home() {
  const weather = useLoaderData() as string;

  return (
    <>
      <h1>Hello from Home</h1>
      <p>Today is a {weather} day</p>
    </>
  );
}

export default Home;