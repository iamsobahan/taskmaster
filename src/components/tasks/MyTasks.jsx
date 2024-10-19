import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTask, userTask } from '../../redux/features/tasks/taskSlice';
import DetailsModal from '../Modal/DetailsModal';

const MyTasks = () => {
  const { task, userIndividualTask } = useSelector(
    (state) => state.taskReducer
  );
  const { name: userName } = useSelector((state) => state.userReducer);
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(0);
  const dispatch = useDispatch();
  const handler = (id) => {
    setId(id);
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    dispatch(userTask(userName));
  }, [userName, task, dispatch]);

  return (
    <div>
      <DetailsModal isOpen={isOpen} setIsOpen={setIsOpen} id={id} />
      <div className="flex sticky gap-5 items-center">
        <h1 className="text-xl my-3">My Tasks</h1>
        <p className="bg-primary d-inline text-white w-6 h-6 grid place-content-center rounded-md">
          {userIndividualTask.length}
        </p>
      </div>
      <div className=" h-[750px] overflow-auto space-y-3">
        {userIndividualTask.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-secondary/10 rounded-md p-3 flex justify-between"
            >
              <h1>{item.title}</h1>
              <div className="flex gap-3">
                <button
                  onClick={() => handler(item.id)}
                  className="grid place-content-center"
                  title="Details"
                >
                  <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
                </button>
                <button
                  onClick={() =>
                    dispatch(updateTask({ id: item.id, status: 'done' }))
                  }
                  className="grid place-content-center"
                  title="Done"
                >
                  <CheckIcon className="w-5 h-5 text-primary" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyTasks;
