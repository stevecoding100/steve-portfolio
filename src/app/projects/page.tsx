import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import sparkleImg from '@/images/photos/sparkle.png'
import numoraAI from '@/images/photos/numora.png'
import flowable from '@/images/photos/flowable.png'

const projects = [
  {
    name: 'Numora',
    description:
      'A full-stack personal finance app for tracking income, expenses, budgets, and savings goals, featuring an AI chatbot powered by Gemini for financial insights.',
    link: {
      href: 'https://personal-finance-tracker-lemon-three.vercel.app',
      label: 'numora.app',
    },
    github: {
      href: 'https://github.com/stevecoding100/numora-ai-app',
      label: 'View code',
    },
    logo: numoraAI,
  },
  {
    name: 'Flowable',
    description:
      'AI-powered workflow automation app that transforms unstructured inputs like emails and files into structured data and automatically executes actions.',
    link: {
      href: '#',
      label: 'flowable.app',
    },
    github: {
      href: '#',
      label: 'View code',
    },
    logo: flowable,
  },
  {
    name: 'Sparkle',
    description:
      'A modern cleaning services website model featuring a clean layout, professional imagery, and an easy-to-navigate design for cleaning businesses.',
    link: {
      href: 'https://sparkle-cleaning-seven.vercel.app',
      label: 'sparkle.app',
    },
    github: {
      href: 'https://github.com/stevecoding100/sparkle-cleaning',
      label: 'View code',
    },

    logo: sparkleImg,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Projects that showcase my creativity and technical skills."
      intro="Here’s a selection of the projects I’ve built over the years — from polished full-stack apps to experimental side builds. Many are open-source, so feel free to explore the code and contribute if you’re inspired."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="h-full w-[270px]">
              <Image
                src={project.logo}
                alt=""
                className="h-[450px] w-full rounded-lg object-cover object-top"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              {project.name}
            </h2>
            <Card.Description>{project.description}</Card.Description>

            <div className="relative z-10 mt-6 flex flex-col space-y-2 text-sm font-medium text-zinc-400 dark:text-zinc-200">
              <a
                href={project.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center transition hover:text-teal-500"
              >
                <LinkIcon className="h-5 w-5 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </a>

              {project.github && (
                <a
                  href={project.github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center transition hover:text-teal-500"
                >
                  <LinkIcon className="h-5 w-5 flex-none" />
                  <span className="ml-2">{project.github.label}</span>
                </a>
              )}
            </div>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
