export const parseCustomerHeadquarterData = (data, headquarters) => {
  if (headquarters === 'various')
    return {
      ...data,
      headquarter: {
        name: data.headquarter_name || null,
        address: data.headquarter_address || null,
        city: data.headquarter_city || null,
        neighborhood: data.headquarter_neighborhood || null,
        phone: data.headquarter_phone || null,
      },
    };
  else return data;
};
