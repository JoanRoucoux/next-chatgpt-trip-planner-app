import * as React from 'react';
import { Button, TextField } from '@mui/material';
import { copyToClipboard } from '../commons';
import { ItineraryType } from '../commons/types';

const Itinerary = ({ itinerary }: ItineraryType): JSX.Element => {
  const [isCopied, setIsCopied] = React.useState<boolean>(false);

  const handleOnClick = () => {
    copyToClipboard(itinerary);
    setIsCopied(true);
  };

  React.useEffect(() => {
    let timer = setTimeout(() => setIsCopied(false), 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [isCopied]);

  return (
    <>
      <TextField
        id="itinerary"
        fullWidth
        multiline
        rows={6}
        placeholder="See the itinerary"
        value={itinerary}
        InputProps={{
          readOnly: true,
        }}
      />
      <Button
        fullWidth
        variant="contained"
        onClick={handleOnClick}
        sx={{ mt: 2, mb: 2 }}
        disabled={itinerary == null || itinerary == ''}
      >
        {isCopied ? 'Copied' : 'Copy to clipboard'}
      </Button>
    </>
  );
};

export default Itinerary;
