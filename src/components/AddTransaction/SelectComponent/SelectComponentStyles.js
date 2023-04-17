export const selectStyles = theme => {
  return {
    control: provided => ({
      ...provided,
      border: 'none',
      paddingBottom: 4,
      borderRadius: 0,
      borderBottom: '1px solid #E0E0E0',
      minHeight: 34,
      boxShadow: 'none',
      backgroundColor: '#FFFFFF',
      transition: 'color 0.2s ease',

      '&:hover': {
        borderBottom: '1px solid #E0E0E0',
      },
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    input: provided => ({
      ...provided,
      fontSize: '18px',
      color: '#000000',
    }),
    placeholder: provided => ({
      ...provided,
      color: '#bdbdbd',
      margin: 0,
      fontSize: '18px',
    }),
    singleValue: provided => ({
      ...provided,
      color: '#000000',
      margin: 0,
      fontSize: '18px',
    }),
    dropdownIndicator: provided => ({
      ...provided,
      color: '#000000',
      padding: '9px 8px',
      alignItems: 'flex-start',
      width: 'auto',
      height: 'auto',
      transition: 'color 0.2s ease',

      '&:hover': {
        color: '#E0E0E0',
      },

      '&>svg': {
        width: '18px',
        height: 'auto',
      },
    }),
    menu: provided => ({
      ...provided,
      height: 'auto',
      maxHeight: 352,
      background: '#FFFFFF',
      boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(20px)',
      borderRadius: 20,
      overflow: 'hidden',
    }),
    menuList: provided => ({
      ...provided,
      height: 'auto',
      maxHeight: 352,
      background: 'transparent',
      borderRadius: 20,
    }),
    option: (provided, { isSelected }) => ({
      ...provided,
      background: isSelected ? '#FFFFFF' : 'transparent',
      color: isSelected
        ? '#FF6596'
        : '#000000',
      fontWeight: isSelected ? 700 : 400,
      cursor: 'pointer',
      padding: '8.5px 20px',
      fontSize: '18px',
      lineHeight: 1.5,

      '&:hover': {
        color: '#FF6596',
        background: '#FFFFFF',
        fontWeight: 700,
      },
    }),
  };
};
