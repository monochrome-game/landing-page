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
];
const FIVE_SECONDS = 5 * 1000;

export type MonochromeLandingHeaderProps = {};

export const MonochromeLandingHeader: React.FC<
  MonochromeLandingHeaderProps
> = ({}) => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [role, setRole] = useState(roles[0]);

  useEffect(() => {
    const tm = setInterval(() => {
      setRoleIdx((cur) => cur + 1);
    }, FIVE_SECONDS);

    return () => {
      clearTimeout(tm);
    };
  }, []);

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
        {/* <styled.span textDecoration={"underline"}>
          {roles[roleIdx % roles.length]}
        </styled.span> */}
        <styled.select
          w="auto"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          bg="gsLightest"
          color="gsDarkest"
          borderRadius={"md"}
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
