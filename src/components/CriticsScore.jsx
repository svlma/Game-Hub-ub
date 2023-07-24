import { Badge } from "@chakra-ui/react";

const CriticsScore = ({ score }) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : " ";
  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius={4}>
      {score}
    </Badge>
  );
};

export default CriticsScore;
