interface ICourse {
  name: string;
  duration: number;
  educator: string;
}

class CreateCourseService {
  static execute({ name, duration, educator }: ICourse) {
    console.log(name, duration, educator);
  }
}

export default CreateCourseService;
