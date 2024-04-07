// Role Component
import { useState } from "react";

const Role = ({ onCheckboxChange, selectRole }) => {
  const [selectedRole, setSelectedRole] = useState(selectRole); // Set initial value to selectRole

  const handleRoleChange = (e) => {
    const role = e.target.value;
    setSelectedRole(role);
    onCheckboxChange(role);
  };

  return (
    <div className="relative">
      <select
        value={selectedRole}
        onChange={handleRoleChange}
        className="block appearance-none w-full bg-black border border-gray-300 text-gray-300 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-black focus:border-gray-300"
      >
        <option value="Faculty">Faculty</option>
        <option value="Student">Student</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 12a1 1 0 0 1-.7-.29l-4-4a1 1 0 1 1 1.4-1.42L10 10.58l3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-.7.3z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Role;
