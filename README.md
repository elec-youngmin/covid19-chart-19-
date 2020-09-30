# covid19-chart (코로나19 차트)
공공데이터를 활용해 코로나19 차트를 작성하였습니다.

공공데이터는 보건복지부에서 제공하는 API를 사용하였습니다.

코딩하면서 가장 큰 문제점은 컴포넌트를 렌더링한후 API 데이터가 로드되어 컴포넌트에 데이터가 보이지 않는 현상이 발생했습니다. 
이 문제점은 조건부 연산자를 사용해 API 데이터를 서버에서 프론트로 전부 로드되어 데이터가 프론트로  데이터가 들어있는 컴포넌트를 렌더링하고, API 데이터가 컴포넌트에 로드되지 않으면 로딩 컴포넌트를 
렌더링하면서 문제를 해결 했습니다.

사용한 기술 스택은 다음과 같습니다.

frontend: java script, react, next, redux, redux-saga, react-chartjs, react-bootstrap

backend: node, express

etc: axios, dotenv
