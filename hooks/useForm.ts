/* eslint-disable @typescript-eslint/no-explicit-any */
import { ZodError, ZodObject } from "zod";

const useForm = () => {

  const validateField = <T extends Record<string, any>>(
    schema: ZodObject<T>,
    name: keyof T,
    value: string,
    setErrors: React.Dispatch<React.SetStateAction<Partial<Record<keyof T, string>>>>
  ) => {
    try {
      const singleFieldSchema = schema.shape[name];
      singleFieldSchema.parse(value);
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    } catch (error) {
      if (error instanceof ZodError) {
        setErrors((prev) => ({
          ...prev,
          [name]: error.issues[0]?.message || "Invalid value",
        }));
      }
    }
  };
  
  const handleChange = <T extends Record<string, any>>(
    e: React.ChangeEvent<HTMLInputElement>,
    schema: ZodObject<T>,
    setErrors: React.Dispatch<React.SetStateAction<Partial<Record<keyof T, string>>>>
  ) => {
    const { name, value } = e.target;
    validateField(schema, name as keyof T, value, setErrors);
  };

  return {
    validateField,
    handleChange
  }
}

export default useForm