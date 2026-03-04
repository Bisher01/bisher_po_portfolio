import {
  Container,
  Title,
  Text,
  Box,
  useMantineTheme,
  SimpleGrid,
  Paper,
  Group,
} from "@mantine/core";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skillCategories } from "../data/portfolioData";
import { GlitchText } from "./GlitchText";

export function SkillsSection() {
  const theme = useMantineTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Box
      id="skills"
      ref={ref}
      style={{
        padding: "5rem 0",
        backgroundColor: theme.colors.wheatLight[0],
      }}
    >
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <Title
            order={2}
            style={{
              textAlign: "center",
              marginBottom: "3rem",
              color: theme.colors.forestDark[0],
              fontSize: "clamp(2rem, 4vw, 2.5rem)",
              fontWeight: 700,
              letterSpacing: "0.05em",
            }}
          >
            <GlitchText text="Key Skills & Expertise" />
          </Title>
        </motion.div>

        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 3 }}
          spacing="xl"
          style={{
            marginTop: "3rem",
          }}
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ type: "spring" as const, stiffness: 400, damping: 10 }}
                >
                  <Paper
                    shadow="md"
                    p="xl"
                    radius="md"
                    style={{
                      backgroundColor: theme.white,
                      border: `2px solid ${theme.colors.forestLight[0]}`,
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 12px 24px rgba(0,0,0,0.15)";
                      e.currentTarget.style.borderColor =
                        theme.colors.forestMid[0];
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "";
                      e.currentTarget.style.borderColor =
                        theme.colors.forestLight[0];
                    }}
                  >
                    <Group gap="md" style={{ marginBottom: "1.5rem" }}>
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Box
                          style={{
                            padding: "0.75rem",
                            backgroundColor: theme.colors.forestLight[0],
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Icon size={28} color={theme.colors.wheatLight[0]} />
                        </Box>
                      </motion.div>
                      <Title
                        order={3}
                        style={{
                          color: theme.colors.forestDark[0],
                          fontSize: "1.3rem",
                          fontWeight: 600,
                          flex: 1,
                        }}
                      >
                        {category.title}
                      </Title>
                    </Group>

                    <Box
                      component="ul"
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        flex: 1,
                      }}
                    >
                      {category.skills.map((skill, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={
                            isInView
                              ? { opacity: 1, x: 0 }
                              : { opacity: 0, x: -10 }
                          }
                          transition={{
                            type: "spring" as const,
                            stiffness: 100,
                            damping: 12,
                            delay: index * 0.1 + 0.3 + idx * 0.05,
                          }}
                        >
                          <Box
                            component="li"
                            style={{
                              marginBottom: "0.75rem",
                              paddingLeft: "1.5rem",
                              position: "relative",
                            }}
                          >
                            <Box
                              style={{
                                position: "absolute",
                                left: 0,
                                top: "0.6rem",
                                width: "8px",
                                height: "8px",
                                backgroundColor: theme.colors.forestLight[0],
                                borderRadius: "50%",
                              }}
                            />
                            <Text
                              size="sm"
                              style={{
                                color: theme.colors.neutralMid[0],
                                lineHeight: 1.6,
                              }}
                            >
                              {skill}
                            </Text>
                          </Box>
                        </motion.div>
                      ))}
                    </Box>
                  </Paper>
                </motion.div>
              </motion.div>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
