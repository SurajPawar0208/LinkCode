import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from './useApi';

export const useStudents = (page = 1, limit = 10, search = '') => {
  return useQuery({
    queryKey: ['students', page, limit, search],
    queryFn: async () => {
      const response = await api.get('/student/list', {
        params: { page, limit, search },
      });
      return response.data;
    },
  });
};

export const useStudent = (id) => {
  return useQuery({
    queryKey: ['student', id],
    queryFn: async () => {
      const response = await api.get(`/student/${id}`);
      return response.data;
    },
    enabled: !!id,
  });
};

export const useAddStudent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (studentData) => {
      const response = await api.post('/student/add', studentData);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'] });
    },
  });
};

export const useUpdateStudent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, ...studentData }) => {
      const response = await api.put('/student/update', { id, ...studentData });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'] });
      queryClient.invalidateQueries({ queryKey: ['student'] });
    },
  });
};

export const useDeleteStudent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id) => {
      const response = await api.delete('/student/delete', { data: { id } });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'] });
    },
  });
};
