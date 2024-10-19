import { useForm } from 'react-hook-form';

const Chat = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <div className="flex flex-col gap-3">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" {...register('name')} />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register('email')} />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register('password')} />
      </div>

      <button type="submit" className="btn btn-danger">
        Submit
      </button>
    </form>
  );
};

export default Chat;
