"use client";
import React, { FormEvent, useCallback, useEffect, useState } from "react";
import { Box, Flex, styled } from "@/styled-system/jsx";
import { MonochromeLandingHeader } from "./header";
import { MonochromeLandingForm } from "./form";

export type LandingPageProps = {};

export const LandingPage: React.FC<LandingPageProps> = ({}) => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
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

  return (
    <styled.form
      w="100%"
      data-netlify={true}
      onSubmit={(event) => onSubmit(event)}
      name="monochrome_waitlist"
    >
      <Flex
        alignItems={"center"}
        flexDirection={"column"}
        fontFamily={"specialElite"}
        overflow="auto"
        w="100%"
        maxH={"100vh"}
        pb="4"
      >
        <MonochromeLandingHeader />

        <Flex
          flexShrink={0}
          flexDir={"column"}
          gap={"8"}
          py={"2"}
          px={"8"}
          maxW="650px"
        >
          <styled.p mt={"8"}>
            Monochrome is your chance to release your inner Hercule Poirot
            and/or Agatha Christie (or any other detective / author combo of
            your choice). Based on the parlor-style of murder mystery games,
            Monochrome brings the excitement and intrigue of solving (and acting
            out) mysteries to your phone. Whether you&apos;d rather be writing,
            acting in, or solving mysteries, Monochrome has you covered.
          </styled.p>
          <styled.ul
            listStyle={"inside"}
            fontFamily={"specialElite"}
            fontSize={"sm"}
          >
            <styled.li py={"2"}>
              Piece together mysteries through physical clues, character
              testimonies, laboratory analyses, and more
            </styled.li>
            <styled.li py={"2"}>
              Collaborate with fellow detectives -- or keep them at arms length
              to keep the glory for yourself
            </styled.li>
            <styled.li py={"2"}>
              Don the mantle of the characters within your story to act out the
              mystery in real time
            </styled.li>
            <styled.li py={"2"}>
              Play with friends in-person or remotely -- or solve things all on
              your own
            </styled.li>
            <styled.li py={"2"}>
              Write your own mysteries to share with the world
            </styled.li>
          </styled.ul>
        </Flex>

        <MonochromeLandingForm hasSubmitted={hasSubmitted} />

        <styled.h3 fontSize="xl" fontFamily={"barriecito"} mt={"2"}>
          Coming October 2023
        </styled.h3>
      </Flex>
    </styled.form>
  );
};
