import { Card, CardHeader, CardTitle } from "../ui/card";
import styles from "@/components/shared/todolist.module.css";

const TodoCard = ({
  title,
  id,
  completed,
}: {
  title: string;
  id: string;
  completed: boolean;
}) => {
  return (
    <Card className="max-w-[480px] w-full">
      <CardHeader>
        <CardTitle>
          <main className="flex gap-4 content-center">
            <div>
              <input type="checkbox" id={id} className={styles.input} />
              <label htmlFor={id} className={styles.label}>
                <div className={styles.tick}></div>
              </label>
            </div>
            <span
              className={completed ? "text-muted-foreground line-through" : ""}
            >
              {title || "title"}
            </span>
          </main>
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default TodoCard;
