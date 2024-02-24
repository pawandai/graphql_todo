import TodoCard from './components/shared/TodoCard';
import MaxWidthWrapper from './components/utils/MaxWidthWrapper';
import {useEffect, useState} from "react";
import {client, GET_TODOS} from "@/queries/todoQuery.ts";
import {Loader2} from 'lucide-react'

type todoType = {
    id: string,
    title: string,
    completed: boolean,
}

function App() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTodos = async () => {
            setLoading(true);
            const {data} = await client.query({query: GET_TODOS});
            setTodos(data.getTodos);
            setLoading(false);
        };

        fetchTodos();
    }, [todos]);
    return (
        <>
            <MaxWidthWrapper className='flex flex-col gap-5'>
                {loading && <Loader2 className='animate-spin h-12 w-12'/>}
                {todos && todos.map((todo: todoType) => (
                    <TodoCard key={todo.title} id={todo.id} title={todo.title}/>))}
            </MaxWidthWrapper>
        </>
    );
}

export default App;
