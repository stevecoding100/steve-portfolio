import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'

const projects = [
  {
    name: 'Numora',
    description:
      'A full-stack app for tracking income, expenses, budgets, and savings goals with a clean, intuitive interface.',
    link: {
      href: 'https://personal-finance-tracker-lemon-three.vercel.app',
      label: 'numora.app',
    },
    github: {
      href: 'https://github.com/stevecoding100/personal-finance-tracker',
      label: 'View code',
    },
    logo: logoPlanetaria,
  },
  {
    name: 'Joke Teller',
    description: 'A robot that uses programming references to say silly jokes.',
    link: {
      href: 'https://joke-teller1.netlify.app/',
      label: 'robotjoke.app',
    },
    github: {
      href: 'https://github.com/stevecoding100/joke-teller-app',
      label: 'View code',
    },
    logo: logoAnimaginary,
  },
  {
    name: 'UX/UI Numora Design',
    description:
      'A clean and intuitive UI/UX design for the Numora app, built to simplify personal finance management with responsive, user-friendly layouts.',
    link: { href: '#', label: 'numoradesign.app' },

    logo: logoHelioStream,
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
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
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
