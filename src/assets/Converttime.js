export const convertTimestamp = (timestamp) => {
    const date = new Date(timestamp); // Milliseconds to Date
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };