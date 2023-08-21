import React from "react";
import useTrailers from "../hooks/useTrailers";
import { Spinner } from "@chakra-ui/react";
const GameTrailer = ({ gameId }) => {
  const { data: movie, isLoading, error } = useTrailers(gameId);

  if (isLoading) return <Spinner />;
  if (error) throw error;
  const first = movie?.results[0];

  return !first ? null : (
    <video src={first.data[480]} poster={first.preview} controls />
  );
};

export default GameTrailer;
