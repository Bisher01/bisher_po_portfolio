import { Box, useMantineTheme } from "@mantine/core";
import { motion } from "framer-motion";

export function LoadingScreen() {
  const theme = useMantineTheme();

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 0,
      transition: {
        delay: 2,
        duration: 0.5,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      <Box
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${theme.colors.forestDark[0]} 0%, ${theme.colors.forestMid[0]} 50%, ${theme.colors.forestLight[0]} 100%)`,
        }}
      >
        <motion.div>
          <Box
            style={{
              fontSize: "5rem",
              fontWeight: 800,
              color: theme.colors.wheatLight[0],
              fontFamily: "'Poppins', sans-serif",
              textShadow: "4px 4px 8px rgba(0,0,0,0.3)",
              letterSpacing: "0.1em",
            }}
          >
            BH
          </Box>
        </motion.div>

        <motion.div variants={textVariants}>
          <Box
            style={{
              fontSize: "1.2rem",
              color: theme.colors.wheatMid[0],
              marginTop: "1rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Portfolio Loading...
          </Box>
        </motion.div>

        {/* Animated dots */}
        <Box style={{ marginTop: "2rem", display: "flex", gap: "0.5rem" }}>
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: theme.colors.wheatMid[0],
              }}
            />
          ))}
        </Box>
      </Box>
    </motion.div>
  );
}
