import { Container, Title, Text, Box, useMantineTheme, Paper, Group, Badge } from '@mantine/core';
import { IconSchool, IconCertificate, IconLanguage } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { education } from '../data/portfolioData';
import { GlitchText } from './GlitchText';

export function EducationSection() {
  const theme = useMantineTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Box
      id="education"
      ref={ref}
      style={{
        padding: '5rem 0',
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
              textAlign: 'center',
              marginBottom: '3rem',
              color: theme.colors.wheatLight[0],
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: 700,
              letterSpacing: '0.05em',
            }}
          >
            <GlitchText text="Education & Certifications" />
          </Title>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring' as const, stiffness: 300 }}>
            <Paper
              shadow="md"
              p="xl"
              radius="md"
              style={{
                backgroundColor: theme.colors.forestDark[0],
                border: `2px solid ${theme.colors.forestLight[0]}`,
                marginBottom: '2rem',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(66, 129, 119, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <Group gap="md" style={{ marginBottom: '1.5rem' }}>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Box
                    style={{
                      padding: '0.75rem',
                      backgroundColor: theme.colors.forestLight[0],
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <IconSchool size={32} color={theme.colors.wheatLight[0]} />
                  </Box>
                </motion.div>
                <Box style={{ flex: 1 }}>
                  <Title
                    order={3}
                    style={{
                      color: theme.colors.wheatLight[0],
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      marginBottom: '0.25rem',
                    }}
                  >
                    {education.degree.title}
                  </Title>
                  <Text
                    size="lg"
                    style={{
                      color: theme.colors.wheatMid[0],
                      fontWeight: 600,
                    }}
                  >
                    {education.degree.institution}
                  </Text>
                </Box>
              </Group>

              <Group gap="md" style={{ marginBottom: '1rem' }}>
                <Badge
                  size="lg"
                  styles={{
                    root: {
                      backgroundColor: theme.colors.forestLight[0],
                      color: theme.colors.neutralDark[0],
                      fontWeight: 600,
                    },
                  }}
                >
                  {education.degree.period}
                </Badge>
                {education.degree.gpa && (
                  <Badge
                    size="lg"
                    styles={{
                      root: {
                        backgroundColor: theme.colors.wheatMid[0],
                        color: theme.colors.neutralDark[0],
                        fontWeight: 600,
                      },
                    }}
                  >
                    GPA: {education.degree.gpa}
                  </Badge>
                )}
              </Group>

              {education.degree.specialization && (
                <Text
                  size="md"
                  style={{
                    color: theme.colors.wheatLight[0],
                    marginTop: '1rem',
                  }}
                >
                  <strong style={{ color: theme.colors.wheatMid[0] }}>Specialization:</strong> {education.degree.specialization}
                </Text>
              )}
            </Paper>
          </motion.div>
        </motion.div>

        {/* Certification */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring' as const, stiffness: 300 }}>
            <Paper
              shadow="md"
              p="xl"
              radius="md"
              style={{
                backgroundColor: theme.colors.forestMid[0],
                border: `2px solid ${theme.colors.forestLight[0]}`,
                marginBottom: '2rem',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(66, 129, 119, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <Group gap="md" style={{ marginBottom: '1rem' }}>
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Box
                    style={{
                      padding: '0.75rem',
                      backgroundColor: theme.colors.forestLight[0],
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <IconCertificate size={32} color={theme.colors.wheatLight[0]} />
                  </Box>
                </motion.div>
                <Box style={{ flex: 1 }}>
                  <Title
                    order={3}
                    style={{
                      color: theme.colors.wheatLight[0],
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      marginBottom: '0.25rem',
                    }}
                  >
                    {education.certification.title}
                  </Title>
                  <Text
                    size="lg"
                    style={{
                      color: theme.colors.wheatMid[0],
                      fontWeight: 600,
                    }}
                  >
                    {education.certification.institution}
                  </Text>
                </Box>
              </Group>

              <Badge
                size="lg"
                styles={{
                  root: {
                    backgroundColor: theme.colors.wheatMid[0],
                    color: theme.colors.neutralDark[0],
                    fontWeight: 600,
                  },
                }}
              >
                {education.certification.period}
              </Badge>
            </Paper>
          </motion.div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring' as const, stiffness: 300 }}>
            <Paper
              shadow="md"
              p="xl"
              radius="md"
              style={{
                backgroundColor: theme.colors.forestLight[0],
                border: `2px solid ${theme.colors.wheatMid[0]}`,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(66, 129, 119, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <Group gap="md" style={{ marginBottom: '1.5rem' }}>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                >
                  <Box
                    style={{
                      padding: '0.75rem',
                      backgroundColor: theme.colors.forestDark[0],
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <IconLanguage size={32} color={theme.colors.wheatLight[0]} />
                  </Box>
                </motion.div>
                <Title
                  order={3}
                  style={{
                    color: theme.colors.wheatLight[0],
                    fontSize: '1.5rem',
                    fontWeight: 700,
                  }}
                >
                  Languages
                </Title>
              </Group>

              <Group gap="xl">
                {education.languages.map((lang, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.1 }} transition={{ type: 'spring' as const }}>
                    <Box>
                      <Text
                        size="lg"
                        style={{
                          color: theme.colors.wheatLight[0],
                          fontWeight: 700,
                          marginBottom: '0.5rem',
                        }}
                      >
                        {lang.language}
                      </Text>
                      <Badge
                        size="lg"
                        styles={{
                          root: {
                            backgroundColor: theme.colors.wheatLight[0],
                            color: theme.colors.forestDark[0],
                            fontWeight: 600,
                          },
                        }}
                      >
                        {lang.level}
                      </Badge>
                    </Box>
                  </motion.div>
                ))}
              </Group>
            </Paper>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
