import { useSelector } from 'react-redux';
import Modal from './Modal';

const DetailsModal = ({ isOpen, setIsOpen, id }) => {
  const { task } = useSelector((state) => state.taskReducer);
  const targetTask = task?.find((item) => item.id === id);
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={`Task Details of ${targetTask?.assignedTo}`}
    >
      <div className="bg-secondary/10 rounded-md p-5">
        <h1
          className={`text-lg font-semibold mb-3  ${
            targetTask?.priority === 'High' ? 'text-red-500' : ''
          } ${targetTask?.priority === 'Medium' ? 'text-yellow-500' : ''} ${
            targetTask?.priority === 'Low' ? 'text-green-500' : ''
          }`}
        >
          {targetTask?.title}
        </h1>
        <p className="mb-3">{targetTask?.description}</p>
        <p className="text-sm">Assigned to - {targetTask?.assignedTo}</p>
        <div className="flex justify-between mt-3">
          <p>{targetTask?.date}</p>
        </div>
      </div>
    </Modal>
  );
};

export default DetailsModal;
