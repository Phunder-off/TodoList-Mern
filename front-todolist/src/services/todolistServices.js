import axios from "axios";

const apiLink = "http://localhost:3001/todolist/";

let thenRequest = (setTasks, then) => {
    getTasks(setTasks);
    if (then != null) {
        then();
    }
}

export const getTasks = (setTask) => {
	axios.get(apiLink).then((res) => setTask(res.data));
};

export const createTask = (data, setTasks, then) => {
	axios.post(apiLink, data).then((res) => {
		thenRequest(setTasks, then);
	});
};

export const deleteTask = (id, setTasks, then) => {
	axios.delete(apiLink + id).then((res) => {
		thenRequest(setTasks, then);
	});
};

export const updateTask = (id, data, setTasks, then) => {
	axios.put(apiLink + id, data).then((res) => {
		thenRequest(setTasks, then);
	});
};
