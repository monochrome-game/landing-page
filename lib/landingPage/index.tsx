"use client";
import React, { useEffect, useState } from "react";
import { Box, Flex, styled } from "@/styled-system/jsx";
import { MonochromeLandingHeader } from "./header";
import { MonochromeLandingForm } from "./form";

export type LandingPageProps = {};

export const LandingPage: React.FC<LandingPageProps> = ({}) => {
  return (
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
          Monochrome is your chance to release your inner Hercule Poirot and/or
          Agatha Christie (or any other detective / author combo of your
          choice). Based on the parlor-style of murder mystery games, Monochrome
          brings the excitement and intrigue of solving (and acting out)
          mysteries to your phone. Whether you&apos;d rather be writing, acting
          in, or solving mysteries, Monochrome has you covered
        </styled.p>
        <styled.ul
          listStyle={"inside"}
          fontFamily={"specialElite"}
          fontSize={"sm"}
        >
          <styled.li py={"2"}>
            Piece together mysteries crafted by the Monochrome team through
            physical clues, character testimonies, laboratory analyses, and more
          </styled.li>
          <styled.li py={"2"}>
            Collaborate with fellow detectives -- or keep them at arms length to
            keep the glory for yourself
          </styled.li>
          <styled.li py={"2"}>
            Take on the mantle of the characters within your story to act out
            the mystery in real time
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

      <MonochromeLandingForm />

      <styled.h3 fontSize="xl" fontFamily={"barriecito"} mt={"2"}>
        Coming October 2023
      </styled.h3>
    </Flex>
  );
};