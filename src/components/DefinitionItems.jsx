import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const DefinitionItems = ({ term, children }) => {
  return (
    <Box padding={5}>
      <Heading as="dt" fontSize="md" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItems;
