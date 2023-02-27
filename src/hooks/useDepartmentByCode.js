import {useTaiFactoryContext} from "../providers/TaiFactoryProvider";


const useWorkUnitsByDepartment = (code) => {
    const departments = useTaiFactoryContext() || [];
    const [selectedDepartment] = departments.filter(
        (element) => element.sbacode.toLowerCase() === code
    );

    return selectedDepartment
        ? selectedDepartment.workunits
        : [];
}

export default useWorkUnitsByDepartment;
