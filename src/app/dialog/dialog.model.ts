export enum RouteName {
  POP_1 = 'pop-1',
  POP_2 = 'pop-2',
  POP_3 = 'pop-3',
}

export enum ParamName {
  ORDER = 'order',
  PRICE = 'price',
  LIKENESS = 'likeness',
}

export interface QueryParamCollection {
  [ParamName.ORDER]: string;
  [ParamName.PRICE]: number;
  [ParamName.LIKENESS]: string;
}
