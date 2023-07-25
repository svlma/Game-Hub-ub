import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { genres } = useGenre();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.key}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
