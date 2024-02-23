import styles from './todolist.module.css';
import { useEffect, useState } from 'react';

const TodoList = ({ title }: { title: string }) => {
  const [completed, setCompleted] = useState<boolean>(false);

  useEffect(() => {}, [completed]);

  return (
    <main className='flex gap-4 content-center'>
      <div>
        <input
          type='checkbox'
          id='cb1'
          className={styles.input}
          onClick={() => setCompleted((prev) => !prev)}
        />
        <label htmlFor='cb1' className={styles.label}>
          <div className={styles.tick}></div>
        </label>
      </div>
      <span className={completed ? 'text-muted-foreground line-through' : ''}>
        {title}
      </span>
    </main>
  );
};

export default TodoList;
