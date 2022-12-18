const capitalize = (text) => {
  if (text === '') {
    return '';
  }

  const [firstChar, ...restChar] = text;
  return `${firstChar.toUpperCase()}${restChar.join('')}`;
};

//console.log(capitalize('dsdfsds'));

export default capitalize;
