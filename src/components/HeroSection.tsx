import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Box,
  useMantineTheme,
} from "@mantine/core";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import { generalIcons } from "../constants/icons";

const {
  linkedin: IconBrandLinkedin,
  mail: IconMail,
  phone: IconPhone,
  location: IconMapPin,
  download: IconDownload,
} = generalIcons;

export function HeroSection() {
  const theme = useMantineTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 2.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 10,
        mass: 0.8,
      },
    },
  };

  return (
    <Box
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: `linear-gradient(135deg, ${theme.colors.forestDark[0]} 0%, ${theme.colors.forestMid[0]} 50%, ${theme.colors.forestLight[0]} 100%)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ textAlign: "center", color: theme.colors.wheatLight[0] }}
        >
          <motion.div variants={itemVariants}>
            <motion.div
              style={{
                willChange: "transform",
                transform: "translateZ(0)",
              }}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.8,
              }}
            >
              <Title
                order={1}
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 800,
                  marginBottom: "1rem",
                  color: theme.colors.wheatLight[0],
                  letterSpacing: "-0.02em",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                }}
              >
                {personalInfo.name}
              </Title>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Text
              size="xl"
              style={{
                marginTop: "2rem",
                marginBottom: "2rem",
                fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
                fontWeight: 600,
                color: theme.colors.wheatLight[0],
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              {personalInfo.title}
            </Text>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Group
              justify="center"
              gap="xl"
              style={{
                marginTop: "2rem",
                marginBottom: "2rem",
                flexWrap: "wrap",
              }}
            >
              <Group gap="xs">
                <IconMapPin size={20} />
                <Text size="md">{personalInfo.location}</Text>
              </Group>
              <Group gap="xs">
                <IconMail size={20} />
                <Text size="md">{personalInfo.email}</Text>
              </Group>
              <Group gap="xs">
                <IconPhone size={20} />
                <Text size="md">{personalInfo.phone}</Text>
              </Group>
            </Group>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Group
              justify="center"
              style={{ marginTop: "3rem", flexWrap: "wrap" }}
            >
              {personalInfo.resumePath && (
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    component="a"
                    href={`${import.meta.env.BASE_URL}${personalInfo.resumePath}`}
                    download="Bisher_Alhasani_CV.pdf"
                    size="lg"
                    leftSection={<IconDownload size={20} />}
                    styles={{
                      root: {
                        backgroundColor: theme.colors.wheatMid[0],
                        color: theme.colors.forestDark[0],
                        fontWeight: 600,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: theme.colors.wheatLight[0],
                          transform: "translateY(-2px)",
                          boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                        },
                      },
                    }}
                  >
                    Download CV
                  </Button>
                </motion.div>
              )}
              {personalInfo.linkedin && (
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    component="a"
                    href={personalInfo.linkedin}
                    target="_blank"
                    size="lg"
                    leftSection={<IconBrandLinkedin size={20} />}
                    styles={{
                      root: {
                        backgroundColor: theme.colors.wheatMid[0],
                        color: theme.colors.forestDark[0],
                        fontWeight: 600,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: theme.colors.wheatLight[0],
                          transform: "translateY(-2px)",
                          boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                        },
                      },
                    }}
                  >
                    LinkedIn Profile
                  </Button>
                </motion.div>
              )}
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  component="a"
                  href="#contact"
                  size="lg"
                  variant="outline"
                  styles={{
                    root: {
                      borderColor: theme.colors.wheatLight[0],
                      color: theme.colors.wheatLight[0],
                      fontWeight: 600,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "rgba(237, 235, 224, 0.1)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                      },
                    },
                  }}
                >
                  Get In Touch
                </Button>
              </motion.div>
            </Group>
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.colors.forestLight[0]}40 0%, transparent 70%)`,
          filter: "blur(40px)",
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.colors.wheatMid[0]}30 0%, transparent 70%)`,
          filter: "blur(40px)",
        }}
      />

      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          style={{
            position: "absolute",
            bottom: "10%",
            left: `${20 + i * 15}%`,
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            backgroundColor: theme.colors.wheatMid[0],
          }}
        />
      ))}
    </Box>
  );
}
