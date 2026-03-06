'use client';

import { Box, Container, Typography } from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';

export default function Home() {
  return (
    <Box component="main" sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1a1520 0%, #2d1b2e 100%)', py: 8, position: 'relative', overflow: 'hidden' }}>
      {/* Decorative circles (hidden from screen readers) */}
      <Box aria-hidden="true"
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: 120,
          height: 120,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(77, 184, 168, 0.3) 0%, rgba(77, 184, 168, 0) 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />
      <Box aria-hidden="true"
        sx={{
          position: 'absolute',
          top: '30%',
          right: '10%',
          width: 80,
          height: 80,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 140, 90, 0.25) 0%, rgba(255, 140, 90, 0) 70%)',
          filter: 'blur(30px)',
          pointerEvents: 'none',
        }}
      />
      <Box aria-hidden="true"
        sx={{
          position: 'absolute',
          top: '60%',
          left: '15%',
          width: 100,
          height: 100,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 140, 90, 0.2) 0%, rgba(255, 140, 90, 0) 70%)',
          filter: 'blur(35px)',
          pointerEvents: 'none',
        }}
      />
      <Box aria-hidden="true"
        sx={{
          position: 'absolute',
          bottom: '15%',
          right: '8%',
          width: 90,
          height: 90,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(77, 184, 168, 0.25) 0%, rgba(77, 184, 168, 0) 70%)',
          filter: 'blur(30px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Box component="header" sx={{ mb: 8 }}>
          <Typography component="h1" variant="h2" sx={{ fontWeight: 600 }}>
            NEW MODE APPS
          </Typography>
          <Typography component="p" variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.5 }}>
            consulting by Lawrence Luo
          </Typography>
        </Box>

        <Box component="section" aria-label="Projects Portfolio">
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
