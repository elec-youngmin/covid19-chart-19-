import React, { useCallback, useMemo, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Button, Row, Col } from "react-bootstrap";
import { DATA_IMPORT_REQUEST } from "../reducers/covid";
import NumberFormat from "react-number-format";
const Board = () => {
  const dataSet = useSelector((state) => state.covid.chartData);
  const data = dataSet[0];
  console.log(typeof dataSet[0].accExamCnt);
  return (
    <div>
      <Row className="board">
        <Col>
          {" "}
          <Button variant="info" size="sm" block>
            전체검사수:{data.accExamCnt.toLocaleString()}명
          </Button>{" "}
        </Col>

        <Col>
          {" "}
          <Button variant="info" size="sm" block>
            금일검사수:{data.examCnt.toLocaleString()}명
          </Button>{" "}
        </Col>

        <Col>
          {" "}
          <Button variant="info" size="sm" block>
            전체음성수:{data.resutlNegCnt.toLocaleString()}명{" "}
          </Button>{" "}
        </Col>

        <Col>
          {" "}
          <Button variant="info" size="sm" block>
            누적확진률:{data.accDefRate.toLocaleString()}%
          </Button>{" "}
        </Col>
      </Row>
      <Row className="board">
        <Col>
          <Button variant="info" size="sm" block>
            전체확진자{data.decideCnt.toLocaleString()}명
          </Button>
        </Col>

        <Col>
          <Button variant="info" size="sm" block>
            사망자:{data.deathCnt.toLocaleString()}명
          </Button>
        </Col>

        <Col>
          <Button variant="info" size="sm" block>
            치료중인 환자수:{data.careCnt.toLocaleString()}명
          </Button>
        </Col>

        <Col>
          <Button variant="info" size="sm" block>
            치료완료:{data.clearCnt.toLocaleString()}명
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Board;
