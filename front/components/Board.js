import React, { useCallback, useMemo, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Row, Col } from "react-bootstrap";
import {
  DATA_ACCEXAMCNT_REQUEST,
  DATA_EXAMCNT_REQUEST,
  DATA_ACCEXAMCOMPCNT_REQUESST,
  DATA_ACCDEFRATE_REQUEST,
  DATA_DECIDECNT_REQUEST,
  DATA_DEATHCNT_REQUEST,
  DATA_CARECNT_REQUEST,
  DATA_CLEARCNT_REQUEST,
} from "../reducers/covid";

const Board = () => {
  let data;
  const dataSet = useSelector((state) => state.covid.chartData);
  // console.log(dataSet.length - 1);
  // console.log(dataSet[0].examCnt);

  // if (dataSet[0].examCnt == 1) {
  //   data = dataSet[dataSet.length - 1];
  // } else {
  //   data = dataSet[0];
  // }
  data = dataSet[0];

  const dispatch = useDispatch();

  return (
    <div>
      <Row className="board">
        <Col>
          {" "}
          <Button
            variant="info"
            size="sm"
            block
            onClick={() => {
              dispatch({ type: DATA_EXAMCNT_REQUEST });
            }}
          >
            전체 검사수:{data.accExamCnt}명
          </Button>{" "}
        </Col>

        <Col>
          {" "}
          <Button
            variant="info"
            size="sm"
            block
            onClick={() => {
              dispatch({ type: DATA_ACCEXAMCNT_REQUEST });
            }}
          >
            일일 검사수:{data.examCnt}명
          </Button>{" "}
        </Col>

        <Col>
          {" "}
          <Button
            variant="info"
            size="sm"
            block
            onClick={() => {
              dispatch({ type: DATA_ACCEXAMCOMPCNT_REQUESST });
            }}
          >
            전체 음성수:{data.resutlNegCnt}명{" "}
          </Button>{" "}
        </Col>

        <Col>
          {" "}
          <Button
            variant="info"
            size="sm"
            block
            onClick={() => {
              dispatch({ type: DATA_ACCDEFRATE_REQUEST });
            }}
          >
            누적 확진률:{data.accDefRate}%
          </Button>{" "}
        </Col>
      </Row>
      <Row className="board">
        <Col>
          <Button
            variant="info"
            size="sm"
            block
            onClick={() => {
              dispatch({ type: DATA_DECIDECNT_REQUEST });
            }}
          >
            전체 확진자{data.decideCnt}명
          </Button>
        </Col>

        <Col>
          <Button
            variant="info"
            size="sm"
            block
            onClick={() => {
              dispatch({ type: DATA_DEATHCNT_REQUEST });
            }}
          >
            사망자:{data.deathCnt}명
          </Button>
        </Col>

        <Col>
          <Button
            variant="info"
            size="sm"
            block
            onClick={() => {
              dispatch({ type: DATA_CARECNT_REQUEST });
            }}
          >
            치료중인 환자수:{data.careCnt}명
          </Button>
        </Col>

        <Col>
          <Button
            variant="info"
            size="sm"
            block
            onClick={() => {
              dispatch({ type: DATA_CLEARCNT_REQUEST });
            }}
          >
            치료 완료수:{data.clearCnt}명
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Board;
