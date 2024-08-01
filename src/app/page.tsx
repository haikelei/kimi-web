import { Hero } from '@/components/Hero';
import { Box } from '@chakra-ui/react';
import { Features } from '@/components/Features/Features';
import { TestimonialGrid } from '@/components/TestimonialGrid/TestimonialGrid';
import { Contact } from '@/components/Contact/Contact';
export default function Home() {
  return (
    <Box>
      <Hero />
      <Features />
      <TestimonialGrid />
      <Contact />
    </Box>
  );
}
