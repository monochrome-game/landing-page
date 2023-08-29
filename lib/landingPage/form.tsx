"use client";
import React, { FormEvent, useCallback, useState } from "react";
import { Box, Flex, styled } from "../../styled-system/jsx";
import { z } from "zod";

export type MonochromeLandingFormProps = {};

export const MonochromeLandingForm: React.FC<
  MonochromeLandingFormProps
> = ({}) => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const onSubmit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const rawData = event.target;
    const formData = new FormData(rawData as any);

    const resp = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    });
    if (resp.status === 200 || 201) {
      setHasSubmitted(true);
    }
  }, []);

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
    <styled.form
      data-netlify={true}
      onSubmit={(event) => onSubmit(event)}
      name="monochrome_waitlist"
    >
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
    </styled.form>
  );
};
