import {
  Container,
  Title,
  Text,
  Box,
  useMantineTheme,
  SimpleGrid,
  Card,
  Badge,
  Group,
  Anchor,
  Image,
} from "@mantine/core";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "../data/portfolioData";
import { generalIcons } from "../constants/icons";

const {
  playStore: IconBrandGooglePlay,
  appStore: IconBrandApple,
  website: IconWorld,
  calendar: IconCalendar,
} = generalIcons;

export function ProjectsSection() {
  const theme = useMantineTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <Box
      id="projects"
      ref={ref}
      style={{
        padding: "5rem 0",
        backgroundColor: theme.colors.wheatLight[0],
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        style={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.colors.forestLight[0]}15 0%, transparent 70%)`,
          filter: "blur(60px)",
        }}
      />

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
              marginBottom: "1rem",
              color: theme.colors.forestDark[0],
              fontSize: "clamp(2rem, 4vw, 2.5rem)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Featured Projects
          </Title>
          <Text
            size="lg"
            style={{
              textAlign: "center",
              marginBottom: "3rem",
              color: theme.colors.neutralMid[0],
              maxWidth: "700px",
              margin: "0 auto 3rem",
            }}
          >
            A showcase of projects I've built, from concept to
            deployment
          </Text>
        </motion.div>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl" style={{ alignItems: "stretch" }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ height: "100%" }}
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring" as const, stiffness: 300 }}
                style={{ height: "100%" }}
              >
                <Card
                  shadow="md"
                  padding="lg"
                  radius="md"
                  style={{
                    backgroundColor: theme.white,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 12px 28px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  <Card.Section>
                    <Box
                      style={{
                        position: "relative",
                        height: "200px",
                        backgroundColor: theme.colors.forestLight[0],
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        style={{ width: "100%", height: "100%" }}
                      >
                        <Image
                          src={`${import.meta.env.BASE_URL}${project.image}`}
                          alt={project.title}
                          height={200}
                          fit="cover"
                          fallbackSrc="https://placehold.co/400x200/428177/edebe0?text=Project+Image"
                        />
                      </motion.div>
                      {project.current && (
                        <Badge
                          size="lg"
                          style={{
                            position: "absolute",
                            top: "1rem",
                            right: "1rem",
                            backgroundColor: theme.colors.forestLight[0],
                          }}
                        >
                          Current
                        </Badge>
                      )}
                    </Box>
                  </Card.Section>

                  <Box
                    style={{
                      padding: "1rem 0",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Title
                      order={3}
                      style={{
                        color: theme.colors.forestDark[0],
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        marginBottom: "0.5rem",
                      }}
                    >
                      {project.title}
                    </Title>

                    <Group gap="sm" style={{ marginBottom: "1rem" }}>
                      <Badge
                        leftSection={<IconCalendar size={14} />}
                        size="md"
                        styles={{
                          root: {
                            backgroundColor: theme.colors.wheatMid[0],
                            color: theme.colors.neutralDark[0],
                          },
                        }}
                      >
                        {project.company}
                      </Badge>
                      <Text
                        size="sm"
                        style={{ color: theme.colors.neutralMid[0] }}
                      >
                        {project.date}
                      </Text>
                    </Group>

                    <Text
                      size="sm"
                      style={{
                        color: theme.colors.neutralMid[0],
                        lineHeight: 1.6,
                        marginBottom: "1rem",
                        flex: 1,
                      }}
                    >
                      {project.description}
                    </Text>

                    {/* Store Links */}
                    {(project.playStore || project.appStore || project.website) && (
                      <Group gap="sm">
                        {project.playStore && (
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Anchor
                              href={project.playStore}
                              target="_blank"
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                padding: "0.5rem 1rem",
                                backgroundColor: theme.colors.forestLight[0],
                                color: theme.colors.wheatLight[0],
                                borderRadius: "8px",
                                textDecoration: "none",
                                fontWeight: 600,
                                fontSize: "0.875rem",
                                transition: "all 0.3s ease",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor =
                                  theme.colors.forestMid[0];
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor =
                                  theme.colors.forestLight[0];
                              }}
                            >
                              <IconBrandGooglePlay size={18} />
                              <span>Play Store</span>
                            </Anchor>
                          </motion.div>
                        )}
                        {project.appStore && (
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Anchor
                              href={project.appStore}
                              target="_blank"
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                padding: "0.5rem 1rem",
                                backgroundColor: theme.colors.forestLight[0],
                                color: theme.colors.wheatLight[0],
                                borderRadius: "8px",
                                textDecoration: "none",
                                fontWeight: 600,
                                fontSize: "0.875rem",
                                transition: "all 0.3s ease",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor =
                                  theme.colors.forestMid[0];
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor =
                                  theme.colors.forestLight[0];
                              }}
                            >
                              <IconBrandApple size={18} />
                              <span>App Store</span>
                            </Anchor>
                          </motion.div>
                        )}
                        {project.website && (
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Anchor
                              href={project.website}
                              target="_blank"
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                padding: "0.5rem 1rem",
                                backgroundColor: theme.colors.forestLight[0],
                                color: theme.colors.wheatLight[0],
                                borderRadius: "8px",
                                textDecoration: "none",
                                fontWeight: 600,
                                fontSize: "0.875rem",
                                transition: "all 0.3s ease",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor =
                                  theme.colors.forestMid[0];
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor =
                                  theme.colors.forestLight[0];
                              }}
                            >
                              <IconWorld size={18} />
                              <span>Website</span>
                            </Anchor>
                          </motion.div>
                        )}
                      </Group>
                    )}
                  </Box>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
