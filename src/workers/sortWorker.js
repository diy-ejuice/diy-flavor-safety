import sortWorker from './sort.worker';
import { createWebWorker } from 'utils';

export const createSortWorker = () => createWebWorker(sortWorker);
