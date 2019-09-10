const formatLanguage = language => {
  let lang = language;

  switch (language) {
    case 'javascript':
    case 'js':
      lang = 'JavaScript';
      break;
    case 'sass':
      lang = 'Sass';
      break;
    case 'html':
    case 'markup':
      lang = 'HTML';
      break;
    case 'handlebars':
    case 'hbs':
      lang = 'Handlebars';
      break;
  }

  return lang;
};

export { formatLanguage };
