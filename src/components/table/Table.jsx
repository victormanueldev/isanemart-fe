export const Table = ({
  selectable = false,
  headers = [],
  data = [],
  actions = [],
  props = [],
}) => {
  return (
    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
      <thead className="bg-gray-50 dark:bg-gray-700">
        <tr>
          {selectable && (
            <th scope="col" className="py-3 pl-4">
              <div className="flex items-center h-5">
                <input
                  id="hs-table-checkbox-all"
                  type="checkbox"
                  className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                ></input>
                <label htmlFor="hs-table-checkbox-all" className="sr-only">
                  Checkbox
                </label>
              </div>
            </th>
          )}

          {headers.map((header, index) => (
            <th
              key={index}
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
            >
              {header}
            </th>
          ))}
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
          >
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
        {data.map((element, index) => (
          <tr key={index}>
            {selectable && (
              <td className="py-3 pl-4">
                <div className="flex items-center h-5">
                  <input
                    id={`hs-table-checkbox-${index}`}
                    type="checkbox"
                    className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  ></input>
                  <label htmlFor={`hs-table-checkbox-${index}`} className="sr-only">
                    Checkbox
                  </label>
                </div>
              </td>
            )}
            {props.map((prop, idx_prop) => (
              <td
                key={`${prop}-${index}-${idx_prop}`}
                className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
              >
                {element[prop]}
              </td>
            ))}
            <td className="flex flex-row justify-between px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              {actions.map((action, index) => (
                <a key={index} className="text-blue-500 hover:text-blue-700" href="#">
                  {action}
                </a>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
