import { createAction, props } from "@ngrx/store";

export const incrementCounterAction = createAction('incrementCounter');
export const incrementCounterActionInput = createAction('incrementCounterInput', props<{input: number}>());