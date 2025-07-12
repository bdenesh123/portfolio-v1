import { ExternalLink, FolderGit, Github, GithubIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

import { projectDetails } from '@/data/myInfo';
import useResponsive from '@/hooks/useResponsive';

import HoverButton from '../common/HoverButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectTab = (props) => {
  const { previewData } = props;
  const { name, image, repoUrl, url, description, techStack } = previewData;

  const { windowWidth } = useResponsive();

  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  const handleRedirect = (source) => {
    window.open(
      source === 'github' ? repoUrl : url,
      '_blank',
      'noopener,noreferrer',
    );
  };

  const contentVariant = {
    initial: {
      opacity: 0,
      height: 0,
      marginTop: 0,
    },
    hover: {
      opacity: 1,
      height: contentHeight,
      marginTop: '12px',
      transition: {
        height: { duration: 0.3, ease: 'easeInOut' },
        opacity: { duration: 0.25, delay: 0.05 },
      },
    },
  };

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [description]);

  return (
    <motion.div
      className='relative'
      initial='initial'
      {...(windowWidth <= 786
        ? { whileInView: 'hover', viewport: { once: true } }
        : { whileHover: 'hover' })}
    >
      <img
        src={image}
        className='absolute inset-0 h-full w-full overflow-hidden rounded-lg border bg-gray-700 object-cover'
      />

      <div className='mt-24 overflow-hidden rounded-lg bg-gray-700/15 p-4 backdrop-blur-md'>
        <span className='text-responsive-3.5 p-2 font-bold text-white'>
          {name}
        </span>

        <motion.div
          ref={contentRef}
          className='text-responsive-3 p-1 text-gray-300'
          variants={contentVariant}
        >
          {description}
        </motion.div>

        <div className='mt-2 flex flex-col items-center justify-between gap-4 md:mt-0 md:flex-row'>
          <div className='text-responsive-3.5 font-vt323 flex flex-wrap gap-2 '>
            {techStack.map((stack) => (
              <span className='text-white' key={stack.id}>
                {stack.label}
              </span>
            ))}
          </div>
          <div className='flex justify-end gap-2'>
            <HoverButton onClick={() => handleRedirect('github')}>
              <div className='text-responsive-4 flex items-center justify-between gap-2'>
                Source <FontAwesomeIcon icon={faGithub} className='h-4 w-4' />
              </div>
            </HoverButton>
            <HoverButton
              // variant="ghost"
              onClick={() => handleRedirect('project')}
            >
              <div className='text-responsive-4 flex items-center justify-between gap-2'>
                Link{' '}
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className='h-3.5 w-3.5'
                />
              </div>
            </HoverButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id='projects' className='scroll-mt-nav'>
      <div id='projects-wrapper' className='flex flex-col gap-4 p-2'>
        <p className='text-responsive-4.5 mb-0 font-semibold'>Projects</p>

        <div className='grid grid-cols-1 gap-3'>
          {projectDetails.map((project) => (
            <ProjectTab key={project.id} previewData={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
