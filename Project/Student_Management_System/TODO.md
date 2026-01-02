# TODO: Add Recent Students Section

- [ ] Add `useRecentStudents` hook in `.frontend/src/hooks/useStudents.js` to fetch the most recent student (limit 1, sorted by createdAt desc)
- [ ] Update `.frontend/src/pages/StudentsList.jsx` to integrate the "Recent Students" section above the main list, displaying the last added student with key details (name, email, age, course, enrollment date)
- [ ] Test the frontend to ensure the recent student displays correctly
- [ ] Ensure Recent Students updates immediately when a new student is added (via navigation remount)
