import {
  Container,
  Title,
  Timeline,
  Text,
  Box,
  useMantineTheme,
  Badge,
  Group,
} from "@mantine/core";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "../data/portfolioData";
import { generalIcons } from "../constants/icons";

const IconBriefcase = generalIcons.briefcase;

export function ExperienceSection() {
  const theme = useMantineTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Box
      id="experience"
      ref={ref}
      style={{
        padding: "5rem 0",
        backgroundColor: theme.colors.neutralDark[0],
      }}
    >
      <Container size="lg">
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
              color: theme.colors.wheatLight[0],
              fontSize: "clamp(2rem, 4vw, 2.5rem)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Professional Experience
          </Title>
        </motion.div>

        <Timeline
          active={experiences.length}
          bulletSize={40}
          lineWidth={3}
          styles={{
            item: {
              marginBottom: "3rem",
            },
            itemBullet: {
              backgroundColor: theme.colors.forestLight[0],
              border: `3px solid ${theme.colors.wheatMid[0]}`,
              transition: "all 0.3s ease",
            },
            itemTitle: {
              color: theme.colors.wheatLight[0],
              fontSize: "1.5rem",
              fontWeight: 700,
              marginBottom: "0.5rem",
            },
          }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -50, scale: 0.9 }}
              transition={{
                type: "spring" as const,
                stiffness: 100,
                damping: 12,
                delay: index * 0.15
              }}
            >
              <Timeline.Item
                bullet={
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconBriefcase
                      size={20}
                      color={theme.colors.neutralDark[0]}
                    />
                  </motion.div>
                }
                title={exp.title}
              >
                <Group gap="md" style={{ marginBottom: "1rem" }}>
                  <Text
                    size="lg"
                    style={{
                      color: theme.colors.wheatMid[0],
                      fontWeight: 600,
                    }}
                  >
                    {exp.company}
                  </Text>
                  {exp.current && (
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      <Badge
                        color="green"
                        variant="filled"
                        styles={{
                          root: {
                            backgroundColor: theme.colors.forestLight[0],
                          },
                        }}
                      >
                        Current
                      </Badge>
                    </motion.div>
                  )}
                </Group>

                <Text
                  size="md"
                  style={{
                    color: theme.colors.wheatMid[0],
                    marginBottom: "0.5rem",
                  }}
                >
                  {exp.location} • {exp.period}
                </Text>

                <Box
                  component="ul"
                  style={{
                    marginTop: "1rem",
                    paddingLeft: "1.5rem",
                  }}
                >
                  {exp.responsibilities.map((resp, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{
                        type: "spring" as const,
                        stiffness: 100,
                        damping: 15,
                        delay: index * 0.15 + 0.3 + idx * 0.1,
                      }}
                    >
                      <Text
                        size="md"
                        style={{
                          color: theme.colors.wheatLight[0],
                          lineHeight: 1.8,
                          marginBottom: "0.5rem",
                        }}
                      >
                        {resp}
                      </Text>
                    </motion.li>
                  ))}
                </Box>
              </Timeline.Item>
            </motion.div>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}
