import { get } from '@/api/index';

const getScenario = () => get('/draw/scenario');

export { getScenario };
