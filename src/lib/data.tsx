import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.nestjs className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
] as const;

export const experiencesData = [
  {
    title: 'Senior Full Stack Developer',
    location: 'King Street 28, 80802 Munich, Germany',
    description:
      'Implemented security using OAuth and Identity server; worked with agency for penetration testing; designed Shopify app with Gadget and Polaris; contributed to technology roadmap; optimized reporting with Syncfusion; developed book fair project with React, React Native/Node.js, Java; developing token exchange and staking sites using Web3 and BitQuery; backend development with Java and GraphQL; identified areas to improve performance and security.',
    date: '06/2018 - 10/2021',
  },
  {
    title: 'Senior Software Engineer',
    location: 'Brisbane, Queensland, Australia',
    description:
      'Revamped code delivery speed by 7% with CI/CD pipeline; designed and developed a Shopify app with Gadget and Polaris; taught 4 junior developers to upper intermediate level; built a Web3 frontend for a medicine tracking application; familiar with remote work; developed real time energy notification system with MongoDB and Firebase; architected and developed complex time-critical applications.',
    date: '10/2021 - 06/2022',
  },
  {
    title: 'Senior Frontend Engineer',
    location: 'Chicago, IL 60603 USA',
    description:
      'Developed and maintained multiple web and mobile applications using React, React Native, Flutter; worked closely with designers, project managers, and stakeholders; developed the token exchange and staking sites using Web3, Typescript and BitQuery; collaborated with backend developers to integrate APIs and data sources; implemented unit tests, automated testing, and continuous integration and deployment; conducted code reviews and provided feedback to junior developers.',
    date: '06/2022 - 06/2024',
  },
] as const;
