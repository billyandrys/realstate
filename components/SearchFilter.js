import { useEffect, useState } from "react";
import {
  Flex,
  Select,
  Box,
  Text,
  Input,
  Spinner,
  Icon,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";
import Image from "next/image";
import Search from "@/pages/search";
import { filterData, getFilterValues } from "@/ultls/filterData";



const SearchFilter = (filterValues) => {
  const [filters, setFilters] = useState(filterData);
  const router = useRouter()

  const searchProperties = (filterValues) => {
    const path = router.pathname
    const { query } = router 
    const values  = getFilterValues(filterValues)
    values.forEach((item) =>{
      query[item.name] = item.value
    })

    router.push({pathname:path, query})
  };

  return (
    <Flex bg="gray.100" p="4" justifyContent="center" flex="5">
      {filterData.map((filter) => (
        <Box key={filter.queryName}>
          <Select
            placeholder={filter.placeholder}
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }>
              {filter?.items?.map((item) =>(
                <option value={item.value} key={item.value}>
                  {item.name}
                </option>
              ))}
            </Select>
        </Box>
      ))}
    </Flex>
  );
};

export default SearchFilter;

