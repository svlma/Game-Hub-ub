import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = ({ onSelectSortOrder, selectedOrder }) => {
  const sort = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

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
            onClick={() => onSelectSortOrder(order.value)}
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
