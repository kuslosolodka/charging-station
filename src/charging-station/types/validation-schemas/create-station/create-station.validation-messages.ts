export const VALIDATION_MESSAGES = {
    TITLE_INVALID_TYPE: 'Title should be string',
    TITLE_REQUIRED: 'Title should be present',
    EMAIL_INVALID_TYPE: 'Email should be string',
    EMAIL_REQUIRED: 'Email should be present',
    EMAIL_FORMAT: 'Email should has @email.com ending',
    DESCRIPTION_INVALID_TYPE: 'Description should be string',
    DESCRIPTION_REQUIRED: 'Description should be present',
    PUBLICITY_INVALID_TYPE: 'Publicity should set to true or false',
    PUBLICITY_REQUIRED: 'Publicity should be present',
    UNKNOWN_KEY: 'Unknown key in body',
    REQUIRED: 'Required',
  } as const;