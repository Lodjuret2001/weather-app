import { useForm } from "react-hook-form";
import usePlaceholderText from "../hooks/usePlaceholderText";

const CityInputForm = ({ setCityName }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();

  const { placeholderTexts, placeholderIndex } = usePlaceholderText();

  const onSubmit = (data: Form) => {
    setCityName(data.input);
  };

  const inputCSS: string =
    "bg-gradient-to-r from-pink-300 from-150%  to-blue-200 to-80% outline-none p-2 rounded-md text-black placeholder:text-black";
  const buttonCSS: string =
    "border-2 border-blue-200 ml-5 bg-blue-200 p-[6px] rounded-md hover:bg-transparent hover:border-orange-300 hover:text-white";

  return (
    <div className="flex flex-col items-center mt-3">
      <form
        className="flex items-center justify-between "
        onSubmit={handleSubmit((data) => onSubmit(data))}
      >
        <input
          type="text"
          className={inputCSS}
          placeholder={placeholderTexts[placeholderIndex]}
          {...register("input", {
            required: {
              value: true,
              message: "A input is required...",
            },
            pattern: {
              value: /[A-Za-z]{3,}/,
              message:
                "Cannot contain any numbers & need to be atlest 3 characters",
            },
          })}
        />
        <button className={buttonCSS} type="submit">
          Change city
        </button>
      </form>
      {errors.input && (
        <p className="text-red-300 mt-3 underline w-4/5 text-center">{errors.input.message}</p>
      )}
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
