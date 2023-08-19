import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import gameQueryStore from "../store";

const SortSelector = () => {
  const sort = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const selectedOrder = gameQueryStore((s) => s.gameQuery.ordering);
  const setSelectedOrder = gameQueryStore((s) => s.setSortOrder);
  const currentselectedOrder = sort.find(
    (order) => order.value === selectedOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by : {currentselectedOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sort.map((order) => (
          <MenuItem
            onClick={() => setSelectedOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
