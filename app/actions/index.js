// @flow


const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}

export const DEFAULT = createRequestTypes('DEFAULT');


export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

function action(type, payload = {}) {
  return { type, ...payload };
}


export const example = {
  request: jokes => action(DEFAULT[REQUEST], { jokes }),
  success: (jokes, response) => action(DEFAULT[SUCCESS], { jokes, response }),
  failure: (jokes, error) => action(DEFAULT[FAILURE], { jokes, error }),
};

export const resetErrorMessage = () => action(RESET_ERROR_MESSAGE);
