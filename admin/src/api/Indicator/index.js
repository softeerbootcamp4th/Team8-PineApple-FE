import { get } from '@/api/index';

const getIndicator = () => get('/admin/indicator');

export { getIndicator };
