import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { useAddStudent } from '../hooks/useStudents';
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

const AddStudent = () => {
  const navigate = useNavigate();
  const addStudentMutation = useAddStudent();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(studentSchema),
  });

  const onSubmit = async (data) => {
    try {
      await addStudentMutation.mutateAsync(data);
      toast.success('Student added successfully');
      navigate('/students');
    } catch {
      toast.error('Failed to add student');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6">Add Student</h1>
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
            <Button type="submit" disabled={addStudentMutation.isPending}>
              {addStudentMutation.isPending ? 'Adding...' : 'Add Student'}
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

export default AddStudent;
