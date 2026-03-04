import {
  Container,
  Title,
  Text,
  Box,
  useMantineTheme,
  Paper,
  Group,
  Anchor,
} from "@mantine/core";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GlitchText } from "./GlitchText";

export function ContactSection() {
  const theme = useMantineTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contactInfo = [
    {
      icon: IconMail,
      label: "Email",
      value: "bisher.hasani@gmail.com",
      href: "mailto:bisher.hasani@gmail.com",
    },
    {
      icon: IconPhone,
      label: "Phone",
      value: "+963 939202488",
      href: "tel:+963939202488",
    },
    {
      icon: IconMapPin,
      label: "Location",
      value: "Damascus, Syria",
      href: null,
    },
    {
      icon: IconBrandLinkedin,
      label: "LinkedIn",
      value: "View Profile",
      href: "https://www.linkedin.com/in/bisher-al-hasani-19008a219/",
    },
  ];

  return (
    <Box
      id="contact"
      ref={ref}
      style={{
        padding: "5rem 0",
        backgroundColor: theme.colors.wheatLight[0],
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
              marginBottom: "1.5rem",
              color: theme.colors.forestDark[0],
              fontSize: "clamp(2rem, 4vw, 2.5rem)",
              fontWeight: 700,
              letterSpacing: "0.05em",
            }}
          >
            <GlitchText text="Get In Touch" />
          </Title>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Text
            size="lg"
            style={{
              textAlign: "center",
              marginBottom: "3rem",
              color: theme.colors.neutralMid[0],
              maxWidth: "600px",
              margin: "0 auto 3rem",
            }}
          >
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
          transition={{
            type: "spring" as const,
            stiffness: 100,
            damping: 15,
            delay: 0.4
          }}
        >
          <Paper
            shadow="md"
            p="xl"
            radius="md"
            style={{
              backgroundColor: theme.white,
              border: `2px solid ${theme.colors.forestLight[0]}`,
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                  }
                  transition={{
                    type: "spring" as const,
                    stiffness: 100,
                    damping: 12,
                    delay: 0.5 + index * 0.1
                  }}
                  whileHover={{ x: 15, scale: 1.02 }}
                >
                  <Box
                    style={{
                      padding: "1.5rem",
                      borderBottom:
                        index < contactInfo.length - 1
                          ? `1px solid ${theme.colors.forestLight[0]}20`
                          : "none",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Group gap="lg">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Box
                          style={{
                            padding: "1rem",
                            backgroundColor: theme.colors.forestLight[0],
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            minWidth: "60px",
                            minHeight: "60px",
                          }}
                        >
                          <Icon size={28} color={theme.colors.wheatLight[0]} />
                        </Box>
                      </motion.div>
                      <Box style={{ flex: 1 }}>
                        <Text
                          size="sm"
                          style={{
                            color: theme.colors.neutralMid[0],
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            marginBottom: "0.25rem",
                          }}
                        >
                          {info.label}
                        </Text>
                        {info.href ? (
                          <motion.div whileHover={{ scale: 1.05 }}>
                            <Anchor
                              href={info.href}
                              target={
                                info.href.startsWith("http")
                                  ? "_blank"
                                  : undefined
                              }
                              style={{
                                color: theme.colors.forestDark[0],
                                fontSize: "1.1rem",
                                fontWeight: 600,
                                textDecoration: "none",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.color =
                                  theme.colors.forestLight[0];
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.color =
                                  theme.colors.forestDark[0];
                              }}
                            >
                              {info.value}
                            </Anchor>
                          </motion.div>
                        ) : (
                          <Text
                            size="lg"
                            style={{
                              color: theme.colors.forestDark[0],
                              fontWeight: 600,
                            }}
                          >
                            {info.value}
                          </Text>
                        )}
                      </Box>
                    </Group>
                  </Box>
                </motion.div>
              );
            })}
          </Paper>
        </motion.div>

         <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Box
            style={{
              marginTop: "4rem",
              padding: "2rem 0",
              borderTop: `2px solid ${theme.colors.forestLight[0]}`,
              textAlign: "center",
            }}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Text
                size="md"
                style={{
                  color: theme.colors.neutralMid[0],
                  marginBottom: "1rem",
                }}
              >
                References are available on request
              </Text>
            </motion.div>
            <Text
              size="sm"
              style={{
                color: theme.colors.neutralMid[0],
              }}
            >
              © {new Date().getFullYear()} Bisher Muhammad Ziad Alhasani
              Aljazaeri. All rights reserved.
            </Text>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
