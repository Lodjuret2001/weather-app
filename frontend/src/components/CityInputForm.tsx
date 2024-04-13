import { useForm } from "react-hook-form";
import usePlaceholderText from "../hooks/usePlaceholderText";

// { setCityName }: Props
const CityInputForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();

  const { placeholderTexts, placeholderIndex } = usePlaceholderText();

  const onSubmit = (data: Form) => {
    console.log(data.input);
  };

  return (
    <div className="flex flex-col items-center">
      <form
        className="flex items-center justify-between "
        onSubmit={handleSubmit((data) => onSubmit(data))}
      >
        <input
          type="text"
          className="bg-purple-400 outline-none p-2 rounded-md text-white placeholder:text-white"
          placeholder={placeholderTexts[placeholderIndex]}
          {...register("input", {
            required: {
              value: true,
              message: "A input is required...",
            },
            pattern: {
              value: /[A-Za-z]{3}/,
              message:
                "Cannot contain any numbers & need to be atlest 3 characters",
            },
          })}
        />
        <button className="ml-5 bg-blue-200 p-2 rounded-md" type="submit">
          Change city
        </button>
      </form>
      {errors.input && (
        <p className="text-red-300 mt-3 underline">{errors.input.message}</p>
      )}
    </div>
  );
};

// type Props = {
//   setCityName: React.Dispatch<React.SetStateAction<string>>;
// };

type Form = {
  input: string;
};

export default CityInputForm;
