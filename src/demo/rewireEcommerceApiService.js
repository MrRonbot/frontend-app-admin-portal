import EcommerceApiService from '../data/services/EcommerceApiService';

import { codes, codesCsv, coupons } from './data';

const firstCouponHasError = coupons[0].errors.length > 0;

const findCouponIndexById = couponId => coupons.findIndex(coupon => coupon.id === couponId);

const fetchData = (options = { page: 1 }, couponData) => {
  const { page } = options;
  const pageSize = options.page_size || 10;
  const start = (page - 1) * pageSize;

  const results = couponData.slice(start, start + pageSize);
  return Promise.resolve({
    data: {
      count: couponData.length,
      num_pages: Math.ceil(couponData.length / pageSize),
      current_page: page,
      results,
    },
  });
};
const rewire = () => {
  EcommerceApiService.fetchCouponOrders = options => fetchData(options, coupons);

  EcommerceApiService.fetchCouponDetails = (couponId, options, { csv } = {}) => {
    if (csv) {
      return Promise.resolve({
        data: codesCsv(),
      });
    }
    const couponData = coupons[findCouponIndexById(couponId)].errors.length > 0
      ? codes({
        codeFilter: options.code_filter,
        couponHasError: firstCouponHasError,
      }) : codes({ codeFilter: options.code_filter });
    return fetchData(options, couponData);
  };
};

export default rewire;
