export const initialState = {
  loadDataLoading: true,
  loadDataDone: false,
  loadDataError: null,
  loadDataChartLoading: true,
  loadDataChartDone: false,
  loadDataChartError: null,
  data_flag: [false, false, false, false, false, false, false, false],
  chartData: {},
};

export const DATA_ACCEXAMCNT_REQUEST = "DATA_ACCEXAMCNT_REQUEST";
export const DATA_EXAMCNT_REQUEST = "DATA_EXAMCNT_REQUEST";
export const DATA_ACCEXAMCOMPCNT_REQUESST = "DATA_ACCEXAMCOMPCNT_REQUESST";
export const DATA_ACCDEFRATE_REQUEST = "DATA_ACCDEFRATE_REQUEST";
export const DATA_DECIDECNT_REQUEST = "DATA_DECIDECNT_REQUEST";
export const DATA_DEATHCNT_REQUEST = "DATA_DEATHCNT";
export const DATA_CARECNT_REQUEST = "DATA_CARECNT_REQUEST";
export const DATA_CLEARCNT_REQUEST = "DATA_CLEARCNT_REQUEST";

export const DATA_IMPORT_REQUEST = "DATA_IMPORT_REQUEST";
export const DATA_IMPORT_SUCCESS = "DATA_IMPORT_SUCCESS";
export const DATA_IMPORT_FAILURE = "DATA_IMPORT_FAILURE";

export const DATA_CHART_REQUEST = "DATA_CHART_REQUEST";
export const DATA_CHART_SUCCESS = "DATA_CHART_SUCCESS";
export const DATA_CHART_FAILURE = "DATA_CHART_FAILURE";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_CHART_SUCCESS: {
      return {
        ...state,
        loadDataChartLoading: false,
        loadDataChartDone: true,
        loadDataChartError: null,
        loadDataDone: true,
        chartData: action.data,
      };
    }
    case DATA_ACCEXAMCNT_REQUEST: {
      return {
        ...state,
        data_flag: [true, false, false, false, false, false, false, false],
        loadDataChartDone: false,
      };
    }
    case DATA_EXAMCNT_REQUEST: {
      return {
        ...state,
        data_flag: [false, true, false, false, false, false, false, false],
        loadDataChartDone: false,
      };
    }
    case DATA_ACCEXAMCOMPCNT_REQUESST: {
      return {
        ...state,
        data_flag: [false, false, true, false, false, false, false, false],
        loadDataChartDone: false,
      };
    }
    case DATA_ACCDEFRATE_REQUEST: {
      return {
        ...state,
        data_flag: [false, false, false, true, false, false, false, false],
        loadDataChartDone: false,
      };
    }
    case DATA_DECIDECNT_REQUEST: {
      return {
        ...state,
        data_flag: [false, false, false, false, true, false, false, false],
        loadDataChartDone: false,
      };
    }
    case DATA_DEATHCNT_REQUEST: {
      return {
        ...state,
        data_flag: [false, false, false, false, false, true, false, false],
        loadDataChartDone: false,
      };
    }
    case DATA_CARECNT_REQUEST: {
      return {
        ...state,
        data_flag: [false, false, false, false, false, false, true, false],
        loadDataChartDone: false,
      };
    }
    case DATA_CLEARCNT_REQUEST: {
      return {
        ...state,
        data_flag: [false, false, false, false, false, false, false, true],
        loadDataChartDone: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
