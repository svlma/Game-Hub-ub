import React from "react";
import useScreenShots from "../hooks/useScreenShots";
import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
const Screenshots = ({ gameId }) => {
  const { data: screenshots, isLoading, error } = useScreenShots(gameId);
  if (isLoading) return <Spinner />;
  if (error) throw error;
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
        {screenshots?.results.map((s) => (
          <Image src={s.image} key={s.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Screenshots;
