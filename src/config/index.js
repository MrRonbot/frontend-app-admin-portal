import { hasFeatureFlagEnabled } from '@edx/frontend-enterprise-utils';

const configuration = {
  BASE_URL: process.env.BASE_URL,
  LMS_BASE_URL: process.env.LMS_BASE_URL,
  LOGIN_URL: process.env.LOGIN_URL,
  LOGOUT_URL: process.env.LOGOUT_URL,
  ENTERPRISE_SUPPORT_URL: process.env.ENTERPRISE_SUPPORT_URL,
  ENTERPRISE_SUPPORT_REVOKE_LICENSE_URL: process.env.ENTERPRISE_SUPPORT_REVOKE_LICENSE_URL,
  SURVEY_MONKEY_URL: process.env.SURVEY_MONKEY_URL,
  CSRF_TOKEN_API_PATH: process.env.CSRF_TOKEN_API_PATH,
  REFRESH_ACCESS_TOKEN_ENDPOINT: process.env.REFRESH_ACCESS_TOKEN_ENDPOINT,
  DATA_API_BASE_URL: process.env.DATA_API_BASE_URL,
  ECOMMERCE_BASE_URL: process.env.ECOMMERCE_BASE_URL,
  LICENSE_MANAGER_BASE_URL: process.env.LICENSE_MANAGER_BASE_URL,
  SECURE_COOKIES: process.env.NODE_ENV !== 'development',
  SEGMENT_KEY: process.env.SEGMENT_KEY,
  ACCESS_TOKEN_COOKIE_NAME: process.env.ACCESS_TOKEN_COOKIE_NAME,
  USER_INFO_COOKIE_NAME: process.env.USER_INFO_COOKIE_NAME,
  NODE_ENV: process.env.NODE_ENV,
  CUSTOMER_SUPPORT_EMAIL: 'customersuccess@edx.org', // TODO: avoid using hardcoded email address here...
  TABLEAU_URL: process.env.TABLEAU_URL,
  ENTERPRISE_LEARNER_PORTAL_URL: process.env.ENTERPRISE_LEARNER_PORTAL_URL,
  ALGOLIA: {
    APP_ID: process.env.ALGOLIA_APP_ID,
    SEARCH_API_KEY: process.env.ALGOLIA_SEARCH_API_KEY,
    INDEX_NAME: process.env.ALGOLIA_INDEX_NAME,
  },
  LOGO_URL: process.env.LOGO_URL,
  LOGO_WHITE_URL: process.env.LOGO_WHITE_URL,
  LOGO_TRADEMARK_URL: process.env.LOGO_TRADEMARK_URL,
};

const features = {
  BULK_ENROLLMENT: process.env.FEATURE_BULK_ENROLLMENT || hasFeatureFlagEnabled('BULK_ENROLLMENT'),
  CODE_MANAGEMENT: process.env.FEATURE_CODE_MANAGEMENT || hasFeatureFlagEnabled('CODE_MANAGEMENT'),
  REPORTING_CONFIGURATIONS: process.env.FEATURE_REPORTING_CONFIGURATIONS || hasFeatureFlagEnabled('REPORTING_CONFIGURATIONS'),
  ANALYTICS: process.env.FEATURE_ANALYTICS || hasFeatureFlagEnabled('ANALYTICS'),
  SAML_CONFIGURATION: process.env.FEATURE_SAML_CONFIGURATION || hasFeatureFlagEnabled('SAML_CONFIGURATION'),
  SUPPORT: process.env.FEATURE_SUPPORT || hasFeatureFlagEnabled('SUPPORT'),
  EXTERNAL_LMS_CONFIGURATION: process.env.FEATURE_EXTERNAL_LMS_CONFIGURATION || hasFeatureFlagEnabled('EXTERNAL_LMS_CONFIGURATION'),
  FILE_ATTACHMENT: process.env.FEATURE_FILE_ATTACHMENT || hasFeatureFlagEnabled('FILE_ATTACHMENT'),
  SETTINGS_PAGE: process.env.FEATURE_SETTINGS_PAGE || hasFeatureFlagEnabled('SETTINGS_PAGE'),
  SETTINGS_UNIVERSAL_LINK: process.env.FEATURE_SETTINGS_UNIVERSAL_LINK || hasFeatureFlagEnabled('SETTINGS_UNIVERSAL_LINK'),
};

export { configuration, features };
