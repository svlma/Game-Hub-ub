import { Button, HStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const ExpandableText = ({ children }) => {
  const [expanded, setExpanded] = useState(false);
  if (!children) return null;
  const limit = 300;
  if (children.length < limit) return <Text>{children}</Text>;
  const summary = expanded ? children : children.substring(0, limit) + "...";
  return (
    <>
      <Text>
        {summary}
        <Button
          size="xs"
          onClick={() => setExpanded(!expanded)}
          fontWeight="bold"
          colorScheme="yellow"
          marginLeft={1}
        >
          {expanded ? "Show less" : "Read more"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
