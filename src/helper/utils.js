import { v4 as uuidv4 } from 'uuid';

export const isEmpty = (item) => {
  return (
    item === undefined ||
    item === null ||
    item === "" ||
    item === [] ||
    item === 0
  );
};

export const getUniqueId = () => {
  return uuidv4();
};
