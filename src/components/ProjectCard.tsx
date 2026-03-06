'use client';

import { Box, Typography } from '@mui/material';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Box
      component="article"
      sx={{
        p: 4,
        borderRadius: 2,
        border: '1px solid rgba(77, 184, 168, 0.2)',
        background: 'rgba(26, 32, 40, 0.6)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 8px 32px 0 rgba(77, 184, 168, 0.1)',
        transition: 'all 0.3s ease',
        '&:hover': {
          border: '1px solid rgba(77, 184, 168, 0.4)',
          boxShadow: '0 12px 48px 0 rgba(77, 184, 168, 0.2)',
          transform: 'translateY(-4px)',
        },
      }}
    >
      <Box component="header">
        <Typography component="h3" variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
          {project.title}
        </Typography>

        <Typography component="p" variant="body2" sx={{ mb: project.techStack ? 1 : 4, color: 'secondary.main', fontWeight: 500 }}>
          {project.roleAndDate}
        </Typography>

        {project.techStack && (
          <Typography component="p" variant="body2" sx={{ mb: 4, color: 'text.secondary', fontStyle: 'italic' }}>
            {project.techStack}
          </Typography>
        )}
      </Box>

      <Box component="section" aria-labelledby={`problem-${project.id}`}>
        <Typography component="h4" id={`problem-${project.id}`} variant="body2" sx={{ mb: 1, color: 'text.primary', fontWeight: 600 }}>
          Problem
        </Typography>
        <Typography component="p" variant="body1" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.8 }}>
          {project.problem}
        </Typography>
      </Box>

      <Box component="section" aria-labelledby={`solution-${project.id}`}>
        <Typography component="h4" id={`solution-${project.id}`} variant="body2" sx={{ mb: 1, color: 'text.primary', fontWeight: 600 }}>
          Solution
        </Typography>
        {project.solutions.map((solution, index) => {
          // Split by \n to handle solutions that have title + description on new lines (like the University one)
          const parts = solution.split('\n');
          return (
            <Typography
              component="p"
              key={index}
              variant="body1"
              sx={{
                mb: index === project.solutions.length - 1 ? 4 : 1.5,
                color: 'text.secondary',
                lineHeight: 1.8
              }}
            >
              {parts[0]}
              {parts.length > 1 && (
                <>
                  <br />
                  {parts[1]}
                </>
              )}
            </Typography>
          );
        })}
      </Box>

      <Box component="section" aria-labelledby={`impact-${project.id}`}>
        <Typography component="h4" id={`impact-${project.id}`} variant="body2" sx={{ mb: 1, color: 'text.primary', fontWeight: 600 }}>
          Impact
        </Typography>
        <Typography component="p" variant="body1" sx={{ mb: 0, color: 'text.secondary', lineHeight: 1.8 }}>
          {project.impact}
        </Typography>
      </Box>
    </Box>
  );
}
