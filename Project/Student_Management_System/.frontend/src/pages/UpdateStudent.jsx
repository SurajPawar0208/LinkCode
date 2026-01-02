import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate, useParams } from 'react-router-dom';
import { useStudent, useUpdateStudent } from '../hooks/useStudents';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import toast, { Toaster } from 'react-hot-toast';

const studentSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  age: z.number().min(1, 'Age must be at least 1'),
  course: z.string().min(1, 'Course is required'),
  address: z.string().optional(),
});

const UpdateStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useStudent(id);
  const updateStudentMutation = useUpdateStudent();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(studentSchema),
  });

  const student = data;

  if (isLoading) return <div className="text-center">Loading...</div>;

  useEffect(() => {
    if (student) {
      reset({
        name: student.name,
        email: student.email,
        age: student.age,
        course: student.course,
        address: student.address || '',
      });
    }
  }, [student, reset]);

  const onSubmit = async (data) => {
    try {
      await updateStudentMutation.mutateAsync({ id, ...data });
      toast.success('Student updated successfully');
      navigate('/students');
    } catch (error) {
      toast.error('Failed to update student');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6">Update Student</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="card">
          <FormInput
            label="Name"
            {...register('name')}
            error={errors.name}
          />
          <FormInput
            label="Email"
            type="email"
            {...register('email')}
            error={errors.email}
          />
          <FormInput
            label="Age"
            type="number"
            {...register('age', { valueAsNumber: true })}
            error={errors.age}
          />
          <FormInput
            label="Course"
            {...register('course')}
            error={errors.course}
          />
          <FormInput
            label="Address"
            {...register('address')}
            error={errors.address}
          />
          <div className="flex space-x-4">
            <Button type="submit" disabled={updateStudentMutation.isPending}>
              {updateStudentMutation.isPending ? 'Updating...' : 'Update Student'}
            </Button>
            <Button variant="secondary" onClick={() => navigate('/students')}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default UpdateStudent;
