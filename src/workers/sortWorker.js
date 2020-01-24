import sortWorker from './sort.worker';
import { createWebWorker } from '~utils';

export default createWebWorker(sortWorker);
