import React, { useCallback, useMemo, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Button, Row, Col } from "react-bootstrap";
import { DATA_IMPORT_REQUEST } from "../reducers/covid";
const Board = () => {
  const dataSet = useSelector((state) => state.covid.dataArray);
  const data = dataSet;

  return (
    <div>
      <Row className="board">
        <Col>
          {" "}
          <Button variant="info" size="sm" block>
            전체검사수:{data.accExamCnt}명
          </Button>{" "}
        </Col>

        <Col>
          {" "}
          <Button variant="info" size="sm" block>
            금일검사수:{data.examCnt}명
          </Button>{" "}
        </Col>

        <Col>
          {" "}
          <Button variant="info" size="sm" block>
            전체음성수:{data.resutlNegCnt}명{" "}
          </Button>{" "}
        </Col>

        <Col>
          {" "}
          <Button variant="info" size="sm" block>
            누적확진률:{data.accDefRate}%
          </Button>{" "}
        </Col>
      </Row>
      <Row className="board">
        <Col>
          <Button variant="info" size="sm" block>
            전체확진자{data.decideCnt}명
          </Button>
        </Col>

        <Col>
          <Button variant="info" size="sm" block>
            사망자:{data.deathCnt}명
          </Button>
        </Col>

        <Col>
          <Button variant="info" size="sm" block>
            치료중인 환자수:{data.careCnt}명
          </Button>
        </Col>

        <Col>
          <Button variant="info" size="sm" block>
            치료완료:{data.clearCnt}명
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Board;
