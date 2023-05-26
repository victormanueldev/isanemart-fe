import { Card } from '../../components';

export const ServiceDetailTechnicianInfo = ({ users }) => {
  return (
    <Card title="Técnicos Asignados">
      <div className="flex flex-col gap-y-3">
        <ul className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
          {users?.map((user, index) => (
            <li key={index} className="flex justify-between items-center gap-x-2 py-3 px-1">
              <div className="inline-flex items-center">
                <span
                  className={`w-2 h-2 inline-block bg-${user?.color}-500 rounded-full mr-2`}
                ></span>
                <span className="text-gray-600 dark:text-gray-400">{user.full_name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};
