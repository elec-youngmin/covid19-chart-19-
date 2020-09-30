export const initialState = {
  loadDataLoading: true,
  loadDataDone: false,
  loadDataError: null,
  loadDataChartLoading: true,
  loadDataChartDone: false,
  loadDataChartError: null,
  dataArray: {},
  chartData: {},
};

export const DATA_IMPORT_REQUEST = "DATA_IMPORT_REQUEST";
export const DATA_IMPORT_SUCCESS = "DATA_IMPORT_SUCCESS";
export const DATA_IMPORT_FAILURE = "DATA_IMPORT_FAILURE";

export const DATA_CHART_REQUEST = "DATA_CHART_REQUEST";
export const DATA_CHART_SUCCESS = "DATA_CHART_SUCCESS";
export const DATA_CHART_FAILURE = "DATA_CHART_FAILURE";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_IMPORT_SUCCESS: {
      return {
        ...state,
        loadDataLoading: false,
        loadDataDone: true,
        loadDataError: null,
        dataArray: action.data,
      };
    }
    case DATA_CHART_SUCCESS: {
      return {
        ...state,
        loadDataChartLoading: false,
        loadDataChartDone: true,
        loadDataChartError: null,
        chartData: action.data,
      };
    }
    default:
      return state;
  }
};

export default reducer;
