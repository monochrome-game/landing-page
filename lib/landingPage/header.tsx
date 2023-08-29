import React, { useEffect, useState } from "react";
import { Flex, styled } from "../../styled-system/jsx";

const roles = [
  "detective",
  "villain",
  "ghost",
  "con artist",
  "mysterious figure",
  "cunning thief",
  "mastermind",
  "crime novelist",
  "private investigator",
];

export type MonochromeLandingHeaderProps = {};

export const MonochromeLandingHeader: React.FC<
  MonochromeLandingHeaderProps
> = ({}) => {
  const [role, setRole] = useState(roles[0]);

  return (
    <Flex
      w="100%"
      flexDir={"column"}
      bg="darkRed"
      color="gsWhite"
      alignItems={"center"}
      p={"2"}
    >
      <styled.h1 fontFamily="barrio" fontSize={"xxl"} flexShrink={0}>
        Monochrome
      </styled.h1>
      <styled.h2
        textAlign={"center"}
        flexShrink={0}
        fontSize="xl"
        fontFamily={"barriecito"}
        mt={"2"}
      >
        <styled.span>Be the </styled.span>
        <styled.select
          name="role"
          w="auto"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          bg="gsLightest"
          color="gsDarkest"
          borderRadius={"md"}
          _focusVisible={{
            outlineColor: "gsLight",
            outlineOffset: "0.5",
            outlineStyle: "dotted",
            outlineWidth: "medium",
          }}
        >
          {roles.map((r) => (
            <option key={`r-${r}`} value={r}>
              {r}
            </option>
          ))}
        </styled.select>
        <styled.span> you&apos;ve always wanted to be</styled.span>
      </styled.h2>
    </Flex>
  );
};
