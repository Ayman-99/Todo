import styles from './submitForm.module.css';

export default function SubmitForm({handleSubmit, todo, setTodo}) {
    return (
        <form className={styles.todoform} onSubmit={handleSubmit}>
            <input
                className={styles.moderninput}
                onChange={(e) => setTodo({name: e.target.value, done: false})}
                type="text"
                value={todo.name}
            />
            <button className={styles.modernbutton} type={"submit"}>Add</button>
        </form>
    )
}