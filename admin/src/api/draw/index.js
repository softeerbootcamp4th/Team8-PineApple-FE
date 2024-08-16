import { post, get, patch, put, del } from '@/api/index';

const getAdminDraw = day => get(`/admin/draw/daily-info/${day}`);

const putAdminDraw = body => put(`/admin/draw/daily-info`, body);

export { getAdminDraw, putAdminDraw };
