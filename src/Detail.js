import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button'
import "./Detail.css";

const Detail = (props) => {
  const [state, setState] = useState();

  return (
    <React.Fragment>
      <div>
        <div className="detail__container">
          <div className="details">
            <img
              src="https://mblogthumb-phinf.pstatic.net/20151104_221/werkstatt_1446629678268NYyVS_JPEG/unbenannt-53%281%29.jpg?type=w2"
              alt="User Image"
              className="image"
            />
            <div class="sign__data">
              <h2 class="sign__title">{ } 주차 금지 표지판</h2>
              <h4 class="sign_en_title">{ } SIGN</h4>
              <p class="sign_detail">
                덴버 자동차 제작자 다코타 레이의 일곱 번째 영화인
                세바스찬의 언홀리 플레쉬는 새로운 악의 출현을
                연대순으로 기록한 실험적인 공포/판타지 영화이다.
                ...의 전환 후.
              </p>
              <p class="sign_en_detail">
                Sebastian's Unholy Flesh-the seventh film
                by Denver auteur filmmaker Dakota Ray, is
                an experimental, horror/fantasy film,
                chronicling the emergence of a new evil.
                After a shift in ...
              </p>
            </div>
          </div>
        </div>
        <Button
          variant="contained"
          color="primary"
        >
        TO HOME
        </Button>
      </div>
    </React.Fragment>
  );
}

export default Detail;