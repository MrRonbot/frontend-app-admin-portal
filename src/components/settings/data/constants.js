const ACCESS_TAB = 'access';
const LMS_TAB = 'lms';

const ACCESS_TAB_LABEL = 'Configure Access';
const LMS_TAB_LABEL = 'LMS';

/**
 * Used as tab values and in router params
 */
export const SETTINGS_TABS_VALUES = {
  [ACCESS_TAB]: ACCESS_TAB,
  [LMS_TAB]: LMS_TAB,
};

/**
 * Human readable tabs used on tab titles and browser helmet
 */
export const SETTINGS_TAB_LABELS = {
  [ACCESS_TAB]: ACCESS_TAB_LABEL,
  [LMS_TAB]: LMS_TAB_LABEL,
};

/** Default tab when no parameter is given */
export const DEFAULT_TAB = ACCESS_TAB;

/**
 * Url parameter that the set in the router
 * Consumed by useCurrentSettingsTab hook to get tab value
 */
export const SETTINGS_TAB_PARAM = 'settingsTab';

/**
 * Generates settings url matching from SETTINGS_TABS_VALUES
 * @example :settingsTab(tab0|tab1)?/
 */
const generatePathMatch = () => {
  const matchTabs = Object.values(SETTINGS_TABS_VALUES).join('|');
  return `:${SETTINGS_TAB_PARAM}(${matchTabs})?/`;
};

export const SETTINGS_PARAM_MATCH = generatePathMatch();
