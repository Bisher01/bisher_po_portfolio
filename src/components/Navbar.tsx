import { useState, useEffect } from 'react';
import { Box, Container, Group, Burger, Drawer, Stack, Anchor, useMantineTheme } from '@mantine/core';
import { useDisclosure, useWindowScroll } from '@mantine/hooks';
import { motion, useScroll, useSpring } from 'framer-motion';
import { smoothScrollTo } from '../utils/smoothScroll';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Recommendations', href: '#recommendations' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState('Home');
  const [scroll] = useWindowScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useMantineTheme();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    setIsScrolled(scroll.y > 50);

    const sections = links.map(link => link.href.substring(1)).filter(id => id !== 'home');

    let foundSection = false;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          const label = links.find(link => link.href === `#${section}`)?.label;
          if (label) {
            setActive(label);
            foundSection = true;
            break;
          }
        }
      }
    }

    if (!foundSection && scroll.y < 200) {
      setActive('Home');
    }
  }, [scroll.y]);

  const handleClick = (label: string, href: string) => {
    setActive(label);
    close();

    smoothScrollTo(href, 1200, 70);
  };

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
      >
        <Box
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            backgroundColor: isScrolled ? `${theme.colors.forestDark[0]}f5` : `${theme.colors.forestDark[0]}ee`,
            backdropFilter: 'blur(10px)',
            borderBottom: `2px solid ${theme.colors.forestLight[0]}`,
            boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.4)' : '0 2px 10px rgba(0,0,0,0.3)',
            transition: 'all 0.3s ease',
          }}
        >
          <motion.div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: `linear-gradient(90deg, ${theme.colors.forestLight[0]}, ${theme.colors.wheatMid[0]})`,
              transformOrigin: '0%',
              scaleX,
            }}
          />

          <Container size="xl">
            <Group
              justify="space-between"
              style={{
                height: isScrolled ? '65px' : '70px',
                transition: 'height 0.3s ease',
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Anchor
                  href="#home"
                  style={{
                    fontSize: isScrolled ? '1.3rem' : '1.5rem',
                    fontWeight: 800,
                    color: theme.colors.wheatLight[0],
                    textDecoration: 'none',
                    letterSpacing: '0.05em',
                    transition: 'all 0.3s ease',
                    fontFamily: "'Myriad Pro', 'Nunito Sans', sans-serif",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick('Home', '#home');
                  }}
                >
                  Bisher AlHasani
                </Anchor>
              </motion.div>

              <Group gap="md" visibleFrom="sm">
                {links.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Anchor
                      href={link.href}
                      style={{
                        color: active === link.label ? theme.colors.wheatMid[0] : theme.colors.wheatLight[0],
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        textDecoration: 'none',
                        padding: '0.6rem 1.2rem',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        backgroundColor: active === link.label ? `${theme.colors.forestLight[0]}40` : 'transparent',
                        border: active === link.label ? `1px solid ${theme.colors.forestLight[0]}` : '1px solid transparent',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(link.label, link.href);
                      }}
                      onMouseEnter={(e) => {
                        if (active !== link.label) {
                          e.currentTarget.style.color = theme.colors.wheatMid[0];
                          e.currentTarget.style.backgroundColor = `${theme.colors.forestLight[0]}20`;
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (active !== link.label) {
                          e.currentTarget.style.color = theme.colors.wheatLight[0];
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }
                      }}
                    >
                      {link.label}
                    </Anchor>
                  </motion.div>
                ))}
              </Group>

              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Burger
                  opened={opened}
                  onClick={toggle}
                  hiddenFrom="sm"
                  size="md"
                  color={theme.colors.wheatLight[0]}
                />
              </motion.div>
            </Group>
          </Container>
        </Box>
      </motion.div>

      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="xl"
        position="right"
        styles={{
          content: {
            backgroundColor: theme.colors.forestDark[0],
          },
          header: {
            backgroundColor: theme.colors.forestDark[0],
          },
          close: {
            color: theme.colors.wheatLight[0],
            '&:hover': {
              backgroundColor: theme.colors.forestLight[0],
            },
          },
        }}
      >
        <Stack gap="lg" style={{ marginTop: '2rem' }}>
          {links.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Anchor
                href={link.href}
                style={{
                  color: active === link.label ? theme.colors.wheatMid[0] : theme.colors.wheatLight[0],
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  padding: '1rem',
                  borderRadius: '12px',
                  textAlign: 'center',
                  backgroundColor: active === link.label ? `${theme.colors.forestLight[0]}30` : 'transparent',
                  border: `2px solid ${active === link.label ? theme.colors.forestLight[0] : 'transparent'}`,
                  display: 'block',
                  transition: 'all 0.3s ease',
                }}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.label, link.href);
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${theme.colors.forestLight[0]}20`;
                  e.currentTarget.style.transform = 'translateX(10px)';
                }}
                onMouseLeave={(e) => {
                  if (active !== link.label) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                {link.label}
              </Anchor>
            </motion.div>
          ))}
        </Stack>
      </Drawer>
    </>
  );
}
