import React from "react";
import { Box, Flex, styled } from "../../styled-system/jsx";

export type MonochromeLandingFormProps = {};

export const MonochromeLandingForm: React.FC<
  MonochromeLandingFormProps
> = ({}) => {
  return (
    <styled.form data-netlify={true} method="POST" name="monochrome_waitlist">
      <Flex flexShrink={0} flexDir={"column"} gap={"2"} my={"8"} px="2">
        <styled.label>
          <Box my={"1"} mx="2px" w="calc(100% - 4px)">
            Interested in seeing what Monochrome can do?
          </Box>
          <styled.input
            borderRadius="md"
            bg="gsWhite"
            borderStyle={"solid"}
            borderWidth={"2px"}
            borderColor={"gsLight"}
            w="100%"
            placeholder="email"
            px={"2"}
            py={"2"}
          ></styled.input>
        </styled.label>
        <styled.button
          mx="2px"
          w="calc(100% - 4px)"
          py={"2"}
          bg="gsDarkest"
          color="gsWhite"
          fontFamily={"barriecito"}
          fontSize={"lg"}
          type="submit"
          _hover={{
            bg: "gsDarker",
          }}
        >
          Join the Waitlist
        </styled.button>
      </Flex>
    </styled.form>
  );
};
