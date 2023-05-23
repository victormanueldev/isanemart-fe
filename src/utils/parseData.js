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

export const flattenObject = (ob) => {
  // The object which contains the
  // final result
  let result = {};

  // loop through the object "ob"
  for (const i in ob) {
    // We check the type of the i using
    // typeof() function and recursively
    // call the function again
    if (typeof ob[i] === 'object' && !Array.isArray(ob[i])) {
      const temp = flattenObject(ob[i]);
      for (const j in temp) {
        // Store temp in result
        result[i + '.' + j] = temp[j];
      }
    } else if (Array.isArray(ob[i])) {
      for (const j in ob[i]) {
        for (const g in ob[i][j]) {
          const temp = flattenObject(ob[i][j]);
          result[`${i}.${j}.${g}`] = temp[g];
        }
      }
    }
    // Else store ob[i] in result directly
    else {
      result[i] = ob[i];
    }
  }
  return result;
};
