import { Stack, Box, Text, Badge } from '@chakra-ui/react';
import format from 'date-fns/format';

function Experiences({ experiences }) {
  return (
    <Stack spacing="12">
      {experiences.map(({ fields, sys }) => {
        const startDate = format(new Date(fields.startDate), 'MMM, yyyy');
        const endDate = fields.endDate ? format(new Date(fields.endDate), 'MMM, yyyy') : 'Current';

        return (
          <Box key={sys.id}>
            <Text as="span" fontSize="sm" color="GrayText" display="flex" alignItems="center">
              {startDate} - {endDate}{' '}
              <Badge
                fontSize="xx-small"
                ml="2"
                colorScheme={fields.type == 'Full Time' ? 'whatsapp' : 'blue'}
              >
                {fields.type}
              </Badge>
            </Text>
            <Text display="flex" flexDirection={{ base: 'column', sm: 'row' }} fontSize="xl">
              {fields.company}{' '}
              <Text as="span" color="GrayText" ml={{ base: '0', sm: '2' }}>
                {fields.title}
              </Text>
            </Text>
            <Text color="GrayText" mt="2" maxWidth="container.sm">
              {fields.description}
            </Text>
          </Box>
        );
      })}
    </Stack>
  );
}

export default Experiences;
