import { useForm } from 'react-hook-form';
import Modal from '../components/Modal/Modal';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/features/tasks/taskSlice';

const AddTaskModel = ({ isOpen, setIsOpen, title }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(addTask(data));
    reset();
  };

  const onCancel = () => [reset()];

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={title}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <div className="flex flex-col mt-3">
          <label htmlFor="name">Title:</label>
          <input
            required
            className="rounded-md w-full"
            type="text"
            id="name"
            placeholder="Enter title"
            {...register('title')}
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="description"> Description:</label>
          <textarea
            required
            placeholder="Enter task description"
            className="rounded-md w-full"
            type="text"
            id="description"
            {...register('description')}
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="date">Deadline:</label>
          <input
            required
            className="rounded-md w-full cursor-pointer"
            type="date"
            id="date"
            {...register('date')}
          />
        </div>
        <div className="flex flex-col mt-3">
          <label>Assign To:</label>
          <select
            className="rounded-md w-full cursor-pointer"
            {...register('assignedTo')}
          >
            <option defaultValue value="Md Abdur Rasid">
              Md Abdur Rasid
            </option>
            <option value="Kulsum Begum">Kulsum Begum</option>
            <option value="Robin Mia">Robin Mia</option>
            <option value="Rony Mia">Rony Mia</option>
            <option value="Rahat Mia">Rahat Mia</option>
            <option value="Rashed Mia">Rashed Mia</option>
          </select>
        </div>
        <div className="flex flex-col mt-3">
          <label>Priority:</label>
          <select
            className="rounded-md w-full cursor-pointer"
            {...register('priority')}
          >
            <option defaultValue value="High">
              High
            </option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div className="flex gap-x-3">
          <button type="submit" className="btn btn-primary mt-5">
            Submit
          </button>
          <button
            type="reset"
            onClick={() => {
              onCancel();
              setIsOpen(!isOpen);
            }}
            className="btn btn-danger mt-5"
          >
            close
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModel;
