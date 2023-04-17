import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { courseSchema } from "../schemas/schemas";

const useCreate = () => {
    // Khởi tạo form
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            price: 0,
        },
        resolver: yupResolver(courseSchema),
        mode: "all",
    });

    // Function tạo khóa học
    const onCreateCourse = (data) => {
        console.log(data);
    };

    return {
        control,
        register,
        handleSubmit,
        errors,
        onCreateCourse
    }
}

export default useCreate;