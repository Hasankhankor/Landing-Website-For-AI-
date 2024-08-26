"use client";
import { Button, Flex, Heading, Spacer, Text, keyframes } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import HeroBottomSVG from "./HeroBottomSVG";
import { StargateColors } from "#/src/utils/Colors";
import { LuZap } from "react-icons/lu";
import Link from "next/link";
import FooterBg from "../Footer/FooterBg";

const words = [
  "Copywriter",
  "Assistant",
  "Marketer",
  "Developer",
  "Strategist",
  "Creator",
];

const Header = () => {
  const [currentWord, setCurrentWord] = useState<string>(words[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setCurrentWord(words[index]);
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
      setCurrentWord(words[index]);
    }, 2000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <Flex
      as={motion.div}
      initial="initial"
      animate="animate"
      minH="100svh"

      bgSize={"200% 200%"}
      animation={`${bgAnimation} 20s ease-in-out alternate infinite`}
      position={"relative"}
      align={"center"}
      justify={"center"}
      direction={"column"}
      px={2}
    >
       <FooterBg />
      <Flex bg={"#ffffff50"} px={4} rounded={"full"} mb={5}>
        <Text color={StargateColors.white} fontSize={"xs"}>
          Unleash The Power of AI
        </Text>
      </Flex>
      <Heading
        fontSize={{
          base: 48,
          md: 64,
          lg: 84,
        }}
        color={StargateColors.white}
        lineHeight={1}
        textAlign={"center"}
      >
        Your Ultimate
      </Heading>
      <AnimatePresence mode="wait">
        <Heading
          as={motion.h1}
          fontSize={{
            base: 48,
            md: 64,
            lg: 84,
          }}
          key={currentWord}
          color={StargateColors.white}
          lineHeight={1}
          initial={{ opacity: 0.2, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0.2, filter: "blur(4px)" }}
        >
          {currentWord}
        </Heading>
      </AnimatePresence>
      <Text color={StargateColors.white} maxW={500} textAlign={"center"} mt={5}>
        Elevating AI: The Ultimate Platform for Intelligent Solutions
      </Text>




      <HeroBottomSVG />

    </Flex>
  );
};

const bgAnimation = keyframes`
  0% {
    background-position: 0% 100%
  }

  to {
    background-position: 100% 100%
  }
`;

export default Header;
