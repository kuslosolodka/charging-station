export const VALIDATION_MESSAGES = {
  CONNECTOR_TYPE_INVALID_TYPE:
    'Connector type should be one of these values CCS, CHAdeMO, Type1 or Type2',
  CONNECTOR_TYPE_REQUIRED: 'Connector type should be present',
  MAX_POWER_INVALID_TYPE: 'Maximum power should be number',
  MAX_POWER_REQUIRED: 'Maximum power should be present',
  MAX_POWER_POSITIVE: 'Maximum power should be greater than 0',
  STATION_ID_INVALID_TYPE: 'Station id should be a string',
  STATION_ID_REQUIRED: 'Station id should be present',
  STATION_ID_UUID: 'Station id should be uuid',
  UNKNOWN_KEY: 'Unknown key in the body',
} as const;
