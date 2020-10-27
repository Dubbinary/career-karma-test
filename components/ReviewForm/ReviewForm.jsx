import React, { useContext } from "react";
import { ThemeContext } from 'styled-components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  Guidelines,
  Input,
  Checkbox,
  Select,
  Label,
  DatePicker,
} from 'components';
import * as S from "./styled";
import { strings } from "data";
import Status from "./Status";
import Ratings from "./Ratings";
import Tuitions from "./Tuitions";
import Employed from "./Employed";


 const validationSchema = Yup.object().shape({
   firstName: Yup.string().required(strings.validation.required),
   lastName: Yup.string().required(strings.validation.required),
   email: Yup.string()
     .email(strings.validation.invalidEmail)
     .required(strings.validation.required)
 });

const ReviewForm = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <S.Form>
      <S.FormContainer>
        <S.SignInBtn>
          {strings.reviewForm.signInBtn1}
          <span style={{textDecoration: "underline"}}>
            {strings.reviewForm.signInBtn2}
          </span>
        </S.SignInBtn>
        <S.Header>
          <S.AppAcademyImage
            alt={strings.reviewForm.heading}
            src={themeContext.assets.appAcademyImg}/>
          <S.Heading>
            {strings.reviewForm.heading}
          </S.Heading>
        </S.Header>

        <Formik
          initialValues={strings.reviewForm.initialValues}
          validationSchema={validationSchema}
          onSubmit={values => {
            alert(JSON.stringify(values));
          }}
          >
          {({...props }) => (
            <Form {...props}>
              <S.MainInfo>
                {strings.reviewForm.mainInfoInputs.map((item,i) =>
                  <Input key={i} {...item} />
                )}
              </S.MainInfo>
              <Checkbox {...strings.reviewForm.keepAnonymous}/>
              <Status
                value={props.values.status}
                onChange={value => props.setFieldValue("status", value)}
              />
              <Ratings />
              <S.Review>
                {strings.reviewForm.reviewInputs.map((item,i) =>
                  <Input key={i} {...item} />
                )}
              </S.Review>
              {strings.reviewForm.courseInfoSelects.map((item,i) =>
                <Select
                  key={i}
                  {...item}
                  onChange={value => props.setFieldValue(item.name, value)}
                />
              )}
              <Tuitions />
              <Select {...strings.reviewForm.locationSelect}
                onChange={value => props.setFieldValue(
                  strings.reviewForm.locationSelect.name,
                  value
                )}
              />
              <br/>
              <DatePicker
                label="Graduation date"
                name="graduationDate"
                format="YYYY/MM/DD"
                onChange={value => props.setFieldValue("graduationDate", value)}
              />

              <Employed
                name={strings.reviewForm.employedField.name}
                onChange={value => props.setFieldValue(
                  strings.reviewForm.employedField.name,
                  value
                )}
              />
              {strings.reviewForm.jobInfoInputs.map((item,i) =>
                <Input
                  key={i}
                  min={0}
                  {...item}
                  disabled={!props.values.employed}
                />
              )}
              <S.SubmitBtn type="submit">
                {strings.reviewForm.submitBtn}
              </S.SubmitBtn>
              <br/>
              <Label light>{strings.reviewForm.termsOfUse}</Label>
            </Form>
          )}
        </Formik>
      </S.FormContainer>

      <S.GuidelinesContainer>
        <Guidelines />
      </S.GuidelinesContainer>

    </S.Form>
  );
};


export default ReviewForm;
