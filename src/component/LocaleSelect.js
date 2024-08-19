import React from "react";
import styled from "styled-components";
import { useLocale, useSetLocale } from "../context/LocaleContext";

const SelectLang = styled.select``;
const OptionLang = styled.option``;

const LocaleSelect = () => {
  const locale = useLocale();
  const setLocale = useSetLocale();

  const onChangeLocale = (e) => {
    setLocale(e.target.value);
  };
  return (
    <>
      <SelectLang onChange={onChangeLocale} value={locale}>
        <OptionLang value={"ko"}>한국어</OptionLang>
        <OptionLang value={"en"}>영어</OptionLang>
      </SelectLang>
      <h2>언어: {locale}</h2>
    </>
  );
};

export default LocaleSelect;
