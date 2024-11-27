import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private TasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.TasksService.getAllTasks();
  }

  @Post()
  // eslint-disable-next-line prettier/prettier
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Task {
    console.log('title', title, 'desc', description);
    return this.TasksService.createTask(title, description);
  }
}
