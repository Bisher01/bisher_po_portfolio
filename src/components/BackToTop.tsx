import { ActionIcon, useMantineTheme } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { IconArrowUp } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';
import { smoothScrollTo } from '../utils/smoothScroll';

export function BackToTop() {
  const [scroll] = useWindowScroll();
  const theme = useMantineTheme();

  const scrollToTop = () => {
    smoothScrollTo(0, 1200);
  };

  return (
    <AnimatePresence>
      {scroll.y > 300 && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 999,
          }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ActionIcon
              size="xl"
              radius="xl"
              onClick={scrollToTop}
              style={{
                backgroundColor: theme.colors.forestLight[0],
                color: theme.colors.wheatLight[0],
                width: '60px',
                height: '60px',
                boxShadow: '0 4px 20px rgba(66, 129, 119, 0.4)',
                transition: 'all 0.3s ease',
                border: `2px solid ${theme.colors.wheatMid[0]}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.forestMid[0];
                e.currentTarget.style.boxShadow = '0 6px 30px rgba(66, 129, 119, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.forestLight[0];
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(66, 129, 119, 0.4)';
              }}
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <IconArrowUp size={28} stroke={2.5} />
              </motion.div>
            </ActionIcon>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
