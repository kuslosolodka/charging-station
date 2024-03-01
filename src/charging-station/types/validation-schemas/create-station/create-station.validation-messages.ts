export const VALIDATION_MESSAGES = {
  required: {
    TITLE_REQUIRED: 'Title should be present',
    EMAIL_REQUIRED: 'Email should be present',
    DESCRIPTION_REQUIRED: 'Description should be present',
    PUBLICITY_REQUIRED: 'Publicity should be present',
    LOCATION_COORDINATES_REQUIRED: 'Coordinates should present',
    LOCATION_COORDINATE_REQUIRED: 'Coordinate should be present',
    LOCATION_REQUIRED: 'Location should be present',
  },
  invalid: {
    TITLE_INVALID_TYPE: 'Title should be a string',
    EMAIL_INVALID_TYPE: 'Email should be a string',
    DESCRIPTION_INVALID_TYPE: 'Description should be a string',
    PUBLICITY_INVALID_TYPE: 'Publicity should be set to true or false',
    LOCATION_COORDINATES_INVALID_TYPE:
      'Coordinates should be an array of numbers',
    LOCATION_COORDINATE_INVALID_TYPE: 'Coordinate should be number',
    LOCATION_INVALID_TYPE: 'Location should be object',
  },
  EMAIL_FORMAT: 'Email should has @email.com ending',
  UNKNOWN_KEY: 'Unknown key in the body',
} as const;
