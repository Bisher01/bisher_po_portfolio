import { Container, Title, Text, Paper, Box, useMantineTheme } from '@mantine/core';
import { GlitchText } from './GlitchText';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { personalInfo } from '../data/portfolioData';

export function AboutSection() {
  const theme = useMantineTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Box
      id="about"
      ref={ref}
      style={{
        padding: '5rem 0',
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
              textAlign: 'center',
              marginBottom: '3rem',
              color: theme.colors.forestDark[0],
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: 700,
              letterSpacing: '0.05em',
            }}
          >
            <GlitchText text="About Me" />
          </Title>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 30 }}
          transition={{
            type: "spring" as const,
            stiffness: 100,
            damping: 15,
            delay: 0.2
          }}
        >
          <Paper
            shadow="md"
            p="xl"
            radius="md"
            style={{
              backgroundColor: theme.white,
              border: `2px solid ${theme.colors.forestLight[0]}`,
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '';
            }}
          >
            {personalInfo.bio.map((paragraph, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{
                  type: "spring" as const,
                  stiffness: 100,
                  damping: 12,
                  delay: 0.4 + index * 0.15
                }}
              >
                <Text
                  size="lg"
                  style={{
                    lineHeight: 1.8,
                    color: theme.colors.neutralMid[0],
                    marginTop: index > 0 ? '1.5rem' : 0,
                    textAlign: 'justify',
                  }}
                >
                  {paragraph}
                </Text>
              </motion.div>
            ))}
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}
