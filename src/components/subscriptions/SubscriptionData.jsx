import React, { createContext, useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import StatusAlert from '../StatusAlert';

import {
  TAB_ALL_USERS,
  TAB_LICENSED_USERS,
  TAB_PENDING_USERS,
  TAB_DEACTIVATED_USERS,
  ACTIVATED,
  ASSIGNED,
  DEACTIVATED,
} from './constants';

import { useSubscriptionData } from './hooks/licenseManagerHooks';
import { camelCaseObject } from '../../utils';

export const SubscriptionContext = createContext();
export const SubscriptionConsumer = SubscriptionContext.Consumer;

export default function SubscriptionData({ children, enterpriseId }) {
  const [activeTab, setActiveTab] = useState(TAB_ALL_USERS);
  const [details, setDetails] = useState();
  const [overview, setOverview] = useState();
  const [users, setUsers] = useState();
  const [searchQuery, setSearchQuery] = useState();
  const [filter, setFilter] = useState();

  const {
    fetch, isLoading, errors, data,
  } = useSubscriptionData({
    enterpriseId, search: searchQuery, status: filter, page: 1,
  });

  // Perform network requests
  useEffect(() => fetch(), [searchQuery, filter]);

  useEffect(() => {
    if (!isLoading && !errors) {
      const { subscriptions, overview: subscriptionUsersOverviewData, subscriptionUsers } = data;

      if (subscriptions?.results && subscriptions?.results[0]) {
        setDetails(camelCaseObject(subscriptions.results[0]));
      }
      setOverview(camelCaseObject(subscriptionUsersOverviewData));
      setUsers(camelCaseObject(subscriptionUsers));
    }
  }, [isLoading, errors, data]);

  const value = useMemo(
    () => ({
      details,
      overview,
      users,
      searchQuery,
      activeTab,
      setActiveTab,
      isLoading,
      errors,
      fetchSubscriptionDetails: fetch,
      fetchSubscriptionUsers: (options = {}) => {
        const licenseStatusByTab = {
          [TAB_LICENSED_USERS]: ACTIVATED,
          [TAB_PENDING_USERS]: ASSIGNED,
          [TAB_DEACTIVATED_USERS]: DEACTIVATED,
        };

        setSearchQuery(options.searchQuery);
        setFilter(licenseStatusByTab[activeTab]);
      },
    }),
    [details, overview, users, activeTab],
  );

  const hasInitialData = useMemo(
    () => !!(details && overview && users),
    [details, overview, users],
  );

  if (hasInitialData) {
    return (
      <SubscriptionContext.Provider value={value}>
        {children}
      </SubscriptionContext.Provider>
    );
  }

  return (
    <StatusAlert
      className="mt-3"
      alertType="danger"
      message={`Your organization does not have any active subscriptions to manage.
      If you believe you are seeing this message in error,
      please reach out to the edX Customer Success team at customersuccess@edx.org.`}
    />
  );
}

SubscriptionData.propTypes = {
  children: PropTypes.node.isRequired,
  enterpriseId: PropTypes.string.isRequired,
};
