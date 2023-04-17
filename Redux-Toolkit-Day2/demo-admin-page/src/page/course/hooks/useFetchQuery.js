import { useGetAllCategoryQuery } from "../../../app/services/categorySevice";
import { useGetAllUserQuery } from "../../../app/services/userService";

const useFetchQuery = () => {
    // Lấy danh sách category
    const { data: categories, isLoading: isLoadingCategory } =
        useGetAllCategoryQuery();

    // Lấy danh sách user
    const { data: users, isLoading: isLoadingUser } = useGetAllUserQuery();

    return {
        categories,
        users,
        isLoading: isLoadingCategory || isLoadingUser
    }
}

export default useFetchQuery;