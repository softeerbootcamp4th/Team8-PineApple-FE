import { put, get } from '@/api/index';

const putEventSchedules = startDate =>
  put('/admin/event-schedules', { startDate });

const getEventSchedules = () => get('/admin/event-schedules');

export { putEventSchedules, getEventSchedules };
