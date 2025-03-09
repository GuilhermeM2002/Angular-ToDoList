export interface Task{
    id?: number;
    task: string;
    category: 'school' | 'college' | 'personal' | 'work';
    completed: boolean;
}