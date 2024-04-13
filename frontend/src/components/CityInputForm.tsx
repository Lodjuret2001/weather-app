import { useForm } from "react-hook-form";

const CityInputForm = ({ setCityName }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();

  const onSubmit = (data: Form) => {
    console.log(data.input);
  };

  return (
    <div>
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <input
          type="text"
          {...register("input", {
            required: true,
            minLength: 3,
            pattern: {
              value: /[A-Za-z]/,
              message: "Cannot contain any numbers",
            },
          })}
          {...(errors.input && (
            <p className="text-red-900">{errors.input.message}</p>
          ))}
        />
        <button type="submit">Change city</button>
      </form>
    </div>
  );
};

type Props = {
  setCityName: React.Dispatch<React.SetStateAction<string>>;
};

type Form = {
  input: string;
};

export default CityInputForm;
