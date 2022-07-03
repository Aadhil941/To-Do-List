import styled from "styled-components";
import { Input } from "antd";

export const InputText = (props) =>  <Input {...props} autoComplete="off" />;

export const FormWrapper = styled.form`
  width: 100%;
  margin-bottom: 20px;

  & .field-label {
    font-size: 13px !important;
  }
`;

export const InputWrapper = styled(InputText)`
  border: 1px solid #BDBEBF !important;
  border-radius: 10px !important;
`;
