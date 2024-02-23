import TodoCard from './components/shared/TodoCard';
import MaxWidthWrapper from './components/utils/MaxWidthWrapper';
import {useQuery} from "@apollo/client";
import {GET_TODOS} from "@/queries/todoQuery.ts";
import Spinner from "@/components/shared/Spinner.tsx";

function App() {
    const {loading, error, data} = useQuery(GET_TODOS);

    if (loading) return <Spinner/>;
    if (error) return <p>Something Went Wrong</p>;
    console.log(data.title);

    return (
        <>
            <MaxWidthWrapper>
                {data && data.title}
                <TodoCard title='todo'/>
            </MaxWidthWrapper>
        </>
    );
}

export default App;
