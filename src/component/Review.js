import React from "react";
import styled from "styled-components";
import dummy from "../dummy.json";
import { useLocale } from "../context/LocaleContext";

const dict = {
  ko: {
    "edit button": "수정",
    "delete button": "삭제",
  },
  en: {
    "edit button": "Edit",
    "delete button": "Delete",
  },
};

const Review = () => {
  const locale = useLocale();
  const translate = (key) => dict[locale][key] || "";
  return (
    <ReviewList>
      {dummy.data.map((review) => (
        <ReviewDiv>
          <img src={review.img} />
          <div>
            <div className="title">{review.title}</div>
            <div className="comment">{review.comment}</div>
            <div style={{ display: "flex" }} className="btnline">
              <button>{translate("edit button")}</button>
              <button>{translate("delete button")}</button>
            </div>
          </div>
        </ReviewDiv>
      ))}
    </ReviewList>
  );
};

export default Review;

const ReviewList = styled.div`
  padding: 30px;
`;
const ReviewDiv = styled.div`
  display: flex;
  padding: 30px;
  border: 2px solid #e9e9e9;
  border-radius: 20px;
  gap: 0 20px;
  position: relative;
  margin-bottom: 30px;
  img {
    height: 200px;
  }
  .title {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .comment {
    font-size: 15px;
  }
  .btnline {
    position: absolute;
    right: 30px;
    bottom: 30px;
    gap: 0 10px;
  }
`;
