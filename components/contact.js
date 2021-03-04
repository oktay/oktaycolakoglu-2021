const { Container, Heading, Link, Stack, IconButton } = require('@chakra-ui/react');

import { FaTwitter, FaLinkedin, FaGithub, FaDribbble } from 'react-icons/fa';

function Contact() {
  const socials = [
    {
      label: 'Twitter',
      url: 'https://twitter.com/oktaycolakoglu',
      icon: <FaTwitter />,
    },
    {
      label: 'Linkedin',
      url: 'https://tr.linkedin.com/in/oktaycolakoglu',
      icon: <FaLinkedin />,
    },
    {
      label: 'Github',
      url: 'https://github.com/oktay',
      icon: <FaGithub />,
    },
    {
      label: 'Dribbble',
      url: 'https://dribbble.com/oktaycolakoglu',
      icon: <FaDribbble />,
    },
  ];
  return (
    <Container maxWidth="container.lg" mt="36">
      <Heading as="h3" size="lg">
        Let's Talk!
      </Heading>
      <Heading as="p" color="GrayText" size="lg" mt="4">
        Contact with me via{' '}
        <Link
          href="mailto:oktaycolakoglu@gmail.com"
          title="oktaycolakoglu@gmail.com"
          textDecoration="underline"
          isExternal
        >
          mail
        </Link>{' '}
        or social media.
      </Heading>
      <Stack direction="row" mt="8" spacing="8">
        {socials.map((social) => (
          <IconButton
            key={social.url}
            as={Link}
            href={social.url}
            icon={social.icon}
            aria-label={social.label}
            title={social.label}
            variant="link"
            size="lg"
            fontSize="4xl"
            isExternal
          />
        ))}
      </Stack>
    </Container>
  );
}

export default Contact;
