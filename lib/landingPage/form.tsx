"use client";
import React, { useState } from "react";
import { z } from "zod";
import { Box, Flex, styled } from "../../styled-system/jsx";

export type MonochromeLandingFormProps = {
  hasSubmitted: boolean;
};

export const MonochromeLandingForm: React.FC<MonochromeLandingFormProps> = ({
  hasSubmitted,
}) => {
  const [email, setEmail] = useState("");

  const isValidEmail = z.string().email().safeParse(email).success;

  if (hasSubmitted) {
    return (
      <Flex
        justifyContent={"center"}
        alignItems="center"
        my={"1"}
        mx="2px"
        w="calc(100% - 4px)"
        color="darkRed"
        fontSize={"sm"}
      >
        Thanks! We&apos;ll reach out when Monochrome is available.
      </Flex>
    );
  }

  return (
    <>
      <input type="hidden" name="form-name" value="monochrome_waitlist" />
      <Flex flexShrink={0} flexDir={"column"} gap={"2"} my={"8"} px="2">
        <styled.label>
          <Box my={"1"} mx="2px" w="calc(100% - 4px)">
            Interested in seeing what Monochrome can do?
          </Box>
          <styled.input
            name="email"
            borderRadius="md"
            bg="gsWhite"
            borderStyle={"solid"}
            borderWidth={"2px"}
            borderColor={"gsLight"}
            w="100%"
            placeholder="email"
            px={"2"}
            py={"2"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></styled.input>
        </styled.label>
        <styled.button
          cursor={"pointer"}
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
          _disabled={{
            opacity: "0.5",
            bg: "gsDarkest !important",
          }}
          disabled={!isValidEmail}
        >
          Join the Waitlist
        </styled.button>
      </Flex>
    </>
  );
};
