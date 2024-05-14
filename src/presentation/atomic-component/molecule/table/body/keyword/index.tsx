import { BodyCell } from 'presentation/atomic-component/atom';
import { TableBody, TableRow } from '@mui/material';
import type { FC } from 'react';

interface KeywordTableProps {
  query: {
    content: { id: string }[];
  };
}

export const KeywordTableBody: FC<KeywordTableProps> = ({ query }) => {
  return (
    <TableBody className={'relative'}>
      {query?.content?.map((item) => (
        <TableRow key={item.id} hover>
          <BodyCell title={item.id} />
        </TableRow>
      ))}
    </TableBody>
  );
};
