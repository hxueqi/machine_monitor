import { useParams } from 'react-router-dom';
import { useTaiFactoryContext } from '../providers/TaiFactoryProvider';

const getUserWorkUnits = (departments, id) => {
  const [selectedDepartment] = departments.filter(
    (element) => element.sbacode.toLowerCase() === id,
  );
  return selectedDepartment
    ? selectedDepartment.workunits
    : [];
};

const useWorkUnits = () => {
  const departments = useTaiFactoryContext() || [];
  const { id } = useParams();
  return id
    ? getUserWorkUnits(departments, id)
    : departments
      .map((department) => department.workunits.map((workunit) => ({
        ...workunit,
        departmentName: department.sbaname,
      })))
      .flat();
};

export default useWorkUnits;
