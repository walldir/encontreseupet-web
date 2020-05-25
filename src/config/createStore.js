import { init } from '@rematch/core';
import models from './models';

export default function createStore() {
  return init({ models });
}