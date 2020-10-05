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
  const dispatch = useDispatch();
  const data = useSelector((state) => state.covid.dataArray);
  console.log(typeof data);
  // const accExamCnt = data.accExamCnt.toLocaleString();
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
            전체 검사수:{data.accExamCnt.toLocaleString()}명
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
            일일 검사수:{data.examCnt.toLocaleString()}명
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
            전체 음성수:{data.resutlNegCnt.toLocaleString()}명{" "}
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
            누적 확진률:{data.accDefRate.toLocaleString()}%
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
            전체 확진자{data.decideCnt.toLocaleString()}명
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
            사망자:{data.deathCnt.toLocaleString()}명
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
            일일 치료중인 환자수:{data.careCnt.toLocaleString()}명
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
            전체 치료 완료수:{data.clearCnt.toLocaleString()}명
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Board;
