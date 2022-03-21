import { Request, Response } from 'express';
import CreateCourseService from './CreateCouseService';

export function createCourse(request: Request, response: Response) {
  const { name, duration, educator } = request.body;

  CreateCourseService.execute({
    name,
    duration,
    educator,
  });
  return response.send();
}
