export enum RouteName {
  POP_1 = 'pop-1',
  POP_2 = 'pop-2',
  POP_3 = 'pop-3',
  POP_4 = 'pop-4',
}

export enum ParamName {
  ORDER = 'order',
  LIMIT = 'limit',
  AUTHOR = 'author',
  SUCCESS = 'success',
}

export interface QueryParamCollection {
  [ParamName.ORDER]: string;
  [ParamName.LIMIT]: number;
  [ParamName.AUTHOR]: string;
  [ParamName.SUCCESS]: boolean;
}
